import * as types from './types'

const clockInitialState = {
  lastUpdate: 0,
  light     : false
}

const clockReducer = (state = clockInitialState, action) => {
  switch (action.type) {
    case types.TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light     : !!action.light
      })
    default:
      return state
  }
}

export default clockReducer
