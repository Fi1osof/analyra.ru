import type { ReactNode } from "react";

export type SectionProps = {
  children: ReactNode;
  tone?: "default" | "soft";
  id?: string;
  className?: string;
};

export type ContainerProps = {
  children: ReactNode;
  className?: string;
};
