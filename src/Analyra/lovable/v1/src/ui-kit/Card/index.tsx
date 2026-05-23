import React from "react";
import { CardStyled } from "./styles";
import type { CardProps } from "./types";

export const Card: React.FC<CardProps> = ({
  padded = true,
  interactive = false,
  tone = "default",
  children,
  ...other
}) => (
  <CardStyled $padded={padded} $interactive={interactive} $tone={tone} {...other}>
    {children}
  </CardStyled>
);
