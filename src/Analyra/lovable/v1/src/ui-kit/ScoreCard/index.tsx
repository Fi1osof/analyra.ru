import React from "react";
import {
  ScoreCardStyled,
  ScoreRingStyled,
  ScoreValueStyled,
  ScoreMetaStyled,
  ScoreLabelStyled,
  ScoreTrendStyled,
} from "./styles";
import type { ScoreCardProps } from "./types";

const toneColor: Record<NonNullable<ScoreCardProps["tone"]>, string> = {
  accent: "#5B5BD6",
  success: "#16A34A",
  warning: "#D97706",
  danger: "#DC2626",
};

export const ScoreCard: React.FC<ScoreCardProps> = ({
  label,
  score,
  trend,
  tone = "accent",
  className,
}) => {
  const r = 24;
  const c = 2 * Math.PI * r;
  const clamped = Math.max(0, Math.min(100, score));
  const offset = c - (clamped / 100) * c;
  const color = toneColor[tone];

  return (
    <ScoreCardStyled className={className}>
      <ScoreRingStyled>
        <svg width={56} height={56}>
          <circle cx={28} cy={28} r={r} stroke="#EEEEF0" strokeWidth={5} fill="none" />
          <circle
            cx={28}
            cy={28}
            r={r}
            stroke={color}
            strokeWidth={5}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 0.6s ease" }}
          />
        </svg>
        <ScoreValueStyled>{clamped}</ScoreValueStyled>
      </ScoreRingStyled>
      <ScoreMetaStyled>
        <ScoreLabelStyled>{label}</ScoreLabelStyled>
        {trend && <ScoreTrendStyled>{trend}</ScoreTrendStyled>}
      </ScoreMetaStyled>
    </ScoreCardStyled>
  );
};
