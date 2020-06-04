import _      from 'lodash'
import React  from 'react'
import styled from 'styled-components'

const L = styled.a`
  flex: 1 1 auto;
  width: 100%;
  
  padding: 2rem 1rem;
  border: 1px solid ${({ theme }) => theme.ui[4]};
  border-top: none;
  
  ${({ theme }) => theme.backgrounds['WS']};
  
  ${({ theme }) => theme.type.expressiveParagraph};
  text-align: justify;
  word-wrap: break-word;
  
  transition: background 0.3s ease-in-out,
              color 0.3s ease-in-out;
  :hover {
    color: ${({ theme }) => theme.text[5]};
    background-color: ${({ theme }) => theme.overlay[2]}CC;
  }
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
