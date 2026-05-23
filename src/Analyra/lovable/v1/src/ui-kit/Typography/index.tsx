import React from "react";
import {
  Heading1Styled,
  Heading2Styled,
  Heading3Styled,
  Heading4Styled,
  TextStyled,
  SmallStyled,
  LabelStyled,
  CodeStyled,
} from "./styles";
import type { TypographyProps } from "./types";

export const Heading1: React.FC<TypographyProps> = ({ children, tone, align, className }) => (
  <Heading1Styled $tone={tone} $align={align} className={className}>
    {children}
  </Heading1Styled>
);

export const Heading2: React.FC<TypographyProps> = ({ children, tone, align, className }) => (
  <Heading2Styled $tone={tone} $align={align} className={className}>
    {children}
  </Heading2Styled>
);

export const Heading3: React.FC<TypographyProps> = ({ children, tone, align, className }) => (
  <Heading3Styled $tone={tone} $align={align} className={className}>
    {children}
  </Heading3Styled>
);

export const Heading4: React.FC<TypographyProps> = ({ children, tone, align, className }) => (
  <Heading4Styled $tone={tone} $align={align} className={className}>
    {children}
  </Heading4Styled>
);

export const Text: React.FC<TypographyProps> = ({ children, tone, align, className }) => (
  <TextStyled $tone={tone} $align={align} className={className}>
    {children}
  </TextStyled>
);

export const Small: React.FC<TypographyProps> = ({ children, tone, align, className }) => (
  <SmallStyled $tone={tone} $align={align} className={className}>
    {children}
  </SmallStyled>
);

export const Label: React.FC<TypographyProps> = ({ children, tone, align, className }) => (
  <LabelStyled $tone={tone} $align={align} className={className}>
    {children}
  </LabelStyled>
);

export const Code: React.FC<TypographyProps> = ({ children, className }) => (
  <CodeStyled className={className}>{children}</CodeStyled>
);
