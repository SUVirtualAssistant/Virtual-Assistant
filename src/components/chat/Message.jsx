import { getMessageTime }     from '@shared/utils/date-time'
import PropTypes              from 'prop-types'
import React, { useCallback } from 'react'
import styled, { css }        from 'styled-components'

const Bubble = styled.div`
  ${({ theme }) => theme.type.expressiveParagraph};
  word-wrap: break-word;
  
  color: ${props => !!props.user ? props.theme.text[1]
                                 : props.theme.su_red['text']};
  background: ${props => !!props.user ? props.theme.ui[3]
                                      : props.theme.su_red[1]};
  border: 1px solid ${props => !!props.user ? props.theme.ui[3]
                                            : props.theme.su_red[1]};
  
  line-height:   ${({ theme }) => theme.chat.bubble_line_height};
  border-radius: ${({ theme }) => theme.chat.bubble_border_radius};
  padding:       ${({ theme }) => theme.chat.bubble_padding_y}
                 ${({ theme }) => theme.chat.bubble_padding_x};
`

const Time = styled.time`
  ${({ theme }) => theme.type.label};
  font-size: smaller;
  line-height: normal;
  white-space: nowrap;
  pointer-events: none;
  position: absolute;
  
  color: ${({ theme }) => theme.text[1]};
  opacity: ${props => props.selected ? '.7' : '0'};
  top: 50%;
  
  transform: translateY(-50%);
  transition: opacity .2s cubic-bezier(0.5, 0.1, 0, 1);
  
  left: ${props => !props.user && '100%'};
  margin-left: ${({ theme }) => theme.chat.item_spacing_x};
  
  ${props => props.user && css`
    right: 100%;
    text-align: right;
    margin-right: ${({ theme }) => theme.chat.item_spacing_x};
  `};
`

const ChatMessage = styled.div`
  align-self: flex-start;
  
  max-width: 100%;
  margin: ${({ selected }) => selected ? '0.2em 0 0.4em' : '0.2em 0 0'};
  position: relative;
  transition: margin 200ms ease-in-out;
  outline: none;
  
  ${Bubble}.first,
  ${Bubble}.only {
    border-bottom-right-radius: ${({ user }) =>  user && '2px'};
    border-bottom-left-radius:  ${({ user }) => !user && '2px'};
  };
  
  ${Bubble}.middle,
  ${Bubble}.last {
    border-top-right-radius:    ${({ user }) =>  user && '2px'};
    border-bottom-right-radius: ${({ user }) =>  user && '2px'};
    border-top-left-radius:     ${({ user }) => !user && '2px'};
    border-bottom-left-radius:  ${({ user }) => !user && '2px'};
  };
`

const getMainView = (name, user, text) => text &&
  <Bubble className={name}
          user={user}
          aria-label="Message-Text">
    {text}
  </Bubble>

const getTimestampView = (timestamp, selected, user) => timestamp &&
  <Time user={user}
        selected={selected}
        aria-hidden={!selected}>
    {getMessageTime(timestamp)}
  </Time>

const getClassNames = (
  isFirst,
  isLast,
  isOnly
) => {
  if (isOnly)                  return 'only'
  else if (isFirst && !isOnly) return 'first'
  else if (isLast && !isOnly)  return 'last'
  else                         return 'middle'
}

const Message = ({
  item,
  selected,
  tabbable,
  isFirstMessage,
  isLastMessage,
  isOnlyMessage,
  isUser,
  setSelectedItem
}) => {
  
  const handleSelection = useCallback(() => {
    setSelectedItem(item.selectionIndex)
  }, [selected])
  
  const onBlur = useCallback(() => {
    setSelectedItem(null)
  }, [selected])
  
  return (
    <ChatMessage user={isUser}
                 selected={selected}
                 onClick={handleSelection}
                 onBlur={onBlur}
                 tabIndex={tabbable ? 0 : -1}
                 aria-label="Message">
      {getMainView(getClassNames(isFirstMessage, isLastMessage, isOnlyMessage), isUser, item.text)}
      {getTimestampView(item.timestamp, selected, isUser)}
    </ChatMessage>
  )
}

Message.propTypes = {
  item           : PropTypes.object.isRequired,
  selected       : PropTypes.bool.isRequired,
  tabbable       : PropTypes.bool.isRequired,
  isFirstMessage : PropTypes.bool,
  isLastMessage  : PropTypes.bool,
  isOnlyMessage  : PropTypes.bool,
  isUser         : PropTypes.bool.isRequired,
  setSelectedItem: PropTypes.func.isRequired
}

export default Message

