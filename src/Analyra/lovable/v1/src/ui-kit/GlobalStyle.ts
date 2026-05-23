import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    font-family: ${({ theme }) => theme.font.sans};
    font-size: ${({ theme }) => theme.fontSize.body};
    line-height: ${({ theme }) => theme.lineHeight.normal};
    color: ${({ theme }) => theme.color.text};
    background: ${({ theme }) => theme.color.bg};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: "cv11", "ss01";
  }
  a { color: inherit; text-decoration: none; }
  button { font-family: inherit; }
  ::selection {
    background: ${({ theme }) => theme.color.accentSoft};
    color: ${({ theme }) => theme.color.accent};
  }
`

export const AnalyraGlobalStyle = GlobalStyle
