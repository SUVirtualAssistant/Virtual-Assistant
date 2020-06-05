import Burger                         from '@components/burger'
import Header                         from '@components/header'
import Menu                           from '@components/menu'
import { useAuth, useAuthFunctions }  from '@services/AWS_Cognito/auth'
import { useOnClickOutside }          from '@shared/hooks'
import { uiActions }                  from '@state/modules/ui'
import React, { useCallback, useRef } from 'react'
import { useDispatch, useSelector }   from 'react-redux'
import styled                         from 'styled-components'

const StyledNavBar = styled.div`
  position: fixed;
  width: 100%;
  height: 50px;
  top: 0;
  left: 0;
  z-index: 10;
  
  border-bottom: 1px solid ${({ theme }) => theme.ui[4]}80;

  @media (max-width: 800px) {
    height: 40px;
  }
`

const title = {
  name     : 'Mercury',
  to       : '/',
  ariaLabel: 'Home'
}

const NavBar = props => {
  const menuRef = useRef()
  const open = useSelector(state => state.ui.menu_visible)
  
  const auth = useAuth(null)
  const { login, logout } = useAuthFunctions()
  
  const dispatch = useDispatch()
  
  useOnClickOutside(menuRef, useCallback(() => {
    if (open)
      toggleMenu(false)
  }, [open]))
  
  const toggleMenu = useCallback(visibility => {
    dispatch(uiActions.toggleMenu(visibility))
  }, [dispatch])
  
  return (
    <StyledNavBar ref={menuRef}
                  aria-label="Navigation Bar">
      <Header title={title}/>
      <Burger open={open}
              setOpen={toggleMenu}/>
      <Menu open={open}
            auth={auth}
            login={login}
            logout={logout}
            theme={props.theme}
            toggleTheme={props.toggleTheme}/>
    </StyledNavBar>
  )
}

export default NavBar
