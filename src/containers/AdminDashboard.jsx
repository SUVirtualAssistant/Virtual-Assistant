import MetricsView       from '@components/metrics'
import metrics           from '@components/metrics/metrics.json'
import CloudWatchService from '@services/AWS_Cloudwatch/CloudWatchService'
import React             from 'react'
import styled            from 'styled-components'
import InfoCard from "@components/metrics/InfoCard";
import BarGraph from "@components/metrics/charts/Bar";
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
  grid-column: 1;
  height: 300px;
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

  console.log("Initializing");
  let dash = new CloudWatchService(options, metrics);
  let updateTime;
  let errorData;

  function update()
  {
      if(dash.updatedAt != updateTime) {
          updateTime = dash.updatedAt;
          errorData = dash.datasets.array[0];

      }
  }

  const handleClick = () => {
    dash.update()
  }

  const logData =() => {
    console.log(dash.datasets);

  }

  setInterval(update, 1000);

  return (
      <GridContainer>
          <ChartContainer>
              <h1>Lambda usage this week</h1>
              <MetricsView style={"Bar"} url={'https://ea7k8rm5oc.execute-api.us-west-2.amazonaws.com/Prod'}/>
          </ChartContainer>

          <InfoCard title={"Verified Users"} value={"1"} />
          <InfoCard title={"Anonymous Users"} value={"50"} />
          <InfoCard title={"Average Latency"} value={"1ms"} />

          <ChartContainer>
              <h1>Lambda errors this week</h1>
              <MetricsView style={"Line"} url={'https://ea7k8rm5oc.execute-api.us-west-2.amazonaws.com/Prod/errors'}/>
          </ChartContainer>

      </GridContainer>
  )

}

export default AdminDashboard
