import React                                                   from 'react'
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'

const BarGraph = ({
  data
}) =>
  <BarChart width={730}
            height={250}
            data={data}>
    <CartesianGrid strokeDasharray="3 3"/>
    <XAxis dataKey="name"/>
    <YAxis dataKey="users"/>
    <Tooltip/>
    <Bar dataKey="users" fill="#AA0000"/>
  </BarChart>

export default BarGraph
