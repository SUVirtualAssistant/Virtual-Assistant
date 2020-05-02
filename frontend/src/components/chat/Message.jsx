import { classNames }                         from '@shared/utils/classNames'
import { getMessageTime }                     from '@shared/utils/date-time'
import React, { useEffect, useRef, useState } from 'react'

const getTimestampView = props => {
  let result = null
  if (props.item.timestamp)
    result = <time aria-hidden={!props.selected}>{getMessageTime()}</time>

  return result
}

const getStatusView = props => {
  let result = null
  if (props.item.status)
    result = <span>{props.item.status}</span>

  return result
}

const Message = props => {
  const [selected, setSelected] = useState(false)

  const toggleSelected = () => {
    setSelected(!selected)
  }

  const messageRef = useRef(null)

  useEffect(() => {
    if (selected) {
      messageRef.current.focus()
    }
  }, [selected])

  const getClassNames = ({ isFirstItemInGroup, isLastItemInGroup, selected, isOnlyItemInGroup }) => {
    return classNames({ 'k-only': isOnlyItemInGroup}, { 'k-first': isFirstItemInGroup && !isOnlyItemInGroup}, { 'k-last': isLastItemInGroup && !isOnlyItemInGroup}, { 'k-state-focused': selected}, 'k-message')
  }

  return (
    <div
      className={getClassNames(props)}
      tabIndex={props.tabbable ? 0 : -1}
      onClick={() => setSelected(true)}
      onFocus={() => setSelected(true)}
   />
  )
}
