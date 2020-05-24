import * as types from './types'

export const addMessage = (
  timestamp,
  message,
  author
) => ({
  type     : types.ADD_MESSAGE,
  timestamp: timestamp,
  text     : message,
  ...(author && { author: author })
})

