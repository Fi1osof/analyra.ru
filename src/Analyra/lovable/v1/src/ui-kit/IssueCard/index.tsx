/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import {
  IssueCardStyled,
  IssueHeaderStyled,
  IssueTitleStyled,
  IssueDescStyled,
  IssueLocationStyled,
} from './styles'
import { Badge } from '../Badge'
import type { IssueCardProps, IssueSeverity } from './types'

const severityMap: Record<IssueSeverity, { kind: any; label: string }> = {
  low: { kind: 'info', label: 'Низкая' },
  medium: { kind: 'warning', label: 'Средняя' },
  high: { kind: 'danger', label: 'Высокая' },
  critical: { kind: 'danger', label: 'Критичная' },
}

export const IssueCard: React.FC<IssueCardProps> = ({
  title,
  description,
  severity,
  location,
  className,
}) => {
  const sev = severityMap[severity]
  return (
    <IssueCardStyled className={className}>
      <IssueHeaderStyled>
        <IssueTitleStyled>{title}</IssueTitleStyled>
        <Badge kind={sev.kind}>{sev.label}</Badge>
      </IssueHeaderStyled>
      <IssueDescStyled>{description}</IssueDescStyled>
      {location && <IssueLocationStyled>{location}</IssueLocationStyled>}
    </IssueCardStyled>
  )
}
