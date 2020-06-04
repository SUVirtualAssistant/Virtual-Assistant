import * as chatActionTypes from './types'

export default (
  state = {
    messages          : [],
    selectedItemIndex : undefined,
    lastSelectionIndex: undefined
  },
  action
) => {
  switch (action.type) {
    case chatActionTypes.ADD_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            timestamp: action.timestamp,
            text     : action.text,
            author   : action.author
          }
        ]
      }
    case chatActionTypes.SET_SELECTED_ITEM:
      return {
        ...state,
        selectedItemIndex: action.selectedItemIndex
      }
    default:
      return state
  }
}

