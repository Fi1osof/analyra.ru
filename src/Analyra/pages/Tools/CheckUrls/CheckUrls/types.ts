export type UrlStatus = number | null

export type RowValidity = 'ok' | 'invalid' | 'needs-origin'

export interface CheckUrlRow {
  id: string
  /** Raw input from CSV / textarea (may be path-only). */
  raw: string
  /** Resolved absolute URL (if possible). */
  url: string | null
  validity: RowValidity
  oldStatus: UrlStatus
  newStatus: UrlStatus
  /** Date of last crawl reported by source data (free-form string). */
  lastCrawl: string | null
  /** Date/time of the new check in the current session. */
  checkedAt: string | null
  /** Selected for export. */
  selected: boolean
  /** Currently being re-checked. */
  pending: boolean
}

export interface CheckUrlsProps {
  className?: string
}
