import { INTENTS } from '@shared/constants'
import * as types  from './types'

const initialState = {
  activeIndex: null,
  tabs       : [
    {
      tabId : 0,
      title : '',
      intent: INTENTS.GREETING,
      data  : {}
    }
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TAB:
      return {
        ...state,
        tabs: [
          ...state.tabs,
          action.tab
        ]
      }

    case types.CHANGE_TAB:
      return {
        ...state,
        activeTab: action.tab
      }

    case types.REMOVE_TAB:
      return {
        ...state
      }
    default:
      return state
  }
}
