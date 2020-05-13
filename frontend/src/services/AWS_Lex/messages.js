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

// TODO: make this more robust
export const parseData = data => {
  const parsedData = Object.values(data)

  return parsedData.reduce((arr, elem) => {
    arr.push(JSON.parse(elem))
    return arr
  }, [])
}
