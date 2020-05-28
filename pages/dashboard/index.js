import Layout         from '@components/layouts'
import AdminDashboard from '@containers/AdminDashboard'
import { wrapper }    from '@state/store'
import React          from 'react'

const Dashboard = props =>
  <AdminDashboard />

export const getServerSideProps = wrapper.getServerSideProps(
  async () => {
    return {
      props: {
        data: {}
      }
    }
  })

Dashboard.Layout = Layout

export default Dashboard
