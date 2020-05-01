import { combineReducers } from 'redux'
import lexReducer          from './lex'
import messagesReducer     from './messages'

export default combineReducers({
  lex     : lexReducer,
  messages: messagesReducer
})

