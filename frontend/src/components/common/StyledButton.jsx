import styled, { css } from 'styled-components'

const linkColor = 'purple'
const darkerColor = '#202325'

const buttonTextColor = css`${({ color, theme }) => color ? color : theme.colors.buttonText}`

const size = css`
  ${({size}) => {
    switch (size) {
      case 'small':
        return 10
      case 'medium':
        return 14
      case 'large':
        return 16
      default:
        return 18
    }
  }
}`

const specialStyling = css`
  ${props => {
  }
}`

const specialOnHover = css`
 ${props => {
 }
}`

export const StyledButton = styled.button`
  type: ${props => props.type};
  box-sizing: border-box;
  font-family: ${props => props.theme.font};
  border-radius: ${props => props.theme.bevels.button}px;
  font-size: ${size}px;
  width: ${props => props.width && props.width}px;
  height: ${props => props.height && props.height}px;
  letter-spacing: 0.4px;
  font-weight: 100;
  cursor: pointer;
  background-color: ${props => props.color ? props.color : props.theme.colors.buttonBackground};
  ${specialStyling}
`


