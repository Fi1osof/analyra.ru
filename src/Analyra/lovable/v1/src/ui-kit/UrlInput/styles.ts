import styled from "styled-components";

export const UrlInputStyled = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.color.bg};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 6px 6px 6px 16px;
  gap: 10px;
  transition: ${({ theme }) => theme.transition.fast};
  box-shadow: ${({ theme }) => theme.shadow.xs};

  &:focus-within {
    border-color: ${({ theme }) => theme.color.accent};
    box-shadow: 0 0 0 4px ${({ theme }) => theme.color.accentSoft};
  }
`;

export const UrlIconStyled = styled.span`
  display: inline-flex;
  color: ${({ theme }) => theme.color.mutedSoft};
  flex-shrink: 0;
`;

export const UrlFieldStyled = styled.input`
  flex: 1;
  min-width: 0;
  height: 44px;
  border: 0;
  outline: 0;
  background: transparent;
  font-family: inherit;
  font-size: 15px;
  color: ${({ theme }) => theme.color.text};
  &::placeholder {
    color: ${({ theme }) => theme.color.mutedSoft};
  }
`;
