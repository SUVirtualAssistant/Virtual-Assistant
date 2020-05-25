import { getMessageTime }     from '@shared/utils/date-time'
import PropTypes              from 'prop-types'
import React, { useCallback } from 'react'
import styled, { css }        from 'styled-components'

const ChatMessage = styled.div`
  max-width: 100%;
  margin: 2px 0 0;
  position: relative;
  outline: none;
  transition: margin ease-in-out .3s;

  ${props => props.selected && css`
      margin-bottom: ${({ theme }) => theme.chat.item_spacing_y};
      border: 0;
      ${Time} { opacity: 1; };
  `};
`

const Bubble = styled.div`
  word-wrap: break-word;
  line-height:   ${({ theme }) => theme.chat.bubble_line_height};
  border-radius: ${({ theme }) => theme.chat.bubble_border_radius};
  padding:       ${({ theme }) => theme.chat.bubble_padding_y}
                 ${({ theme }) => theme.chat.bubble_padding_x};
  background: ${props => !!props.user ? props.theme.ui[2]
                                      : props.theme.colors.chat.user_bubble_bg};
  border:     ${props => !!props.user ? props.theme.ui[1]
                                      : props.theme.colors.chat.user_bubble_border} 1px solid;
`

const Time = styled.time`
  position: absolute;
  top: 50%;
  left: ${props => !props.user && '100%'};
  transform: translateY(-50%);
  
  ${({ theme }) => theme.type.label};
  margin-left: ${({ theme }) => theme.chat.item_spacing_x};
  
  ${props => props.user && css`
    right: 100%;
    text-align: right;
    margin-right: ${({ theme }) => theme.chat.item_spacing_x};
  `};

  pointer-events: none;
  color: ${({ theme }) => theme.text[5]};
  white-space: nowrap;
  opacity: 0;
  transition: opacity ease-in-out .3s;
`

const getTimestampView = (timestamp, selected, user) => timestamp &&
  <Time user={user}
        aria-hidden={!selected}>
    {getMessageTime(timestamp)}
  </Time>

const getMainView = (user, text) => text &&
  <Bubble user={user}>{text}</Bubble>

const Message = ({
  item,
  isUser,
  selected,
  onMessageSelected
}) => {
  
  const handleSelection = useCallback(() => {
    onMessageSelected(item.selectionIndex)
  }, [selected])
  
  const onBlur = useCallback(() => {
    onMessageSelected(-1)
  }, [selected])
  
  console.log(item)
  
  return (
    <ChatMessage tabIndex={item.selectionIndex}
                 selected={selected}
                 onBlur={onBlur}
                 onClick={handleSelection}>
      {getMainView(isUser, item.text)}
      {getTimestampView(item.timestamp, selected, isUser)}
    </ChatMessage>
  )
}

Message.propTypes = {
  item             : PropTypes.object.isRequired,
  isUser           : PropTypes.bool.isRequired,
  selected         : PropTypes.bool.isRequired,
  onMessageSelected: PropTypes.func.isRequired
}

export default Message
