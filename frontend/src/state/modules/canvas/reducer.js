import * as types  from './types'

export default (state = {}, action) => {
  switch (action.type) {
    case types.ADD_DATA:
      return {
        ...state,
        [action.name]: {
          intent: action.intentName,
          data: action.data
        }
      }
    default:
      return state
  }
}
