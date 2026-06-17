import { ParsedRow, RowValidity, StatusFilter, UrlStatus } from '../interfaces'

/** Parse user input. Supports:
 *  - "/path","404","N/a","18.12.2017"  (Yandex.Webmaster)
 *  - https://site.com/a
 *  - https://site.com/a,404
 *  - /path  (uses base origin)
 */
export const parseInput = (raw: string): ParsedRow[] => {
  const lines = raw
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean)
  const rows: ParsedRow[] = []
  for (const line of lines) {
    const parts = parseCsvLine(line).filter((p) => p.length > 0)
    if (parts.length === 0) {
      continue
    }
    const urlPart = parts[0]
    // skip header rows
    if (/^url$/i.test(urlPart) || /^адрес/i.test(urlPart)) {
      continue
    }
    const statusParts = parts.slice(1).filter((p) => /^\d{3}$/.test(p))
    const datePart = parts
      .slice(1)
      .find((p) => /^\d{1,2}[.\-/]\d{1,2}[.\-/]\d{2,4}$/.test(p))
    rows.push({
      raw: urlPart,
      oldStatus: statusParts[0] ? Number(statusParts[0]) : null,
      newStatus: statusParts[1] ? Number(statusParts[1]) : null,
      lastCrawl: datePart ?? null,
    })
  }
  // dedupe by raw
  const seen = new Set<string>()
  return rows.filter((r) => (seen.has(r.raw) ? false : (seen.add(r.raw), true)))
}

export const matchesFilter = (s: UrlStatus, f: StatusFilter): boolean => {
  if (f === 'all') {
    return true
  }
  if (f === 'na') {
    return s === null
  }
  if (s === null) {
    return false
  }
  if (f === '2xx') {
    return s >= 200 && s < 300
  }
  if (f === '3xx') {
    return s >= 300 && s < 400
  }
  if (f === '4xx') {
    return s >= 400 && s < 500
  }
  if (f === '5xx') {
    return s >= 500 && s < 600
  }
  return true
}

// const SAMPLE_INPUT = `"/catalog/detskie-ploschadki/dik-m-0003.html","404","N/a","18.12.2017"
// "/catalog/detskie-ploschadki/dik-m-0044.html","404","N/a","11.02.2018"
// "/catalog/sport-trenazhery/turnik-pro.html","500","N/a","22.07.2024"
// "/blog/2023/launch","301","N/a","05.03.2024"
// "/legacy/about-us","404","N/a","18.12.2017"
// "https://other-site.example/external-page","404","N/a","01.01.2025"`

export const statusTone = (
  s: UrlStatus,
): 'success' | 'warning' | 'danger' | 'muted' => {
  if (s === null) {
    return 'muted'
  }
  if (s >= 200 && s < 300) {
    return 'success'
  }
  if (s >= 300 && s < 400) {
    return 'warning'
  }
  return 'danger'
}

export const isReindexable = (s: UrlStatus) =>
  s !== null && ((s >= 200 && s < 300) || (s >= 300 && s < 400))

export const normalizeOrigin = (raw: string): string => {
  let v = raw.trim()
  if (!v) {
    return ''
  }
  if (!/^https?:\/\//i.test(v)) {
    v = `https://${v}`
  }
  try {
    const u = new URL(v)
    return `${u.protocol}//${u.host}`
  } catch {
    return ''
  }
}

export const resolveUrl = (
  raw: string,
  origin: string,
): { url: string | null; validity: RowValidity } => {
  const value = raw.trim()
  if (!value) {
    return { url: null, validity: 'invalid' }
  }
  if (/^https?:\/\//i.test(value)) {
    try {
      const u = new URL(value)
      return { url: u.toString(), validity: 'ok' }
    } catch {
      return { url: null, validity: 'invalid' }
    }
  }
  if (!origin) {
    return { url: null, validity: 'needs-origin' }
  }
  try {
    const u = new URL(value, origin + '/')
    return { url: u.toString(), validity: 'ok' }
  } catch {
    return { url: null, validity: 'invalid' }
  }
}

/** Parse a single CSV line — handles quoted values with commas. */
const parseCsvLine = (line: string): string[] => {
  const out: string[] = []
  let cur = ''
  let inQ = false
  for (let i = 0; i < line.length; i++) {
    const ch = line[i]
    if (ch === '"') {
      if (inQ && line[i + 1] === '"') {
        cur += '"'
        i++
      } else {
        inQ = !inQ
      }
    } else if ((ch === ',' || ch === ';' || ch === '\t') && !inQ) {
      out.push(cur)
      cur = ''
    } else {
      cur += ch
    }
  }
  out.push(cur)
  return out.map((s) => s.trim())
}

/**
 * @deprecated
 */
// const mockNewStatus = (url: string): UrlStatus => {
//   let h = 0
//   for (let i = 0; i < url.length; i++) {
//     h = (h * 31 + url.charCodeAt(i)) >>> 0
//   }
//   const pick = h % 100
//   if (pick < 55) {
//     return 200
//   }
//   if (pick < 75) {
//     return 301
//   }
//   if (pick < 85) {
//     return 302
//   }
//   if (pick < 95) {
//     return 404
//   }
//   return 500
// }

export const nowLabel = () => {
  const d = new Date()
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${pad(d.getDate())}.${pad(d.getMonth() + 1)}.${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`
}
