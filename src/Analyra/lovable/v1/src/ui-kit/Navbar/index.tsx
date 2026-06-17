import React from 'react'
import {
  NavbarStyled,
  NavbarInnerStyled,
  NavbarRightStyled,
  NavbarLinksStyled,
} from './styles'
import { Logo } from '../Logo'
import { Button } from '../Button'
import type { NavbarProps } from './types'
import Link from 'next/link'

export const Navbar: React.FC<NavbarProps> = ({ className }) => (
  <NavbarStyled className={className}>
    <NavbarInnerStyled>
      <Link href={'/'} title="Analyra.RU">
        <Logo size={22} />
      </Link>
      <NavbarLinksStyled>
        <Link href={'/tools'} title="Инструменты">
          Инструменты
        </Link>
        {/* <a href="/#features">Возможности</a> */}
        {/* <a href="/#example">Пример</a> */}
        {/* <a href="/#how">Как это работает</a> */}
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
)
