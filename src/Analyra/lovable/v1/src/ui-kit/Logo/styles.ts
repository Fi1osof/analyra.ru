import styled from "styled-components";

export const LogoStyled = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.font.sans};
  font-weight: ${({ theme }) => theme.weight.semibold};
  letter-spacing: -0.01em;
`;

export const LogoMarkStyled = styled.span`
  display: inline-flex;
  color: ${({ theme }) => theme.color.accent};
`;

export const LogoWordStyled = styled.span`
  font-size: 17px;
`;
