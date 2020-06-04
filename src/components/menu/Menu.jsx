import ThemeToggle    from '@components/themeToggle'
import Link           from 'next/link'
import React          from 'react'
import { StyledMenu } from './Menu.styled'

const links = [
  {
    name: 'Chat',
    to  : '/'
  },
  {
    name: 'Dashboard',
    to  : '/dashboard'
  }
]

const Menu = ({
  open,
  theme,
  toggleTheme
}) =>
  <StyledMenu open={open} aria-label="menu">
    <Link href={links[0].to}
          passHref>
      <a aria-label={links[0].name}>
        {links[0].name}
      </a>
    </Link>
    <Link href={links[1].to}
          passHref>
      <a aria-label={links[1].name}>
        {links[1].name}
      </a>
    </Link>
    <a href="https://docs.su-assistant.chat"
       aria-label="Docs">
      Docs
    </a>
    <ThemeToggle theme={theme}
                 toggleTheme={toggleTheme}/>
  </StyledMenu>

export default Menu
