import * as types from './types'

let dataIndex = 0

export const addData = data => ({
  type: types.ADD_DATA,
  view: data._intent,
  name: data._intent + '_' + dataIndex++,
  data: data._sessionAttributes
})
