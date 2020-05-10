import Header from '@components/Header'
import React       from 'react'
import styled      from 'styled-components'

const App = styled.div`
  background: ${({ theme }) => theme.colors.pageBackground};
  transition: all 0.3s linear;
`

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

const title = { name: "SU Virtual Assistant", to: "/" }
const navLinks = [
  { name: "Admin", to: "/admin" }
]

const SiteLayout = ({ theme, toggleTheme, children }) => (
  <App>
    <Header theme={theme} toggleTheme={toggleTheme} title={title} navLinks={navLinks} />
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

