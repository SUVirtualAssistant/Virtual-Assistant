/**
 * https://codepen.io/himalayasingh/pen/PdqbqV
 */
import { func } from 'prop-types'
import React            from 'react'
import styled           from 'styled-components'

const HiddenToggle = styled.input.attrs({ type: 'checkbox' })`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
`

const ToggleSpan = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  opacity: 1;
  background-color: #fff;
  border-radius: 40px;
  transition: 0.2s ease background-color, 0.2s ease opacity;

  &:before, &:after {
    content: '';
    position: absolute;
    top: 6px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    transition: 0.5s ease transform, 0.2s ease background-color;
  }

  &:before {
    background-color: #fff;
    transform: translate(-28px,0px);
    z-index: 1;
  }

  &:after {
    background-color: #000;
    transform: translate(8px,0px);
    z-index: 0;
  }
`

const Toggle = styled.div`
  position: relative;
  width: 80px;
  height: 40px;
  margin: 10px auto;
  border-radius: 40px;


  & ${HiddenToggle}:checked + ${ToggleSpan} {
    background-color: #000;
  }

  & ${HiddenToggle}:active + ${ToggleSpan} {
    opacity: 0.5;
  }

  & ${HiddenToggle}:checked + ${ToggleSpan}:before {
      background-color: #000;
      transform: translate(56px,-19px);
  }

  & ${HiddenToggle}:checked + ${ToggleSpan}:after {
      background-color: #fff;
      transform: translate(29px,0px);
  }
`

const ThemeToggle = props => {
  return (
    <Toggle>
      <HiddenToggle onClick={props.toggleTheme} {...props} />
      <ToggleSpan/>
    </Toggle>
  )
}

ThemeToggle.propTypes = {
  toggleTheme: func.isRequired
}

export default ThemeToggle
