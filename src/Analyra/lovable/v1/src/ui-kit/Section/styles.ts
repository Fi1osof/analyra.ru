import styled from "styled-components";

export const SectionStyled = styled.section<{ $tone: "default" | "soft" }>`
  background: ${({ theme, $tone }) =>
    $tone === "soft" ? theme.color.surface : theme.color.bg};
  padding: 96px 0;
  border-top: 1px solid ${({ theme }) => theme.color.border};
  @media (max-width: 768px) {
    padding: 64px 0;
  }
`;

export const ContainerStyled = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 24px;
`;
