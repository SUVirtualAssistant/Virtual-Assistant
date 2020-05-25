import * as types from './types'

const initialState = {
  menu_visible: false
}

export default (
  state = initialState,
  action
) => {
  switch (action.type) {
    case types.TOGGLE_MENU:
      return {
        ...state,
        menu_visible: action.visibility
      }
    default:
      return state
  }
}
