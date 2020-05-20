import Layout            from '@components/layouts'
import MetricsView       from '@components/metrics'
import metrics           from '@components/metrics/metrics.json'
import CloudWatchService from '@services/AWS_Cloudwatch/CloudWatchService'
import React             from 'react'
import styled            from 'styled-components'

const ChartContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(50vh - 50px);
  width: 80vw;
  background-color : #12171c;

  @media (max-width: 1100px) {
    height: calc(100vh - 40px);
  }
`

const Admin = ({
  apiCredentials
}) => {
  const metricData = new CloudWatchService(metrics)
  metricData.setEndpoint(apiCredentials.key, apiCredentials.endpoint)
  
  return <ChartContainer>
    <MetricsView data={metricData}/>
  </ChartContainer>
}

export const getStaticProps = async () => ({
  props: {
    apiCredentials: {
      key     : process.env.API_KEY,
      endpoint: process.env.API_ENDPOINT
    }
  }
})

Admin.Layout = Layout

export default Admin

