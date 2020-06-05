/**
 * GlobalStyle contains css that is meant for the entire app. I'm using
 * styled-reset to reset the userAgentStyleSheets that browsers inject
 * by default.
 */
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

let vh
if (typeof window !== 'undefined') {
  vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

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
    box-sizing: border-box;
  }
  
  html {
    position: fixed;          // prevents scroll bounce
  }

  body {
    overscroll-behavior: none ;
    height: 100vh;
    width: 100vw;
    
    transition: all 300ms cubic-bezier(0.5, 0, 0.1, 1);
    
    ${({ theme }) => theme.type.bodyLong[2]};
    font-family: ${({ theme }) => theme.type.regular};
    
    color: ${({ theme }) => theme.text[1]};
    background-color: ${({ theme }) => theme.background};
  }

  h1 {
    font-family: ${({ theme }) => theme.type.display};
    ${({ theme }) => theme.type.expressiveHeading[1]};
  }
  
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text[1]};
    
    :hover {
      color: ${({ theme }) => theme.hover.primary};
    }
  }
`
