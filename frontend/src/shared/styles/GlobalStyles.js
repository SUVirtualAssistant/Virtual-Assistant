/**
 * GlobalStyle contains css that is meant for the entire app. I'm using
 * normalize.css to reset the userAgentStyleSheets that browsers inject
 * by default.
 */
// import { fontFaces }         from '@shared/styles/Fonts'
import { createGlobalStyle } from 'styled-components'
import reset                 from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    transition: all 0.25s linear;
  }
`

