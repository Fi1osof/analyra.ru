import { AnalyzeWebPageAccessibilityFragment } from 'src/gql/generated'
import { AxeReportViewSummary } from './Summary'
import { AxeReportViewPanelsStyled, AxeReportViewStyled } from './styles'
import { AxeReportViewScreenshot } from './Screenshot'

type AxeReportViewProps = { report: AnalyzeWebPageAccessibilityFragment }

export const AxeReportView: React.FC<AxeReportViewProps> = ({ report }) => {
  return (
    <AxeReportViewStyled>
      <AxeReportViewPanelsStyled>
        <AxeReportViewSummary report={report} />
        <AxeReportViewScreenshot report={report} />
      </AxeReportViewPanelsStyled>
    </AxeReportViewStyled>
  )
}
