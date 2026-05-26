import { Page } from '@playwright/test'
import { AxeResults } from 'axe-core'

export async function highlightA11yIssues(page: Page, results: AxeResults) {
  const selectors = results.violations.flatMap((rule) =>
    rule.nodes.flatMap((node) => node.target),
  )

  await page.evaluate((selectors) => {
    const EXISTING = document.getElementById('__axe-overlay-root__')

    if (EXISTING) {
      EXISTING.remove()
    }

    const root = document.createElement('div')
    root.id = '__axe-overlay-root__'

    document.body.appendChild(root)

    selectors.forEach((selector, index) => {
      try {
        const el = document.querySelector(String(selector))

        if (!el) {
          return
        }

        const rect = el.getBoundingClientRect()

        const overlay = document.createElement('div')

        overlay.innerHTML = `<span>${index + 1}</span>`

        overlay.style.position = 'fixed'
        overlay.style.left = `${rect.left}px`
        overlay.style.top = `${rect.top}px`
        overlay.style.width = `${rect.width}px`
        overlay.style.height = `${rect.height}px`

        overlay.style.border = '3px solid red'
        overlay.style.background = 'rgba(255,0,0,0.12)'
        overlay.style.zIndex = '999999'
        overlay.style.pointerEvents = 'none'

        root.appendChild(overlay)
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.error(error)
        }
      }
    })
  }, selectors)
}
