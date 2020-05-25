import NavBar from '@containers/NavBar'
import React  from 'react'
import styled from 'styled-components'

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
  theme,
  toggleTheme,
  children
}) =>
  <>
    <NavBar theme={theme}
            toggleTheme={toggleTheme}/>
    <Content>
      {children}
    </Content>
  </>

export default Layout
