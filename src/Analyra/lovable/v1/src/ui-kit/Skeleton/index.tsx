import React from "react";
import { SkeletonStyled } from "./styles";
import type { SkeletonProps } from "./types";

export const Skeleton: React.FC<SkeletonProps> = ({ width, height, radius, className }) => (
  <SkeletonStyled $w={width} $h={height} $r={radius} className={className} />
);
