import React, { useEffect, useState } from 'react'
import BarGraph                       from './charts/Bar'
import LineGraph from './charts/Line'
import Loader from "@components/metrics/Loader";
let updateTime;

export const MetricsView = ({
    style, data, url, dashboard
}) => {
    const [loaded, setLoaded] = useState(false)
    const [oldData, setOldData] = useState(null)

  useEffect(() => {
      if (!loaded) {
          setLoaded(true);
          if(url)
            fetch(url)
                .then(res => res.json())
                .then(result => setOldData(Object.entries(result['body'])
                    .map(([x, y]) => ({ name: x, users: y }))), error => console.error(error));
    }

  }, []);
  if(oldData) {
      if (style == "Bar")
          return <BarGraph data={oldData}/>
      else
          return <LineGraph data={oldData}/>
    }
    else
        return <Loader/>;
    }
