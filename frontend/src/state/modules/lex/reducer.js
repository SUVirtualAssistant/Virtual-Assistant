import * as types from './types'
/*
messages: [
  {
    author          : this.bot,
    suggestedActions: [
      {
        type : 'reply',
        value: 'Oh, really?'
      },
      {
        type : 'reply',
        value: 'Thanks, but this is boring.'
      }
    ],
    timestamp       : new Date(),
    text            :
      "Hello, this is a demo bot. I'm not lex."
  }
]
 */

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
    case types.ADD_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            author: action.author,
            timestamp: new Date(),
            text: action.message,
          }
        ]
      }

    /* --- Session ------------------------------------ */
    case types.SESSION_START_REQUEST:
      return {
        ...state,
        bot: {
          id: action.id,
          name: action.bot
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
