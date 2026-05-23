import React from "react";
import {
  AIPanelStyled,
  AIPanelHeaderStyled,
  AIPanelIconStyled,
  AIPanelTitleStyled,
  AIPanelLabelStyled,
  AIPanelBodyStyled,
} from "./styles";
import { SparkleIcon } from "../icons";
import type { AIPanelProps } from "./types";

export const AIPanel: React.FC<AIPanelProps> = ({
  title,
  children,
  label = "AI insight",
  className,
}) => (
  <AIPanelStyled className={className}>
    <AIPanelHeaderStyled>
      <AIPanelIconStyled>
        <SparkleIcon size={15} />
      </AIPanelIconStyled>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <AIPanelLabelStyled>{label}</AIPanelLabelStyled>
        <AIPanelTitleStyled>{title}</AIPanelTitleStyled>
      </div>
    </AIPanelHeaderStyled>
    <AIPanelBodyStyled>{children}</AIPanelBodyStyled>
  </AIPanelStyled>
);
