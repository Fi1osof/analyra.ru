import React from "react";
import {
  FeatureCardStyled,
  FeatureIconStyled,
  FeatureTitleStyled,
  FeatureDescStyled,
} from "./styles";
import type { FeatureCardProps } from "./types";

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, className }) => (
  <FeatureCardStyled className={className}>
    <FeatureIconStyled>{icon}</FeatureIconStyled>
    <FeatureTitleStyled>{title}</FeatureTitleStyled>
    <FeatureDescStyled>{description}</FeatureDescStyled>
  </FeatureCardStyled>
);
