import { builder } from '../../../builder'
import { PrismaContext } from 'server/context/interfaces'
import { chromium } from 'playwright'
import AxeBuilder from '@axe-core/playwright'
import * as fs from 'fs'
import * as path from 'path'

const DeviceTypeEnum = builder.enumType('DeviceType', {
  values: ['desktop', 'tablet', 'mobile'] as const,
})

const AnalyzeWebPageInputType = builder.inputType('AnalyzeWebPageInput', {
  fields: (t) => ({
    url: t.string({ required: true }),
    device: t.field({ type: DeviceTypeEnum, required: false }),
    waitForSelector: t.string({ required: false }),
    timeout: t.int({ required: false }),
    userAgent: t.string({ required: false }),
    acceptLanguage: t.string({ required: false }),
    runAccessibilityCheck: t.boolean({ required: false }),
  }),
})

const STORAGE_BASE_PATH =
  '/disks/wd-1000/www/analyra.ru/agent/storage/web-analyze'

const DEVICE_VIEWPORTS = {
  desktop: { width: 1920, height: 1080 },
  tablet: { width: 768, height: 1024 },
  mobile: { width: 375, height: 812 },
}

const DEVICE_USER_AGENTS = {
  desktop:
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  tablet:
    'Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
  mobile:
    'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
}

function extractDomain(url: string): string {
  try {
    const parsed = new URL(url)
    return parsed.hostname.replace(/^www\./, '')
  } catch {
    return 'unknown'
  }
}

function ensureDirectoryExists(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }
}

interface AnalysisError {
  task: string
  error: string
}

interface PageAnalysisResult {
  url: string
  finalUrl: string
  statusCode: number
  device: string
  timestamp: string
  loadTime: number
  favicon: string | null
  httpHeaders: Record<string, string>
  performance: {
    ttfb: number | null
    fcp: number | null
    lcp: number | null
    cls: number | null
    domContentLoaded: number | null
    load: number | null
    resourceCount: number
    totalResourceSize: number
  } | null
  meta: {
    title: string | null
    description: string | null
    keywords: string | null
    canonical: string | null
    robots: string | null
    viewport: string | null
    charset: string | null
    language: string | null
  }
  openGraph: Record<string, string>
  twitterCards: Record<string, string>
  headings: {
    h1: string[]
    h2: string[]
    h3: string[]
    h4: string[]
    h5: string[]
    h6: string[]
  }
  links: {
    internal: Array<{ href: string; text: string; rel: string | null }>
    external: Array<{ href: string; text: string; rel: string | null }>
  }
  images: Array<{
    src: string
    alt: string | null
    width: number | null
    height: number | null
  }>
  structuredData: unknown[]
  accessibility: {
    violations: unknown[]
    passes: unknown[]
    incomplete: unknown[]
  } | null
  screenshots: {
    viewport: string | null
    fullPage: string | null
  }
  errors: AnalysisError[]
}

function validateUrl(url: string): { valid: boolean; error?: string } {
  if (!url) {
    return { valid: false, error: 'URL is required' }
  }

  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return { valid: false, error: 'URL must start with http:// or https://' }
  }

  try {
    const parsed = new URL(url)
    if (!parsed.hostname || parsed.hostname.length === 0) {
      return { valid: false, error: 'URL must contain a valid hostname' }
    }
    return { valid: true }
  } catch {
    return { valid: false, error: 'Invalid URL format' }
  }
}

async function analyzeWebPageResolver(
  _root: unknown,
  args: {
    input: {
      url: string
      device?: 'desktop' | 'tablet' | 'mobile' | null
      waitForSelector?: string | null
      timeout?: number | null
      userAgent?: string | null
      acceptLanguage?: string | null
      runAccessibilityCheck?: boolean | null
    }
  },
  _ctx: PrismaContext,
): Promise<PageAnalysisResult> {
  const {
    url,
    device = 'desktop',
    waitForSelector,
    timeout = 30000,
    userAgent,
    acceptLanguage,
    runAccessibilityCheck = false,
  } = args.input

  const urlValidation = validateUrl(url)
  if (!urlValidation.valid) {
    throw new Error(urlValidation.error)
  }

  const deviceType = device || 'desktop'
  const errors: AnalysisError[] = []
  const startTime = Date.now()

  const domain = extractDomain(url)
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
  const screenshotDir = path.join(STORAGE_BASE_PATH, domain)
  ensureDirectoryExists(screenshotDir)

  const browser = await chromium.launch({ headless: true })

  try {
    const context = await browser.newContext({
      viewport: DEVICE_VIEWPORTS[deviceType],
      userAgent: userAgent || DEVICE_USER_AGENTS[deviceType],
      locale: acceptLanguage || 'en-US',
      isMobile: deviceType === 'mobile',
      hasTouch: deviceType === 'mobile' || deviceType === 'tablet',
    })

    const page = await context.newPage()

    let statusCode = 0
    let finalUrl = url
    let httpHeaders: Record<string, string> = {}

    page.on('response', (response) => {
      if (response.url() === page.url() || response.url() === url) {
        statusCode = response.status()
      }
    })

    try {
      const response = await page.goto(url, {
        waitUntil: 'networkidle',
        timeout: timeout || 30000,
      })

      if (response) {
        statusCode = response.status()
        finalUrl = response.url()
        httpHeaders = response.headers()
      }
    } catch (e) {
      errors.push({
        task: 'navigation',
        error: e instanceof Error ? e.message : String(e),
      })
    }

    if (waitForSelector) {
      try {
        await page.waitForSelector(waitForSelector, { timeout: 10000 })
      } catch (e) {
        errors.push({
          task: 'waitForSelector',
          error: e instanceof Error ? e.message : String(e),
        })
      }
    }

    const viewportScreenshotName = `${timestamp}-${deviceType}-viewport.png`
    const fullPageScreenshotName = `${timestamp}-${deviceType}-fullpage.png`

    let viewportScreenshotPath: string | null = null
    let fullPageScreenshotPath: string | null = null

    try {
      await page.screenshot({
        path: path.join(screenshotDir, viewportScreenshotName),
      })
      viewportScreenshotPath = `web-analyze/${domain}/${viewportScreenshotName}`
    } catch (e) {
      errors.push({
        task: 'viewportScreenshot',
        error: e instanceof Error ? e.message : String(e),
      })
    }

    try {
      await page.screenshot({
        path: path.join(screenshotDir, fullPageScreenshotName),
        fullPage: true,
      })
      fullPageScreenshotPath = `web-analyze/${domain}/${fullPageScreenshotName}`
    } catch (e) {
      errors.push({
        task: 'fullPageScreenshot',
        error: e instanceof Error ? e.message : String(e),
      })
    }

    // Extract meta tags
    let meta = {
      title: null as string | null,
      description: null as string | null,
      keywords: null as string | null,
      canonical: null as string | null,
      robots: null as string | null,
      viewport: null as string | null,
      charset: null as string | null,
      language: null as string | null,
    }
    try {
      meta = await page.evaluate(`
        (function() {
          var getMeta = function(name) {
            var el = document.querySelector('meta[name="' + name + '"], meta[property="' + name + '"]');
            return el ? el.getAttribute('content') : null;
          };
          var canonicalEl = document.querySelector('link[rel="canonical"]');
          var charsetEl = document.querySelector('meta[charset]');
          return {
            title: document.title || null,
            description: getMeta('description'),
            keywords: getMeta('keywords'),
            canonical: canonicalEl ? canonicalEl.getAttribute('href') : null,
            robots: getMeta('robots'),
            viewport: getMeta('viewport'),
            charset: charsetEl ? charsetEl.getAttribute('charset') : null,
            language: document.documentElement.lang || null
          };
        })()
      `)
    } catch (e) {
      errors.push({
        task: 'extractMeta',
        error: e instanceof Error ? e.message : String(e),
      })
    }

    // Extract Open Graph
    let openGraph: Record<string, string> = {}
    try {
      openGraph = await page.evaluate(`
        (function() {
          var og = {};
          var els = document.querySelectorAll('meta[property^="og:"]');
          for (var i = 0; i < els.length; i++) {
            var el = els[i];
            var property = el.getAttribute('property');
            var content = el.getAttribute('content');
            if (property && content) {
              og[property.replace('og:', '')] = content;
            }
          }
          return og;
        })()
      `)
    } catch (e) {
      errors.push({
        task: 'extractOpenGraph',
        error: e instanceof Error ? e.message : String(e),
      })
    }

    // Extract Twitter Cards
    let twitterCards: Record<string, string> = {}
    try {
      twitterCards = await page.evaluate(`
        (function() {
          var tc = {};
          var els = document.querySelectorAll('meta[name^="twitter:"], meta[property^="twitter:"]');
          for (var i = 0; i < els.length; i++) {
            var el = els[i];
            var name = el.getAttribute('name') || el.getAttribute('property');
            var content = el.getAttribute('content');
            if (name && content) {
              tc[name.replace('twitter:', '')] = content;
            }
          }
          return tc;
        })()
      `)
    } catch (e) {
      errors.push({
        task: 'extractTwitterCards',
        error: e instanceof Error ? e.message : String(e),
      })
    }

    // Extract headings
    let headings = {
      h1: [] as string[],
      h2: [] as string[],
      h3: [] as string[],
      h4: [] as string[],
      h5: [] as string[],
      h6: [] as string[],
    }
    try {
      headings = await page.evaluate(`
        (function() {
          var getHeadings = function(tag) {
            var els = document.querySelectorAll(tag);
            var result = [];
            for (var i = 0; i < els.length; i++) {
              result.push(els[i].textContent ? els[i].textContent.trim() : '');
            }
            return result;
          };
          return {
            h1: getHeadings('h1'),
            h2: getHeadings('h2'),
            h3: getHeadings('h3'),
            h4: getHeadings('h4'),
            h5: getHeadings('h5'),
            h6: getHeadings('h6')
          };
        })()
      `)
    } catch (e) {
      errors.push({
        task: 'extractHeadings',
        error: e instanceof Error ? e.message : String(e),
      })
    }

    // Extract links
    let linksRaw: Array<{
      href: string
      text: string
      rel: string | null
      isInternal: boolean
    }> = []
    try {
      linksRaw = await page.evaluate(`
        (function() {
          var baseUrl = window.location.origin;
          var els = document.querySelectorAll('a[href]');
          var result = [];
          for (var i = 0; i < els.length; i++) {
            var el = els[i];
            var href = el.getAttribute('href') || '';
            var text = el.textContent ? el.textContent.trim() : '';
            var rel = el.getAttribute('rel');
            var fullHref = href;
            try {
              fullHref = new URL(href, baseUrl).href;
            } catch (e) {
              fullHref = href;
            }
            var isInternal = fullHref.indexOf(baseUrl) === 0 || href.indexOf('/') === 0 || href.indexOf('#') === 0;
            result.push({ href: fullHref, text: text, rel: rel, isInternal: isInternal });
          }
          return result;
        })()
      `)
    } catch (e) {
      errors.push({
        task: 'extractLinks',
        error: e instanceof Error ? e.message : String(e),
      })
    }

    // Extract images
    let images: Array<{
      src: string
      alt: string | null
      width: number | null
      height: number | null
    }> = []
    try {
      images = await page.evaluate(`
        (function() {
          var els = document.querySelectorAll('img');
          var result = [];
          for (var i = 0; i < els.length; i++) {
            var el = els[i];
            result.push({
              src: el.src || el.getAttribute('data-src') || '',
              alt: el.alt || null,
              width: el.naturalWidth || el.width || null,
              height: el.naturalHeight || el.height || null
            });
          }
          return result;
        })()
      `)
    } catch (e) {
      errors.push({
        task: 'extractImages',
        error: e instanceof Error ? e.message : String(e),
      })
    }

    // Extract structured data
    let structuredData: unknown[] = []
    try {
      structuredData = await page.evaluate(`
        (function() {
          var els = document.querySelectorAll('script[type="application/ld+json"]');
          var result = [];
          for (var i = 0; i < els.length; i++) {
            try {
              var data = JSON.parse(els[i].textContent || '{}');
              result.push(data);
            } catch (e) {}
          }
          return result;
        })()
      `)
    } catch (e) {
      errors.push({
        task: 'extractStructuredData',
        error: e instanceof Error ? e.message : String(e),
      })
    }

    // Extract favicon
    let favicon: string | null = null
    try {
      favicon = await page.evaluate(`
        (function() {
          var el = document.querySelector('link[rel="icon"], link[rel="shortcut icon"]');
          return el ? el.getAttribute('href') : null;
        })()
      `)
    } catch (e) {
      errors.push({
        task: 'extractFavicon',
        error: e instanceof Error ? e.message : String(e),
      })
    }

    // Collect performance metrics (Core Web Vitals + Navigation Timing)
    let performance: {
      ttfb: number | null
      fcp: number | null
      lcp: number | null
      cls: number | null
      domContentLoaded: number | null
      load: number | null
      resourceCount: number
      totalResourceSize: number
    } | null = null
    try {
      performance = await page.evaluate(`
        (function() {
          var perf = window.performance;
          var timing = perf.timing || {};
          var navStart = timing.navigationStart || 0;
          
          // Navigation Timing
          var ttfb = timing.responseStart ? timing.responseStart - navStart : null;
          var domContentLoaded = timing.domContentLoadedEventEnd ? timing.domContentLoadedEventEnd - navStart : null;
          var load = timing.loadEventEnd ? timing.loadEventEnd - navStart : null;
          
          // Paint Timing (FCP)
          var fcp = null;
          var paintEntries = perf.getEntriesByType ? perf.getEntriesByType('paint') : [];
          for (var i = 0; i < paintEntries.length; i++) {
            if (paintEntries[i].name === 'first-contentful-paint') {
              fcp = paintEntries[i].startTime;
              break;
            }
          }
          
          // LCP from PerformanceObserver (if available in entries)
          var lcp = null;
          var lcpEntries = perf.getEntriesByType ? perf.getEntriesByType('largest-contentful-paint') : [];
          if (lcpEntries.length > 0) {
            lcp = lcpEntries[lcpEntries.length - 1].startTime;
          }
          
          // CLS from layout-shift entries
          var cls = 0;
          var clsEntries = perf.getEntriesByType ? perf.getEntriesByType('layout-shift') : [];
          for (var j = 0; j < clsEntries.length; j++) {
            if (!clsEntries[j].hadRecentInput) {
              cls += clsEntries[j].value || 0;
            }
          }
          
          // Resource metrics
          var resources = perf.getEntriesByType ? perf.getEntriesByType('resource') : [];
          var resourceCount = resources.length;
          var totalResourceSize = 0;
          for (var k = 0; k < resources.length; k++) {
            totalResourceSize += resources[k].transferSize || 0;
          }
          
          return {
            ttfb: ttfb,
            fcp: fcp,
            lcp: lcp,
            cls: cls > 0 ? cls : null,
            domContentLoaded: domContentLoaded,
            load: load,
            resourceCount: resourceCount,
            totalResourceSize: totalResourceSize
          };
        })()
      `)
    } catch (e) {
      errors.push({
        task: 'performanceMetrics',
        error: e instanceof Error ? e.message : String(e),
      })
    }

    // Run accessibility check (axe-core)
    let accessibility: {
      violations: unknown[]
      passes: unknown[]
      incomplete: unknown[]
      inapplicable: unknown[]
    } | null = null
    if (runAccessibilityCheck) {
      try {
        const axeResults = await new AxeBuilder({ page }).analyze()
        accessibility = {
          violations: axeResults.violations,
          passes: axeResults.passes,
          incomplete: axeResults.incomplete,
          inapplicable: axeResults.inapplicable,
        }
      } catch (e) {
        errors.push({
          task: 'accessibilityCheck',
          error: e instanceof Error ? e.message : String(e),
        })
      }
    }

    const loadTime = Date.now() - startTime

    await browser.close()

    return {
      url,
      finalUrl,
      statusCode,
      device: deviceType,
      timestamp: new Date().toISOString(),
      loadTime,
      screenshots: {
        viewport: viewportScreenshotPath,
        fullPage: fullPageScreenshotPath,
      },
      meta,
      openGraph,
      twitterCards,
      headings,
      links: {
        internal: linksRaw
          .filter((l) => l.isInternal)
          .map(({ isInternal: _isInternal, ...rest }) => rest),
        external: linksRaw
          .filter((l) => !l.isInternal)
          .map(({ isInternal: _isInternal, ...rest }) => rest),
      },
      images,
      structuredData,
      favicon,
      httpHeaders,
      performance,
      accessibility,
      errors,
    }
  } catch (e) {
    await browser.close()
    throw e
  }
}

builder.mutationField('analyzeWebPage', (t) =>
  t.field({
    type: 'Json',
    nullable: false,
    args: {
      input: t.arg({ type: AnalyzeWebPageInputType, required: true }),
    },
    resolve: analyzeWebPageResolver,
  }),
)
