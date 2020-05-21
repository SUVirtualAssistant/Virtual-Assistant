import { notEqual } from '@shared/utils'
import React       from 'react'
import styled      from 'styled-components'

const Card = styled.ul`
  margin: 1px;
  list-style: none;
  
  background: white;
  flex: 1 1 auto;
  display: flex;
  flex-flow: row wrap;
  
  align-items: center;
  padding: 10px;
`

const Event = styled.li`
  font-size: 20px;
  font-family: "IBM Plex Sans", serif;
  color: inherit;
  text-decoration: none;

`

const checkForDuplicates = arr =>
  arr.map(e => e[0])
     .map((e, i, final) => final.indexOf(e) === i && i)
     .filter(obj => arr[obj])
     .map(e => arr[e])

export const CAL = ({
  data
}) =>
  <Card>
    {checkForDuplicates(data).map((event, index) =>
      <Event key={index}>
        <h1>{event.Summary}</h1>
        <h3>Date: {event.Date}</h3>
        { notEqual(event.Time, '00:00:00')
          && <>
               <h3>Time: {event.Time}</h3>
               <h3>Location: {event.Location}</h3>
             </>}
      </Event>)
    }
  </Card>

