import lex, { msgUtils } from '@services/AWS_Lex'
import { messageActions }   from '@state/modules/messages'
import { canvasActions } from '@state/modules/canvas'
import * as types        from './types'

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
                messages.forEach(msg => dispatch(messageActions.addMessage({ id: 0 }, msg, new Date())))
              }, error => dispatch(failure(error)))
  }
}

export const sendMessage = message => {
  const request = status => ({ type: types.MESSAGE_SEND_REQUEST, status })
  const success = response => ({ type: types.MESSAGE_SEND_SUCCESS, response })
  const failure = error => ({ type: types.MESSAGE_SEND_FAILURE, error })

  const lexMessage = {
    botAlias : process.env.BOT_VERSION,
    botName  : process.env.BOT_NAME,
    inputText: message.text,
    userId   : 'user'  // fixme: create a better userID
  }

  return dispatch => {
    dispatch(request(true))
    dispatch(messageActions.addMessage(message.author, message.text, message.timestamp))

    // send message to Lex
    return lex._postText(lexMessage)
              .then(message => {
                dispatch(success(message))

                const messages = msgUtils.parseMessage(message.message)
                messages.forEach(msg => dispatch(messageActions.addMessage({ id: 0 }, msg, new Date())))

                // adds session attributes to store.lex.latestData
                if (message.sessionAttributes !== null && (message.dialogState === 'Fulfilled'))
                  dispatch(canvasActions.addData(message))

              }, error => dispatch(failure(error)))
  }
}
