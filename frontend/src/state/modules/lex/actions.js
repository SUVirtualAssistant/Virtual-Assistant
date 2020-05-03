import lex, { msgUtils } from '@services/AWS_Lex'
import * as types        from './types'

export const addMessage = (author, message) => ({
  type: 'ADD_MESSAGE',
  author,
  message
})

export const startSession = params => {
  const request = (id, bot) => ({ type: types.SESSION_START_REQUEST, id, bot })
  const success = response => ({ type: types.SESSION_START_SUCCESS, response })
  const failure = error => ({ type: types.SESSION_START_FAILURE, error })

  return dispatch => {
    dispatch(request(0, params.botName))

    return lex._startSession(params)
              .then(message => {
                  dispatch(success(message))

                  const messages = msgUtils.parseMessage(message.message)
                  messages.forEach(msg => dispatch(addMessage({ id: 0, name: params.botName }, msg)))
                  // dispatch(addMessage({ id: 0, name: 'Mercury' }, message.message ))
                },
                error => dispatch(failure(error))
              )
  }
}

export const sendMessage = text => {
  const request = status => ({ type: types.MESSAGE_SEND_REQUEST, status })
  const success = response => ({ type: types.MESSAGE_SEND_SUCCESS, response })
  const failure = error => ({ type: types.MESSAGE_SEND_FAILURE, error })

  return dispatch => {

    const message = {
      botAlias: '$LATEST',
      botName: process.env.BOT_NAME,
      inputText: text,
      userId: 'user'
    }

    // set sendingMessage to true
    dispatch(request(true))

    // add user message
    dispatch(addMessage({ id: 1, name: 'user' }, text))

    return lex._postText(message).then(
      message => {
        dispatch(success(message))
        console.log(message)

        dispatch(addMessage({ id: 0, name: 'Mercury' }, message.message ))
      },
      error => dispatch(failure(error))
    )
  }
}
