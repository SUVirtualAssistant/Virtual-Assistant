import Document, { Head, Html, Main, NextScript } from 'next/document'
import React                                      from 'react'
import { ServerStyleSheet }                       from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
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

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"/>
          <meta
            name="theme-color"
            content="#000"/>
          <meta
            name="Description"
            content="SU Virtual Assistant"/>
          <link
            rel="icon"
            href="/static/icons/favicon.ico"/>
          <link
            href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap"
            rel="stylesheet" />
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    )
  }
}
