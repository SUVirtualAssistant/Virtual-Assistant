import { msgUtils } from '@services/AWS_Lex'
import * as types   from './types'

export const addData = message => {
  const currIntent = message.intentName.split('_')[0]

  const data = msgUtils.parseData(message.sessionAttributes)

  return ({
    type: types.ADD_DATA,
    index: 0,
    intentName: message.intentName,
    data
    // name: currIntent + ' ' + new Date(),
    // data: dataObj
  })
}

export const _removeData = item => {
  return ({
    type : types.REMOVE_DATA,
    index: item.index,
    name : item.name
  })
}

