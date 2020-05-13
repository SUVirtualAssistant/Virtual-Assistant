import * as types  from './types'

export default (state = [], action) => {
  switch (action.type) {
    case types.ADD_DATA:
      return [
        ...state,
        {
          index: action.index,
          intent: action.intentName,
          data: action.data
        }
        // [action.name]: action.data
      ]
    default:
      return state
  }
}
