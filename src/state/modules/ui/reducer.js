import * as types from './types'

export default (
  state = {
    menu_visible: false
  },
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
