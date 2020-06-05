import { useDarkMode } from '@shared/hooks'
import { wrapper }     from '@state/store'
import { GlobalStyle } from '@styles/GlobalStyles'
import themes          from '@styles/theme'

import { DefaultSeo } from 'next-seo'
import SEO            from 'next-seo.config'

import React             from 'react'
import { ThemeProvider } from 'styled-components'

const Noop = ({ children }) => children

const VirtualAssistant = ({
  Component,
  pageProps
}) => {
  const [theme, toggleTheme, componentMounted] = useDarkMode()
  const themeMode = theme === 'light' ? themes.light : themes.dark
  
  if (!componentMounted) return <div/>
  
  const Layout = Component.Layout || Noop
  
  return (
    <ThemeProvider theme={themeMode}>
      <DefaultSeo {...SEO} />
      <GlobalStyle/>
      <Layout theme={theme}
              toggleTheme={toggleTheme}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default wrapper.withRedux(VirtualAssistant)

