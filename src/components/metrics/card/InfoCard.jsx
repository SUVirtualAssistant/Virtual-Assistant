import Loading                        from '@components/loading'
import React, { useEffect, useState } from 'react'
import styled                         from 'styled-components'
import _ from 'lodash'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  height: 15rem;
  background-color: ${({ theme }) => theme.ui[3]};
  
  h2, h3 {
    font-family: ${({ theme }) => theme.type.sans};
    text-align: center;
  }
`

const CardTitle = styled.h2`
  flex: 1;
  justify-self: center;
  padding-top: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`

const CardValue = styled.h3`
  flex: 1;
  justify-self: flex-end;
  font-size: 3rem;
`

const urls = {
  'Verified Users' : 'https://ea7k8rm5oc.execute-api.us-west-2.amazonaws.com/Prod/users',
  'Anonymous Users': 'https://ea7k8rm5oc.execute-api.us-west-2.amazonaws.com/Prod/users',
  'Average Latency': 'https://ea7k8rm5oc.execute-api.us-west-2.amazonaws.com/Prod/latency'
}

export const InfoCard = ({
  title
}) => {
  const [loaded, setLoaded] = useState(false)
  const [oldData, setOldData] = useState(null)
  
  useEffect(() => {
    if (!loaded && title != null) {
      setLoaded(true)
      
      fetch(urls[title])
        .then(res => res.json())
        .then(result => setOldData(_.get(result, title)))
    }
  }, [])
  
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      {oldData
        ? <CardValue>{oldData}</CardValue>
        : <Loading/>}
    </Card>
  )
}

export default InfoCard