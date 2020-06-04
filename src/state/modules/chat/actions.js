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

export const setSelectedItem = idx => ({
  type: types.SET_SELECTED_ITEM,
  selectedItemIndex: idx
})


