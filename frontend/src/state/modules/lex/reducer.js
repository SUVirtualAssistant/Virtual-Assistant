// import { getMessageTime } from '@shared/utils/date-time'
// import * as types         from './types'

// const initialState = {
//   botName       : '',
//   active        : false,
//   sendingMessage: false,
//   currentIntent : '',
//   dialogState   : '',
//   messages      : {}
// }
//
// const lexReducer = (state = initialState, { type, payload } = {}) => {
//   switch (type) {
//     case types.ADD_MESSAGE:
//       return {
//         ...state,
//         messages: state.messages.concat({
//           author   : { id: payload.author.id },
//           text     : payload.message,
//           timestamp: getMessageTime()
//         })
//       }
//
//     /* --- Session ------------------------------------ */
//     case types.SESSION_START_REQUEST:
//       return {
//         ...state,
//         botName: payload.bot
//       }
//
//     case types.SESSION_START_SUCCESS:
//       return {
//         ...state,
//         active       : true,
//         currentIntent: payload.response.intentName,
//         dialogState  : payload.response.dialogState
//       }
//
//     case types.SESSION_START_FAILURE:
//       return {}
//
//     /* --- Messages ------------------------------------- */
//     case types.MESSAGE_SEND_REQUEST:
//       return {
//         ...state,
//         sendingMessage: payload.status
//       }
//     case types.MESSAGE_SEND_SUCCESS:
//       return {
//         ...state,
//         sendingMessage: !state.sendingMessage,
//         currentIntent : payload.response.intentName,
//         dialogState   : payload.response.dialogState
//       }
//     case types.MESSAGE_SEND_FAILURE:
//       return {
//         ...state,
//         sendingMessage: !state.sendingMessage
//       }
//     default:
//       return state
//   }
// }
import * as types from './types'

const initialState = {
  botName: '',
  active: false,
  sendingMessage: false,
  currentIntent: '',
  dialogState: '',
  numMessages: 0,
  messages: []
}

export const lexReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_MESSAGE:
      return {
        ...state,
        numMessages: state.numMessages + 1,
        messages: state.messages.concat({
          key: state.numMessages,
          text: action.message,
          sender: action.sender,
          senderID: action.senderId
        })
      }

    /* --- Session ------------------------------------ */
    case types.SESSION_START_REQUEST:
      return {
        ...state,
        botName: action.bot
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

export default lexReducer
