import { hasJsonStructure } from '@shared/utils'

export const parseData = data => {
  return data &&
    Object.values(data)
          .map(elem => JSON.parse(elem))
}

export const parseMessage = response => {
  const message = response.message
  
  return hasJsonStructure(message)
         ? JSON.parse(message).messages
               .map(msg => msg['value'])
         : [message]
}

