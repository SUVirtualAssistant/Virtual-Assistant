import { INTENTS } from '@shared/constants'
import { types }   from './types'

const initialState = {
  data: null,
  activeTab    : null,
  tabs         : [
    {
      tabId : 0,
      intent: INTENTS.GREETING,
      data  : {}
    }
  ],
  prevActiveTab: {},
  tabsElements : null
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
