import { getServerSideAuth, useAuth, useAuthFunctions } from '@services/AWS_Cognito/auth'
import Link                                             from 'next/link'
import React                                            from 'react'
import styled                                           from 'styled-components'

const Nav = styled.nav`
  float: right;
  margin-right: 30px;

  @media (max-width: 1100px) {
    margin-right: 10px;
  }
`

const NavLink = styled.a`
  color: ${({ theme }) => theme.text[1]};
  font-size: ${({ theme }) => theme.font.size.lg};
  text-transform: uppercase;
  line-height: 50px;
  
  height: 30px;
  padding: 0 0 0 30px;

  border: none;
  background-color: transparent;
  text-decoration: none;
  cursor: pointer;

  &:before {
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
    font-weight: 400;
    font-size: 16px;
    margin-top: -2px;
  }
  
  &:hover {
    transition: all 0.15s ease;
    color: ${({ theme }) => theme.colors.navBarHover} !important;
  }
  
  :focus {
    outline: none;
  }

  @media (max-width: 1100px) {
    font-size: ${({ theme }) => theme.font.size.default};
    overflow: hidden;
    padding: 0 0 0 30px;
    line-height: 40px;
  }
`

const links = [
  { name: 'Dashboard', to: '/dashboard' }
]

const NavBar = props => {
  const auth = useAuth(props.initialAuth)
  const { login, logout } = useAuthFunctions()
  
  return (
    <Nav>
      {links.map((link, index) =>
        <Link href={link.to} key={index} passHref>
          <NavLink>{link.name}</NavLink>
        </Link>
      )}
      <NavLink href={'https://docs.su-assistant.chat'}>Docs</NavLink>
      { auth ? <NavLink as="button" onClick={() => logout()}>Logout</NavLink>
             : <NavLink as="button" onClick={() => login()}>Login</NavLink>}
    </Nav>
  )
}

export const getServerSideProps = async ctx => {
  const initialAuth = getServerSideAuth(ctx.req)
  return { props: { initialAuth } }
}

export default NavBar
