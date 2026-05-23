export type ScoreCardProps = {
  label: string;
  score: number; // 0-100
  trend?: string;
  tone?: "accent" | "success" | "warning" | "danger";
  className?: string;
};
