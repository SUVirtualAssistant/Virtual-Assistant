import { getMessageTime }           from '@shared/utils/date-time'
import PropTypes                    from 'prop-types'
import React, { useEffect, useRef } from 'react'
import styled, { css }              from 'styled-components'

const MessageTime = styled.time`
  opacity: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: opacity .2s ease-in-out;

  font-size: smaller;
  line-height: normal;
  white-space: nowrap;
  pointer-events: none;
  position: absolute;

  text-transform: uppercase;
`

const Bubble = styled.div`
  border-radius: ${({ theme }) => theme.chat.bubble_border_radius};
  padding: ${({ theme }) => theme.chat.bubble_padding_y} ${({ theme }) => theme.chat.bubble_padding_x};
  line-height: ${({ theme }) => theme.chat.bubble_line_height};
  word-wrap: break-word;

  color: ${props => props.user ? props.theme.colors.chat.user_bubble_text : props.theme.colors.chat.bubble_text};
  background: ${props => props.user ? props.theme.colors.chat.user_bubble_bg : props.theme.colors.chat.bubble_bg};
  border: ${props => props.user ? props.theme.colors.chat.user_bubble_border : props.theme.colors.chat.bubble_border} 1px solid;
`

const ChatMessage = styled.div`
  max-width: 100%;
  margin: 2px 0 0;
  position: relative;
  transition: margin .2s ease-in-out;
  outline: none;

  ${props => props.selected && css`
    margin-bottom: ${({ theme }) => theme.chat.item_spacing_y};
    border: 0;
    color: inherit;
    background: none;

    ${MessageTime} { opacity: 1; }
  `}
`

const Message = ({ item, user, selected, onRequestSelection, tabbable, isFirstItemInGroup, isLastItemInGroup, isOnlyItemInGroup }) => {
  const elementToFocus = useRef(null)

  useEffect(() => {
    if (selected) {
      elementToFocus.current.focus()
      console.log(selected)
    }

  }, [selected])

  const only = isOnlyItemInGroup
  const first = isFirstItemInGroup && !isOnlyItemInGroup
  const last = isLastItemInGroup && !isOnlyItemInGroup

  const getTimestampView = (timestamp, selected) => timestamp
                                                    ? <MessageTime
                                                      aria-hidden={!selected}>{getMessageTime(timestamp)}</MessageTime>
                                                    : null

  const getMainView = (user, text) => text ? <Bubble user={user}>{text}</Bubble> : null

  return (
    <ChatMessage isOnly={only} isFirst={first} isLast={last}
                 user={user} className={user ? 'mine' : ''}
                 tabIndex={tabbable ? 0 : -1} selected={selected}
                 onClick={() => onRequestSelection(item.selectionIndex)}
                 onFocus={() => onRequestSelection(item.selectionIndex)}
                 ref={elementToFocus}>
      {getTimestampView(item.timestamp, selected)}
      {getMainView(user, item.text)}
    </ChatMessage>
  )
}

Message.propTypes = {
  isFirstItemInGroup: PropTypes.bool.isRequired,
  isLastItemInGroup : PropTypes.bool.isRequired,
  isOnlyItemInGroup : PropTypes.bool.isRequired,
  item              : PropTypes.object.isRequired,
  onRequestSelection: PropTypes.func.isRequired,
  selected          : PropTypes.bool.isRequired,
  tabbable          : PropTypes.bool.isRequired
}

export default Message
