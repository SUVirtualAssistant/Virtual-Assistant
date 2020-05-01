import * as types from './types'

export const serverRenderClock = isServer => dispatch => {
  return dispatch({
    type: types.TICK,
    light: !isServer,
    ts: Date.now(),
  })
}

export const startClock = () => dispatch => {
  return setInterval(
    () => dispatch({ type: types.TICK, light: true, ts: Date.now() }),
    1000
  )
}
