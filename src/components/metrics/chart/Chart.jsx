import Loading                        from '@components/loading'
import React, { useEffect, useState } from 'react'
import styled                         from 'styled-components'
import * as Views                     from './views'

const ChartContainer = styled.div`
  align-content: center;
  display: table;
  flex-direction: row;
  background-color : ${({ theme }) => theme.ui[3]};
  grid-column: 1;
  height: 310px;
`

const Title = styled.h1`
  color: #f4f4f4;
  font-family: ${({ theme }) => theme.type.sans};
  font-size: 20px;
  background-color: ${({theme}) => theme.su_red[1]};
  top: 0px;
  position: relative;
  text-align: center;
  margin-top: 0px;
  padding: 10px;
`

const chartTypes = {
  Bar : Views.BarGraph,
  Line: Views.LineGraph
}

export const Chart = ({
  title,
  type,
  url
}) => {
  const [loaded, setLoaded] = useState(false)
  const [oldData, setOldData] = useState(null)
  
  useEffect(() => {
    if (!loaded) {
      setLoaded(true)
      
      if (url)
        fetch(url)
        .then(res => res.json())
        .then(result => setOldData(Object.entries(result['body'])
        .map(([x, y]) => ({ name: x, occurrences: y }))), error => console.error(error))
    }
  }, [])
  
  const ChartType = chartTypes[type]
  
  return (
    <ChartContainer>
      <Title>{title}</Title>
      {oldData
        ? <ChartType data={oldData}/>
        : <Loading/>}
    </ChartContainer>
  )
}
