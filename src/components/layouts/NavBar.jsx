import Link   from 'next/link'
import React  from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  float: right;
  margin-right: 30px;

  @media (max-width: 1100px) {
    margin-right: 10px;
  }
`

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.navBarLink};
  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${({ theme }) => theme.font.size.lg};
  line-height: 50px;

  padding-left: 20px;
  padding-right: 20px;
  height: 30px;
  margin-top: 30px;

  border: none;
  background-color: transparent;
  -webkit-appearance: none;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    transition: all 0.15s ease;
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
    font-size: ${({ theme }) => theme.font.size.default};
    width: 45px;
    height: 40px;
    overflow: hidden;
    padding: 0 0 0 45px;
    margin: 0 0 0 7px;
    border-radius: 45px;
    position: relative;
    line-height: 40px;
  }
`

const links = [
  { name: 'Admin', to: '/admin' },
]

const NavBar = () =>
  <Nav>
    {links.map((link, index) => (
      <Link href={link.to} key={index}>
        <NavLink>{link.name}</NavLink>
      </Link>
    ))}
    <NavLink href={'https://docs.su-assistant.chat'}>Docs</NavLink>
  </Nav>

export default NavBar
