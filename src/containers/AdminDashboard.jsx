import { Chart, InfoCard } from '@components/metrics'
import React               from 'react'
import styled              from 'styled-components'

const GridContainer = styled.div`
  margin-top: 2rem;
  
  display: grid;
  grid-template-columns: 550px 200px 200px 200px;
  grid-gap: 10px;
`

const AdminDashboard = () =>
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

export default AdminDashboard
