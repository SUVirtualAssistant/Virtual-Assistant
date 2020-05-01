import { classNames } from './classNames'
import { Keys } from './keys'

const isAuthor = (user, msg) => user && msg.author && user.id === msg.author.id

export { classNames, isAuthor, Keys }