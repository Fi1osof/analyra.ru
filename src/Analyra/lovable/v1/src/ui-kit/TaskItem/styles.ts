import styled from "styled-components";

export const TaskItemStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.bg};
`;

export const TaskMainStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
`;

export const TaskCheckStyled = styled.span<{ $done: boolean }>`
  width: 18px;
  height: 18px;
  border-radius: 5px;
  border: 1.5px solid ${({ theme, $done }) => ($done ? theme.color.success : theme.color.borderStrong)};
  background: ${({ theme, $done }) => ($done ? theme.color.success : "transparent")};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  flex-shrink: 0;
`;

export const TaskTitleStyled = styled.span<{ $done: boolean }>`
  font-size: 14px;
  color: ${({ theme }) => theme.color.text};
  text-decoration: ${({ $done }) => ($done ? "line-through" : "none")};
  opacity: ${({ $done }) => ($done ? 0.6 : 1)};
`;

export const TaskMetaStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`;
