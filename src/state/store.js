import { createWrapper, HYDRATE }                        from 'next-redux-wrapper'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware                                   from 'redux-thunk'
import * as reducers                                     from './modules'

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  
  return applyMiddleware(...middleware)
}

const combinedReducer = combineReducers({
  ...reducers
})

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    
    const nextState = {
      ...state,           // use previous state
      ...action.payload   // apply delta from hydration
    }
    
    if (state.lex.active)        // preserve messages on client side nav
      nextState.lex = state.lex
    
    return nextState
  } else {
    return combinedReducer(state, action)
  }
}

const initStore = () => createStore(
  reducer,
  bindMiddleware([
    thunkMiddleware
  ])
)

export const wrapper = createWrapper(initStore)
