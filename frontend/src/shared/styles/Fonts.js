import { css } from 'styled-components'

import RobotoRegular from '/static/fonts/Roboto/Roboto-Regular.ttf'
import RobotoBold from '/static/fonts/Roboto/Roboto-Bold.ttf'

export const fontFaces = css`
  @font-face {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-display: auto;
    src: local("Roboto"), url(${RobotoRegular}) format("ttf");
  }
  @font-face {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-display: auto;
    src: url(${RobotoBold}) format("ttf");
  }
`

