import React                                                   from 'react'
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'

const BarGraph = ({
  data
}) =>
  <BarChart width={500}
            height={250}
            data={data}>
    <CartesianGrid strokeDasharray="6 6"/>
    <XAxis dataKey="name"/>
    <YAxis dataKey="occurrences"/>
    <Tooltip/>
    <Bar dataKey="occurrences" fill="#AA0000"/>
  </BarChart>

export default BarGraph
