import { isAuthor } from './utils'

const last = arr => arr[arr.length - 1]

const dateChanged = (curr, prev) => {
  return (curr && prev) && (prev.getDate() !== curr.getDate() ||
    prev.getMonth() !== curr.getMonth() ||
    prev.getFullYear() !== curr.getFullYear())
}

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

const groupMessages = (arr, msg, isLastMessage) => {
  const lastItem = last(arr)
  let messages = undefined

  if (msg.typing && !isLastMessage)
    return

  if (lastItem && lastItem.type === 'message-group')
    messages = lastItem.messages

  if (messages && isAuthor(msg.author, last(messages))) {
    messages.push(msg)
  } else {
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

  addDateMarker(arr, msg)
  groupMessages(arr, msg, isLastMessage)

  // if (msg.suggestedActions && isLastMessage) {
  //   arr.push({
  //     type     : 'action-group',
  //     actions  : msg.suggestedActions,
  //     timestamp: msg.timestamp,
  //     trackBy  : msg
  //   })
  // }
  return arr
}

function assignSelectionIndices(viewItems) {
  let selectionCounter = 0

  viewItems.forEach(viewItem => {
    if (viewItem.type === 'message-group') {
      viewItem.messages.forEach(msg => {
        msg.selectionIndex = selectionCounter++
      })
    } else if (viewItem.type === 'action-group') {
      viewItem.selectionIndex = selectionCounter++
    }
  })

  viewItems.lastSelectionIndex = selectionCounter - 1
}

// TODO: Move this out of the Chat component and call it in a message action-creator
export const convertMsgsToViewItems = (messages) => {
  let result = messages.reduce(groupItems(messages.length), [])
  assignSelectionIndices(result)
  return result
}
