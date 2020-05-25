import MetricsView       from '@components/metrics'
import metrics           from '@components/metrics/metrics.json'
import CloudWatchService from '@services/AWS_Cloudwatch/CloudWatchService'
import React             from 'react'
import styled            from 'styled-components'

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(50vh - 50px);
  width: 80vw;

  @media (max-width: 800px) {
    height: calc(100vh - 40px);
  }
`

const AdminDashboard = props => {
  const metricData = new CloudWatchService(metrics)
  metricData.setEndpoint(props.apiCredentials.key, props.apiCredentials.endpoint)
  
  return (
    <DashboardContainer>
      <MetricsView data={metricData}/>
    </DashboardContainer>
  )
}

export default AdminDashboard
