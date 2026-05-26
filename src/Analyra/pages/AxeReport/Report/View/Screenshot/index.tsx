/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-bind */
import { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import {
  AnalyzeWebPageAccessibilityFragment,
  ImpactValue,
} from 'src/gql/generated'
import { getResizedImagePath } from 'src/helpers/getResizedImagePath'
import {
  AxeReportViewScreenshotIssueStyled,
  AxeReportViewScreenshotStyled,
  IssueMarker,
  IssuePanel,
  IssuePanelHeader,
  IssueImpactBadge,
  IssueRuleId,
  IssueHelp,
  IssueHtml,
  IssueCloseButton,
  ScreenshotImage,
} from './styles'

const PANEL_WIDTH = 360
const PANEL_HEIGHT = 300
const MARKER_SIZE = 24
const PANEL_OFFSET = 8

type AxeReportViewScreenshotProps = {
  report: AnalyzeWebPageAccessibilityFragment
}

export const AxeReportViewScreenshot: React.FC<
  AxeReportViewScreenshotProps
> = ({ report }) => {
  const { screenshot, issues } = report
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [scale, setScale] = useState(1)
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  const src = getResizedImagePath({
    path: screenshot,
    size: 'origin',
  })

  const updateScale = useCallback(() => {
    if (imageRef.current && imageRef.current.naturalWidth > 0) {
      const newScale =
        imageRef.current.clientWidth / imageRef.current.naturalWidth
      setScale(newScale)
    }
  }, [])

  useEffect(() => {
    const handleResize = () => updateScale()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [updateScale])

  const selectedIssue = selectedIndex !== null ? issues?.[selectedIndex] : null

  const panelPosition = useMemo(() => {
    if (
      selectedIndex === null ||
      !issues?.[selectedIndex] ||
      !containerRef.current
    ) {
      return null
    }

    const issue = issues[selectedIndex]
    const containerRect = containerRef.current.getBoundingClientRect()

    const markerLeft = issue.BBox.x * scale
    const markerTop = issue.BBox.y * scale

    const markerScreenX = containerRect.left + markerLeft
    const markerScreenY = containerRect.top + markerTop

    const viewportWidth = window.innerWidth
    // const viewportHeight = window.innerHeight

    let left = markerLeft + MARKER_SIZE + PANEL_OFFSET
    let top = markerTop - PANEL_HEIGHT - PANEL_OFFSET

    if (
      markerScreenX + MARKER_SIZE + PANEL_OFFSET + PANEL_WIDTH >
      viewportWidth
    ) {
      left = markerLeft - PANEL_WIDTH - PANEL_OFFSET
    }

    if (markerScreenY - PANEL_HEIGHT - PANEL_OFFSET < 0) {
      top = markerTop + MARKER_SIZE + PANEL_OFFSET
    }

    if (left < 0) {
      left = PANEL_OFFSET
    }

    return { left, top }
  }, [selectedIndex, issues, scale])

  return (
    <AxeReportViewScreenshotStyled ref={containerRef}>
      <ScreenshotImage ref={imageRef} src={src} onLoad={updateScale} />

      {issues?.map((issue, index) => {
        const {
          BBox: { x, y, width, height },
          impact,
        } = issue

        return (
          <AxeReportViewScreenshotIssueStyled
            key={`${issue.selector}-${index}`}
            $impact={impact as ImpactValue}
            $selected={selectedIndex === index}
            style={{
              left: x * scale,
              top: y * scale,
              width: width * scale,
              height: height * scale,
            }}
          >
            <IssueMarker
              $impact={impact as ImpactValue}
              onClick={() => setSelectedIndex(index)}
            >
              {index + 1}
            </IssueMarker>
          </AxeReportViewScreenshotIssueStyled>
        )
      })}

      {selectedIssue && panelPosition && (
        <IssuePanel
          $impact={selectedIssue.impact as ImpactValue}
          style={{
            left: panelPosition.left,
            top: panelPosition.top,
          }}
        >
          <IssuePanelHeader>
            <IssueImpactBadge $impact={selectedIssue.impact as ImpactValue}>
              {selectedIssue.impact}
            </IssueImpactBadge>
            <IssueCloseButton onClick={() => setSelectedIndex(null)}>
              ×
            </IssueCloseButton>
          </IssuePanelHeader>
          <IssueRuleId>{selectedIssue.ruleId}</IssueRuleId>
          <IssueHelp>{selectedIssue.help}</IssueHelp>
          <IssueHtml>{selectedIssue.html}</IssueHtml>
        </IssuePanel>
      )}
    </AxeReportViewScreenshotStyled>
  )
}
