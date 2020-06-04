import { notEqual } from '@shared/utils'
import React        from 'react'
import styled       from 'styled-components'

const StyledDir = styled.div`
  flex: 0 0 auto;
  
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-content: center;
  
  padding: 15%;
  ${({ theme }) => theme.backgrounds['DIR']};
  
  @media (max-width: 800px) {
    flex: 1 1 auto;
    padding: 10%;
  }
  
  a {
    color: ${({ theme }) => theme.text['link']};
    ${({ theme }) => theme.type.expressiveHeading[1]};
    
    :hover { color: ${({ theme }) => theme.hover['link']}; }
  }
  
  h1 {
    ${({ theme }) => theme.type.expressiveHeading[6]};
  }
  
  h2 {
    ${({ theme }) => theme.type.expressiveHeading[3]};
    line-height: 4rem;
  }
  
  div {
    ${({ theme }) => theme.type.expressiveHeading[1]};
    line-height: 3rem;
  }
`

const capitalize = s => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export const DIR = ({
  data
}) => {
  const {
          Address, Department,
          Email, Fname, JTitle,
          LName, Phone
        } = data
  
  const department = Department.split('-')
  
  return (
    <StyledDir>
      <h1>{capitalize(Fname)} {capitalize(LName)}</h1>
      {notEqual(JTitle, 'N/A') && <h2>{capitalize(JTitle)}</h2>}
      {notEqual(Department, 'N/A') && <div>{department[0]}</div>}
      {Array.isArray(department) && <div>{department[1]}</div>}
      {notEqual(Phone, 'N/A') && <div>{Phone}</div>}
      {notEqual(Email, 'N/A') && <a href={'mailto:' + Email}>{Email}</a>}
      {notEqual(Address, 'N/A') && <div>{Address}</div>}
    </StyledDir>
  )
}
