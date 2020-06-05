import { notEqual } from '@shared/utils'
import React        from 'react'
import styled       from 'styled-components'

const StyledDir = styled.div`
  flex: 1 auto;
  
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
`

const ContactInfo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  
  height: 80%;
  width: 80%;
  padding: 6em;
  
  ${({ theme }) => theme.backgrounds['DIR']};
  text-transform: capitalize;
  
  h1 { ${({ theme }) => theme.type.expressiveHeading[5]}; }
  
  h3 { ${({ theme }) => theme.type.expressiveHeading[1]}; }
  
  a {
    color: ${({ theme }) => theme.text['link']};
    text-transform: none;
    transition: color 0.3s cubic-bezier(0.5, 0, 0.1, 1);
    
    :hover {
      color: ${({ theme }) => theme.hover['link']};
    }
  }
  
  div, a {
    ${({ theme }) => theme.type.expressiveHeading[1]};
    font-size: 1rem;
    line-height: normal;
  }
  
  @media screen and (max-width: 800px) {
    height: 100%;
    width: 100%;
    
    padding: 1em;
  }
`

export const DIR = ({
  data
}) => {
  const {
          Address, Department,
          Email, Fname, JTitle,
          LName, Phone
        } = data
  
  const title = JTitle.split(', ')
  const department = Department.split('-')
  
  return (
    <StyledDir>
      <ContactInfo>
        <h1>{Fname} {LName}</h1>
        {notEqual(title[0], 'N/A') && <h3>{title[0]}</h3>}
        {Array.isArray(title) && <h3>{title[1]}</h3>}
        {notEqual(Department, 'N/A') && <div>{department[0]}</div>}
        {Array.isArray(department) && <div>{department[1]}</div>}
        {notEqual(Phone, 'N/A') && <div>{Phone}</div>}
        {notEqual(Email, 'N/A') && <a href={'mailto:' + Email}>{Email}</a>}
        {notEqual(Address, 'N/A') && <div>{Address}</div>}
      </ContactInfo>
    </StyledDir>
  )
}
