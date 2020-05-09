import * as types from './types'

export const addMessage = (author, message, timestamp) => ({
  type: types.ADD_MESSAGE,
  author,
  message,
  timestamp
})

export const addData = data => ({
  type: types.ADD_DATA,
  data
})
