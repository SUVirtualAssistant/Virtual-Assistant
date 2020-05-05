import NavBar             from '@components/NavBar'
import { useDarkMode }    from '@shared/hooks'
import { GlobalStyle }    from '@shared/styles/GlobalStyles'
import themes             from '@shared/styles/theme'
import { configureStore } from '@state/store'

import withRedux         from 'next-redux-wrapper'
import Head              from 'next/head'
import React             from 'react'
import { Provider }      from 'react-redux'
import { ThemeProvider } from 'styled-components'

import '../src/components/chat/all.css'

const MyApp = props => {
  // Theme
  const [theme, toggleTheme, componentMounted] = useDarkMode()
  const themeMode = theme === 'light' ? themes.light : themes.dark

  if (!componentMounted)
    return <div/>

  // props
  const { Component, pageProps, store } = props
  const getLayout = Component.getLayout || (page => page)

  return getLayout(
    <ThemeProvider theme={themeMode}>
      <Provider store={store}>
        <Head>
          <title>Virtual Assistant</title>
        </Head>
        <GlobalStyle/>
        <NavBar theme={theme} toggleTheme={toggleTheme}/>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  )
}

export default withRedux(configureStore)(MyApp)
