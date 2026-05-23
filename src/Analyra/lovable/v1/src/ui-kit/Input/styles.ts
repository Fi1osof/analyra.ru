import styled, { css } from "styled-components";

export const InputWrapperStyled = styled.div<{ $size: "md" | "lg"; $invalid?: boolean }>`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.color.bg};
  border: 1px solid ${({ theme, $invalid }) => ($invalid ? theme.color.danger : theme.color.border)};
  border-radius: ${({ theme }) => theme.radius.md};
  transition: ${({ theme }) => theme.transition.fast};
  ${({ $size }) =>
    $size === "lg"
      ? css`
          height: 48px;
          padding: 0 14px;
          gap: 10px;
        `
      : css`
          height: 40px;
          padding: 0 12px;
          gap: 8px;
        `}
  &:hover {
    border-color: ${({ theme }) => theme.color.borderStrong};
  }
  &:focus-within {
    border-color: ${({ theme }) => theme.color.accent};
    box-shadow: 0 0 0 4px ${({ theme }) => theme.color.accentSoft};
  }
`;

export const InputIconStyled = styled.span`
  display: inline-flex;
  color: ${({ theme }) => theme.color.mutedSoft};
  flex-shrink: 0;
`;

export const InputElementStyled = styled.input`
  flex: 1;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSize.body};
  color: ${({ theme }) => theme.color.text};
  &::placeholder {
    color: ${({ theme }) => theme.color.mutedSoft};
  }
  &:disabled {
    cursor: not-allowed;
  }
`;
