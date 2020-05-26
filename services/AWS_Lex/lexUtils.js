import { hasJsonStructure } from '@shared/utils'
import _                    from 'lodash'

// export const parseData = data => {
//   return hasJsonStructure(data[0])
//     ? Object.values(data)
//     .map(elem => JSON.parse(elem))
//     : data
// }
//
// export const parseMessage = response => {
//   parse(response)
//   const message = response.message
//
//   return hasJsonStructure(message)
//     ? JSON.parse(message).messages
//     .map(msg => msg['value'])
//     : [message]
// }

const parseM = (msg, val) => {
  return _.mapValues(
    _.get(msg, val, {}),
    x => {
      try {
        return JSON.parse(x)
      } catch (e) {
        return x
      }
    }
  )
}

export const parse = msg => ({
  _intent     : _.get(msg, 'intentName', {})
                 .split('_')[0],
  _dialogState: _.get(msg, 'dialogState'),
  _message    : hasJsonStructure(msg.message) ? JSON.parse(msg.message).messages
                                                    .map(m => m['value'])
                                              : [ msg.message ],
  ...(msg.sessionAttributes &&
    { _sessionAttributes: _.mapValues(
      _.get(msg, 'sessionAttributes', {}),
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


/**
 * lexUtils.parseMessage
 *
 * 1. send the whole message
 * 2. parse messages
 * 3. grab intent
 * 4. parse data if there is any
 * 5. combine into object to send back
 */

