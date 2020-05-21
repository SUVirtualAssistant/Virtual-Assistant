import _            from 'lodash'
import { isAuthor } from '.'

const last = arr => arr[arr.length - 1]

const dateChanged = (curr, prev) =>
  (curr && prev) &&
  (prev.getDate() !== curr.getDate()
    || prev.getMonth() !== curr.getMonth()
    || prev.getFullYear() !== curr.getFullYear())

const addDateMarker = (arr, msg) => {
  const timestamp = msg.timestamp
  const lastItem = last(arr)

  if (!timestamp)
    return

  if (!lastItem || dateChanged(timestamp, lastItem.timestamp)) {
    const dateMarker = {
      type     : 'date-marker',
      timestamp: timestamp,
      trackBy  : timestamp.getTime()
    }

    arr.push(dateMarker)
  }
}

const groupMessages = (arr, msg) => {
  const lastItem = last(arr)
  let messages = undefined
  
  if (lastItem && lastItem.type === 'message-group')
    messages = lastItem.messages
  
  // TODO This is where they combine messages
  if (messages && isAuthor(msg.author, last(messages))) {
    messages.push(msg)
  } else {
    // TODO otherwise add to group message array
    arr.push({
      type     : 'message-group',
      messages : [msg],
      author   : msg.author,
      timestamp: msg.timestamp,
      trackBy  : msg
    })
  }
}

const groupItems = total => (arr, msg, index) => {
  const isLastMessage = index === total - 1
  
  // addDateMarker(arr, msg)
  groupMessages(arr, msg, isLastMessage)
  
  return arr
}

const assignSelectionIndices = viewItems => {
  let selectionCounter = 0
  
  viewItems.forEach(viewItem =>
    viewItem.type === 'message-group'
      ? viewItem.messages.forEach(msg =>
          msg.selectionIndex = selectionCounter++)
      : viewItem.selectionIndex = selectionCounter++
  )
  
  viewItems.lastSelectionIndex = selectionCounter - 1
}

export const convertMsgsToViewItems = messages => {
  const msgs = _.cloneDeep(messages)    // Need to make a deep copy to avoid altering the store.
  
  let result = msgs.reduce(groupItems(msgs.length), [])
  
  assignSelectionIndices(result)
  return result
}
