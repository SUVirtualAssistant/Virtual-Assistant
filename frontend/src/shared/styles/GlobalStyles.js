/**
 * GlobalStyle contains css that is meant for the entire app. I'm using
 * styled-reset to reset the userAgentStyleSheets that browsers inject
 * by default.
 */
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

export const GlobalStyle = createGlobalStyle`
  ${normalize()}

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    position: fixed;          // prevents scroll bounce
    height: 100%;
    overflow: hidden;
  }

  body {
    margin: 0;
    width: 100vw;
    height: 100vh;
    overflow-y: auto;         // allows scrolling on the page itself
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
  }

  body {
    display: flex;
    flex-flow: column nowrap;

    box-sizing: border-box;

    transition: all 0.25s linear;
    background: ${({ theme }) => theme.colors.pageBackground};
  }


  h1 {
    font-family: ${props => props.theme.font.family};
    font-size: ${props => props.theme.font.size.lg};
  }
`

