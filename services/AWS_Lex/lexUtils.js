import { hasJsonStructure } from '@shared/utils'
import _                    from 'lodash'

export const parse = msg => ({
  _intent     : _.get(msg, 'intentName', {})
                 .split('_')[0],
  
  _dialogState: _.get(msg, 'dialogState'),
  
  _message    : hasJsonStructure(msg.message) ? JSON.parse(msg.message).messages
                                                    .map(m => m['value'])
                                              : [msg.message],
  ...(msg.sessionAttributes && {
    _sessionAttributes: _.mapValues(
      JSON.parse(_.get(msg.sessionAttributes, `data`)),
      x => {
        try {
          return JSON.parse(x)
        } catch(e) {
          return x
        }
      }
    )
  })
})
