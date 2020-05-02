/**
 * GlobalStyle contains css that is meant for the entire app. I'm using
 * styled-reset to reset the userAgentStyleSheets that browsers inject
 * by default.
 */
import { createGlobalStyle } from 'styled-components'
import reset                 from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  h1 {
    font-family: ${props => props.theme.font};
    font-size: ${props => props.theme.fontSize.title}px;
  }

  body {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.pageBackground};
    transition: all 0.25s linear;
  }
`

