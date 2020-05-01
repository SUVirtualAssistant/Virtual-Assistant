import * as types from 'src/state/modules/chat/messages/types'

const addMessage = (message, sender, senderId) => ({
  type: types.ADD_MESSAGE,
  message,
  sender,
  senderId
})
