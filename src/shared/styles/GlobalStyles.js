/**
 * GlobalStyle contains css that is meant for the entire app. I'm using
 * styled-reset to reset the userAgentStyleSheets that browsers inject
 * by default.
 */
import { normalize }         from 'polished'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${normalize()}

  @font-face {
    font-family: 'Bungee', cursive;
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
  }

  body {
    width: 100vw;
    height: 100vh;

    overflow-y: auto;         // allows scrolling on the page itself
    overflow-x: hidden;

    background-color: ${({ theme }) => theme.colors.background};

    -webkit-overflow-scrolling: touch;
  }

  h1 {
    font-family: Bungee, serif;
    font-size: ${props => props.theme.font.size.lg};
  }
`
