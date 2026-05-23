import styled from "styled-components";

export const AIPanelStyled = styled.div`
  background:
    linear-gradient(180deg, ${({ theme }) => theme.color.accentSoft} 0%, ${({ theme }) => theme.color.bg} 60%);
  border: 1px solid ${({ theme }) => theme.color.accentBorder};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const AIPanelHeaderStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const AIPanelIconStyled = styled.div`
  width: 28px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.color.bg};
  border: 1px solid ${({ theme }) => theme.color.accentBorder};
  color: ${({ theme }) => theme.color.accent};
`;

export const AIPanelTitleStyled = styled.h4`
  margin: 0;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.weight.semibold};
  color: ${({ theme }) => theme.color.text};
`;

export const AIPanelLabelStyled = styled.span`
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: ${({ theme }) => theme.weight.medium};
  color: ${({ theme }) => theme.color.accent};
`;

export const AIPanelBodyStyled = styled.div`
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.color.textSoft};
`;
