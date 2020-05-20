const isAuthor = (user, msg) => user && msg.author && user.id === msg.author.id

const capitalizeWords = str => str.replace(/\w\S*/g, text => text.charAt(0).toUpperCase() + text.substr(1).toLowerCase())

export {
  isAuthor,
  capitalizeWords
}
