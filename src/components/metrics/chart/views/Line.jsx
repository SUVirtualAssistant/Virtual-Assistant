import React                                                     from 'react'
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

const LineGraph = ({
  data
}) =>
  <LineChart width={500}
             height={300}
             data={data}
             margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
    <CartesianGrid strokeDasharray="3 3"/>
    <XAxis dataKey="name"/>
    <YAxis dataKey="occurrences"/>
    <Tooltip/>
    <Line type="monotone" dataKey="occurrences" stroke="#aa0000"/>
  </LineChart>

export default LineGraph
