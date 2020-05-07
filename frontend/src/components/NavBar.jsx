import Link        from 'next/link'
import React       from 'react'
import styled      from 'styled-components'

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px;

  ul {
    display: flex;
    order: 1;
    width: 100%;
  }

  & ul li:not(:last-child) {
    padding-right: 15px;
  }
`

const NavLink = styled.a`
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.size.lg};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.navBarText};

  padding: 10px 10px;

  &:hover {
    cursor: pointer;
    background: black;
  }
`

const NavBar = () => (
    <Nav>
      <ul>
        <Link href="/">
          <NavLink>Chat</NavLink>
        </Link>
        <Link href="/oldchat">
          <NavLink>Old Chat</NavLink>
        </Link>
        <Link href="/Admin">
          <NavLink>Admin</NavLink>
        </Link>
      </ul>
    </Nav>
)

export default NavBar
