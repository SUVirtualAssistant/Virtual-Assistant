import NavBar from '@containers/NavBar'
import React  from 'react'
import styled from 'styled-components'

const Content = styled.main`
  position: fixed;
  width: 100vw;
  overflow: hidden;
  margin-top: 50px;
  height: calc(100vh - 50px);
  @media (max-width: 800px) {
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
