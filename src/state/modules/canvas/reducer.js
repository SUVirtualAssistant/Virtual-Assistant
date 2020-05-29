import * as types  from './types'

const canvasInitialState = {
  currentView: 'HOME',       // Default d.c. view
  loading: false
}

export default (
  state = canvasInitialState,
  action
) => {
  switch (action.type) {
    case types.ADD_DATA:
      return {
        ...state,
        currentView: action.view,
        currentDataIndex: action.name,
        [action.name]: {
          id: action.name,
          data: action.data
        }
      }
    default:
      return state
  }
}
