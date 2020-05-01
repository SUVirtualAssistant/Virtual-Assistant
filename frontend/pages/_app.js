import Toggle                    from '@components/Toggle'
import useDarkMode               from '@shared/hooks/useDarkMode'
import { GlobalStyle }           from '@shared/styles/GlobalStyles'
import { darkTheme, lightTheme } from '@shared/styles/theme'
import { configureStore }        from '@state/store'

import withRedux         from 'next-redux-wrapper'
import Head              from 'next/head'
import React             from 'react'
import { Provider }      from 'react-redux'
import { ThemeProvider } from 'styled-components'

const MyApp = props => {
  const [theme, toggleTheme, componentMounted] = useDarkMode()

  const themeMode = theme === 'light' ? lightTheme : darkTheme

  if (!componentMounted)
    return <div />

  const { Component, pageProps, store } = props

  return (
    <ThemeProvider theme={themeMode}>
      <Provider store={store}>
        <Head>
          <title>Virtual Assistant</title>
        </Head>
        <GlobalStyle/>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  )
}

export default withRedux(configureStore)(MyApp)
