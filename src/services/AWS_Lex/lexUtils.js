import { hasJsonStructure } from '@shared/utils'

export const parseData = data => {
  return hasJsonStructure(data[0])
         ? Object.values(data)
                 .map(elem => JSON.parse(elem))
         : data
}

export const parseMessage = response => {
  const message = response.message
  
  return hasJsonStructure(message)
         ? JSON.parse(message).messages
               .map(msg => msg['value'])
         : [message]
}

