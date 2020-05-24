import * as types  from './types'

const canvasInitialState = {
  currentView: 'BOT',       // Default d.c. view
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
