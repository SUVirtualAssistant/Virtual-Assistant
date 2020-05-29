import { notEqual } from '@shared/utils'
import React        from 'react'
import styled       from 'styled-components'

const StyledDir = styled.div`
  flex: 1 1 auto;
  
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
`

const Text = styled.div`
  padding: 5rem;
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
  
  const department = Department.split('-')
  
  return (
    <StyledDir>
      <Text>
        <h1>{capitalize(Fname)} {capitalize(LName)}</h1>
        {notEqual(JTitle, 'N/A') && <h3>{capitalize(JTitle)}</h3>}
        {notEqual(Department, 'N/A') && <h3>{department[0]}</h3>}
        { Array.isArray(department) && <h3>{department[1]}</h3>}
        {notEqual(Phone, 'N/A') && <div> {Phone}</div>}
        {notEqual(Email, 'N/A') && <div> {Email}</div>}
        {notEqual(Address, 'N/A') && <div> {Address}</div>}
      </Text>
    </StyledDir>
  )
}
