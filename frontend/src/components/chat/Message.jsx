import { getMessageTime }           from '@shared/utils/date-time'
import PropTypes                    from 'prop-types'
import React, { useEffect, useRef } from 'react'
import styled, { css }              from 'styled-components'

const MsgTime = styled.time`
  color: ${({ theme }) => theme.colors.chat.text};
  font-size: smaller;
  line-height: normal;
  white-space: nowrap;
  pointer-events: none;
  position: absolute;
  opacity: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: opacity .2s ease-in-out;
`

const Msg = styled.div`
  max-width: 100%;
  margin: ${({ theme }) => theme.chat.bubble_spacing} 0 0;
  position: relative;
  transition: margin .2s ease-in-out;
  outline: none;

  ${props => props.selected
      ? css`
        margin-bottom: ${({ theme }) => theme.chat.item_spacing_y};
        border: 0;
        color: inherit;
        background: none;

          ${MsgTime} {
            opacity: 1;
          }`
      : css` ` }

`

const MsgText = styled.div`
  // border radius
  padding: ${({ theme }) => theme.chat.bubble_padding_y} ${({ theme }) => theme.chat.bubble_padding_x};
  position: relative;

  color: black;
  border-width: 1px;
  border-style: solid;
  line-height: ${({ theme }) => theme.chat.bubble_line_height};
  word-wrap: break-word;


  &:hover {
    box-shadow: ${({ theme }) => theme.colors.chat.bubble_hover_shadow};
  }

  ${props => props.user ? css`
    color: ${({ theme }) => theme.colors.chat.alt_bubble_text};
    background: ${({ theme }) => theme.colors.chat.alt_bubble_bg};
    border: ${({ theme }) => theme.colors.chat.alt_bubble_border};
  ` : ` `
  }
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
                                                    ? <MsgTime
                                                      aria-hidden={!selected}>{getMessageTime(timestamp)}</MsgTime>
                                                    : null

  const getMainView = (user, text) => text ? <MsgText user={user}>{text}</MsgText> : null

  return (
    <Msg only={only} first={first} last={last}
         tabIndex={tabbable ? 0 : -1} selected={selected}
         onClick={() => onRequestSelection(item.selectionIndex)}
         onFocus={() => onRequestSelection(item.selectionIndex)}
         ref={elementToFocus}>
      {getTimestampView(item.timestamp, selected)}
      {getMainView(user, item.text)}
    </Msg>
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
