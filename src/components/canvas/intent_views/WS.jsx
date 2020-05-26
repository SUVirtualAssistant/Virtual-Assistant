import React  from 'react'
import styled from 'styled-components'
import _ from 'lodash'

const LinkCard = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  
  margin: .2rem;
  padding: 10px;
  border: ${({ theme }) => theme.ui[3]} solid 1px;
`

const L = styled.a`
  color: inherit;
  text-decoration: none;
`

export const WS = ({
  data
}) => _.values(data)
       .map((e, index) =>
  <LinkCard key={index}>
    <L href={e.Link} target="_blank">{e.Title}</L>
  </LinkCard>)
