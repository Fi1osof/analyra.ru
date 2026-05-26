import styled, { css } from 'styled-components'
import { ImpactValue } from 'src/gql/generated'

const IMPACT_COLORS: Record<ImpactValue, string> = {
  critical: '#dc2626',
  serious: '#ea580c',
  moderate: '#ca8a04',
  minor: '#2563eb',
}

export const AxeReportViewScreenshotStyled = styled.div`
  position: relative;
  width: 100%;
`

export const ScreenshotImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
`

export const AxeReportViewScreenshotIssueStyled = styled.div<{
  $impact?: ImpactValue | null
  $selected?: boolean
}>`
  position: absolute;
  z-index: ${({ $selected }) => ($selected ? 5 : 1)};
  pointer-events: none;

  ${({ $selected, $impact }) => {
    const color = IMPACT_COLORS[$impact ?? 'minor']

    return (
      $selected &&
      css`
        border: 2px solid ${IMPACT_COLORS[$impact ?? 'minor']};
        background-color: ${$selected ? `${color}33` : `${color}1a`};
      `
    )
  }}
`

export const IssueMarker = styled.button<{ $impact?: ImpactValue | null }>`
  position: absolute;
  top: -12px;
  left: -12px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid white;
  background: ${({ $impact }) => IMPACT_COLORS[$impact ?? 'minor']};
  color: white;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  pointer-events: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 10;

  &:hover {
    transform: scale(1.1);
  }
`

export const IssuePanel = styled.div<{ $impact?: ImpactValue | null }>`
  position: absolute;
  width: 360px;
  max-height: 300px;
  overflow: auto;
  padding: 16px;
  background: white;
  border: 2px solid ${({ $impact }) => IMPACT_COLORS[$impact ?? 'minor']};
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  z-index: 1000;
`

export const IssuePanelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`

export const IssueCloseButton = styled.button`
  width: 28px;
  height: 28px;
  border: none;
  background: #f3f4f6;
  border-radius: 6px;
  font-size: 20px;
  line-height: 1;
  cursor: pointer;
  color: #6b7280;

  &:hover {
    background: #e5e7eb;
    color: #111827;
  }
`

export const IssueImpactBadge = styled.span<{ $impact?: ImpactValue | null }>`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  color: white;
  background: ${({ $impact }) => IMPACT_COLORS[$impact ?? 'minor']};
`

export const IssueRuleId = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
`

export const IssueHelp = styled.div`
  color: #374151;
  margin-bottom: 12px;
  line-height: 1.5;
`

export const IssueHtml = styled.pre`
  margin: 0;
  padding: 12px;
  background: #111827;
  color: #10b981;
  border-radius: 8px;
  font-size: 12px;
  overflow: auto;
  max-height: 150px;
  white-space: pre-wrap;
  word-break: break-all;
`
