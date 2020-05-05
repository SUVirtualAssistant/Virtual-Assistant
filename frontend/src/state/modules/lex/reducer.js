import * as types from './types'

const initialState = {
  bot: null,
  active: false,
  sendingMessage: false,
  currentIntent: '',
  dialogState: '',
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
            author: action.author,
            timestamp: new Date(),
            text: action.message,
            // selectionIndex: state.messages.length + 1
          }
        ]
      }

    /* --- Session ------------------------------------ */
    case types.SESSION_START_REQUEST:
      return {
        ...state,
        bot: {
          id: 0,    // bot always has id=0
          name: action.name,
          version: action.version
        }
      }

    case types.SESSION_START_SUCCESS:
      return {
        ...state,
        active: true,
        currentIntent: action.response.intentName,
        dialogState: action.response.dialogState
      }

    case types.SESSION_START_FAILURE:
      return {}

    /* --- Messages ------------------------------------- */
    case types.MESSAGE_SEND_REQUEST:
      return {
        ...state,
        sendingMessage: action.status
      }
    case types.MESSAGE_SEND_SUCCESS:
      return {
        ...state,
        sendingMessage: !state.sendingMessage,
        currentIntent: action.response.intentName,
        dialogState: action.response.dialogState
      }
    case types.MESSAGE_SEND_FAILURE:
      return {
        ...state,
        sendingMessage: !state.sendingMessage
      }
    default:
      return state
  }
}
