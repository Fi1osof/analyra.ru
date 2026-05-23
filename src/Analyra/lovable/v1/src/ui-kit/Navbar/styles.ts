import styled from "styled-components";

export const NavbarStyled = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: saturate(180%) blur(12px);
  -webkit-backdrop-filter: saturate(180%) blur(12px);
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
`;

export const NavbarInnerStyled = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 14px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

export const NavbarRightStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const NavbarLinksStyled = styled.nav`
  display: flex;
  gap: 24px;
  font-size: 14px;
  color: ${({ theme }) => theme.color.muted};
  @media (max-width: 640px) {
    display: none;
  }
  a {
    transition: ${({ theme }) => theme.transition.fast};
    &:hover {
      color: ${({ theme }) => theme.color.text};
    }
  }
`;
