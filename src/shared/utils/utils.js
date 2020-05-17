export const isAuthor = (user, msg) => user && msg.author && user.id === msg.author.id

