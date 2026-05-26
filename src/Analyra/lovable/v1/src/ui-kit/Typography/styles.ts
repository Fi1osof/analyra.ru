/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { css } from 'styled-components'

const toneStyles = css<{ $tone?: 'default' | 'muted' | 'soft' | 'accent' }>`
  color: ${({ theme, $tone }) =>
    $tone === 'muted'
      ? theme.color.muted
      : $tone === 'soft'
        ? theme.color.textSoft
        : $tone === 'accent'
          ? theme.color.accent
          : theme.color.text};
`

const alignStyles = css<{ $align?: 'left' | 'center' | 'right' }>`
  text-align: ${({ $align }) => $align ?? 'left'};
`

export const Heading1Styled = styled.h1<{ $tone?: any; $align?: any }>`
  margin: 0;
  font-size: clamp(40px, 5.4vw, ${({ theme }) => theme.fontSize.h1});
  line-height: ${({ theme }) => theme.lineHeight.tight};
  font-weight: ${({ theme }) => theme.weight.semibold};
  letter-spacing: -0.025em;
  ${toneStyles}
  ${alignStyles}
`

export const Heading2Styled = styled.h2<{ $tone?: any; $align?: any }>`
  margin: 0;
  font-size: clamp(30px, 3.6vw, ${({ theme }) => theme.fontSize.h2});
  line-height: ${({ theme }) => theme.lineHeight.snug};
  font-weight: ${({ theme }) => theme.weight.semibold};
  letter-spacing: -0.022em;
  ${toneStyles}
  ${alignStyles}
`

export const Heading3Styled = styled.h3<{ $tone?: any; $align?: any }>`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.h3};
  line-height: ${({ theme }) => theme.lineHeight.snug};
  font-weight: ${({ theme }) => theme.weight.semibold};
  letter-spacing: -0.018em;
  ${toneStyles}
  ${alignStyles}
`

export const Heading4Styled = styled.h4<{ $tone?: any; $align?: any }>`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.h4};
  line-height: ${({ theme }) => theme.lineHeight.snug};
  font-weight: ${({ theme }) => theme.weight.semibold};
  letter-spacing: -0.012em;
  ${toneStyles}
  ${alignStyles}
`

export const TextStyled = styled.p<{ $tone?: any; $align?: any }>`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.body};
  line-height: ${({ theme }) => theme.lineHeight.relaxed};
  ${toneStyles}
  ${alignStyles}
`

export const SmallStyled = styled.span<{ $tone?: any; $align?: any }>`
  font-size: ${({ theme }) => theme.fontSize.small};
  line-height: ${({ theme }) => theme.lineHeight.normal};
  ${toneStyles}
  ${alignStyles}
`

export const LabelStyled = styled.span<{ $tone?: any; $align?: any }>`
  font-size: ${({ theme }) => theme.fontSize.label};
  line-height: 1.2;
  font-weight: ${({ theme }) => theme.weight.medium};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  ${toneStyles}
  ${alignStyles}
`

export const CodeStyled = styled.code<{ $tone?: any; $align?: any }>`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: ${({ theme }) => theme.fontSize.code};
  padding: 1px 6px;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.color.surface2};
  color: ${({ theme }) => theme.color.textSoft};
`
