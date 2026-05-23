import React from "react";
import { BadgeStyled, BadgeIconStyled } from "./styles";
import { SparkleIcon } from "../icons";
import type { BadgeProps } from "./types";

export const Badge: React.FC<BadgeProps> = ({ children, kind = "neutral", iconLeft, className }) => {
  const icon = iconLeft ?? (kind === "ai" ? <SparkleIcon size={12} /> : null);
  return (
    <BadgeStyled $kind={kind} className={className}>
      {icon && <BadgeIconStyled>{icon}</BadgeIconStyled>}
      {children}
    </BadgeStyled>
  );
};
