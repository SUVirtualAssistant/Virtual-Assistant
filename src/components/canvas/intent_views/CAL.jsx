import { notEqual } from '@shared/utils'
import { getDate }  from '@shared/utils/date-time'
import React        from 'react'
import styled       from 'styled-components'

const Card = styled.ul`
  
  list-style: none;
  flex: 0 0 auto;
  display: flex;
  flex-flow: row wrap;
`

const Event = styled.li`
  border-color: ${({ theme }) => theme.inverse['background']};
  border-style: solid;
  border-width: 1px 1px;
    
  width: 100%;
  padding: 10px;

  color: inherit;
  text-decoration: none;
 
  transition-property: background-color;
  transition-duration: 0.5s;
  transition-timing-function: linear;
  
  :hover {
    background-color: #393939;
  }
`

const Link = styled.a`
  width: 100%;
  
  transition-property: color;
  transition-duration: 0.25s;
  transition-timing-function: linear;
  
  :hover {
    color: white;
  } 
 
`

const checkForDuplicates = arr =>
  arr.map(e => e['Summary'])
     .map((e, i, final) => final.indexOf(e) === i && i)
     .filter(obj => arr[obj])
     .map(e => arr[e])

export const CAL = ({
  data
}) =>
  <Card>
    {_.values(data)
      .map((event, index) =>
        <Link href={event.ID} target="_blank">
          <Event key={index}>
            <h1>{event.Summary}</h1>
            <h2>{getDate(event.Date)}</h2>
            {notEqual(event.Time, '00:00:00') && <>
              <h3>Time: {Date.parse(event.Time)}</h3>
              <h3>Location: {event.Location}</h3>
            </>}
          </Event>
        </Link>)
    }
  </Card>
