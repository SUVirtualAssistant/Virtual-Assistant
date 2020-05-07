import MoonIcon         from '../shared/assets/icons/moon.svg' // need to use absolute paths
import SunIcon          from '../shared/assets/icons/sun.svg'

import { func, string } from 'prop-types'
import React            from 'react'
import styled           from 'styled-components'

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.colors.themeToggle.toggleGradient};
  border: none;
  border-radius: 5px;

  display: flex;

  cursor: pointer;
  justify-content: space-between;
  overflow: hidden;

  margin: .5rem 3rem;
  padding: 0.5rem 0.5rem;

  svg {
    height: auto;
    width: 2rem;
    transition: all 0.3s linear;

    // sun icon
    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(100px)'};
    }

    // moon icon
    &:nth-child(2) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`

const ThemeToggle = ({ theme, toggleTheme }) => {
  // const isLight = theme === 'light'

  return (
    <ToggleContainer lightTheme={theme === 'light'} onClick={toggleTheme}>
      <SunIcon/>
      <MoonIcon/>
    </ToggleContainer>
  )
}

ThemeToggle.propTypes = {
  theme      : string.isRequired,
  toggleTheme: func.isRequired
}

export default ThemeToggle
