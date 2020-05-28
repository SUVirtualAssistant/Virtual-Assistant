/**
 * GlobalStyle contains css that is meant for the entire app. I'm using
 * styled-reset to reset the userAgentStyleSheets that browsers inject
 * by default.
 */
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: 'Roboto Mono', monospace;
    font-display:auto;
  }
  
  @font-face {
    font-family: 'Open Sans', sans-serif;
    font-display:auto;
  }
  
  * {
    padding: 0;
    margin: 0;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  html, body {
    height: 100%;
    position: fixed;          // prevents scroll bounce
    overflow: hidden;
    margin: 0;
    
    
    font-size: ${({ theme }) => theme.type.bodyShort[2].fontSize};
    font-weight: ${({ theme }) => theme.type.bodyShort[2].fontWeight};
    line-height: ${({ theme }) => theme.type.bodyShort[2].lineHeight};
    letter-spacing: ${({ theme }) => theme.type.bodyShort[2].letterSpacing};
  }

  body {
    width: 100vw;
    height: 100vh;

    overflow-y: auto;         // allows scrolling on the page itself
    overflow-x: hidden;

    color: ${({ theme }) => theme.text[1]};
    background: ${({ theme }) => theme.background};
    
    font-family: ${({ theme }) => theme.type.regular};
    
    font-size: ${({ theme }) => theme.type.expressiveHeading[2].fontSize};
    font-weight: ${({ theme }) => theme.type.expressiveHeading[2].fontWeight};
    line-height: ${({ theme }) => theme.type.expressiveHeading[2].lineHeight};
    letter-spacing: ${({ theme }) => theme.type.expressiveHeading[2].letterSpacing};
    
    transition: all 0.3s ease-in-out;
  }

  h1 {
    font-family: ${({ theme }) => theme.type.display};
    
    // font-size: ${({ theme }) => theme.type.expressiveHeading[2].fontSize};
    font-size: 1.142857143rem;
    font-weight: ${({ theme }) => theme.type.expressiveHeading[2].fontWeight};
    line-height: ${({ theme }) => theme.type.expressiveHeading[2].lineHeight};
    letter-spacing: ${({ theme }) => theme.type.expressiveHeading[2].letterSpacing};
  }
`
