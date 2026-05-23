import React from "react";
import { ButtonStyled } from "./styles";
import { LoaderIcon } from "../icons";
import type { ButtonProps } from "./types";

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  loading = false,
  fullWidth = false,
  iconLeft,
  iconRight,
  disabled,
  children,
  ...other
}) => {
  return (
    <ButtonStyled
      $variant={variant}
      $size={size}
      $loading={loading}
      $fullWidth={fullWidth}
      disabled={disabled || loading}
      {...other}
    >
      {loading ? <LoaderIcon size={size === "lg" ? 18 : 14} /> : iconLeft}
      {children}
      {!loading && iconRight}
    </ButtonStyled>
  );
};
