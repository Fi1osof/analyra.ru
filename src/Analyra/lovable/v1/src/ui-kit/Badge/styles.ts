import styled, { css } from "styled-components";
import type { BadgeKind } from "./types";

const kindStyles = (kind: BadgeKind) => {
  switch (kind) {
    case "info":
      return css`
        background: ${({ theme }) => theme.color.infoSoft};
        color: ${({ theme }) => theme.color.info};
      `;
    case "success":
      return css`
        background: ${({ theme }) => theme.color.successSoft};
        color: ${({ theme }) => theme.color.success};
      `;
    case "warning":
      return css`
        background: ${({ theme }) => theme.color.warningSoft};
        color: ${({ theme }) => theme.color.warning};
      `;
    case "danger":
      return css`
        background: ${({ theme }) => theme.color.dangerSoft};
        color: ${({ theme }) => theme.color.danger};
      `;
    case "ai":
      return css`
        background: ${({ theme }) => theme.color.accentSoft};
        color: ${({ theme }) => theme.color.accent};
        border: 1px solid ${({ theme }) => theme.color.accentBorder};
      `;
    case "accent":
      return css`
        background: ${({ theme }) => theme.color.accent};
        color: #fff;
      `;
    default:
      return css`
        background: ${({ theme }) => theme.color.surface2};
        color: ${({ theme }) => theme.color.textSoft};
      `;
  }
};

export const BadgeStyled = styled.span<{ $kind: BadgeKind }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 24px;
  padding: 0 10px;
  border-radius: ${({ theme }) => theme.radius.pill};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.weight.medium};
  line-height: 1;
  white-space: nowrap;
  ${({ $kind }) => kindStyles($kind)}
`;

export const BadgeIconStyled = styled.span`
  display: inline-flex;
`;
