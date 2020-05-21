import * as types  from './types'

const initState = {
  currentView: 'BOT',
}

export default (state = initState, action) => {
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
