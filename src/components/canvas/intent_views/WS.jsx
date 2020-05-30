import _      from 'lodash'
import React  from 'react'
import styled from 'styled-components'

const LinkCard = styled.div`
  flex: 1 1 auto;
  display: flex;
  
  position: relative;
  padding: 2rem;
  padding: 20px;
  
  border-color: ${({ theme }) => theme.inverse['background']};
  border-style: solid;
  border-width: 1px 1px; 
 
  background-color: ${({ theme }) => theme.ui[1]};
  cursor: pointer;
  
  :before {
    position: absolute;
    left: 0;
    bottom: 0;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.focus};
    transform-origin: 0 bottom 0;
    transform: scaleY(0);
    transition: .4s ease-out;
  }
  
  :hover {
    a { color: ${({ theme }) => theme.inverse[1]}; }
    &:before { transform: scaleY(1); }
  }
`

const L = styled.a`
  color: ${({ theme }) => theme.text[1] };
  position: relative;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.333;
  transition: .4s ease-out;
`

export const WS = ({
  data
}) => _.values(data)
       .map((e, index) =>
       <a href={e.Link} target = '_blank'>
         <LinkCard key={index}>
           <L href={e.Link} target="_blank">{e.Title}</L>
         </LinkCard>
       </a>
       )
