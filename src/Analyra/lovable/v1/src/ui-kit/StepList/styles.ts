import styled from "styled-components";

export const StepListStyled = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  counter-reset: step;
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const StepItemStyled = styled.li`
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
`;

export const StepNumberStyled = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.color.bg};
  border: 1px solid ${({ theme }) => theme.color.border};
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 13px;
  font-weight: ${({ theme }) => theme.weight.medium};
  color: ${({ theme }) => theme.color.textSoft};
`;

export const StepTitleStyled = styled.h4`
  margin: 0;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.weight.semibold};
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.color.text};
`;

export const StepDescStyled = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.55;
  color: ${({ theme }) => theme.color.muted};
`;
