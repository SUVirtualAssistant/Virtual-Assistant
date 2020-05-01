export const parseMessage = message => {
  const msg = JSON.parse(message).messages

  return Object.keys(msg).map((e) => msg[e].value)
}
