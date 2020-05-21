import lex, { lexUtils } from '@services/AWS_Lex'
import { canvasActions } from '@state/modules/canvas'
import { chatActions }   from '@state/modules/chat'
import { uuid }          from 'uuidv4'
import * as types        from './types'

const bot = {
  id   : 0,
  name : process.env.NEXT_PUBLIC_BOT_NAME,
  alias: process.env.NEXT_PUBLIC_BOT_ALIAS
}

const user = {
  id        : 1,
  session_id: uuid()
}

export const startSession = () => {
  const request = (name, alias) => ({ type: types.SESSION_START_REQUEST, name, alias })
  const success = response => ({ type: types.SESSION_START_SUCCESS, response })
  const failure = error => ({ type: types.SESSION_START_FAILURE, error })
  
  const params = {
    botAlias    : process.env.NEXT_PUBLIC_BOT_ALIAS,
    botName     : process.env.NEXT_PUBLIC_BOT_NAME,
    userId      : user.session_id,
    accept      : 'text/plain; charset=utf-8',
    dialogAction: {
      type      : 'Delegate',
      intentName: process.env.NEXT_PUBLIC_BOT_START_INTENT
    }
  }
  
  return dispatch => {
    dispatch(request(params.botName, params.botAlias))
    
    return lex._startSession(params)
              .then(lexResponse => {
                dispatch(success(lexResponse))
      
                const messages = lexUtils.parseMessage(lexResponse)
                messages.forEach(msg => dispatch(chatActions.addMessage(new Date(), msg, bot)))
              }, error => dispatch(failure(error)))
  }
}

export const sendMessage = message => {
  const request = status => ({ type: types.MESSAGE_SEND_REQUEST, status })
  const success = response => ({ type: types.MESSAGE_SEND_SUCCESS, response })
  const failure = error => ({ type: types.MESSAGE_SEND_FAILURE, error })
  
  const lexMessage = {
    botAlias : bot.alias,
    botName  : bot.name,
    inputText: message.text,
    userId   : user.session_id
  }
  
  return dispatch => {
    dispatch(request(true))
    dispatch(chatActions.addMessage(message.timestamp, message.text, user))
    
    // send message to Lex
    return lex._postText(lexMessage)
              .then(lexResponse => {
                dispatch(success(lexResponse))
      
                const messages = lexUtils.parseMessage(lexResponse)
                messages.forEach(msg => dispatch(chatActions.addMessage(new Date(), msg, bot)))
      
                // adds session attributes to store.lex.latestData
                if (lexResponse.sessionAttributes !== undefined && lexResponse.dialogState === 'Fulfilled')
                  try {
                    dispatch(canvasActions.addData(lexResponse))
                  } catch (err) { console.error(err) }
              }, error => dispatch(failure(error)))
  }
}
