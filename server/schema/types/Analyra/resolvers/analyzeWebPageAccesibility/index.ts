import { builder } from '../../../../builder'
import { PrismaContext } from 'server/context/interfaces'
import { chromium } from 'playwright'
import AxeBuilder from '@axe-core/playwright'
import { validateUrl } from '../../helpers/validateUrl'
import { GraphQLResolveInfo } from 'graphql'

import { AxeResults, ImpactValue } from 'axe-core'

import { DeviceTypeEnum } from '../../types'
import { DEVICE_USER_AGENTS, DEVICE_VIEWPORTS } from '../../interfaces'
import path from 'path'

type AxeResultsPartial = Pick<
  AxeResults,
  'violations' | 'passes' | 'incomplete' | 'inapplicable'
>

type BBox = {
  x: number
  y: number
  width: number
  height: number
}

type IssueItem = {
  selector: string
  ruleId: string
  help: string
  html: string
  impact: ImpactValue | undefined
  failureSummary: string | undefined
  BBox: BBox
}

const ImpactValueEnum = builder.enumType('ImpactValue', {
  values: ['minor', 'moderate', 'serious', 'critical'],
})

const BBox = builder.objectRef<BBox>('BBox').implement({
  fields: (t) => ({
    x: t.exposeFloat('x', {
      nullable: false,
    }),
    y: t.exposeFloat('y', {
      nullable: false,
    }),
    width: t.exposeFloat('width', {
      nullable: false,
    }),
    height: t.exposeFloat('height', {
      nullable: false,
    }),
  }),
})

const IssueItem = builder.objectRef<IssueItem>('IssueItem').implement({
  fields: (t) => ({
    selector: t.exposeID('selector', {
      nullable: false,
    }),
    ruleId: t.exposeString('ruleId', {
      nullable: false,
    }),
    help: t.exposeString('help', {
      nullable: false,
    }),
    html: t.exposeString('html', {
      nullable: false,
    }),
    impact: t.field({
      type: ImpactValueEnum,
      nullable: true,
      resolve: (parent) => parent.impact,
    }),
    failureSummary: t.exposeString('failureSummary', {
      nullable: true,
    }),
    BBox: t.field({
      type: BBox,
      nullable: false,
      resolve: (parent) => parent.BBox,
    }),
  }),
})

type AnalyzeWebPageAccessibilityDef = AxeResultsPartial & {
  issues: IssueItem[]
  screenshot: string
}

export const AnalyzeWebPageAccessibility = builder
  .objectRef<AnalyzeWebPageAccessibilityDef>('AnalyzeWebPageAccessibility')
  .implement({
    fields: (t) => ({
      violations: t.field({
        type: 'Json',
        nullable: true,
        resolve: (parent) => parent.violations,
      }),
      passes: t.field({
        type: 'Json',
        nullable: true,
        resolve: (parent) => parent.passes,
      }),
      incomplete: t.field({
        type: 'Json',
        nullable: true,
        resolve: (parent) => parent.incomplete,
      }),
      inapplicable: t.field({
        type: 'Json',
        nullable: true,
        resolve: (parent) => parent.inapplicable,
      }),
      issues: t.field({
        type: [IssueItem],
        resolve: (parent) => parent.issues,
      }),
      screenshot: t.exposeString('screenshot', {
        nullable: false,
      }),
    }),
  })

const AnalyzeWebPageAccesibilityInputType = builder.inputType(
  'AnalyzeWebPageAccesibilityInput',
  {
    fields: (t) => ({
      url: t.string({ required: true }),
      device: t.field({ type: DeviceTypeEnum, required: false }),
      userAgent: t.string({ required: false }),
      acceptLanguage: t.string({ required: false }),
      timeout: t.int({ required: false }),
    }),
  },
)

builder.mutationField('analyzeWebPageAccesibility', (t) =>
  t.field({
    type: AnalyzeWebPageAccessibility,
    nullable: true,
    args: {
      input: t.arg({
        type: AnalyzeWebPageAccesibilityInputType,
        required: true,
      }),
    },
    resolve: analyzeWebPageAccesibilityResolver,
  }),
)

type Result = typeof AnalyzeWebPageAccessibility.$inferType

async function analyzeWebPageAccesibilityResolver(
  _root: unknown,
  args: {
    input: typeof AnalyzeWebPageAccesibilityInputType.$inferInput
  },
  _ctx: PrismaContext,
  _info: GraphQLResolveInfo,
): Promise<Result | null | undefined> {
  const {
    url,
    device = 'desktop',
    userAgent,
    acceptLanguage,
    timeout,
  } = args.input

  const urlValidation = validateUrl(url)

  if (!urlValidation.valid) {
    throw new Error(urlValidation.error)
  }

  const deviceType = device || 'desktop'

  const browser = await chromium.launch({ headless: true })

  let result: Result | undefined

  try {
    const context = await browser.newContext({
      viewport: DEVICE_VIEWPORTS[deviceType],
      userAgent: userAgent || DEVICE_USER_AGENTS[deviceType],
      locale: acceptLanguage || 'en-US',
      isMobile: deviceType === 'mobile',
      hasTouch: deviceType === 'mobile' || deviceType === 'tablet',
    })

    const page = await context.newPage()

    await page.goto(url, {
      waitUntil: 'networkidle',
      timeout: timeout || 30000,
    })

    const axe = await new AxeBuilder({ page }).analyze()

    // const issuesMap = new Map<string, IssueItem>()
    const issues: IssueItem[] = []

    for (const rule of axe.violations) {
      for (const node of rule.nodes) {
        const selector = node.target[0]

        if (typeof selector !== 'string') {
          continue
        }

        const locator = page.locator(selector).first()

        const box = await locator.boundingBox()

        if (!box) {
          continue
        }

        issues.push({
          selector,
          ruleId: rule.id,
          impact: rule.impact,

          help: rule.help,

          html: node.html,

          failureSummary: node.failureSummary,

          BBox: box,
        })
      }
    }

    const screenshotBaseDir = path.join(process.cwd(), '/uploads')

    const screenshot = path.join(
      'web-analyze',
      'issues',
      `${Math.random().toString()}.png`,
    )

    await page.screenshot({
      // path: 'a11y-report.png',
      fullPage: true,
      path: path.join(screenshotBaseDir, screenshot),
    })

    result = {
      ...axe,
      issues,
      screenshot,
    }
  } finally {
    await browser.close()
  }

  return result
}
