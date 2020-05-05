import React       from 'react'
import styled      from 'styled-components'
import { getDate } from '@shared/utils/date-time'

const StyledDateMarker = styled.div`
  text-transform: uppercase;
  font-family: "IBM Plex Sans", sans-serif;
  opacity: 0.7;
  font-size: smaller;
  line-height: normal;
  text-align: center;
  align-self: stretch;
`

const DateMarker = () => (
  <StyledDateMarker>{ getDate() }</StyledDateMarker>
)

export default DateMarker


