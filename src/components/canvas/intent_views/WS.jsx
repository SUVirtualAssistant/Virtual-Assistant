import _      from 'lodash'
import React  from 'react'
import styled from 'styled-components'

const L = styled.a`
  padding: 1em 1em;
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: ${({ theme }) => theme.ui[4]}CC;
  
  ${({ theme }) => theme.backgrounds['WS']};
  
  ${({ theme }) => theme.type.expressiveParagraph};
  text-align: justify;
  word-wrap: break-word;
  
  transition: all 300ms cubic-bezier(0.5, 0.1, 0, 1);
  
  :hover {
    color: ${({ theme }) => theme.text[5]};
    background-color: ${({ theme }) => theme.overlay[2]}CC;
  }
  
  &+& { border-top: none; }
`

export const WS = ({
  data
}) => _.values(data)
       .map((e, index) =>
         <L href={e.Link}
            target="_blank"
            key={index}>
           {e.Title}
         </L>
       )
