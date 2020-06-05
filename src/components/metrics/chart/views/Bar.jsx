import PropTypes                                                                    from 'prop-types'
import React                                                                        from 'react'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const BarGraph = ({
  data
}) => {
  const labels = Object.keys(data[0])
  
  return (
    <ResponsiveContainer height='85%'
                         minHeight={280}
                         debounce={3}>
      <BarChart data={data}>
        <CartesianGrid stroke='#ccc'
                       strokeDasharray="6 6"/>
        <Tooltip wrapperStyle={{ color: '#000', backgroundColor: '#ccc' }}/>
        <YAxis dataKey={labels[1]}/>
        <XAxis dataKey={labels[0]}/>
        <Bar dataKey="occurrences"
             fill='#aa0000'/>
      </BarChart>
    </ResponsiveContainer>
  )
}

BarGraph.propTypes = {
  data: PropTypes.array.isRequired
}

export default BarGraph
