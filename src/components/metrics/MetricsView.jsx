import React, { useEffect, useState } from 'react'
import BarGraph                       from './charts/Bar'

export const MetricsView = ({
  data
}) => {
  const [loaded, setLoaded] = useState(false)
  const [oldData, setOldData] = useState([])
  
  useEffect(() => {
    if (!loaded) {
      const url = 'https://ea7k8rm5oc.execute-api.us-west-2.amazonaws.com/Prod'
      
      setLoaded(true)
      
      fetch(url)
      .then(res => res.json())
      .then(result => setOldData(Object.entries(result['body'])
                                       .map(([x, y]) => ({ name: x, users: y }))),
        error => console.error(error))
    }
  }, [])
  
  return loaded && <BarGraph data={oldData}/>
}
