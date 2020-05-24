import Link   from 'next/link'
import React  from 'react'
import styled from 'styled-components'
import NavBar from './NavBar'

const MainHeader = styled.header`
  position: fixed;
  width: 100%;
  height: 50px;
  top: 0;
  left: 0;
  z-index: 10;

  background: ${({ theme }) => theme.colors.navBarBackground};

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

  font-family: ${({ theme }) => theme.font.display};
  font-size: ${({ theme }) => theme.font.size.lg_title};
  line-height: 50px;
  color: ${({ theme }) => theme.colors.buttonText};
  text-decoration: none;

  &:hover {
    transition: all 0.15s ease;
    color: ${({ theme }) => theme.colors.buttonHover};
  }

  @media (max-width: 1100px) {
    margin-left: 7px;
    line-height: 40px;
    font-size: ${({ theme }) => theme.font.size.sm_title};
  }
`

const title = {
  name: 'SU Virtual Assistant',
  to  : '/'
}

const Header = ({
  toggleTheme
}) =>
  <MainHeader>
    <Link href={title.to}>
      <HeaderTitle>{title.name}</HeaderTitle>
    </Link>
    <NavBar />
    {/*<ThemeToggle theme={theme} toggleTheme={toggleTheme} />*/}
  </MainHeader>

export default Header
