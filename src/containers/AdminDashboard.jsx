import InfoCard          from '@components/metrics/card'
import Chart             from '@components/metrics/chart'
import CloudWatchService from '@services/AWS_Cloudwatch/CloudWatchService'
import metrics           from '@services/AWS_Cloudwatch/metrics.json'
import { useInterval }   from '@shared/hooks'
import React             from 'react'
import styled            from 'styled-components'

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 550px 200px 200px 200px;
  grid-gap: 10px;
`

const AdminDashboard = props => {
  useInterval(() => {
    update()
  }, 1000)
  
  const options = {
    credentials    : props.apiCredentials,
    periodMinutes  : 5,
    backfillMinutes: 120,
    refreshMinutes : 1
  }
  
  let dash = new CloudWatchService(options, metrics)
  let updateTime
  let errorData
  
  const update = () => {
    if (dash.updatedAt !== updateTime) {
      updateTime = dash.updatedAt
      errorData = dash.datasets.array[0]
    }
  }
  
  return (
    <GridContainer>
      <Chart title='Lambda usage this week'
             type='Bar'
             url={'https://ea7k8rm5oc.execute-api.us-west-2.amazonaws.com/Prod'}/>
      
      <InfoCard title='Verified Users'/>
      <InfoCard title='Anonymous Users'/>
      <InfoCard title='Average Latency'/>
      
      <Chart title='Lambda errors this week'
             type='Line'
             url={'https://ea7k8rm5oc.execute-api.us-west-2.amazonaws.com/Prod/errors'}/>
    </GridContainer>
  )
}

export default AdminDashboard
