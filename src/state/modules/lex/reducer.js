import * as lexActionTypes from './types'

const lexInitialState = {
  bot: null,
  active: false,
  sendingMessage: false,
  currentIntent: '',
  dialogState: ''
}

export default (
  state = lexInitialState,
  action
) => {
  switch (action.type) {
    case lexActionTypes.SESSION_START_REQUEST:
      return {
        ...state,
        bot: {
          id: 0,    // bot always has id=0
          name: action.name,
          alias: action.alias
        }
      }

    case lexActionTypes.SESSION_START_SUCCESS:
      return {
        ...state,
        active: true,
        currentIntent: action.response.intentName,
        dialogState: action.response.dialogState
      }

    case lexActionTypes.SESSION_START_FAILURE:
      return state
    
    case lexActionTypes.SESSION_DETAILS:
      return {
        ...state,
        history: action.response
      }

    /* --- Messages ------------------------------------- */
    case lexActionTypes.MESSAGE_SEND_REQUEST:
      return {
        ...state,
        sendingMessage: action.status
      }
    case lexActionTypes.MESSAGE_SEND_SUCCESS:
      return {
        ...state,
        sendingMessage: !state.sendingMessage,
        currentIntent: action.response.intentName,
        dialogState: action.response.dialogState
      }
    case lexActionTypes.MESSAGE_SEND_FAILURE:
      return {
        ...state,
        sendingMessage: !state.sendingMessage
      }
    default:
      return state
  }
}
