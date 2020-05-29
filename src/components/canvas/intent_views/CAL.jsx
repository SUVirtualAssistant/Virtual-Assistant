import { notEqual } from '@shared/utils'
import { getDate }   from '@shared/utils/date-time'
import React        from 'react'
import styled       from 'styled-components'

const Card = styled.ul`
  list-style: none;
  
  flex: 0 0 auto;
  
  display: flex;
  flex-flow: row wrap;
  padding: 10px;
`

const Event = styled.li`
  color: inherit;
  text-decoration: none;
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
    {checkForDuplicates(_.values(data)).map((event, index) =>
      <Event key={index}>
        <h1>{event.Summary}</h1>
        <h2>{getDate(event.Date)}</h2>
        { notEqual(event.Time, '00:00:00')
          && <>
               <h3>Time: {Date.parse(event.Time)}</h3>
               <h3>Location: {event.Location}</h3>
             </>}
      </Event>)
    }
  </Card>

