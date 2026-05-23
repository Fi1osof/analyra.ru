import type { ReactNode } from "react";

export type AIPanelProps = {
  title: string;
  children: ReactNode;
  label?: string;
  className?: string;
};
