import * as types from './types'

/**
 * I have an array of messages
 * a new message comes in, i need to add it to the array
 * if it is a lex message, they come all at once, but I still need to
 * add it to a group.
 *
 * each group has:
 *    author -> obj
 *    messages -> arr
 *    timestamp -> arr
 *    type -> "message-group"
 *
 * msgs -> array of message groups
 *
 * 1. msgs.map((group, index) => <MessageGroup group={group}/>
 * 2. group.messages.map((msg, index) => [ <message item={msg}
 *
 */

export const addMessage = (timestamp, message, author) => {
  
  return {
    type: types.ADD_MESSAGE,
    timestamp: timestamp,
    text: message,
    ...(author && { author: author })
  }
}
