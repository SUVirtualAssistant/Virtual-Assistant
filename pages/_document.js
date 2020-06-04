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
          <meta name="Description" content="Mercury"/>
          <meta name="keywords" content="Seattle University, Chatbot, Virtual Assistant" />
          
          {/* --- Fonts --- */}
          <link rel="preconnect" href="https://fonts.googleapis.com/" crossOrigin="true"/>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto+Mono:wght@400;700&display=swap" rel="stylesheet" />
          
          <link rel="icon" type="image/png" href="/icons/favicon-32x32.png" sizes="32x32"/>
          <link rel="icon" type="image/png" href="/icons/favicon-16x16.png" sizes="16x16"/>
          <meta name="application-name" content="&nbsp;"/>
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

