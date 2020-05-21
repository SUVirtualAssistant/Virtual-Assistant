import { notEqual } from '@shared/utils'
import React        from 'react'
import styled       from 'styled-components'

const StyledDir = styled.div`
  flex: 1 1 auto;
  
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  
  color: rgba(0, 0, 0.87);
  border-color: rgba(0, 0, 0.12);
  background-color: white;
`

const capitalize = s => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export const DIR = ({
  data
}) => {
  const { Address, Department,
          Email, Fname, JTitle,
          LName, Phone } = data
  
  return (
    <StyledDir>
      <h1>{Fname} {LName}</h1>
      {notEqual(JTitle, 'N/A') && <h3>{capitalize(JTitle)}</h3>}
      {notEqual(Department, 'N/A') && <h3>{Department}</h3>}
      {notEqual(Phone, 'N/A') && <div>P: {Phone}</div>}
      {notEqual(Email, 'N/A') && <div>E: {Email}</div>}
      {notEqual(Address, 'N/A') && <div>A: {Address}</div>}
    </StyledDir>
  )
}
