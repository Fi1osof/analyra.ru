import { Page } from 'src/components/pages/_App/interfaces'
import { SeoHeaders } from 'src/components/seo/SeoHeaders'
import { AxeReport } from './Report'

export const AxeReportPage: Page = () => {
  return (
    <>
      <SeoHeaders
        title="Axe Report"
        noindex
        nofollow
        canonical={undefined}
        siteOrigin={undefined}
      />

      <AxeReport />
    </>
  )
}
