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
    position: fixed;          // prevents scroll bounce
    overflow: hidden;
    margin: 0;
  }

  body {
    width: 100vw;
    height: 100vh;
    
    overflow-y: auto;         // allows scrolling on the page itself
    overflow-x: hidden;
    
    background: ${({ theme }) => theme.background};
    transition: all 0.3s ease-in-out;
    
    color: ${({ theme }) => theme.text[1]};
    font-family: ${({ theme }) => theme.type.regular};
    ${({ theme }) => theme.type.bodyLong[2]};
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
  
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
 
  ::-webkit-scrollbar-thumb {
    background: #888; 
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
  
`
