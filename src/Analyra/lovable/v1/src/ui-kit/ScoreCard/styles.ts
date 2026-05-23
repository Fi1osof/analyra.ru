import styled from "styled-components";

export const ScoreCardStyled = styled.div`
  background: ${({ theme }) => theme.color.bg};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 16px 18px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ScoreRingStyled = styled.div`
  position: relative;
  width: 56px;
  height: 56px;
  flex-shrink: 0;

  svg {
    transform: rotate(-90deg);
  }
`;

export const ScoreValueStyled = styled.span`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: ${({ theme }) => theme.weight.semibold};
  color: ${({ theme }) => theme.color.text};
`;

export const ScoreMetaStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`;

export const ScoreLabelStyled = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.color.muted};
`;

export const ScoreTrendStyled = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.color.mutedSoft};
`;
