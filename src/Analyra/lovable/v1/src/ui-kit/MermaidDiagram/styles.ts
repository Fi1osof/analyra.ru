import styled from "styled-components";

export const MermaidWrapperStyled = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.color.bg};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 24px;
  overflow: auto;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    max-width: 100%;
    height: auto;
  }
`;

export const MermaidErrorStyled = styled.pre`
  color: ${({ theme }) => theme.color.danger};
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12px;
  margin: 0;
  white-space: pre-wrap;
`;
