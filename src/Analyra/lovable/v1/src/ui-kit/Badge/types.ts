import type { ReactNode } from "react";

export type BadgeKind =
  | "neutral"
  | "info"
  | "success"
  | "warning"
  | "danger"
  | "ai"
  | "accent";

export type BadgeProps = {
  children: ReactNode;
  kind?: BadgeKind;
  iconLeft?: ReactNode;
  className?: string;
};
