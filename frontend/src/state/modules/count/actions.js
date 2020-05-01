import * as types from './types'

export const incrCount = () => dispatch => {
  return dispatch({ type: types.INCREMENT })
}

export const decrCount = () => dispatch => {
  return dispatch({ type: types.DECREMENT })
}
