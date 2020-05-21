import { getMessageTime }     from '@shared/utils/date-time'
import PropTypes              from 'prop-types'
import React, { useCallback } from 'react'
import styled, { css }        from 'styled-components'

const ChatMessage = styled.div`
  max-width: 100%;
  margin: 2px 0 0;
  position: relative;
  transition: margin .2s ease-in-out;
  outline: none;

  &:hover {
    box-shadow: 0 -2px 10px rgba( 0, 0, 0, 1);
  }

  ${props => props.selected && css`
    margin-bottom: ${({ theme }) => theme.chat.item_spacing_y};
    border: 0;
    color: inherit;
    background: none;

    ${Time} { opacity: 1; };
  `}
`

const Bubble = styled.div`
  border-radius: ${({ theme }) => theme.chat.bubble_border_radius};
  padding:       ${({ theme }) => theme.chat.bubble_padding_y} ${({ theme }) => theme.chat.bubble_padding_x};
  line-height:   ${({ theme }) => theme.chat.bubble_line_height};
  
  word-wrap: break-word;
  
  color:      ${props => !!props.user ? props.theme.colors.chat.user_bubble_text
                                      : props.theme.colors.chat.bubble_text};
  background: ${props => !!props.user ? props.theme.colors.chat.user_bubble_bg
                                      : props.theme.colors.chat.bubble_bg};
  border:     ${props => !!props.user ? props.theme.colors.chat.user_bubble_border
                                      : props.theme.colors.chat.bubble_border} 1px solid;
`

const Time = styled.time`
  top: 50%;
  left: ${props => !props.user && '100%'};

  margin-left: ${({ theme }) => theme.chat.item_spacing_x};

  white-space: nowrap;
  pointer-events: none;
  position: absolute;

  font-size: smaller;
  line-height: normal;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.navBarLink};
  opacity: 0;

  transform: translateY(-50%);
  transition: opacity .2s ease-in-out;

  ${props => props.user && css`
    right: 100%;
    text-align: right;

    margin-right: ${({ theme }) => theme.chat.item_spacing_x};
  `}
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
  
  return (
    <ChatMessage selected={selected}
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
