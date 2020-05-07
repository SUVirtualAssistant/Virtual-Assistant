import NavBar      from '@components/NavBar'
import ThemeToggle from '@components/ThemeToggle'
import React       from 'react'
import styled      from 'styled-components'

const Header = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  color: ${({ theme }) => theme.colors.navBarText};
`

const Content = styled.div`
  flex: 1 1 auto;
  width: 100vw;
  overflow-y: auto;
`

const SiteLayout = ({ toggleTheme, children }) => (
  <>
    <Header>
      <NavBar />
      <ThemeToggle toggleTheme={toggleTheme}/>
    </Header>
    <Content>
      {children}
    </Content>
  </>
)

export const getLayout = (theme, toggleTheme, page) =>
  <SiteLayout theme={theme}
              toggleTheme={toggleTheme}>
    {page}
  </SiteLayout>

export default SiteLayout

