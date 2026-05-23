import React from "react";
import {
  NavbarStyled,
  NavbarInnerStyled,
  NavbarRightStyled,
  NavbarLinksStyled,
} from "./styles";
import { Logo } from "../Logo";
import { Button } from "../Button";
import type { NavbarProps } from "./types";

export const Navbar: React.FC<NavbarProps> = ({ className }) => (
  <NavbarStyled className={className}>
    <NavbarInnerStyled>
      <Logo size={22} />
      <NavbarLinksStyled>
        <a href="#features">Возможности</a>
        <a href="#example">Пример</a>
        <a href="#how">Как это работает</a>
      </NavbarLinksStyled>
      <NavbarRightStyled>
        <Button variant="ghost" size="sm">
          Войти
        </Button>
        <Button variant="primary" size="sm">
          Попробовать
        </Button>
      </NavbarRightStyled>
    </NavbarInnerStyled>
  </NavbarStyled>
);
