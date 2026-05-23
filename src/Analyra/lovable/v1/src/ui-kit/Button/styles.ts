import styled, { css } from "styled-components";
import type { ButtonSize, ButtonVariant } from "./types";

const sizeStyles = (size: ButtonSize) => {
  switch (size) {
    case "sm":
      return css`
        height: 32px;
        padding: 0 12px;
        font-size: 13px;
        gap: 6px;
      `;
    case "lg":
      return css`
        height: 48px;
        padding: 0 22px;
        font-size: 16px;
        gap: 10px;
      `;
    default:
      return css`
        height: 40px;
        padding: 0 16px;
        font-size: 14px;
        gap: 8px;
      `;
  }
};

const variantStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case "secondary":
      return css`
        background: ${({ theme }) => theme.color.surface2};
        color: ${({ theme }) => theme.color.text};
        border: 1px solid transparent;
        &:hover:not(:disabled) {
          background: ${({ theme }) => theme.color.surface3};
        }
        &:active:not(:disabled) {
          background: ${({ theme }) => theme.color.border};
        }
      `;
    case "outline":
      return css`
        background: ${({ theme }) => theme.color.bg};
        color: ${({ theme }) => theme.color.text};
        border: 1px solid ${({ theme }) => theme.color.border};
        &:hover:not(:disabled) {
          border-color: ${({ theme }) => theme.color.borderStrong};
          background: ${({ theme }) => theme.color.surface};
        }
      `;
    case "ghost":
      return css`
        background: transparent;
        color: ${({ theme }) => theme.color.textSoft};
        border: 1px solid transparent;
        &:hover:not(:disabled) {
          background: ${({ theme }) => theme.color.surface2};
          color: ${({ theme }) => theme.color.text};
        }
      `;
    case "danger":
      return css`
        background: ${({ theme }) => theme.color.danger};
        color: #fff;
        border: 1px solid transparent;
        &:hover:not(:disabled) {
          background: #b91c1c;
        }
      `;
    default:
      return css`
        background: ${({ theme }) => theme.color.text};
        color: #fff;
        border: 1px solid transparent;
        box-shadow:
          inset 0 1px 0 rgba(255, 255, 255, 0.08),
          0 1px 2px rgba(0, 0, 0, 0.1);
        &:hover:not(:disabled) {
          background: #1f1f23;
        }
        &:active:not(:disabled) {
          background: #2a2a2f;
        }
      `;
  }
};

export const ButtonStyled = styled.button<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth?: boolean;
  $loading?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.md};
  font-family: inherit;
  font-weight: ${({ theme }) => theme.weight.medium};
  letter-spacing: -0.005em;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.base};
  white-space: nowrap;
  user-select: none;
  ${({ $fullWidth }) => $fullWidth && "width: 100%;"}
  ${({ $size }) => sizeStyles($size)}
  ${({ $variant }) => variantStyles($variant)}
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.accent};
    outline-offset: 2px;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  ${({ $loading }) =>
    $loading &&
    css`
      cursor: progress;
    `}
`;
