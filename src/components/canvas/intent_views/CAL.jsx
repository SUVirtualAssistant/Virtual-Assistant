import { notEqual } from '@shared/utils'
import { getDate }  from '@shared/utils/date-time'
import React        from 'react'
import styled       from 'styled-components'

const Event = styled.a`
  flex: 1 1 auto;
  width: 100%;
  
  padding: 2rem 1rem;
  border: 1px solid ${({ theme }) => theme.ui[4]};
  border-top: none;
  
  ${({ theme }) => theme.backgrounds['CAL']};
  
  ${({ theme }) => theme.type.expressiveParagraph};
  text-align: justify;
  word-wrap: break-word;
  
  transition: background 0.3s ease-in-out;
  :hover {
    color: ${({ theme }) => theme.text[1]};
    background-color: ${({ theme }) => theme.overlay[2]}CC;
  }
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
