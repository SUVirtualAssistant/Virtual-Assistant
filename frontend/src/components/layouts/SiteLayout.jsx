import React       from 'react'
import NavBar      from '@components/NavBar'
import ThemeToggle from '@components/ThemeToggle'
import styled      from 'styled-components'

/**
 * Container for UI
 */
const Page = styled.div`
  display: flex;
  flex-flow: column nowrap;
  min-width: 100vw;
  min-height: 100vh;

`

const Header = styled.header`
  flex: 0 1 10%;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  color: ${({ theme }) => theme.colors.navBarText};
`

const Content = styled.div`
  order: 1;
  flex: 1 1 auto;
`

const SiteLayout = ({ theme, toggleTheme, children }) => (
  <Page>
    <Header>
      <NavBar theme={theme} toggleTheme={toggleTheme} />
    </Header>
    <Content>
      {children}
    </Content>
  </Page>
)

export const getLayout = (theme, toggleTheme, page) =>
  <SiteLayout theme={theme}
              toggleTheme={toggleTheme}>
    {page}
  </SiteLayout>

export default SiteLayout

