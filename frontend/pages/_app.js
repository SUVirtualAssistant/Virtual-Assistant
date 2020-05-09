import SiteLayout         from '@components/layouts/SiteLayout'
import { useDarkMode }    from '@shared/hooks'
import { GlobalStyle }    from '@shared/styles/GlobalStyles'
import themes             from '@shared/styles/theme'
import { configureStore } from '@state/store'

import withRedux         from 'next-redux-wrapper'
import React             from 'react'
import { Provider }      from 'react-redux'
import { ThemeProvider } from 'styled-components'

const MyApp = props => {
  // Theme
  const [theme, toggleTheme, componentMounted] = useDarkMode()
  const themeMode = theme === 'light' ? themes.light : themes.dark

  if (!componentMounted)
    return <div/>

  // props
  const { Component, pageProps, store } = props

  // allows for persistent layouts, each page needs to import getLayout from @components/layouts
  const getLayout = Component.getLayout || (page => <SiteLayout theme={theme}
                                                                children={page}/>)

  return (
    <ThemeProvider theme={themeMode}>
      <Provider store={store}>
        <GlobalStyle/>
        {getLayout(theme, toggleTheme, <Component {...pageProps} />)}
      </Provider>
    </ThemeProvider>
  )
}

export default withRedux(configureStore)(MyApp)
