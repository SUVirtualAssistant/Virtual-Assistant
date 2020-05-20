import React from 'react'
import styled from 'styled-components'

const StyledDir = styled.div`
  flex: 1 1 auto;
  
  color: rgba(0, 0, 0.87);
  border-color: rgba(0, 0, 0.12);
  background-color: rgba(128, 112, 100, .87);
`

const notNull = field => field !== 'N/A'

// TODO: Dir Lambda Fname LName
export const DIR = ({
  data
}) => {
  const {
    Address,
    Department,
    Email,
    Fname,
    JTitle,
    LName,
    Phone
  } = data.sessionAttributes
  
  return (
    <StyledDir>
      <h1>{Fname} {LName}</h1>
      {notNull(JTitle) && <h2>{JTitle}</h2>}
      {notNull(Department) && <h3>Department: {Department}</h3>}
      {notNull(Phone) && <div>P: {Phone}</div>}
      {notNull(Email) && <div>E: {Email}</div>}
      {notNull(Address) && <div>A: {Address}</div>}
    </StyledDir>
  )
}