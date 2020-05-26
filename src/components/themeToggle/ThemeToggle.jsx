/**
 * https://codepen.io/himalayasingh/pen/PdqbqV
 */
import { func }         from 'prop-types'
import React            from 'react'
import { ToggleButton } from './ThemeToggle.styled'

const ThemeToggle = ({
  theme,
  toggleTheme
}) => {
  return <ToggleButton themeMode={theme}
                       onClick={toggleTheme}/>
}

ThemeToggle.propTypes = {
  toggleTheme: func.isRequired
}

export default ThemeToggle
