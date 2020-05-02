import React from 'react'

import { StyledButton } from 'src/components/common/StyledButton'

const Button = ({ name, title, size, onClick, color, fontColor, styling, width, height, type, children}) =>
  <StyledButton
    name={name}
    size={size}
    onClick={onClick}
    color={color}
    styling={styling}
    width={width}
    height={height}
    type={type}
    fontColor={fontColor}
  >
    {title}
    {children}
  </StyledButton>

export default Button
