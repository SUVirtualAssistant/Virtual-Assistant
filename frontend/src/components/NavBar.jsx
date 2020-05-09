import Link        from 'next/link'
import React       from 'react'
import styled      from 'styled-components'

const Nav = styled.nav`
  float: right;
  margin-right: 30px;


  @media (max-width: 1100px) {
    margin-right: 5px;
  }

`

const NavLink = styled.a`
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.size.default};
  color: ${({ theme }) => theme.colors.navBarText};

  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
  height: 30px;
  line-height: 50px;
  margin-top: 30px;

  transition: all 0.15s ease;

  border: none;
  background-color: transparent;
  -webkit-appearance: none;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.navBarHover} !important;
  }

  &:before {
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
    font-weight: 400;
    font-size: 16px;
    margin-top: -2px;
  }

  @media (max-width: 1100px) {
    width: 45px;
    height: 40px;
    overflow: hidden;
    box-sizing: border-box;
    padding: 0 0 0 45px;
    margin: 0 0 0 7px;
    border-radius: 45px;
    position: relative;
    line-height: 40px;
  }
`

const NavBar = () => (
    <Nav>
      <Link href="/">
        <NavLink>Chat</NavLink>
      </Link>
      <Link href="/Admin">
        <NavLink>Admin</NavLink>
      </Link>
    </Nav>
)

export default NavBar
