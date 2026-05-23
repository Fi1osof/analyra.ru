import styled, { css, keyframes } from "styled-components";

const pulse = keyframes`
  0%, 100% { opacity: 0.45; }
  50% { opacity: 1; }
`;

const accentMap = {
  default: { bg: "transparent", color: "muted", border: "border" },
  ai: { bg: "accentSoft", color: "accent", border: "accentBorder" },
  success: { bg: "successSoft", color: "success", border: "border" },
  warning: { bg: "warningSoft", color: "warning", border: "border" },
  danger: { bg: "dangerSoft", color: "danger", border: "border" },
  info: { bg: "infoSoft", color: "info", border: "border" },
} as const;

type Accent = keyof typeof accentMap;

export const BlockStyled = styled.section<{ $accent: Accent }>`
  background: ${({ theme }) => theme.color.bg};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: ${({ theme }) => theme.transition.base};
  ${({ $accent }) =>
    $accent === "ai" &&
    css`
      border-color: ${({ theme }) => theme.color.accentBorder};
    `}
`;

export const BlockHeaderStyled = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
`;

export const BlockHeaderLeftStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  min-width: 0;
`;

export const BlockIconStyled = styled.span<{ $accent: Accent }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme, $accent }) => theme.color[accentMap[$accent].bg as keyof typeof theme.color] || theme.color.surface};
  color: ${({ theme, $accent }) => theme.color[accentMap[$accent].color as keyof typeof theme.color]};
  border: 1px solid ${({ theme, $accent }) => theme.color[accentMap[$accent].border as keyof typeof theme.color]};
  flex-shrink: 0;
`;

export const BlockTitleStyled = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.weight.semibold};
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.color.text};
`;

export const BlockDescStyled = styled.p`
  margin: 2px 0 0;
  font-size: 13px;
  color: ${({ theme }) => theme.color.muted};
`;

export const BlockBodyStyled = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const BlockLoadingStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const BlockLoadingHintStyled = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: ${({ theme }) => theme.color.accent};
  font-weight: ${({ theme }) => theme.weight.medium};
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

export const BlockLoadingDotStyled = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.accent};
`;
