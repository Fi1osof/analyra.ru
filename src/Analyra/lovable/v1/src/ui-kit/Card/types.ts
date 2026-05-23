import type { HTMLAttributes, ReactNode } from "react";

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  padded?: boolean;
  interactive?: boolean;
  tone?: "default" | "soft";
};
