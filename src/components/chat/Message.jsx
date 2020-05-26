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
  `};
`

// : props.theme.colors.chat.user_bubble_bg};
const Bubble = styled.div`
  word-wrap: break-word;
  cursor: default;
  line-height:   ${({ theme }) => theme.chat.bubble_line_height};
  border-radius: ${({ theme }) => theme.chat.bubble_border_radius};
  padding:       ${({ theme }) => theme.chat.bubble_padding_y}
                 ${({ theme }) => theme.chat.bubble_padding_x};
  color: ${props => !!props.user ? props.theme.text[1]
                                 : props.theme.text[1]};
  background: ${props => !!props.user ? props.theme.ui[3]
                                      : props.theme.su_red[1]};
  border:     ${props => !!props.user ? props.theme.ui[1]
                                      : props.theme.su_red[1]};
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
  
  line-height: normal;
  white-space: nowrap;
  color: ${({ theme }) => theme.text[5]};
  opacity: ${props => props.selected ? '1' : '0'};
  transition: opacity ease-in-out .3s;
`

const getTimestampView = (timestamp, selected, user) => timestamp &&
  <Time user={user}
        selected={selected}
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
