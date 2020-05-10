import NavBar    from '@components/NavBar'
import Link      from 'next/link'
import PropTypes from 'prop-types'
import React     from 'react'
import styled    from 'styled-components'

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

  font-family: BrutGothic, sans-serif;
  font-size: ${({ theme }) => theme.font.size.lg_title};
  line-height: 50px;
  color: ${({ theme }) => theme.colors.navBarTitle};
  text-decoration: none;

  &:hover {
    transition: all 0.15s ease;
    color: ${({ theme }) => theme.colors.navBarHover};
  }

  @media (max-width: 1100px) {
    margin-left: 7px;
    line-height: 40px;
    font-size: ${({ theme }) => theme.font.size.sm_title};
  }
`

const Header = ({ theme, toggleTheme, title, navLinks }) => (
  <MainHeader>
    <Link href={title.to}>
      <HeaderTitle>{title.name}</HeaderTitle>
    </Link>
    <NavBar navLinks={navLinks}/>
    {/*<ThemeToggle theme={theme} toggleTheme={toggleTheme} />*/}
  </MainHeader>
)

Header.propTypes = {
  theme      : PropTypes.string,
  toggleTheme: PropTypes.func.isRequired,
  title      : PropTypes.object,
  navLinks   : PropTypes.array
}

export default Header
