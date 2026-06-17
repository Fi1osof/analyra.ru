import { Logo, Navbar } from 'src/Analyra/lovable/v1/src/ui-kit'
import { AnalyraLayoutStyled, FooterInnerStyled, FooterStyled } from './styles'

export const AnalyraLayout: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <AnalyraLayoutStyled>
      <Navbar />

      {children}

      <FooterStyled>
        <FooterInnerStyled>
          <Logo size={20} />
          <span>© {new Date().getFullYear()} Analyra. Все права защищены.</span>
        </FooterInnerStyled>
      </FooterStyled>
    </AnalyraLayoutStyled>
  )
}
