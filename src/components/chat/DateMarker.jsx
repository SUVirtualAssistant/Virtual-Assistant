import { getDate } from '@shared/utils/date-time'
import React       from 'react'
import styled      from 'styled-components'

const StyledDateMarker = styled.div`
  align-self: stretch;
  
  opacity: 0.7;
  
  color: ${({ theme }) => theme.text[1]};
  ${({ theme }) => theme.type.label};
  text-transform: uppercase;
  text-align: center;
`

const DateMarker = ({ timestamp }) =>
  <StyledDateMarker>{getDate(timestamp)}</StyledDateMarker>

export default React.memo(DateMarker)
