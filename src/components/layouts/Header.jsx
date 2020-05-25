import ThemeToggle from '@components/ThemeToggle'
import Link        from 'next/link'
import React       from 'react'
import styled      from 'styled-components'
import NavBar      from './NavBar'

const MainHeader = styled.div`
  position: fixed;
  width: 100%;
  height: 50px;
  top: 0;
  left: 0;
  z-index: 10;

  @media (max-width: 1100px) {
    height: 40px;
  }
`

const HeaderTitle = styled.a`
  display: inline-block;
  position: absolute;
  top: 0; bottom: 0;
  float: left;
  margin: auto auto auto 30px;
  
  cursor: pointer;
  
  font-family: ${({ theme }) => theme.type.serif};
  ${({ theme }) => theme.type.display[1]};

  &:hover {
    transition: all 0.15s ease;
    color: ${({ theme }) => theme.colors.buttonHover};
  }

  @media (max-width: 1100px) {
    margin-left: 7px;
    font-size: 30px;
    line-height: 40px;
  }
`

const title = {
  name: 'SU Virtual Assistant',
  to  : '/'
}

const Header = ({
  theme,
  toggleTheme
}) =>
  <MainHeader>
    <Link href={title.to}>
      <HeaderTitle>{title.name}</HeaderTitle>
    </Link>
    <NavBar/>
    <ThemeToggle theme={theme} toggleTheme={toggleTheme}/>
  </MainHeader>

export default Header
