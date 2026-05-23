import React from "react";
import {
  TaskItemStyled,
  TaskMainStyled,
  TaskCheckStyled,
  TaskTitleStyled,
  TaskMetaStyled,
} from "./styles";
import { Badge } from "../Badge";
import { CheckIcon } from "../icons";
import type { TaskItemProps, TaskStatus } from "./types";
import type { IssueSeverity } from "../IssueCard/types";

const statusMap: Record<TaskStatus, { kind: any; label: string }> = {
  todo: { kind: "neutral", label: "К выполнению" },
  in_progress: { kind: "info", label: "В работе" },
  done: { kind: "success", label: "Готово" },
};

const priorityMap: Record<IssueSeverity, { kind: any; label: string }> = {
  low: { kind: "neutral", label: "P3" },
  medium: { kind: "warning", label: "P2" },
  high: { kind: "danger", label: "P1" },
  critical: { kind: "danger", label: "P0" },
};

export const TaskItem: React.FC<TaskItemProps> = ({ title, priority, status, className }) => {
  const isDone = status === "done";
  return (
    <TaskItemStyled className={className}>
      <TaskMainStyled>
        <TaskCheckStyled $done={isDone}>{isDone && <CheckIcon size={12} />}</TaskCheckStyled>
        <TaskTitleStyled $done={isDone}>{title}</TaskTitleStyled>
      </TaskMainStyled>
      <TaskMetaStyled>
        <Badge kind={priorityMap[priority].kind}>{priorityMap[priority].label}</Badge>
        <Badge kind={statusMap[status].kind}>{statusMap[status].label}</Badge>
      </TaskMetaStyled>
    </TaskItemStyled>
  );
};
