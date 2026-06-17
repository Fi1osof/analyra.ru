import styled from 'styled-components'

/* Footer */
export const FooterStyled = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.color.border};
  padding: 32px 0;
`

export const FooterInnerStyled = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  color: ${({ theme }) => theme.color.mutedSoft};
  font-size: 13px;
`

export const PageStyled = styled.div`
  background: ${({ theme }) => theme.color.bg};
  min-height: 100vh;
`

export const AnalyraLayoutStyled = styled(PageStyled)``
