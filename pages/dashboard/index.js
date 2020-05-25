import Layout         from '@components/layouts'
import AdminDashboard from '@containers/AdminDashboard'
import { wrapper }    from '@state/store'
import React          from 'react'

const Dashboard = props =>
  <AdminDashboard apiCredentials={props.apiCredentials}/>

export const getStaticProps = wrapper.getStaticProps(
  async ({ store }) => {
    return {
      props: {
        apiCredentials: {
          key     : process.env.API_KEY,
          endpoint: process.env.API_ENDPOINT
        }
      }
    }
  })

Dashboard.Layout = Layout

export default Dashboard
