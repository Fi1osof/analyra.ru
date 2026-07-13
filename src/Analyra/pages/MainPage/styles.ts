/* ────────────────────────────────── Page ────────────────────────────────── */

import styled from 'styled-components'

/* Hero */
export const HeroSectionStyled = styled.section`
  padding: 96px 0 80px;
  background: radial-gradient(
    1000px 500px at 80% -10%,
    ${({ theme }) => theme.color.accentSoft} 0%,
    transparent 60%
  );
`

export const HeroGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 56px;
  align-items: center;
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`

export const HeroLeftStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`

export const HeroEyebrowStyled = styled.div`
  display: inline-flex;
`

export const HeroSubStyled = styled.p`
  margin: 0;
  font-size: 18px;
  line-height: 1.55;
  color: ${({ theme }) => theme.color.muted};
  max-width: 540px;
`

export const HeroFootStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.color.mutedSoft};
  font-size: 13px;
`

export const HeroMockupStyled = styled.div`
  background: ${({ theme }) => theme.color.bg};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadow.lg};
  overflow: hidden;
`

export const MockHeaderStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
`

export const MockDotStyled = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.border};
`

export const MockTitleStyled = styled.div`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.color.muted};
  margin-left: 8px;
`

export const MockBodyStyled = styled.div`
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`

/* Features grid */
export const FeatureGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

/* Section header */
export const SectionHeadStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 14px;
  margin-bottom: 56px;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
`

/* Example block */
export const ExampleGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 24px;
  @media (max-width: 1040px) {
    grid-template-columns: 1fr;
  }
`

export const ExampleSideStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const ExampleTabsStyled = styled.div`
  display: flex;
  gap: 4px;
  padding: 4px;
  background: ${({ theme }) => theme.color.surface2};
  border-radius: ${({ theme }) => theme.radius.md};
  align-self: flex-start;
`

export const ExampleTabStyled = styled.button<{ $active?: boolean }>`
  background: ${({ theme, $active }) =>
    $active ? theme.color.bg : 'transparent'};
  border: 0;
  font-family: inherit;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme, $active }) =>
    $active ? theme.color.text : theme.color.muted};
  padding: 6px 12px;
  border-radius: ${({ theme }) => theme.radius.sm};
  cursor: pointer;
  box-shadow: ${({ theme, $active }) => ($active ? theme.shadow.xs : 'none')};
`

/* Audience chips */
export const ChipsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`

export const ChipStyled = styled.span`
  display: inline-flex;
  align-items: center;
  height: 36px;
  padding: 0 16px;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.color.bg};
  border: 1px solid ${({ theme }) => theme.color.border};
  font-size: 14px;
  color: ${({ theme }) => theme.color.textSoft};
`

/* Final CTA */
export const FinalCtaStyled = styled.div`
  background:
    radial-gradient(
      600px 300px at 50% 0%,
      ${({ theme }) => theme.color.accentSoft} 0%,
      transparent 70%
    ),
    ${({ theme }) => theme.color.bg};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 64px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 22px;
`

export const FinalCtaInnerStyled = styled.div`
  width: 100%;
  max-width: 540px;
`
