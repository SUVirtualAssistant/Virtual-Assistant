import Burger                                           from '@components/burger'
import Header                                           from '@components/header'
import Menu                                             from '@components/menu'
import { getServerSideAuth, useAuth, useAuthFunctions } from '@services/AWS_Cognito/auth'
import { useOnClickOutside }                            from '@shared/hooks'
import { uiActions }                                    from '@state/modules/ui'
import React, { useCallback, useRef }                   from 'react'
import { useDispatch, useSelector }                     from 'react-redux'
import styled                                           from 'styled-components'

const StyledNavBar = styled.div`
  position: fixed;
  width: 100%;
  height: 50px;
  top: 0;
  left: 0;
  z-index: 10;
  border-bottom: 1px solid ${({ theme }) => theme.ui[3]};

  @media (max-width: 800px) {
    height: 40px;
  }
`

const title = {
  name     : 'SU Virtual Assistant',
  to       : '/',
  ariaLabel: 'Home'
}

const links = [
  {
    name: 'Dashboard',
    to  : '/dashboard'
  }
]

const NavBar = props => {
  const menuRef = useRef()
  const open = useSelector(state => state.ui.menu_visible)
  
  const auth = useAuth(props.initialAuth)
  const { login, logout } = useAuthFunctions()
  
  const dispatch = useDispatch()
  
  useOnClickOutside(menuRef, useCallback(() => {
    if (open)
      setMenu(false)
  }, [open]))
  
  const setMenu = useCallback(visibility => {
    dispatch(uiActions.toggleMenu(visibility))
  }, [dispatch])
  
  return (
    <StyledNavBar ref={menuRef}>
      <Header title={title}/>
      <Burger open={open}
              setOpen={setMenu}/>
      <Menu links={links}
            open={open}
            auth={auth}
            login={login}
            logout={logout}
            theme={props.theme}
            toggleTheme={props.toggleTheme}/>
    </StyledNavBar>
  )
}

export const getServerSideProps = async ctx => {
  const initialAuth = getServerSideAuth(ctx.req)
  return { props: { initialAuth } }
}

export default NavBar
