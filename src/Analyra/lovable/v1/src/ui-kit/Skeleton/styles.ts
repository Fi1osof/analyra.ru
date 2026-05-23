import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`;

export const SkeletonStyled = styled.div<{
  $w?: number | string;
  $h?: number | string;
  $r?: number | string;
}>`
  display: block;
  width: ${({ $w }) => (typeof $w === "number" ? `${$w}px` : $w ?? "100%")};
  height: ${({ $h }) => (typeof $h === "number" ? `${$h}px` : $h ?? "14px")};
  border-radius: ${({ $r, theme }) =>
    typeof $r === "number" ? `${$r}px` : $r ?? theme.radius.sm};
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.color.surface2} 0%,
    ${({ theme }) => theme.color.surface3} 50%,
    ${({ theme }) => theme.color.surface2} 100%
  );
  background-size: 800px 100%;
  animation: ${shimmer} 1.4s linear infinite;
`;
