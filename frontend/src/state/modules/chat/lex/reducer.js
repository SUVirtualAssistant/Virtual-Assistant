import * as types          from 'src/state/modules/chat/lex/types'

const initialState = {
  botName       : '',
  active        : false,
  sendingMessage: false,
  currentIntent : '',
  dialogState   : '',
}

const lexReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case types.ADD_MESSAGE:
      return {
        ...state,
        // [payload.id]: {
        //   au
        //
        // }
        messages: state.messages.concat({
          text    : payload.message,
          sender  : payload.sender,
          senderID: payload.senderId
        })
      }

    /* --- Session ------------------------------------ */
    case types.SESSION_START_REQUEST:
      return {
        ...state,
        botName: payload.bot
      }

    case types.SESSION_START_SUCCESS:
      return {
        ...state,
        active       : true,
        currentIntent: payload.response.intentName,
        dialogState  : payload.response.dialogState
      }

    case types.SESSION_START_FAILURE:
      return {}

    /* --- Messages ------------------------------------- */
    case types.MESSAGE_SEND_REQUEST:
      return {
        ...state,
        sendingMessage: payload.status
      }
    case types.MESSAGE_SEND_SUCCESS:
      return {
        ...state,
        sendingMessage: !state.sendingMessage,
        currentIntent : payload.response.intentName,
        dialogState   : payload.response.dialogState
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

export default lexReducer
