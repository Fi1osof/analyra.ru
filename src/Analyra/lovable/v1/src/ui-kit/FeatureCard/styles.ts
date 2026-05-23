import styled from "styled-components";

export const FeatureCardStyled = styled.div`
  background: ${({ theme }) => theme.color.bg};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: ${({ theme }) => theme.transition.base};

  &:hover {
    border-color: ${({ theme }) => theme.color.borderStrong};
    box-shadow: ${({ theme }) => theme.shadow.sm};
  }
`;

export const FeatureIconStyled = styled.div`
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.accentSoft};
  color: ${({ theme }) => theme.color.accent};
  border: 1px solid ${({ theme }) => theme.color.accentBorder};
`;

export const FeatureTitleStyled = styled.h3`
  margin: 0;
  font-size: 17px;
  font-weight: ${({ theme }) => theme.weight.semibold};
  letter-spacing: -0.012em;
  color: ${({ theme }) => theme.color.text};
`;

export const FeatureDescStyled = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.color.muted};
`;
