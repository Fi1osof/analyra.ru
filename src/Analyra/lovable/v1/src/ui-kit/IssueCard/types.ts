export type IssueSeverity = "low" | "medium" | "high" | "critical";

export type IssueCardProps = {
  title: string;
  description: string;
  severity: IssueSeverity;
  location?: string;
  className?: string;
};
