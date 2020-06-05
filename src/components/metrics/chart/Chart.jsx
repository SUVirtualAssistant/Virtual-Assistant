import Loading                        from '@components/loading'
import React, { useEffect, useState } from 'react'
import styled                         from 'styled-components'
import * as Views                     from './views'

const ChartContainer = styled.div`
  height: 50%;
  margin-bottom: 1rem;
  
  border-radius: .5rem;
  background-color : ${({ theme }) => theme.ui[1]};
  padding: 0 2rem 1rem 0;
  
  :last-child {
    margin-bottom: 0;
  }
  
  h2 {
    text-align: center;
    letter-spacing: 2px;
    padding: 1rem;
  }
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
  const [data, setData] = useState(null)
  const ChartType = chartTypes[type]
  
  useEffect(() => {
    if (!loaded) {
      setLoaded(true)
      
      if (url)
        fetch(url).then(res => res.json())
                  .then(result => {
                    if (result.body)
                      setData(Object.entries(result['body'])
                                    .map(([x, y]) => ({ date: x, occurrences: y })))
                  }, error => console.error(error))
    }
  }, [])
  
  return (
    <ChartContainer>
      {data ? <>
                <h2>{title}</h2>
                <ChartType data={data}/>
              </>
            : <Loading/>}
    </ChartContainer>
  )
}
