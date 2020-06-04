import { getMessageTime }     from '@shared/utils/date-time'
import PropTypes              from 'prop-types'
import React, { useCallback } from 'react'
import styled, { css }        from 'styled-components'

const ChatMessage = styled.div`
  position: relative;
  max-width: 100%;
  outline: none;
  transition: margin .3s ease-in-out;
  margin: 2px 0 0;
  ${props => props.selected && css`
      margin: 4px 0;
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
                                 : props.theme.su_red['text']};
  background: ${props => !!props.user ? props.theme.ui[3]
                                      : props.theme.su_red[1]};
  border:     ${props => !!props.user ? props.theme.ui[3]
                                      : props.theme.su_red[1]};
`

const Time = styled.time`
  position: absolute;
  top: 50%;
  
  pointer-events: none;
  
  ${({ theme }) => theme.type.label};
  color: ${({ theme }) => theme.text[1]};
  white-space: nowrap;
  
  opacity: ${props => props.selected ? '.7' : '0'};
  transition: opacity .3s linear;
  transform: translateY(-50%);
  
  left:    ${props => !props.user && '100%'};
  margin-left: ${({ theme }) => theme.chat.item_spacing_x};
  
  ${props => props.user && css`
    right: 100%;
    text-align: right;
    margin-right: ${({ theme }) => theme.chat.item_spacing_x};
  `};
`

const getTimestampView = (timestamp, selected, user) => timestamp &&
  <Time user={user}
        selected={selected}
        aria-hidden={!selected}>
    {getMessageTime(timestamp)}
  </Time>

const getMainView = (user, text) => text &&
  <Bubble user={user} aria-label="Message-Text">{text}</Bubble>

const Message = ({
  item,
  isUser,
  selected,
  setSelectedItem
}) => {
  
  const handleSelection = useCallback(() => {
    setSelectedItem(item.selectionIndex)
  }, [selected])
  
  const onBlur = useCallback(() => {
    setSelectedItem(undefined)
  }, [selected])
  
  return (
    <ChatMessage tabIndex={item.selectionIndex}
                 selected={selected}
                 onBlur={onBlur}
                 onClick={handleSelection}
                 aria-label="Message">
      {getMainView(isUser, item.text)}
      {getTimestampView(item.timestamp, selected, isUser)}
    </ChatMessage>
  )
}

Message.propTypes = {
  item    : PropTypes.object.isRequired,
  isUser  : PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired
}

export default Message
