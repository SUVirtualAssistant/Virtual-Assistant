import lex, { msgUtils } from '@services/AWS_Lex'
import * as types        from './types'

export const _addMessage = (author, message, timestamp) => ({
  type: 'ADD_MESSAGE',
  author,
  message,
  timestamp
})

export const startSession = (botName, userName) => {
  const request = (name, version) => ({ type: types.SESSION_START_REQUEST, name, version })
  const success = response => ({ type: types.SESSION_START_SUCCESS, response })
  const failure = error => ({ type: types.SESSION_START_FAILURE, error })

  const params = {
    botAlias    : process.env.BOT_VERSION,
    botName     : botName,
    userId      : userName,
    accept      : 'text/plain; charset=utf-8',
    dialogAction: {
      type      : 'Delegate',
      intentName: 'Greeting'
    }
  }

  return dispatch => {
    dispatch(request(botName, process.env.BOT_VERSION))

    return lex._startSession(params)
              .then(message => {
                  dispatch(success(message))

                  const messages = msgUtils.parseMessage(message.message)
                  messages.forEach(msg => dispatch(_addMessage({ id: 0 }, msg, new Date())))
                  // dispatch(addMessage({ id: 0, name: 'Mercury' }, message.message ))

                }, error => dispatch(failure(error)))
  }
}

export const sendMessage = message => {
  const request = status => ({ type: types.MESSAGE_SEND_REQUEST, status })
  const success = response => ({ type: types.MESSAGE_SEND_SUCCESS, response })
  const failure = error => ({ type: types.MESSAGE_SEND_FAILURE, error })

  return dispatch => {
    const lexMessage = {
      botAlias : process.env.BOT_VERSION,
      botName  : process.env.BOT_NAME,
      inputText: message.text,
      userId   : 'user'  // fixme: create a better userID
    }

    dispatch(request(true))
    dispatch(_addMessage(message.author, message.text, message.timestamp))        // add user message

    // send message to Lex
    return lex._postText(lexMessage)
              .then(message => {
                  dispatch(success(message))
                  dispatch(_addMessage({ id: 0 }, message.message, new Date()))
                }, error => dispatch(failure(error)))
  }
}

// TODO: create an action-creator for altering conversation flow
//       i.e. changing the current intent or ending the session
//       You'll want to separate out the message reducers from
//       the lex state to separate concerns. While they relate to
//       Lex, they're really just formatting actions.
