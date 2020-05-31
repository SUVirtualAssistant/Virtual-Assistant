import React                                                                          from 'react'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import PropTypes from 'prop-types'

const LineGraph = ({
  data
}) => {
  const labels = Object.keys(data[0])
  
  return (
    <ResponsiveContainer height='85%' debounce={3}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip wrapperStyle={{ color: '#000', backgroundColor: '#ccc' }}/>}/>
        <YAxis dataKey={labels[1]} domain={[0, 300]}/>
        <XAxis dataKey={labels[0]}/>
        <Line type="monotone" dataKey="occurrences" stroke="#aa0000"/>
      </LineChart>
    </ResponsiveContainer>
  )
}

LineGraph.propTypes = {
  data: PropTypes.array.isRequired
}

export default LineGraph
