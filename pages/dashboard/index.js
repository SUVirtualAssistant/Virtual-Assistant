import Layout         from '@components/layouts'
import AdminDashboard from '@containers/AdminDashboard'
import Head           from 'next/head'
import React          from 'react'

const Dashboard = () =>
  <>
    <Head>
      <title>SU.VA Dashboard</title>
    </Head>
    <AdminDashboard/>
  </>

Dashboard.Layout = Layout

export default Dashboard
