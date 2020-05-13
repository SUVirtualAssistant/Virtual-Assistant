import Header    from '@components/Header'
import PropTypes from 'prop-types'
import React     from 'react'
import styled    from 'styled-components'

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

const navTitle = { name: 'SU Virtual Assistant', to: '/' }
const navLinks = [
  { name: 'Admin', to: '/admin' },
  { name: 'Test', to: '/test' }
]

const SiteLayout = React.memo(({
    title,
    links,
    theme,
    toggleTheme,
    children
  }) =>
    <App>
      <Header title={title}
              navLinks={links}
              theme={theme}
              toggleTheme={toggleTheme}/>
      <Content>
        {children}
      </Content>
    </App>
)

SiteLayout.propTypes = {
  title      : PropTypes.object,
  links      : PropTypes.arrayOf(PropTypes.object),
  theme      : PropTypes.string,
  toggleTheme: PropTypes.func,
  children   : PropTypes.any
}

SiteLayout.defaultProps = {
  title: navTitle,
  links: navLinks
}

export const getLayout = (theme, toggleTheme, page) =>
  <SiteLayout theme={theme}
              toggleTheme={toggleTheme}>
    {page}
  </SiteLayout>

export default SiteLayout
