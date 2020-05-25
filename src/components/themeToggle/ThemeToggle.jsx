/**
 * https://codepen.io/himalayasingh/pen/PdqbqV
 */
import { func }                             from 'prop-types'
import React                                from 'react'
import { HiddenToggle, Toggle, ToggleSpan } from './ThemeToggle.styled'

const ThemeToggle = ({
  toggleTheme
}) => {
  return (
    <Toggle>
      <HiddenToggle onClick={toggleTheme}/>
      <ToggleSpan/>
    </Toggle>
  )
}

ThemeToggle.propTypes = {
  toggleTheme: func.isRequired
}

export default ThemeToggle
