export const parseMessage = message => {
  let results = []
  try {
    const msg = JSON.parse(message).messages

    let msgCount = msg.length
    if (msgCount > 1)
      for (let i = 0; i < msgCount; i++)
        results.push(msg[i]['value'])
    else
      results = msg[0]['value']
  } catch {
    results = [message]
  }
  return results
}

export const parseData = data => {
  const parsedData = Object.values(data.sessionAttributes)
  const arr = []
  parsedData.forEach(el => arr.push(JSON.parse(el)))
  return arr
}

export const wrapMessage = text => ({
  botAlias : '$LATEST',
  botName  : process.env.BOT_NAME,
  inputText: text,
  userId   : 'user'
})
