import { isAuthor } from './utils'

const last = arr => arr[arr.length - 1]

const dateChanged = (curr, prev) =>
  (curr && prev)
  && (prev.getDate() !== curr.getDate()
  || prev.getMonth() !== curr.getMonth()
  || prev.getFullYear() !== curr.getFullYear())

const addDateMarker = (acc, msg) => {
  const timestamp = msg.timestamp
  const lastItem = last(acc)
  if (!timestamp)
    return

  if (!lastItem || dateChanged(timestamp, lastItem.timestamp)) {
    const dateMarker = {
      type: 'date-marker',
      timestamp: timestamp,
      trackBy: timestamp.getTime()
    }
    acc.push(dateMarker)
  }
}

const groupMessages = (acc, msg, isLastMessage) => {
  const lastItem = last(acc)
  let messages = undefined
  if (msg.typing && !isLastMessage)
    return

  if (lastItem && lastItem.type === 'message-group')
    messages = lastItem.messages

  if (messages && isAuthor(msg.author, last(messages)))
    messages.push(msg)
  else
    acc.push({
      type: 'message-group',
      messages: [msg],
      author: msg.author,
      timestamp: msg.timestamp,
      trackBy: msg
    })
}

const groupItems = total => (acc, msg, index) => {
  const isLastMessage = index === total - 1

  addDateMarker(acc, msg)
  groupMessages(acc, msg, isLastMessage)

  return acc
}

const assignSelectionIndices = viewItems => {
  let selectionCounter = 0
  viewItems.forEach(viewItem => {
    if (viewItem.type === 'message-group')
      viewItem.messages.forEach(msg => {
        msg.selectionIndex = selectionCounter++
      })
  })
  viewItems.lastSelectionIndex = selectionCounter - 1
}

const convertMsgsToViewItems = messages => {
  const result = messages.reduce(groupItems(messages.length), [])

  assignSelectionIndices(result)

  return result
}

export default convertMsgsToViewItems
