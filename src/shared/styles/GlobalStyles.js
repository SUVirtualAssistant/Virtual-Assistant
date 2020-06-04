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
    
    background: ${({ theme }) => theme.background};
    transition: all 0.3s ease-in-out;
    
    color: ${({ theme }) => theme.text[1]};
    font-family: ${({ theme }) => theme.type.regular};
    ${({ theme }) => theme.type.bodyLong[2]};
    
    
    @media only screen
      and (min-device-width: 375px)
      and (max-device-width: 812px)
      and (-webkit-min-device-pixel-ratio: 3)
      and (orientation: portrait) {
      height: calc(var(--vh, 1vh) * 100);
    }
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
