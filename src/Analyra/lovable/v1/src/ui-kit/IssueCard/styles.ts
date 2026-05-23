import styled from "styled-components";

export const IssueCardStyled = styled.div`
  background: ${({ theme }) => theme.color.bg};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 16px 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: ${({ theme }) => theme.transition.base};
  &:hover {
    border-color: ${({ theme }) => theme.color.borderStrong};
  }
`;

export const IssueHeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const IssueTitleStyled = styled.h4`
  margin: 0;
  font-size: 15px;
  font-weight: ${({ theme }) => theme.weight.semibold};
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.color.text};
`;

export const IssueDescStyled = styled.p`
  margin: 0;
  font-size: 13.5px;
  line-height: 1.55;
  color: ${({ theme }) => theme.color.muted};
`;

export const IssueLocationStyled = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.color.mutedSoft};
`;
