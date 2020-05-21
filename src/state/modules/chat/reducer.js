import * as types from './types'

/*
 [
 }
 ],
 lastSelectionIndex: 3
 */

export default (
  state = [],
  { type, ...payload }
) => {
  switch (type) {
    case types.ADD_MESSAGE:
      const { author, text, timestamp } = payload
      return [
        ...state,
        { author, text, timestamp }
      ]
    default:
      return state
  }
}

