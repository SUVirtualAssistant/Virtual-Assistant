import { useDarkMode }    from '@shared/hooks'
import { GlobalStyle }    from '@shared/styles/GlobalStyles'
import themes             from '@shared/styles/theme'
import { configureStore } from '@state/store'

import withRedux      from 'next-redux-wrapper'
import { DefaultSeo } from 'next-seo'
import SEO            from 'next-seo.config'

import React             from 'react'
import { Provider }      from 'react-redux'
import { ThemeProvider } from 'styled-components'

const VirtualAssistant = ({
  Component,
  pageProps,
  store
}) => {
  const [theme, toggleTheme, componentMounted] = useDarkMode()
  const themeMode = theme === 'light' ? themes.light : themes.dark

  if (!componentMounted) return <div/>

  // allows for persistent layouts, each page needs to import getLayout from @components/layouts
  // const getLayout = Component.getLayout || (page => <SiteLayout toggleTheme={toggleTheme}
  //                                                               children={page}/>)
  const Layout = Component.Layout ?
                 Component.Layout : React.Fragment

  return (
    <ThemeProvider theme={themeMode}>
      <Provider store={store}>
        <DefaultSeo {...SEO} />
        <GlobalStyle/>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThemeProvider>
  )
}

export default withRedux(configureStore)(VirtualAssistant)
