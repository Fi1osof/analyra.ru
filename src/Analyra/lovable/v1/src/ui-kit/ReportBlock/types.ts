import type { ReactNode } from "react";

export type ReportBlockProps = {
  title: string;
  description?: string;
  icon?: ReactNode;
  accent?: "default" | "ai" | "success" | "warning" | "danger" | "info";
  loading?: boolean;
  loadingLabel?: string;
  loadingSkeleton?: ReactNode;
  meta?: ReactNode;
  children?: ReactNode;
  className?: string;
};
