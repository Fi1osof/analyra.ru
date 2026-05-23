import React from "react";
import { SectionStyled, ContainerStyled } from "./styles";
import type { SectionProps, ContainerProps } from "./types";

export const Section: React.FC<SectionProps> = ({ children, tone = "default", id, className }) => (
  <SectionStyled $tone={tone} id={id} className={className}>
    {children}
  </SectionStyled>
);

export const Container: React.FC<ContainerProps> = ({ children, className }) => (
  <ContainerStyled className={className}>{children}</ContainerStyled>
);
