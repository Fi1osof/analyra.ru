/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-console */
import React, { useEffect, useMemo, useRef, useState } from 'react'
import {
  LinkIcon,
  CheckIcon,
  SparkleIcon,
  AlertIcon,
  FileTextIcon,
} from 'src/Analyra/lovable/v1/src/ui-kit/icons'
import type {
  CheckUrlRow,
  CheckUrlsProps,
  RowValidity,
  UrlStatus,
} from './types'
import {
  WrapStyled,
  PanelStyled,
  SettingsRowStyled,
  FieldStyled,
  FieldLabelStyled,
  FieldHintStyled,
  ActionsRowStyled,
  ToolbarStyled,
  StatsRowStyled,
  StatChipStyled,
  FilterBarStyled,
  FilterLabelStyled,
  FilterChipStyled,
  TableWrapStyled,
  TableStyled,
  RowStyled,
  UrlCellStyled,
  UrlMainStyled,
  UrlMetaStyled,
  CheckboxStyled,
  StatusPillStyled,
  LoadingDotsStyled,
  DashStyled,
  EmptyStyled,
  EmptyTitleStyled,
  EmptyHintStyled,
  ProgressBarStyled,
  ProgressFillStyled,
  FileButtonStyled,
  ModalOverlayStyled,
  ModalStyled,
  ModalHeadStyled,
  ModalCloseStyled,
  ModalBodyStyled,
  ModalFooterStyled,
  TextareaStyled,
  ExportTextareaStyled,
  InlineNoticeStyled,
} from './styles'
import { Button, Input, Label } from 'src/Analyra/lovable/v1/src/ui-kit'

type StatusFilter = 'all' | '2xx' | '3xx' | '4xx' | '5xx' | 'na'

const matchesFilter = (s: UrlStatus, f: StatusFilter): boolean => {
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

const statusTone = (
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

const isReindexable = (s: UrlStatus) =>
  s === null && ((s && s >= 200 && s < 300) || (s && s >= 300 && s < 400))

const normalizeOrigin = (raw: string): string => {
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

const resolveUrl = (
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

interface ParsedRow {
  raw: string
  oldStatus: UrlStatus
  lastCrawl: string | null
}

/** Parse user input. Supports:
 *  - "/path","404","N/a","18.12.2017"  (Yandex.Webmaster)
 *  - https://site.com/a
 *  - https://site.com/a,404
 *  - /path  (uses base origin)
 */
const parseInput = (raw: string): ParsedRow[] => {
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
    const statusPart = parts.slice(1).find((p) => /^\d{3}$/.test(p))
    const datePart = parts
      .slice(1)
      .find((p) => /^\d{1,2}[.\-/]\d{1,2}[.\-/]\d{2,4}$/.test(p))
    rows.push({
      raw: urlPart,
      oldStatus: statusPart ? Number(statusPart) : null,
      lastCrawl: datePart ?? null,
    })
  }
  // dedupe by raw
  const seen = new Set<string>()
  return rows.filter((r) => (seen.has(r.raw) ? false : (seen.add(r.raw), true)))
}

/** Deterministic pseudo-random based on url for stable demo results. */
const mockNewStatus = (url: string): UrlStatus => {
  let h = 0
  for (let i = 0; i < url.length; i++) {
    h = (h * 31 + url.charCodeAt(i)) >>> 0
  }
  const pick = h % 100
  if (pick < 55) {
    return 200
  }
  if (pick < 75) {
    return 301
  }
  if (pick < 85) {
    return 302
  }
  if (pick < 95) {
    return 404
  }
  return 500
}

const nowLabel = () => {
  const d = new Date()
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${pad(d.getDate())}.${pad(d.getMonth() + 1)}.${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`
}

let ROW_ID = 0
const nextId = () => `r-${++ROW_ID}`

export const CheckUrls: React.FC<CheckUrlsProps> = ({ className }) => {
  const [origin, setOrigin] = useState<string>('')
  const [rows, setRows] = useState<CheckUrlRow[]>([])
  const [manualOpen, setManualOpen] = useState(false)
  const [manualText, setManualText] = useState<string>('')
  const [exportOpen, setExportOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)
  const timersRef = useRef<number[]>([])
  const [filter, setFilter] = useState<StatusFilter>('all')

  const normalizedOrigin = useMemo(() => normalizeOrigin(origin), [origin])

  // re-resolve URLs whenever origin changes (so previously "needs-origin" rows update)
  useEffect(() => {
    setRows((prev) =>
      prev.map((r) => {
        const { url, validity } = resolveUrl(r.raw, normalizedOrigin)
        return { ...r, url, validity }
      }),
    )
  }, [normalizedOrigin])

  useEffect(
    () => () => {
      timersRef.current.forEach((t) => window.clearTimeout(t))
    },
    [],
  )

  const addRows = (parsed: ParsedRow[]) => {
    if (parsed.length === 0) {
      return
    }
    setRows((prev) => {
      const existing = new Set(prev.map((r) => r.raw))
      const fresh: CheckUrlRow[] = parsed
        .filter((p) => !existing.has(p.raw))
        .map((p) => {
          const { url, validity } = resolveUrl(p.raw, normalizedOrigin)
          return {
            id: nextId(),
            raw: p.raw,
            url,
            validity,
            oldStatus: p.oldStatus,
            newStatus: null,
            lastCrawl: p.lastCrawl,
            checkedAt: null,
            selected: false,
            pending: false,
          }
        })
      return [...prev, ...fresh]
    })
  }

  const handleManualSubmit = () => {
    addRows(parseInput(manualText))
    setManualOpen(false)
  }

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) {
      return
    }
    const text = await file.text()
    addRows(parseInput(text))
    e.target.value = ''
  }

  const runCheck = (target?: CheckUrlRow[]) => {
    const toCheck = (target ?? rows).filter((r) => r.validity === 'ok')
    if (toCheck.length === 0) {
      return
    }
    setExportOpen(false)
    const ids = new Set(toCheck.map((r) => r.id))
    setRows((prev) =>
      prev.map((r) =>
        ids.has(r.id) ? { ...r, pending: true, newStatus: null } : r,
      ),
    )

    timersRef.current.forEach((t) => window.clearTimeout(t))
    timersRef.current = []

    toCheck.forEach((row, idx) => {
      const delay = 300 + Math.random() * 1400 + idx * 70
      const t = window.setTimeout(() => {
        const newStatus = row.url ? mockNewStatus(row.url) : null
        const checkedAt = nowLabel()
        setRows((prev) =>
          prev.map<CheckUrlRow>((r) =>
            r.id === row.id
              ? {
                  ...r,
                  newStatus,
                  checkedAt,
                  pending: false,
                  selected: isReindexable(newStatus) || false,
                }
              : r,
          ),
        )
      }, delay)
      timersRef.current.push(t)
    })
  }

  const toggle = (id: string) =>
    setRows((prev) =>
      prev.map((r) => (r.id === id ? { ...r, selected: !r.selected } : r)),
    )

  const toggleAll = (next: boolean) =>
    setRows((prev) =>
      prev.map<CheckUrlRow>((r) => ({
        ...r,
        selected: next && isReindexable(r.newStatus) ? true : false,
      })),
    )

  const removeRow = (id: string) =>
    setRows((prev) => prev.filter((r) => r.id !== id))

  const clearAll = () => {
    timersRef.current.forEach((t) => window.clearTimeout(t))
    timersRef.current = []
    setRows([])
    setExportOpen(false)
  }

  const stopCheck = () => {
    timersRef.current.forEach((t) => window.clearTimeout(t))
    timersRef.current = []
    setRows((prev) =>
      prev.map((r) => (r.pending ? { ...r, pending: false } : r)),
    )
  }

  const recheckSelected = () => {
    const sel = rows.filter((r) => r.selected && r.validity === 'ok')
    runCheck(sel.length > 0 ? sel : undefined)
  }

  const filterCounts = useMemo(() => {
    const c = {
      all: rows.length,
      '2xx': 0,
      '3xx': 0,
      '4xx': 0,
      '5xx': 0,
      na: 0,
    }
    for (const r of rows) {
      const s = r.newStatus
      if (s === null) {
        c.na++
      } else if (s >= 200 && s < 300) {
        c['2xx']++
      } else if (s >= 300 && s < 400) {
        c['3xx']++
      } else if (s >= 400 && s < 500) {
        c['4xx']++
      } else if (s >= 500 && s < 600) {
        c['5xx']++
      }
    }
    return c
  }, [rows])

  console.log('rows', rows)

  console.log('filterCounts', filterCounts)

  const visibleRows = useMemo(
    () => rows.filter((r) => matchesFilter(r.newStatus, filter)),
    [rows, filter],
  )

  console.log('visibleRows', visibleRows)

  const stats = useMemo(() => {
    const total = rows.length
    const invalid = rows.filter((r) => r.validity !== 'ok').length
    const pending = rows.filter((r) => r.pending).length
    const done = rows.filter((r) => r.newStatus === null).length
    const ok = rows.filter(
      (r) => r.newStatus && r.newStatus >= 200 && r.newStatus < 300,
    ).length
    const redir = rows.filter(
      (r) => r.newStatus && r.newStatus >= 300 && r.newStatus < 400,
    ).length
    const bad = rows.filter((r) => r.newStatus && r.newStatus >= 400).length
    const selected = rows.filter((r) => r.selected).length
    const checkable = rows.filter((r) => r.validity === 'ok').length
    return {
      total,
      invalid,
      pending,
      done,
      ok,
      redir,
      bad,
      selected,
      checkable,
    }
  }, [rows])

  const progress =
    stats.checkable === 0
      ? 0
      : Math.round(((stats.checkable - stats.pending) / stats.checkable) * 100)

  const isChecking = stats.pending > 0

  const exportText = useMemo(
    () =>
      rows
        .filter((r) => r.selected && r.url)
        .map((r) => r.url)
        .join('\n'),
    [rows],
  )

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(exportText)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      /* noop */
    }
  }

  const allReindexableSelected =
    rows.length > 0 &&
    rows.filter((r) => isReindexable(r.newStatus)).length > 0 &&
    rows.filter((r) => isReindexable(r.newStatus)).every((r) => r.selected)

  return (
    <WrapStyled className={className}>
      <PanelStyled>
        <SettingsRowStyled>
          <FieldStyled>
            <FieldLabelStyled htmlFor="origin">
              <LinkIcon size={14} /> URL сайта
              <FieldHintStyled>
                используется для коротких путей из выгрузки
              </FieldHintStyled>
            </FieldLabelStyled>
            <Input
              id="origin"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              placeholder="https://example.com"
              iconLeft={<LinkIcon size={14} />}
            />
          </FieldStyled>
          <ActionsRowStyled>
            <FileButtonStyled>
              <FileTextIcon size={14} />
              Загрузить из файла
              <input
                ref={fileRef}
                type="file"
                accept=".csv,.tsv,.txt,.xls,.xlsx"
                onChange={handleFile}
              />
            </FileButtonStyled>
            <Button
              variant="ghost"
              size="md"
              onClick={() => setManualOpen(true)}
            >
              Ввести вручную
            </Button>
          </ActionsRowStyled>
        </SettingsRowStyled>

        {rows.length > 0 && (
          <>
            <ToolbarStyled>
              <StatsRowStyled>
                <StatChipStyled>
                  Всего <strong>{stats.total}</strong>
                </StatChipStyled>
                <StatChipStyled>
                  Проверено <strong>{stats.done}</strong>/{stats.checkable}
                </StatChipStyled>
                <StatChipStyled>
                  2xx <strong style={{ color: 'var(--ok)' }}>{stats.ok}</strong>
                </StatChipStyled>
                <StatChipStyled>
                  3xx <strong>{stats.redir}</strong>
                </StatChipStyled>
                <StatChipStyled>
                  4xx/5xx <strong>{stats.bad}</strong>
                </StatChipStyled>
                {stats.invalid > 0 && (
                  <StatChipStyled>
                    <AlertIcon size={12} /> Ошибки{' '}
                    <strong style={{ color: 'var(--err)' }}>
                      {stats.invalid}
                    </strong>
                  </StatChipStyled>
                )}
              </StatsRowStyled>
              <ActionsRowStyled>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearAll}
                  disabled={isChecking}
                >
                  Очистить
                </Button>
                {stats.done > 0 && !isChecking && (
                  <Button variant="ghost" size="sm" onClick={recheckSelected}>
                    Перепроверить{stats.selected > 0 ? ' выбранные' : ' все'}
                  </Button>
                )}
                {isChecking ? (
                  <Button variant="danger" size="sm" onClick={stopCheck}>
                    Остановить ({stats.pending})
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => runCheck()}
                    disabled={stats.checkable === 0}
                  >
                    <SparkleIcon size={14} /> Проверить{' '}
                    {stats.checkable > 0 ? `(${stats.checkable})` : ''}
                  </Button>
                )}
              </ActionsRowStyled>
            </ToolbarStyled>
            <FilterBarStyled>
              <FilterLabelStyled>Фильтр</FilterLabelStyled>
              <FilterChipStyled
                type="button"
                $active={filter === 'all'}
                $tone="neutral"
                onClick={() => setFilter('all')}
              >
                Все <small>{filterCounts.all}</small>
              </FilterChipStyled>
              <FilterChipStyled
                type="button"
                $active={filter === '2xx'}
                $tone="success"
                disabled={filterCounts['2xx'] === 0}
                onClick={() => setFilter('2xx')}
              >
                2xx <small>{filterCounts['2xx']}</small>
              </FilterChipStyled>
              <FilterChipStyled
                type="button"
                $active={filter === '3xx'}
                $tone="warning"
                disabled={filterCounts['3xx'] === 0}
                onClick={() => setFilter('3xx')}
              >
                3xx <small>{filterCounts['3xx']}</small>
              </FilterChipStyled>
              <FilterChipStyled
                type="button"
                $active={filter === '4xx'}
                $tone="danger"
                disabled={filterCounts['4xx'] === 0}
                onClick={() => setFilter('4xx')}
              >
                4xx <small>{filterCounts['4xx']}</small>
              </FilterChipStyled>
              <FilterChipStyled
                type="button"
                $active={filter === '5xx'}
                $tone="danger"
                disabled={filterCounts['5xx'] === 0}
                onClick={() => setFilter('5xx')}
              >
                5xx <small>{filterCounts['5xx']}</small>
              </FilterChipStyled>
              <FilterChipStyled
                type="button"
                $active={filter === 'na'}
                $tone="muted"
                disabled={filterCounts.na === 0}
                onClick={() => setFilter('na')}
              >
                N/a <small>{filterCounts.na}</small>
              </FilterChipStyled>
            </FilterBarStyled>
            {isChecking && (
              <ProgressBarStyled>
                <ProgressFillStyled $value={progress} />
              </ProgressBarStyled>
            )}
          </>
        )}

        {rows.length === 0 ? (
          <EmptyStyled>
            <LinkIcon size={36} />
            <EmptyTitleStyled>Список URL пока пуст</EmptyTitleStyled>
            <EmptyHintStyled>
              Загрузите экспорт из Яндекс.Вебмастера или введите список вручную.
              Поддерживаются как полные URL, так и короткие пути — например{' '}
              <code>/catalog/page.html</code> — они будут склеены с указанным{' '}
              <strong>URL сайта</strong>.
            </EmptyHintStyled>
            <ActionsRowStyled>
              <FileButtonStyled>
                <FileTextIcon size={14} />
                Загрузить из файла
                <input
                  type="file"
                  accept=".csv,.tsv,.txt,.xls,.xlsx"
                  onChange={handleFile}
                />
              </FileButtonStyled>
              <Button
                variant="primary"
                size="md"
                onClick={() => setManualOpen(true)}
              >
                Ввести вручную
              </Button>
            </ActionsRowStyled>
          </EmptyStyled>
        ) : (
          <TableWrapStyled>
            <TableStyled>
              <thead>
                <tr>
                  <th className="center">
                    <CheckboxStyled
                      checked={allReindexableSelected}
                      onChange={(e) => toggleAll(e.target.checked)}
                      aria-label="Выбрать все 2xx/3xx"
                    />
                  </th>
                  <th>URL</th>
                  <th className="center">Был</th>
                  <th className="center">Стал</th>
                  <th className="center">Последний обход</th>
                  <th className="center">Проверено</th>
                  <th className="center"></th>
                </tr>
              </thead>
              <tbody>
                {visibleRows.length === 0 && (
                  <tr>
                    <td
                      colSpan={7}
                      style={{
                        textAlign: 'center',
                        padding: '32px 16px',
                        opacity: 0.6,
                      }}
                    >
                      Нет строк, соответствующих фильтру
                    </td>
                  </tr>
                )}
                {visibleRows.map((r) => {
                  const invalid = r.validity !== 'ok'
                  return (
                    <RowStyled key={r.id} $invalid={invalid}>
                      <td className="center">
                        <CheckboxStyled
                          checked={r.selected}
                          disabled={!r.url || r.newStatus === null}
                          onChange={() => toggle(r.id)}
                        />
                      </td>
                      <td>
                        <UrlCellStyled>
                          <UrlMainStyled $muted={invalid}>
                            {r.url ?? r.raw}
                          </UrlMainStyled>
                          {r.validity === 'needs-origin' && (
                            <UrlMetaStyled>
                              <AlertIcon size={11} /> укажите URL сайта, чтобы
                              достроить путь
                            </UrlMetaStyled>
                          )}
                          {r.validity === 'invalid' && (
                            <UrlMetaStyled>
                              <AlertIcon size={11} /> некорректный URL
                            </UrlMetaStyled>
                          )}
                        </UrlCellStyled>
                      </td>
                      <td className="center">
                        {r.oldStatus === null ? (
                          <StatusPillStyled $tone={statusTone(r.oldStatus)}>
                            {r.oldStatus}
                          </StatusPillStyled>
                        ) : (
                          <DashStyled>—</DashStyled>
                        )}
                      </td>
                      <td className="center">
                        {r.pending ? (
                          <LoadingDotsStyled aria-label="loading">
                            <span /> <span /> <span />
                          </LoadingDotsStyled>
                        ) : r.newStatus === null ? (
                          <StatusPillStyled $tone={statusTone(r.newStatus)}>
                            {r.newStatus}
                          </StatusPillStyled>
                        ) : (
                          <DashStyled>—</DashStyled>
                        )}
                      </td>
                      <td className="date center">
                        {r.lastCrawl && r.lastCrawl !== 'N/a'
                          ? r.lastCrawl
                          : '—'}
                      </td>
                      <td className="date center">{r.checkedAt ?? '—'}</td>
                      <td className="center">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeRow(r.id)}
                          aria-label="Удалить строку"
                        >
                          ×
                        </Button>
                      </td>
                    </RowStyled>
                  )
                })}
              </tbody>
            </TableStyled>
          </TableWrapStyled>
        )}
      </PanelStyled>

      {/* Export panel */}
      {rows.length > 0 && stats.done > 0 && (
        <PanelStyled>
          <ToolbarStyled>
            <InlineNoticeStyled>
              Выбрано <strong>&nbsp;{stats.selected}&nbsp;</strong> URL для
              отправки на переобход. По умолчанию отмечены только 2xx/3xx.
            </InlineNoticeStyled>
            <ActionsRowStyled>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setExportOpen((v) => !v)}
                disabled={stats.selected === 0}
              >
                {exportOpen ? 'Скрыть список' : 'Подготовить к переобходу'}
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={copy}
                disabled={stats.selected === 0}
              >
                {copied ? (
                  <>
                    <CheckIcon size={14} /> Скопировано
                  </>
                ) : (
                  <>Скопировать {stats.selected}</>
                )}
              </Button>
            </ActionsRowStyled>
          </ToolbarStyled>
          {exportOpen && (
            <div
              style={{
                padding: '16px 20px 20px',
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}
            >
              <Label tone="muted">
                Готовый список — вставьте в форму переобхода Яндекс.Вебмастера
              </Label>
              <ExportTextareaStyled
                value={exportText}
                readOnly
                spellCheck={false}
              />
            </div>
          )}
        </PanelStyled>
      )}

      {manualOpen && (
        <ModalOverlayStyled onClick={() => setManualOpen(false)}>
          <ModalStyled onClick={(e) => e.stopPropagation()}>
            <ModalHeadStyled>
              <h3>Ввод URL вручную</h3>
              <ModalCloseStyled
                onClick={() => setManualOpen(false)}
                aria-label="Закрыть"
              >
                ×
              </ModalCloseStyled>
            </ModalHeadStyled>
            <ModalBodyStyled>
              <Label tone="muted">
                По одному URL или пути на строку. Можно указать старый статус и
                дату обхода через запятую — формат экспорта Яндекс.Вебмастера
                поддерживается.
              </Label>
              <TextareaStyled
                value={manualText}
                onChange={(e) => setManualText(e.target.value)}
                placeholder={`/catalog/page.html\nhttps://example.com/article,404\n"/path","404","N/a","18.12.2017"`}
                spellCheck={false}
                autoFocus
              />
              <InlineNoticeStyled>
                Короткие пути будут склеены с{' '}
                <code>{normalizedOrigin || 'URL сайта'}</code>.
              </InlineNoticeStyled>
            </ModalBodyStyled>
            <ModalFooterStyled>
              <Button
                variant="ghost"
                size="md"
                onClick={() => setManualText('')}
              >
                Очистить
              </Button>
              <Button
                variant="ghost"
                size="md"
                onClick={() => setManualOpen(false)}
              >
                Отмена
              </Button>
              <Button
                variant="primary"
                size="md"
                onClick={handleManualSubmit}
                disabled={manualText.trim().length === 0}
              >
                Добавить в таблицу
              </Button>
            </ModalFooterStyled>
          </ModalStyled>
        </ModalOverlayStyled>
      )}
    </WrapStyled>
  )
}
