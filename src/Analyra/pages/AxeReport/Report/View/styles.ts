import { minWidth } from 'src/theme/helpers'
import styled, { css } from 'styled-components'

export const AxeReportViewPanelsStyled = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  gap: 16px;

  ${minWidth.md(css`
    grid-template-columns: 1fr 2fr;
  `)}
`

export const AxeReportViewStyled = styled.div``
