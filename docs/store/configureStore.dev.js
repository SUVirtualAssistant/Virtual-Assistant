import rootReducer                      from '@store/rootReducer'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools }          from 'redux-devtools-extension'
import { createLogger }                 from 'redux-logger'
import thunk                            from 'redux-thunk'

export const initializeStore = (initialState = {}, options) => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        thunk,
        createLogger()
      )
    )
  )
}
