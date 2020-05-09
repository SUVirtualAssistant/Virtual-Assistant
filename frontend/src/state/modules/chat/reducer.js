import * as types from './types'

const initialState = {
  latestData: null,
  messages: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_MESSAGE:       // todo: change this to save the messages as message-groups and take the call out of the Chat component
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            author   : action.author,
            timestamp: action.timestamp,
            text     : action.message
            // selectionIndex: state.messages.length + 1
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

