import * as types from 'src/state/modules/chat/messages/types'

const messagesReducer = (state = {}, { type, payload} = {}) => {
  if (type === types.ADD_MESSAGE) {
    return {
      ...state,
      [payload.id]: {
        author: payload.author,
        selectionIndex: payload.selectionIndex,
        text: payload.text,
        timestamp: payload.timestamp
      }
    }
  }
  return state
}

export default messagesReducer
