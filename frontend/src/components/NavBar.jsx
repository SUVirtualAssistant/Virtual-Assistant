import Link          from 'next/link'
import { useRouter } from 'next/router'
import React         from 'react'
import ThemeToggle   from '@components/ThemeToggle'
import styled        from 'styled-components'

const StyledLink = styled.a`
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.fontSize.subtitle}px;
  padding: 10px 10px;

  color: ${props => props.theme.colors.navBarText};

  &:hover {
    background-color: ${({ theme }) => theme.colors.navBarHover};
  }
`

const StyledNavBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.navBarBackground};
  padding: 20px;
`

const ActiveLink = ({ children, ...props }) => {
  const router = useRouter()
  const child = React.Children.only(children)
  return (
    <Link {...props}>
      {React.cloneElement(child, { active: router.pathname === props.href })}
    </Link>
  )
}

const NavBar = ({ theme, toggleTheme }) => (
  <StyledNavBar>
    <nav>
      <ActiveLink href="/">
        <StyledLink>Chat</StyledLink>
      </ActiveLink>
      <ActiveLink href="/help">
        <StyledLink>Help</StyledLink>
      </ActiveLink>
      <ActiveLink href="/newchat">
        <StyledLink>New Chat</StyledLink>
      </ActiveLink>
      <ActiveLink href="/test">
        <StyledLink>Test</StyledLink>
      </ActiveLink>
    </nav>
    <ThemeToggle theme={theme} toggleTheme={toggleTheme}/>
  </StyledNavBar>
)

export default NavBar
