import * as reducers                                     from '@state/modules'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware                                   from 'redux-thunk'

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

export const configureStore = initialState => {
  const rootReducer = combineReducers(reducers)

  return createStore(
    rootReducer,
    initialState,
    bindMiddleware(
      [
        thunkMiddleware,
        // interceptorMiddleware
      ]
    )
  )
}
