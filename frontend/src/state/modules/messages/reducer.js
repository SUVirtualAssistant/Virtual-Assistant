import * as types from './types'

export default (state = [], action) => {
  switch (action.type) {
    case types.ADD_MESSAGE:
      return [
        ...state,
        {
          author   : action.author,
          timestamp: action.timestamp,
          text     : action.message
        }
      ]
    default:
      return state
  }
}

