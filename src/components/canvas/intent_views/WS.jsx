import _      from 'lodash'
import React  from 'react'
import styled from 'styled-components'

const L = styled.a`
  position: relative;
  height: 100%;
  padding: 2em;
  
  ${({ theme }) => theme.type.expressiveHeading[2]};
  text-align: center;
  word-wrap: break-word;
  
  border-color: ${({ theme }) => theme.ui[3]};
  border-style: solid;
  border-width: 1px 1px;
 
  cursor: pointer;
  
  :hover {
    color: ${({ theme }) => theme.inverse[1]};
    background-color: ${({ theme }) => theme.focus};
  }
`

export const WS = ({
  data
}) => _.values(data)
       .map((e, index) => <L href={e.Link} target="_blank" key={index}>{e.Title}</L>)
