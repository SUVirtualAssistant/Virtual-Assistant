import NavBar      from '@components/NavBar'
import ThemeToggle from '@components/ThemeToggle'
import React       from 'react'
import styled      from 'styled-components'

const App = styled.div`
  background: ${({ theme }) => theme.colors.pageBackground};
  transition: all 0.3s linear;

  display: grid;
`

const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 50px;
  top: 0;
  left: 0;
  z-index: 10;
  background: ${({ theme }) => theme.colors.navBarBackground};

  @media (max-width: 1100px) {
    height: 40px;
    background: linear-gradient(
      0deg,
      rgba(18, 23, 28, 0) 0%,
      rgba(18, 23, 28, 0.4) 47%,
      rgba(18, 23, 28, 1) 100%
    );
  }
`

const Content = styled.main`
  position: fixed;
  height: 100%;
  width: 100vw;
  overflow-y: auto;
  margin-top: 50px;

  @media (max-width: 1100px) {
    margin-top: 40px;
  }

`

const SiteLayout = ({ toggleTheme, children }) => (
  <App>
    <Header>
      <NavBar />
      {/*<ThemeToggle toggleTheme={toggleTheme}/>*/}
    </Header>
    <Content>
      {children}
    </Content>
  </App>
)

export const getLayout = (theme, toggleTheme, page) =>
  <SiteLayout theme={theme}
              toggleTheme={toggleTheme}>
    {page}
  </SiteLayout>

export default SiteLayout

