import lex, { msgUtils }  from '@services/AWS_Lex'
import { canvasActions }  from '@state/modules/canvas'
import { messageActions } from '@state/modules/messages'
import * as types         from './types'
import { uuid }           from 'uuidv4'

const bot = {
  id: 0,
  name: process.env.BOT_NAME
}

const user = {
  id: 1,
  session_id: uuid()
}

export const startSession = () => {
  const request = (name, alias) => ({ type: types.SESSION_START_REQUEST, name, alias })
  const success = response => ({ type: types.SESSION_START_SUCCESS, response })
  const failure = error => ({ type: types.SESSION_START_FAILURE, error })

  const params = {
    botAlias    : process.env.BOT_ALIAS,
    botName     : process.env.BOT_NAME,
    userId      : user.session_id,
    accept      : 'text/plain; charset=utf-8',
    dialogAction: {
      type      : 'Delegate',
      intentName: process.env.BOT_START_INTENT
    }
  }

  return dispatch => {
    dispatch(request(params.botName, params.botAlias))

    return lex._startSession(params)
              .then(lexResponse => {
                dispatch(success(lexResponse))

                const messages = msgUtils.parseMessage(lexResponse)
                messages.forEach(msg => dispatch(messageActions.addMessage(bot, msg, new Date())))
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
    userId   : user.session_id
  }

  return dispatch => {
    dispatch(request(true))
    dispatch(messageActions.addMessage(message.author, message.text, message.timestamp))

    // send message to Lex
    return lex._postText(lexMessage)
              .then(lexResponse => {
                dispatch(success(lexResponse))

                const messages = msgUtils.parseMessage(lexResponse)
                messages.forEach(msg => dispatch(messageActions.addMessage(bot, msg, new Date())))

                console.log(lexResponse)

                // adds session attributes to store.lex.latestData
                if (lexResponse.sessionAttributes !== undefined) {
                  console.log('firing')
                  dispatch(canvasActions.addData(lexResponse))
                }
              }, error => dispatch(failure(error)))
  }
}
