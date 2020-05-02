import lex, { msgUtils } from '@services/AWS_Lex'
import * as types        from './types'

export const addMessage = (message, sender, senderId) => ({
  type: 'ADD_MESSAGE',
  message,
  sender,
  senderId
})

export const startSession = params => {
  const request = bot => ({ type: types.SESSION_START_REQUEST, bot })
  const success = response => ({ type: types.SESSION_START_SUCCESS, response })
  const failure = error => ({ type: types.SESSION_START_FAILURE, error })

  return dispatch => {
    dispatch(request(params.botName))

    return lex._startSession(params)
              .then(message => {
                  dispatch(success(message))

                  const messages = msgUtils.parseMessage(message.message)
                  messages.forEach(msg => dispatch(addMessage(msg, params.botName, 0)))
                },
                error => dispatch(failure(error))
              )
  }
}

export const sendMessage = params => {
  const request = status => ({ type: types.MESSAGE_SEND_REQUEST, status })
  const success = response => ({ type: types.MESSAGE_SEND_SUCCESS, response })
  const failure = error => ({ type: types.MESSAGE_SEND_FAILURE, error })

  return dispatch => {
    // set sendingMessage to true
    dispatch(request(true))

    // add user message
    dispatch(addMessage(params.inputText, params.userId, 1))

    return lex._postText(params).then(
      message => {
        dispatch(success(message))
        dispatch(addMessage(message.message, 'Mercury', 0))
      },
      error => dispatch(failure(error))
    )
  }
}
