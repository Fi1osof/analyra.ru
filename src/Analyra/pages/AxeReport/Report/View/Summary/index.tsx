/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-bind */

import { useMemo, useState } from 'react'
import { AnalyzeWebPageAccessibilityFragment } from 'src/gql/generated'

import styled from 'styled-components'

const IMPACT_ORDER = ['critical', 'serious', 'moderate', 'minor']

const IMPACT_COLORS: Record<string, string> = {
  critical: '#dc2626',
  serious: '#ea580c',
  moderate: '#ca8a04',
  minor: '#2563eb',
}

type AxeImpact = 'minor' | 'moderate' | 'serious' | 'critical' | null

interface AxeRelatedNode {
  html: string
  target: string[]
}

interface AxeCheck {
  id: string
  impact: AxeImpact

  message: string

  data?: unknown

  relatedNodes: AxeRelatedNode[]
}

interface AxeNode {
  any: AxeCheck[]
  all: AxeCheck[]
  none: AxeCheck[]

  impact: AxeImpact

  html: string

  target: string[]

  failureSummary?: string
}

interface AxeRule {
  id: string

  impact: AxeImpact

  tags: string[]

  description: string

  help: string

  helpUrl: string

  nodes: AxeNode[]
}

const NodeCard = ({ node }: { node: AxeNode }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <NodeWrapper>
      <NodeHeader onClick={() => setExpanded((v) => !v)}>
        <NodeTarget>{node.target.join(', ')}</NodeTarget>

        <ExpandIcon>{expanded ? '−' : '+'}</ExpandIcon>
      </NodeHeader>

      {expanded && (
        <NodeContent>
          <CodeBlock>{node.html}</CodeBlock>

          {node.failureSummary && (
            <FailureSummary>{node.failureSummary}</FailureSummary>
          )}
        </NodeContent>
      )}
    </NodeWrapper>
  )
}

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
`

const Toolbar = styled.div`
  position: sticky;
  top: 0;
  z-index: 20;

  background: white;

  padding-bottom: 16px;
  margin-bottom: 24px;

  border-bottom: 1px solid #e5e7eb;
`

const Title = styled.h1`
  margin: 0 0 16px;
  font-size: 28px;
`

const Filters = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`

const FilterButton = styled.button<{ $active: boolean }>`
  border: 1px solid #d1d5db;
  background: ${({ $active }) => ($active ? '#111827' : 'white')};

  color: ${({ $active }) => ($active ? 'white' : '#111827')};

  border-radius: 8px;
  padding: 8px 14px;

  cursor: pointer;
`

const Section = styled.section`
  margin-bottom: 40px;
`

const SectionTitle = styled.h2<{ $color: string }>`
  color: ${({ $color }) => $color};
  margin-bottom: 16px;
`

const Card = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 16px;
`

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;

  padding: 18px;

  background: #fafafa;

  cursor: pointer;
`

const CardLeft = styled.div`
  min-width: 0;
`

const CardRight = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  flex-shrink: 0;
`

const RuleId = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 6px;
`

const RuleHelp = styled.div`
  font-size: 14px;
  color: #6b7280;
`

const Badge = styled.div<{ $color: string }>`
  background: ${({ $color }) => $color};
  color: white;

  padding: 4px 10px;

  border-radius: 999px;

  font-size: 12px;
  font-weight: 700;
`

const CardBody = styled.div`
  padding: 18px;
`

const Description = styled.p`
  margin-top: 0;
  line-height: 1.5;
`

const DocLink = styled.a`
  display: inline-block;
  margin-bottom: 20px;

  color: #2563eb;
`

const NodesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  max-height: 700px;
  overflow: auto;
`

const NodeWrapper = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  /* overflow: hidden; */
`

const NodeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;

  padding: 14px;

  background: #fcfcfc;

  cursor: pointer;
`

const NodeTarget = styled.div`
  font-family: monospace;
  font-size: 13px;

  overflow-wrap: anywhere;
`

const ExpandIcon = styled.div`
  font-size: 18px;
  line-height: 1;
`

const NodeContent = styled.div`
  padding: 14px;
`

const CodeBlock = styled.pre`
  margin: 0;

  overflow: auto;

  background: #111827;
  color: #10b981;

  padding: 14px;
  border-radius: 10px;

  font-size: 12px;
  line-height: 1.5;
`

const FailureSummary = styled.pre`
  margin-top: 12px;

  white-space: pre-wrap;

  color: #b91c1c;

  font-size: 13px;
  line-height: 1.5;
`

type AxeReportViewSummaryProps = { report: AnalyzeWebPageAccessibilityFragment }

export const AxeReportViewSummary: React.FC<AxeReportViewSummaryProps> = ({
  report,
}) => {
  const [selectedImpact, setSelectedImpact] = useState<string | null>(null)
  const [expandedRules, setExpandedRules] = useState<Record<string, boolean>>(
    {},
  )

  const violations = useMemo(() => {
    let items: AxeRule[] = Array.isArray(report.violations)
      ? report.violations
      : []

    if (selectedImpact) {
      items = items.filter((v) => v.impact === selectedImpact)
    }

    return IMPACT_ORDER.map((level) => ({
      level,
      items: items.filter((v) => v.impact === level),
    }))
  }, [report, selectedImpact])

  const toggleRule = (id: string) => {
    setExpandedRules((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <Container>
      <Toolbar>
        <Title>Axe Accessibility Report</Title>

        <Filters>
          <FilterButton
            $active={selectedImpact === null}
            onClick={() => setSelectedImpact(null)}
          >
            All
          </FilterButton>

          {IMPACT_ORDER.map((level) => (
            <FilterButton
              key={level}
              $active={selectedImpact === level}
              onClick={() => setSelectedImpact(level)}
            >
              {level}
            </FilterButton>
          ))}
        </Filters>
      </Toolbar>

      {violations.map((group) => {
        if (!group.items.length) {
          return null
        }

        return (
          <Section key={group.level}>
            <SectionTitle $color={IMPACT_COLORS[group.level]}>
              {group.level.toUpperCase()} ({group.items.length})
            </SectionTitle>

            {group.items.map((issue) => {
              const expanded = expandedRules[issue.id]

              return (
                <Card key={issue.id}>
                  <CardHeader onClick={() => toggleRule(issue.id)}>
                    <CardLeft>
                      <RuleId>{issue.id}</RuleId>

                      <RuleHelp>{issue.help}</RuleHelp>
                    </CardLeft>

                    <CardRight>
                      <Badge $color={IMPACT_COLORS[issue.impact || 'minor']}>
                        {issue.impact}
                      </Badge>

                      <Badge $color="#374151">{issue.nodes.length} nodes</Badge>
                    </CardRight>
                  </CardHeader>

                  {expanded && (
                    <CardBody>
                      <Description>{issue.description}</Description>

                      <DocLink
                        href={issue.helpUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Documentation
                      </DocLink>

                      <NodesContainer>
                        {issue.nodes.map((node, index) => (
                          <NodeCard key={`${issue.id}-${index}`} node={node} />
                        ))}
                      </NodesContainer>
                    </CardBody>
                  )}
                </Card>
              )
            })}
          </Section>
        )
      })}
    </Container>
  )
}
