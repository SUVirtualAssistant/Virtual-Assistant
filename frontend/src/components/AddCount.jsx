import { countActions }       from '@state/modules/count'
import React                  from 'react'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'

const AddCount = ({ count, addCount, subCount }) => {
  return (
    <div>
      <style jsx>{`
        div {
          padding: 0 0 20px 0;
        }
      `}</style>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button onClick={addCount}>+</button>
      <button onClick={subCount}>-</button>
    </div>
  )
}

const mapStateToProps = state => ({
  count: state.count.count
})

const mapDispatchToProps = dispatch => ({
  addCount: bindActionCreators(countActions.incrCount, dispatch),
  subCount: bindActionCreators(countActions.decrCount, dispatch)

})

export default connect(mapStateToProps, mapDispatchToProps)(AddCount)
