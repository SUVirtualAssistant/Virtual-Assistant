import { notEqual } from '@shared/utils'
import { getDate }  from '@shared/utils/date-time'
import React        from 'react'
import styled       from 'styled-components'

const Event = styled.a`
  padding: 1em 1em;
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: ${({ theme }) => theme.ui[4]}CC;
  
  ${({ theme }) => theme.backgrounds['CAL']};
  
  ${({ theme }) => theme.type.expressiveParagraph};
  text-align: justify;
  word-wrap: break-word;
  
  transition: background 0.3s ease-in-out;
  
  :hover {
    color: ${({ theme }) => theme.text[5]};
    background-color: ${({ theme }) => theme.overlay[2]}CC;
  }
  
  &+& { border-top: none; }
`

export const CAL = ({
  data
}) => _.values(data)
       .map((event, index) =>
           <Event href={event.ID}
                  target="_blank"
                  key={index}>
             <p>
               {event.Summary}        <br />
               {getDate(event.Date)}  <br />
             </p>
             {notEqual(event.Time, '00:00:00') &&
               <>
                 <p>Time: {Date.parse(event.Time)}</p>
                 <p>Location: {event.Location}</p>
               </>}
           </Event>)
