import React                                                   from 'react'
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'
import Loader from "@components/metrics/Loader";

const BarGraph = ({
  data
}) =>
  <BarChart width={500}
            height={250}
            data={data}>
    <CartesianGrid strokeDasharray="6 6"/>
    <XAxis dataKey="name"/>
    <YAxis dataKey="users"/>
    <Tooltip/>
    <Bar dataKey="users" fill="#AA0000"/>
  </BarChart>


export default BarGraph
