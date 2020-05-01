import Link        from 'next/link'
import React       from 'react'
import { connect } from 'react-redux'
import AddCount    from './AddCount'
import Clock       from './Clock'

const Page = ({ title, linkTo, clock }) => (
  <div>
    <h1>{title}</h1>
    <Clock lastUpdate={clock.lastUpdate} light={clock.light}/>
    <AddCount />
    <nav><Link href={linkTo}><a>Navigate</a></Link></nav>
    <nav><Link href='/chat'><a>Chat</a></Link></nav>
  </div>
)

export default connect(state => state)(Page)
