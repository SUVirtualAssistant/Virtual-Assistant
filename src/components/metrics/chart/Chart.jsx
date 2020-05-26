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
  height: 300px;
`

const Title = styled.h1`
  color: ${({ theme }) => theme.su_red[1]};
  font-size: 15px;
  text-align: center;
`

const chartTypes = {
  Bar : Views.BarGraph,
  Line: Views.BarGraph
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
        .map(([x, y]) => ({ name: x, users: y }))), error => console.error(error))
    }
  }, [])
  
  const View = chartTypes[type]
  
  return (
    <ChartContainer>
      <Title>{title}</Title>
      {oldData
        ? <View data={oldData}/>
        : <Loading/>}
    </ChartContainer>
  )
}
