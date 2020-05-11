import * as types from './types'

const initialState = {
  latestData: null,
  messages: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            author   : action.author,
            timestamp: action.timestamp,
            text     : action.message
          }
        ]
      }
    case types.ADD_DATA:
      return {
        ...state,
        latestData: action.data
      }
    default:
      return state
  }
}

