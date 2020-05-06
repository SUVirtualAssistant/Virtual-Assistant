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
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    position: fixed;
    overflow: hidden;
    transition: all 0.25s linear;

    background: ${({ theme }) => theme.colors.pageBackground};
  }

  html, body {
    height: 100%;
    width: 100vw;
  }


  h1 {
    font-family: ${props => props.theme.font.family};
    font-size: ${props => props.theme.font.size.lg};
  }
`

