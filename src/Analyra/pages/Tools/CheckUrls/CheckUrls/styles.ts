import styled, { keyframes, css } from 'styled-components'

export const WrapStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const PanelStyled = styled.div`
  background: ${({ theme }) => theme.color.bg};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  overflow: hidden;
`

export const SettingsRowStyled = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 16px;
  align-items: end;
  padding: 18px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    align-items: stretch;
  }
`

export const FieldStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`

export const FieldLabelStyled = styled.label`
  font-size: 17px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.text};
  display: inline-flex;
  align-items: center;
  gap: 8px;
`

export const FieldHintStyled = styled.span`
  color: ${({ theme }) => theme.color.muted};
  font-weight: 400;
`

export const ActionsRowStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
`

export const ToolbarStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px 16px;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
`

export const StatsRowStyled = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`

export const StatChipStyled = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.color.surface};
  border: 1px solid ${({ theme }) => theme.color.border};

  color: ${({ theme }) => theme.color.textSoft};
  strong {
    color: ${({ theme }) => theme.color.text};
    font-weight: 600;
  }
`

export const FilterBarStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 10px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  align-items: center;
`

export const FilterLabelStyled = styled.span`
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.muted};
  font-weight: 600;
  margin-right: 4px;
`

export const FilterChipStyled = styled.button<{
  $active?: boolean
  $tone?: 'success' | 'warning' | 'danger' | 'muted' | 'neutral'
  $disabled?: boolean
}>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  border-radius: ${({ theme }) => theme.radius.pill};

  font-weight: 600;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.fast};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.bg};
  color: ${({ theme }) => theme.color.textSoft};
  ${({ $tone, theme, $active }) => {
    if (!$active) {
      return ''
    }

    const map: Record<string, { bg: string; fg: string; bd: string }> = {
      success: {
        bg: theme.color.successSoft,
        fg: theme.color.success,
        bd: theme.color.success,
      },
      warning: {
        bg: theme.color.warningSoft,
        fg: theme.color.warning,
        bd: theme.color.warning,
      },
      danger: {
        bg: theme.color.dangerSoft,
        fg: theme.color.danger,
        bd: theme.color.danger,
      },
      muted: {
        bg: theme.color.surface2,
        fg: theme.color.text,
        bd: theme.color.borderStrong,
      },
      neutral: {
        bg: theme.color.accentSoft,
        fg: theme.color.accent,
        bd: theme.color.accent,
      },
    }
    const t = map[$tone ?? 'neutral']
    return css`
      background: ${t.bg};
      color: ${t.fg};
      border-color: ${t.bd};
    `
  }}
  &:hover {
    border-color: ${({ theme }) => theme.color.borderStrong};
  }
  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
  small {
    font-weight: 500;
    opacity: 0.75;
  }
`

export const TableWrapStyled = styled.div`
  overflow-x: auto;
`

export const TableStyled = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 18px;
  th,
  td {
    text-align: left;
    padding: 12px 16px;
    border-bottom: 1px solid ${({ theme }) => theme.color.border};
    vertical-align: middle;
  }
  th {
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.color.muted};
    font-weight: 600;
    background: ${({ theme }) => theme.color.surface};
    position: sticky;
    top: 0;
  }
  tbody tr:last-child td {
    border-bottom: 0;
  }
  td.center,
  th.center {
    text-align: center;
    width: 1%;
    white-space: nowrap;
  }
  td.url {
    font-family: ${({ theme }) => theme.font.mono};

    word-break: break-all;
    max-width: 520px;
    color: ${({ theme }) => theme.color.textSoft};
  }
  td.date {
    font-family: ${({ theme }) => theme.font.mono};

    color: ${({ theme }) => theme.color.muted};
    white-space: nowrap;
  }
`

export const RowStyled = styled.tr<{ $invalid?: boolean }>`
  ${({ $invalid, theme }) =>
    $invalid &&
    css`
      background: ${theme.color.dangerSoft};
      &:hover {
        background: ${theme.color.dangerSoft};
      }
    `}
  &:hover {
    background: ${({ $invalid, theme }) =>
      $invalid ? theme.color.dangerSoft : theme.color.surface};
  }
`

export const UrlCellStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`

export const UrlMainStyled = styled.span<{ $muted?: boolean }>`
  font-family: ${({ theme }) => theme.font.mono};

  color: ${({ theme, $muted }) =>
    $muted ? theme.color.muted : theme.color.text};
  word-break: break-all;
`

export const UrlMetaStyled = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.color.danger};
  display: inline-flex;
  align-items: center;
  gap: 4px;
`

export const CheckboxStyled = styled.input.attrs({ type: 'checkbox' })`
  width: 16px;
  height: 16px;
  accent-color: ${({ theme }) => theme.color.accent};
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`

export const StatusPillStyled = styled.span<{
  $tone: 'success' | 'warning' | 'danger' | 'muted'
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 48px;
  height: 24px;
  padding: 0 10px;
  border-radius: ${({ theme }) => theme.radius.pill};
  font-family: ${({ theme }) => theme.font.mono};

  font-weight: 600;
  ${({ theme, $tone }) => {
    const map = {
      success: { bg: theme.color.successSoft, fg: theme.color.success },
      warning: { bg: theme.color.warningSoft, fg: theme.color.warning },
      danger: { bg: theme.color.dangerSoft, fg: theme.color.danger },
      muted: { bg: theme.color.surface2, fg: theme.color.muted },
    }[$tone]
    return `background: ${map.bg}; color: ${map.fg};`
  }}
`

const pulse = keyframes`
  0%, 100% { opacity: 0.35; transform: scale(0.85); }
  50% { opacity: 1; transform: scale(1); }
`

export const LoadingDotsStyled = styled.span`
  display: inline-flex;
  gap: 4px;
  span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.color.mutedSoft};
    animation: ${pulse} 1.1s ease-in-out infinite;
  }
  span:nth-child(2) {
    animation-delay: 0.18s;
  }
  span:nth-child(3) {
    animation-delay: 0.36s;
  }
`

export const DashStyled = styled.span`
  color: ${({ theme }) => theme.color.mutedSoft};
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 17px;
`

export const EmptyStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  padding: 64px 24px;
  text-align: center;
  color: ${({ theme }) => theme.color.muted};
  svg {
    color: ${({ theme }) => theme.color.mutedSoft};
  }
`

export const EmptyTitleStyled = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.text};
`

export const EmptyHintStyled = styled.div`
  font-size: 17px;
  max-width: 420px;
`

export const ProgressBarStyled = styled.div`
  height: 4px;
  width: 100%;
  background: ${({ theme }) => theme.color.surface2};
  overflow: hidden;
`

export const ProgressFillStyled = styled.div<{ $value: number }>`
  height: 100%;
  width: ${({ $value }) => $value}%;
  background: ${({ theme }) => theme.color.accent};
  transition: width 200ms ease;
`

export const FileButtonStyled = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 36px;
  padding: 0 14px;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.bg};
  font-size: 17px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.text};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.fast};
  &:hover {
    background: ${({ theme }) => theme.color.surface};
    border-color: ${({ theme }) => theme.color.borderStrong};
  }
  input {
    display: none;
  }
`

/* Modal */

export const ModalOverlayStyled = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 17, 25, 0.55);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  z-index: 100;
`

export const ModalStyled = styled.div`
  background: ${({ theme }) => theme.color.bg};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadow.lg};
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

export const ModalHeadStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 18px 22px;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.text};
  }
`

export const ModalCloseStyled = styled.button`
  width: 32px;
  height: 32px;
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.color.muted};
  cursor: pointer;
  font-size: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: ${({ theme }) => theme.color.surface};
    color: ${({ theme }) => theme.color.text};
  }
`

export const ModalBodyStyled = styled.div`
  padding: 20px 22px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const ModalFooterStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 14px 22px;
  border-top: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
`

export const TextareaStyled = styled.textarea`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 17px;
  line-height: 1.55;
  width: 100%;
  min-height: 220px;
  resize: vertical;
  padding: 14px 16px;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.bg};
  color: ${({ theme }) => theme.color.text};
  outline: none;
  transition: ${({ theme }) => theme.transition.fast};
  &:focus {
    border-color: ${({ theme }) => theme.color.accent};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.color.accentSoft};
  }
`

export const ExportTextareaStyled = styled.textarea`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 17px;
  width: 100%;
  min-height: 160px;
  padding: 14px 16px;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.text};
  resize: vertical;
  outline: none;
`

export const InlineNoticeStyled = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;

  color: ${({ theme }) => theme.color.muted};
  code {
    font-family: ${({ theme }) => theme.font.mono};
    background: ${({ theme }) => theme.color.surface2};
    padding: 1px 6px;
    border-radius: 4px;
    color: ${({ theme }) => theme.color.text};
  }
`
