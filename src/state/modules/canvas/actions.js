import { lexUtils } from '@services/AWS_Lex'
import * as types   from './types'

let dataIndex = 0

export const addData = lexResponse => {
  const view = lexResponse.intentName.split('_')[0]
  const data = lexUtils.parseData(lexResponse.sessionAttributes)
  
  return {
    type: types.ADD_DATA,
    view,
    name: view + '_' + dataIndex++,
    data
  }
}
