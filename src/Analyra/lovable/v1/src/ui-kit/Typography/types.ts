import type { ReactNode } from "react";

export type TypographyProps = {
  children: ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
  tone?: "default" | "muted" | "soft" | "accent";
};
