import React, { useEffect, useState } from 'react'
import BarGraph                       from './charts/Bar'
import Loader from "@components/metrics/Loader";

export const MetricsView = ({
  data
}) => {
    const [loaded, setLoaded] = useState(false)
    const [oldData, setOldData] = useState(null)

  useEffect(() => {
      if (!loaded) {
          const url = 'https://ea7k8rm5oc.execute-api.us-west-2.amazonaws.com/Prod'
          setLoaded(true);
          fetch(url)
              .then(res => res.json())
              .then(result => setOldData(Object.entries(result['body'])
                  .map(([x, y]) => ({ name: x, users: y }))), error => console.error(error));
    }
  }, [])

  if(oldData) {
      return <BarGraph data={oldData}/>
  }
  else {
      return <Loader/>;
  }

}
