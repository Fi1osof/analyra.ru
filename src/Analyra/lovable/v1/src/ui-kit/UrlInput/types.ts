import type { InputHTMLAttributes } from "react";

export type UrlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  ctaLabel?: string;
  onCta?: () => void;
  loading?: boolean;
};
