import type { InputHTMLAttributes, ReactNode } from "react";

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  iconLeft?: ReactNode;
  invalid?: boolean;
  size?: "md" | "lg";
};
