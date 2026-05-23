import type { IssueSeverity } from "../IssueCard/types";

export type TaskStatus = "todo" | "in_progress" | "done";

export type TaskItemProps = {
  title: string;
  priority: IssueSeverity;
  status: TaskStatus;
  className?: string;
};
