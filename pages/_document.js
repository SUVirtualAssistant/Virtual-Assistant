import Document, { Head, Html, Main, NextScript } from 'next/document'
import React                                      from 'react'
import { ServerStyleSheet }                       from 'styled-components'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta name="theme-color" content="#000"/>
          <meta name="Description" content="SU Virtual Assistant"/>
          
          {/* --- CDN Font --- */}
          <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap" rel="stylesheet"/>
          
          {/* --- PAGE ICON --- */}
          <link rel="apple-touch-icon-precomposed" sizes="57x57" href="/ico/apple-touch-icon-57x57.png"/>
          <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/ico/apple-touch-icon-114x114.png"/>
          <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/ico/apple-touch-icon-72x72.png"/>
          <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/ico/apple-touch-icon-144x144.png"/>
          <link rel="apple-touch-icon-precomposed" sizes="120x120" href="/ico/apple-touch-icon-120x120.png"/>
          <link rel="apple-touch-icon-precomposed" sizes="152x152" href="/ico/apple-touch-icon-152x152.png"/>
          <link rel="icon" type="image/png" href="/ico/favicon-32x32.png" sizes="32x32"/>
          <link rel="icon" type="image/png" href="/ico/favicon-16x16.png" sizes="16x16"/>
          <meta name="application-name" content="&nbsp;"/>
          <meta name="msapplication-TileColor" content="#000000"/>
          <meta name="msapplication-TileImage" content="/ico/mstile-144x144.png"/>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async ctx => {
  const sheet = new ServerStyleSheet()
  const originalRenderPage = ctx.renderPage
  
  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
      })
    
    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      )
    }
  } finally {
    sheet.seal()
  }
}

export default MyDocument

