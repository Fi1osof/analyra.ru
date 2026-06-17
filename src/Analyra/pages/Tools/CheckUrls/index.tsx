import { Page } from 'src/components/pages/_App/interfaces'
import { CheckUrlsPageStyled } from './styles'
import { CheckUrls } from './CheckUrls'

export const CheckUrlsPage: Page = () => {
  return (
    <CheckUrlsPageStyled>
      <CheckUrls />
    </CheckUrlsPageStyled>
  )
}
