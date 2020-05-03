export const parseMessage = message => {
  const msg = JSON.parse(message).messages

  return Object.keys(msg).map((e) => msg[e].value)
}

export const wrapMessage = text => ({
  botAlias: '$LATEST',
  botName: process.env.BOT_NAME,
  inputText: text,
  userId: 'user'
})
