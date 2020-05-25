import lex, { lexUtils } from '@services/AWS_Lex'
import { canvasActions } from '@state/modules/canvas'
import { chatActions }   from '@state/modules/chat'
import { lexActions }    from 'src/state/modules/lex/index'
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

export const getSessionDetails = () =>
  dispatch =>
    lex._getSessionDetails({ userId: user.session_id })
       .then(response =>
               dispatch({ type: types.SESSION_DETAILS, response }),
             err => console.log(err))

export const startSession = () => {
  const request = (name, alias) => ({ type: types.SESSION_START_REQUEST, name, alias })
  const success = response => ({ type: types.SESSION_START_SUCCESS, response })
  const failure = error => ({ type: types.SESSION_START_FAILURE, error })
  
  const params = {
    userId      : user.session_id,
    dialogAction: {
      type      : 'Delegate',
      intentName: process.env.NEXT_PUBLIC_BOT_START_INTENT
    }
  }
  
  return dispatch => {
    dispatch(request(bot.name, bot.alias))
    
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
    inputText: message.text,
    userId   : user.session_id
  }
  
  return dispatch => {
    dispatch(request(true))
    dispatch(chatActions.addMessage(message.timestamp, message.text, user))
    
    return lex._postText(lexMessage)
              .then(lexResponse => {
                dispatch(success(lexResponse))
      
                const messages = lexUtils.parseMessage(lexResponse)
                messages.forEach(msg => dispatch(chatActions.addMessage(new Date(), msg, bot)))
      
                if (lexResponse.sessionAttributes !== undefined && lexResponse.dialogState === 'Fulfilled')
                  try         { dispatch(canvasActions.addData(lexResponse)) }
                  catch (err) { console.error(err)                           }
                
                dispatch(lexActions.getSessionDetails())
              }, error => dispatch(failure(error)))
  }
}
