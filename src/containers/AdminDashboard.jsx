import MetricsView       from '@components/metrics'
import metrics           from '@components/metrics/metrics.json'
import CloudWatchService from '@services/AWS_Cloudwatch/CloudWatchService'
import React             from 'react'
import styled            from 'styled-components'

import InfoCard from "@components/metrics/InfoCard";
import Loader from "@components/metrics/Loader";

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 550px 200px 200px 200px;
    grid-gap: 10px;
    background-color: #2e2e2e;
    
    h1 {
      color: AA0000;
      font-size: 15px;
      text-align: center; 
    }
`

const ChartContainer = styled.div`
  display: table;
  flex-direction: row;
  background-color : #AAAAAA;
  padding: 10px;
  grid-column: 1;
`

/**
 * api credentials are captured server side and passed to this component at runtime
 */
const AdminDashboard = props => {
  const options = {
    credentials    : props.apiCredentials,
    periodMinutes  : 5,
    backfillMinutes: 120,
    refreshMinutes : 10
  }

  const dash = new CloudWatchService(options, metrics)

  const handleClick = () => {
    dash.update()
  }

  const logData =() => {
    console.log(dash.datasets)
  }
  
  return (
      <GridContainer>

          <ChartContainer>
              <h1>Lambda usage this week</h1>
              <MetricsView/>
          </ChartContainer>

          <InfoCard title={"Verified Users"} value={"1"} />
          <InfoCard title={"Anonymous Users"} value={"50"} />
          <InfoCard title={"Average Latency"} value={"1ms"} />

          <div>
                <button onClick={handleClick}>Log API Response</button>
                <button onClick={logData}>Log dash data</button>
          </div>

      </GridContainer>
  )
}

export default AdminDashboard
