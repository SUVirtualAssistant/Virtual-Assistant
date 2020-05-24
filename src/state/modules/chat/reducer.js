import * as chatActionTypes from './types'

export default (
  state = [],
  action
) => {
  switch (action.type) {
    case chatActionTypes.ADD_MESSAGE:
      return [
        ...state,
        {
          timestamp: action.timestamp,
          text: action.text,
          author: action.author
        }
      ]
    default:
      return state
  }
}

