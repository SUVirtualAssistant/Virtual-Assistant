import { getDate } from '@shared/utils/date-time'
import React       from 'react'
import styled      from 'styled-components'

const StyledDateMarker = styled.div`
  text-transform: uppercase;
  opacity: 0.7;
  font-size: smaller;
  line-height: normal;
  text-align: center;
  align-self: stretch;
`

const DateMarker = () => <StyledDateMarker>{getDate()}</StyledDateMarker>

export default DateMarker
