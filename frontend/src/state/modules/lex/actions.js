import lex, { msgUtils }          from '@services/AWS_Lex'
import { convertMsgsToViewItems } from '@shared/utils/view-items'
import * as types                 from './types'

const _addMessage = (author, message, timestamp) => ({
  type: 'ADD_MESSAGE',
  author,
  message,
  timestamp
})

const _addData = data => ({
  type: types.ADD_DATA,
  data
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
    dispatch(_addMessage(message.author, message.text, message.timestamp))        // add user message

    // send message to Lex
    return lex._postText(lexMessage)
              .then(message => {
                dispatch(success(message))

                const messages = msgUtils.parseMessage(message.message)
                messages.forEach(msg => dispatch(_addMessage({ id: 0 }, msg, new Date())))

                // adds session attributes to store.lex.latestData
                if (message.sessionAttributes !== null) {
                  const data = Object.values(message.sessionAttributes)
                  const arr = []
                  data.forEach(el => arr.push(JSON.parse(el)))
                  dispatch(_addData(arr))
                }
                // dispatch(_addData(Object.values(message.sessionAttributes)))
                // dispatch(_addData(message.sessionAttributes))

              }, error => dispatch(failure(error)))
  }
}

// TODO: create an action-creator for altering conversation flow
//       i.e. changing the current intent or ending the session
//       You'll want to separate out the message reducers from
//       the lex state to separate concerns. While they relate to
//       Lex, they're really just formatting actions.
