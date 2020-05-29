import { getDate } from '@shared/utils/date-time'
import React       from 'react'
import styled      from 'styled-components'

const StyledDateMarker = styled.div`
  ${({ theme }) => theme.type.label};
  
  text-transform: uppercase;
  opacity: 0.7;
  text-align: center;
  align-self: stretch;
  color: ${({ theme }) => theme.text[1]};
`

const DateMarker = ({ timestamp }) =>
  <StyledDateMarker>{getDate(timestamp)}</StyledDateMarker>

export default React.memo(DateMarker)
