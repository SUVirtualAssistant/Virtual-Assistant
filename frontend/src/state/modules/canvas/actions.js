import { dataUtils } from '@services/AWS_Lex'
import * as types   from './types'

let dataIndex = 0

export const addData = lexResponse => {
  // TODO: rename this
  // TODO: map state
  const intent = lexResponse.intentName.split('_')[0] + "-" + dataIndex++

  const data = dataUtils.parseData(lexResponse.sessionAttributes)

  return ({
    type: types.ADD_DATA,
    name: intent,
    intentName: lexResponse.intentName,
    data
  })
}

export const _removeData = item => {
  return ({
    type : types.REMOVE_DATA,
    index: item.index,
    name : item.name
  })
}

