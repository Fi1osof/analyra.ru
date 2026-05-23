import { ScoreCardProps } from 'src/Analyra/lovable/v1/src/ui-kit/ScoreCard/types'
import { IssueCardProps } from 'src/Analyra/lovable/v1/src/ui-kit/IssueCard/types'
import { TaskItemProps } from 'src/Analyra/lovable/v1/src/ui-kit/TaskItem/types'

export type ReportPageProps = {
  targetUrl: string
  loading: boolean
  report: Report | undefined
}

export type AIInsight = {
  title: string
  content: string
  recommendation: string
}

export type ChecklistItem = {
  text: string
  ok: boolean
}

export type Metric = {
  value: string
  label: string
}

export type KVItem = {
  key: string
  value: string
}

export type ContentAIPanel = {
  title: string
  label?: string
  content: string
}

type Report = {
  scores: ScoreCardProps[]
  aiInsight?: AIInsight
  uxIssues?: IssueCardProps[]
  seo?: {
    items: ChecklistItem[]
    meta?: string
  }
  performance?: {
    metrics: Metric[]
    note?: string
    meta?: string
  }
  accessibility?: {
    items: ChecklistItem[]
    meta?: string
  }
  content?: {
    kvs: KVItem[]
    aiPanel?: ContentAIPanel
    meta?: string
  }
  mobile?: {
    items: ChecklistItem[]
    meta?: string
  }
  security?: {
    kvs: KVItem[]
    meta?: string
  }
  tasks?: TaskItemProps[]
}
