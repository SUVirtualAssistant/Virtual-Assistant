import Page                   from '@components/Page'
import { clockActions }       from '@state/modules/clock'
import { countActions }       from '@state/modules/count'
import React, { useEffect }   from 'react'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'

const Home = props => {
  useEffect(() => {
    const timer = props.startClock()

    return () => clearInterval(timer)
  }, [props])

  return <Page title="Index Page" linkTo="/other"/>
}

// Dispatch actions that need to happen as the page renders here
Home.getInitialProps = async ({ store, isServer }) => {
  store.dispatch(clockActions.serverRenderClock(isServer))
  store.dispatch(countActions.incrCount())
  return { isServer }
}

const mapDispatchToProps = dispatch => {
  return {
    addCount  : bindActionCreators(countActions.incrCount, dispatch),
    subCount  : bindActionCreators(countActions.decrCount, dispatch),
    startClock: bindActionCreators(clockActions.startClock, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Home)
