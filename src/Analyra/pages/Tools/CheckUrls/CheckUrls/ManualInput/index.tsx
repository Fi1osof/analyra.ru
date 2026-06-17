/* eslint-disable react/jsx-no-bind */

import { Button, Label } from 'src/Analyra/lovable/v1/src/ui-kit'
import {
  InlineNoticeStyled,
  ModalBodyStyled,
  ModalCloseStyled,
  ModalFooterStyled,
  ModalHeadStyled,
  ModalOverlayStyled,
  ModalStyled,
  TextareaStyled,
} from '../styles'
import { useState } from 'react'
import { ParsedRow } from '../interfaces'
import { parseInput } from '../helpers'

type CheckUrlsManualInputProps = {
  manualOpen: boolean
  manualOpenOff: () => void
  addRows: (parsed: ParsedRow[]) => void
  siteOrigin: string
}

export const CheckUrlsManualInput: React.FC<CheckUrlsManualInputProps> = ({
  manualOpen,
  manualOpenOff,
  addRows,
  siteOrigin,
}) => {
  const [manualText, setManualText] = useState<string>('')

  const handleManualSubmit = () => {
    addRows(parseInput(manualText))
    manualOpenOff()
  }

  return (
    <>
      {manualOpen && (
        <ModalOverlayStyled onClick={manualOpenOff}>
          <ModalStyled onClick={(e) => e.stopPropagation()}>
            <ModalHeadStyled>
              <h3>Ввод URL вручную</h3>
              <ModalCloseStyled onClick={manualOpenOff} aria-label="Закрыть">
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
                <code>{siteOrigin || 'URL сайта'}</code>.
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
              <Button variant="ghost" size="md" onClick={manualOpenOff}>
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
    </>
  )
}
