import React  from 'react'
import styled from 'styled-components'

const LinkCard = styled.div`
  margin: 10px;
  background: white;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100px;
  align-items: center;
  padding: 10px;

  &:hover {
    background: ${({ theme }) => theme.colors.chat.user_bubble_bg};
  }
`

const L = styled.a`
  font-size: 20px;
  font-family: "IBM Plex Sans", serif;
  color: inherit;
  text-decoration: none;

`


export const Links = ({
  sessionAttributes
}) => {
  const entries = Object.values(sessionAttributes)
                        .map(e => JSON.parse(e))

  return entries.map((e, index) =>
    <LinkCard key={index}>
      <L href={'https://'+ e.Link} target="_blank">{e.Title}</L>
    </LinkCard>)

}
