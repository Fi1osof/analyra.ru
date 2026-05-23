import React from "react";
import {
  StepListStyled,
  StepItemStyled,
  StepNumberStyled,
  StepTitleStyled,
  StepDescStyled,
} from "./styles";
import type { StepListProps } from "./types";

export const StepList: React.FC<StepListProps> = ({ steps, className }) => (
  <StepListStyled className={className}>
    {steps.map((step, i) => (
      <StepItemStyled key={i}>
        <StepNumberStyled>{String(i + 1).padStart(2, "0")}</StepNumberStyled>
        <StepTitleStyled>{step.title}</StepTitleStyled>
        <StepDescStyled>{step.description}</StepDescStyled>
      </StepItemStyled>
    ))}
  </StepListStyled>
);
