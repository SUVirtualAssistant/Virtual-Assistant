import rootReducer                      from '@store/rootReducer'
import { applyMiddleware, createStore } from 'redux'
import thunk                            from 'redux-thunk'

export const initializeStore = (initialState = {}, options) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunk
    )
  )
}
