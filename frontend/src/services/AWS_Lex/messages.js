const hasJsonStructure = str => {
  if (typeof str !== 'string') return false

  try {
    const result = JSON.parse(str)
    const type = Object.prototype.toString.call(result)

    return type === '[object Object]'
        || type === '[object Array]'
  } catch (err) {
    return false
  }
}

export const parseMessage = response => {
  const message = response.message

  if (hasJsonStructure(message)) {
    const testMsg = JSON.parse(message).messages

    return testMsg.reduce((arr, msg) => {
      arr.push(msg['value'])
      return arr
    }, [])
  } else {
    return [message]
  }
}

