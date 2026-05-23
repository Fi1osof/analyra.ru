import styled from "styled-components";

export const SwitchWrapStyled = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: ${({ theme }) => theme.color.textSoft};
  cursor: pointer;
  user-select: none;
`;

export const SwitchTrackStyled = styled.span<{ $on: boolean }>`
  position: relative;
  width: 36px;
  height: 20px;
  background: ${({ theme, $on }) => ($on ? theme.color.accent : theme.color.surface3)};
  border-radius: ${({ theme }) => theme.radius.pill};
  transition: ${({ theme }) => theme.transition.base};
  flex-shrink: 0;

  &::after {
    content: "";
    position: absolute;
    top: 2px;
    left: ${({ $on }) => ($on ? "18px" : "2px")};
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
    transition: ${({ theme }) => theme.transition.base};
  }
`;

export const SwitchInputStyled = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`;
