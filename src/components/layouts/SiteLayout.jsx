import Header from './Header'
import React  from 'react'
import styled               from 'styled-components'
import { useAuth } from '@services/AWS_Cognito/auth'

const Content = styled.main`
  position: fixed;
  height: calc(100vh - 50px);
  width: 100vw;
  overflow-y: auto;
  margin-top: 50px;

  @media (max-width: 1100px) {
    margin-top: 40px;
    height: calc(100vh - 40px);
  }
`

const Layout = ({
  toggleTheme,
  children
}) => {
  
  return (
    <>
      <Header toggleTheme={toggleTheme}/>
      <Content>
        {children}
      </Content>
    </>
  )
}

export default Layout
