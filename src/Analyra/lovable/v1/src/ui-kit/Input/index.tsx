import React from "react";
import { InputWrapperStyled, InputIconStyled, InputElementStyled } from "./styles";
import type { InputProps } from "./types";

export const Input: React.FC<InputProps> = ({
  iconLeft,
  invalid,
  size = "md",
  className,
  ...other
}) => (
  <InputWrapperStyled $size={size} $invalid={invalid} className={className}>
    {iconLeft && <InputIconStyled>{iconLeft}</InputIconStyled>}
    <InputElementStyled {...other} />
  </InputWrapperStyled>
);
