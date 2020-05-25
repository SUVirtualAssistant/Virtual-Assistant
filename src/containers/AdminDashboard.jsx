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
    <DashboardContainer>
      <button onClick={handleClick}>Log API Response</button>
      <button onClick={logData}>Log dash data</button>
    </DashboardContainer>
  )
}

export default AdminDashboard
