import styled, { css } from "styled-components";

export const CardStyled = styled.div<{
  $padded: boolean;
  $interactive: boolean;
  $tone: "default" | "soft";
}>`
  background: ${({ theme, $tone }) => ($tone === "soft" ? theme.color.surface : theme.color.bg)};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  transition: ${({ theme }) => theme.transition.base};
  ${({ $padded }) => $padded && `padding: 24px;`}
  ${({ $interactive }) =>
    $interactive &&
    css`
      cursor: pointer;
      &:hover {
        border-color: ${({ theme }) => theme.color.borderStrong};
        box-shadow: ${({ theme }) => theme.shadow.sm};
        transform: translateY(-1px);
      }
    `}
`;
