export const isAuthor = (user, msg) => user && msg.author && user.id === msg.author.id

export const formatString = (format) => {
  const formatRegExp = /{(\d+)}/g
  const values = arguments

  return format.replace(formatRegExp, (match, index) =>
    values[parseInt(index, 10) + 1]
  )
}

