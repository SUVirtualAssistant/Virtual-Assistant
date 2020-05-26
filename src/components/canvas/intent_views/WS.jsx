import React  from 'react'
import styled from 'styled-components'

const LinkCard = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-flow: row wrap;
  margin: 1px;
  
  background: white;
  
  align-items: center;
  padding: 10px;
`

const L = styled.a`
  font-size: 20px;
  font-family: "IBM Plex Sans", serif;
  color: inherit;
  text-decoration: none;
`

export const WS = ({
  data
}) => data.map((e, index) =>
  <LinkCard key={index}>
    <L href={e.Link} target="_blank">{e.Title}</L>
  </LinkCard>)
