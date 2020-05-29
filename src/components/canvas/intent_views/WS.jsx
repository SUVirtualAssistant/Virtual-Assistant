import _      from 'lodash'
import React  from 'react'
import styled from 'styled-components'

const LinkCard = styled.div`
  flex: 1 1 auto;
  display: flex;
  
  position: relative;
  padding: 2rem;
  box-shadow: inset  0    0   0 4px ${({ theme }) => theme.inverse['background']},
              inset -4px -4px 0 6px ${({ theme }) => theme.ui[4]};
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
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.333;
  transition: .4s ease-out;
`

export const WS = ({
  data
}) => _.values(data)
       .map((e, index) =>
         <LinkCard key={index}>
           <L href={e.Link} target="_blank">{e.Title}</L>
         </LinkCard>)
