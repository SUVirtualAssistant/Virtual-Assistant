/**
 * https://codepen.io/himalayasingh/pen/PdqbqV
 */
import { func }   from 'prop-types'
import React      from 'react'
import { Toggle, ToggleButton } from './ThemeToggle.styled'

const ThemeToggle = ({
  theme,
  toggleTheme
}) => {
  return <Toggle>
    <ToggleButton theme={theme}
            onClick={toggleTheme}/>
  </Toggle>
}

ThemeToggle.propTypes = {
  toggleTheme: func.isRequired
}

export default ThemeToggle
