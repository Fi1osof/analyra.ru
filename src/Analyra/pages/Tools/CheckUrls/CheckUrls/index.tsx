/* eslint-disable no-console */
import React, { useCallback, useMemo, useState } from 'react'
import {
  LinkIcon,
  CheckIcon,
  SparkleIcon,
  AlertIcon,
  FileTextIcon,
} from 'src/Analyra/lovable/v1/src/ui-kit/icons'
import {
  isStatusFilter,
  type CheckUrlRow,
  type CheckUrlsProps,
  type ParsedRow,
  type StatusFilter,
} from './interfaces'

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
  ExportTextareaStyled,
  InlineNoticeStyled,
} from './styles'
import { Button, Input, Label } from 'src/Analyra/lovable/v1/src/ui-kit'
import {
  isReindexable,
  matchesFilter,
  // normalizeOrigin,
  parseInput,
  resolveUrl,
  statusTone,
} from './helpers'
import { CheckUrlsManualInput } from './ManualInput'
import { useBoolean } from 'src/hooks/useBoolean'

let ROW_ID = 0
const nextId = () => `r-${++ROW_ID}`

export const CheckUrls: React.FC<CheckUrlsProps> = ({ className }) => {
  const [siteOrigin, setSiteOrigin] = useState<string>('')
  const [rows, setRows] = useState<CheckUrlRow[]>([])

  // const [manualOpen, setManualOpen] = useState(false)
  const [manualOpen, manualOpenOn, manualOpenOff] = useBoolean()

  const [exportOpen, , exportOpenOff, exportOpenToggle] = useBoolean(false)

  const [copied, setCopied] = useState(false)
  // const fileRef = useRef<HTMLInputElement>(null)
  // const timersRef = useRef<number[]>([])
  const [filter, filterSetter] = useState<StatusFilter>('all')

  const onClickSetFilter = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const filter = event.currentTarget.value

      if (isStatusFilter(filter)) {
        filterSetter(filter)
      } else {
        console.error(`Inknown filter "${filter}"`)
      }
    },
    [],
  )

  // const normalizedOrigin = useMemo(() => normalizeOrigin(siteOrigin), [siteOrigin])

  // re-resolve URLs whenever siteOrigin changes (so previously "needs-origin" rows update)
  // useEffect(() => {
  //   setRows((prev) =>
  //     prev.map((r) => {
  //       const { url, validity } = resolveUrl(r.raw, normalizedOrigin)
  //       return { ...r, url, validity }
  //     }),
  //   )
  // }, [normalizedOrigin])

  // useEffect(
  //   () => () => {
  //     timersRef.current.forEach((t) => window.clearTimeout(t))
  //   },
  //   [],
  // )

  const addRows = useCallback(
    (parsed: ParsedRow[]) => {
      if (parsed.length === 0) {
        return
      }
      setRows((prev) => {
        const existing = new Set(prev.map((r) => r.raw))
        const fresh: CheckUrlRow[] = parsed
          .filter((p) => !existing.has(p.raw))
          .map((p) => {
            const { url, validity } = resolveUrl(p.raw, siteOrigin)
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
    },
    [siteOrigin],
  )

  const handleFile = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (!file) {
        return
      }
      file.text().then((text) => {
        console.log('handleFile text', text)

        addRows(parseInput(text))

        e.target.value = ''
      })
    },
    [addRows],
  )

  // const runCheck = useCallback((_target?: CheckUrlRow[]) => {
  const runCheck = useCallback(() => {
    // const toCheck = (target ?? rows).filter((r) => r.validity === 'ok')
    // if (toCheck.length === 0) {
    //   return
    // }
    // setExportOpen(false)
    // const ids = new Set(toCheck.map((r) => r.id))
    // setRows((prev) =>
    //   prev.map((r) =>
    //     ids.has(r.id) ? { ...r, pending: true, newStatus: null } : r,
    //   ),
    // )
    // timersRef.current.forEach((t) => window.clearTimeout(t))
    // timersRef.current = []
    // toCheck.forEach((row, idx) => {
    //   const delay = 300 + Math.random() * 1400 + idx * 70
    //   const t = window.setTimeout(() => {
    //     // TODO Fix
    //     // const newStatus = row.url ? mockNewStatus(row.url) : null
    //     const newStatus = null
    //     // TODO Fix
    //     // const checkedAt = nowLabel()
    //     const checkedAt = null
    //     setRows((prev) =>
    //       prev.map<CheckUrlRow>((r) =>
    //         r.id === row.id
    //           ? {
    //               ...r,
    //               newStatus,
    //               checkedAt,
    //               pending: false,
    //               selected: isReindexable(newStatus) || false,
    //             }
    //           : r,
    //       ),
    //     )
    //   }, delay)
    //   // timersRef.current.push(t)
    // })
  }, [])

  const onChangeToggle = useCallback<
    React.ChangeEventHandler<HTMLInputElement>
  >((event) => {
    const id = event.currentTarget.value

    setRows((prev) =>
      prev.map((r) => (r.id === id ? { ...r, selected: !r.selected } : r)),
    )
  }, [])

  const toggleAll = useCallback(
    (next: boolean) =>
      setRows((prev) =>
        prev.map<CheckUrlRow>((r) => ({
          ...r,
          selected: next && isReindexable(r.newStatus) ? true : false,
        })),
      ),
    [],
  )

  const removeRow = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const id = event.currentTarget.value

      setRows((prev) => prev.filter((r) => r.id !== id))
    },
    [],
  )

  const clearAll = useCallback(() => {
    // timersRef.current.forEach((t) => window.clearTimeout(t))
    // timersRef.current = []
    setRows([])
    exportOpenOff()
  }, [exportOpenOff])

  const stopCheck = useCallback(() => {
    // timersRef.current.forEach((t) => window.clearTimeout(t))
    // timersRef.current = []
    setRows((prev) =>
      prev.map((r) => (r.pending ? { ...r, pending: false } : r)),
    )
  }, [])

  // TODO Restore
  const recheckSelected = useCallback(() => {
    console.error('recheckSelected not implemented')

    // const sel = rows.filter((r) => r.selected && r.validity === 'ok')
    // runCheck(sel.length > 0 ? sel : undefined)
  }, [])

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

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(exportText)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch (error) {
      console.error(error)
    }
  }, [exportText])

  const allReindexableSelected = useMemo(() => {
    return (
      rows.length > 0 &&
      rows.filter((r) => isReindexable(r.newStatus)).length > 0 &&
      rows.filter((r) => isReindexable(r.newStatus)).every((r) => r.selected)
    )
  }, [rows])

  return (
    <WrapStyled className={className}>
      <PanelStyled>
        <SettingsRowStyled>
          <FieldStyled>
            <FieldLabelStyled htmlFor="siteOrigin">
              <LinkIcon size={14} /> URL сайта
              <FieldHintStyled>
                используется для коротких путей из выгрузки
              </FieldHintStyled>
            </FieldLabelStyled>
            <Input
              id="siteOrigin"
              value={siteOrigin}
              onChange={useCallback(
                (e: React.ChangeEvent<HTMLInputElement>) =>
                  setSiteOrigin(e.target.value),
                [],
              )}
              placeholder="https://example.com"
              iconLeft={<LinkIcon size={14} />}
            />
          </FieldStyled>
          {/* <ActionsRowStyled>
            <FileButtonStyled>
              <FileTextIcon size={14} />
              Загрузить из файла
              <input
                ref={fileRef}
                type="file"
                accept=".csv"
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
          </ActionsRowStyled> */}
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
                    onClick={runCheck}
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
                value="all"
                // onClick={() => onClickSetFilter('all')}
                onClick={onClickSetFilter}
              >
                Все <small>{filterCounts.all}</small>
              </FilterChipStyled>
              <FilterChipStyled
                type="button"
                $active={filter === '2xx'}
                $tone="success"
                disabled={filterCounts['2xx'] === 0}
                value="2xx"
                // onClick={() => onClickSetFilter('2xx')}
                onClick={onClickSetFilter}
              >
                2xx <small>{filterCounts['2xx']}</small>
              </FilterChipStyled>
              <FilterChipStyled
                type="button"
                $active={filter === '3xx'}
                $tone="warning"
                disabled={filterCounts['3xx'] === 0}
                value="3xx"
                // onClick={() => onClickSetFilter('3xx')}
                onClick={onClickSetFilter}
              >
                3xx <small>{filterCounts['3xx']}</small>
              </FilterChipStyled>
              <FilterChipStyled
                type="button"
                $active={filter === '4xx'}
                $tone="danger"
                disabled={filterCounts['4xx'] === 0}
                value="4xx"
                // onClick={() => onClickSetFilter('4xx')}
                onClick={onClickSetFilter}
              >
                4xx <small>{filterCounts['4xx']}</small>
              </FilterChipStyled>
              <FilterChipStyled
                type="button"
                $active={filter === '5xx'}
                $tone="danger"
                disabled={filterCounts['5xx'] === 0}
                value="5xx"
                // onClick={() => onClickSetFilter('5xx')}
                onClick={onClickSetFilter}
              >
                5xx <small>{filterCounts['5xx']}</small>
              </FilterChipStyled>
              <FilterChipStyled
                type="button"
                $active={filter === 'na'}
                $tone="muted"
                disabled={filterCounts.na === 0}
                value="na"
                // onClick={() => onClickSetFilter('na')}
                onClick={onClickSetFilter}
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
                <input type="file" accept=".csv" onChange={handleFile} />
              </FileButtonStyled>
              <Button variant="primary" size="md" onClick={manualOpenOn}>
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
                      // eslint-disable-next-line react/jsx-no-bind
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
                          value={r.id}
                          onChange={onChangeToggle}
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
                          onClick={removeRow}
                          value={r.id}
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
                onClick={exportOpenToggle}
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
        <CheckUrlsManualInput
          manualOpen={manualOpen}
          addRows={addRows}
          siteOrigin={siteOrigin}
          manualOpenOff={manualOpenOff}
        />
      )}
    </WrapStyled>
  )
}
