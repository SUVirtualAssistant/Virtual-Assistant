import { useOnClickOutside }      from '@shared/hooks'
import { convertMsgsToViewItems } from '@shared/utils/view-items'

import PropTypes                                 from 'prop-types'
import React, { useCallback, useEffect, useRef } from 'react'
import styled                                    from 'styled-components'

import ChatInputField from './ChatInputField'
import DateMarker     from './DateMarker'
import MessageGroup   from './MessageGroup'

const ChatContainer = styled.div`
  flex: 1 0 auto;
  
  display: flex;
  flex-flow: column nowrap;
  min-width: 420px;
  
  background-color: ${({ theme }) => theme.background};
  border-right: 1px solid ${({ theme }) => theme.ui[4]}80;
`

const MessageList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  overflow-x: hidden;
  overflow-y: scroll;
  scroll-behavior: smooth;
`

const MessageListContent = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  
  padding: ${({ theme }) => theme.chat.message_list_padding_y}
           ${({ theme }) => theme.chat.message_list_padding_x};
  
  > * + * {
    margin-top: ${({ theme }) => theme.chat.message_list_spacing};
  }
`

const renderMessageList = ({
  messages,
  ...other
}) => {
  const msgs = messages.length > 0 ? convertMsgsToViewItems(messages) : []
  const lastGroupIndex = msgs.length - 1
  
  return msgs.map((viewItem, index) => <MessageGroup key={index}
                                                     index={index}
                                                     group={viewItem}
                                                     isLastGroup={index === lastGroupIndex}
                                                     {...other}/>)
}

const Chat = ({
  messages,
  sendMessage,
  placeholder,
  selectedItemIndex,
  setSelectedItem
}) => {
  const messageListRef = useRef(null) // for click outside
  const inputRef = useRef(null)       // for chat input
  
  /**
   * Runs whenever the messages array changes.
   */
  useEffect(() => {
    const { current } = messageListRef
    current.scrollIntoView({
      block   : 'end',
      behavior: 'smooth'
    })
  }, [messages])
  
  useOnClickOutside(messageListRef, useCallback(() => {
    if (selectedItemIndex)
      setSelectedItem(undefined)
  }, []))
  
  return (
    <ChatContainer>
      <MessageList role='log'
                   aria-live='polite'>
        <MessageListContent ref={messageListRef}>
          <DateMarker timestamp={new Date()}/>
          {renderMessageList({ messages, selectedItemIndex, setSelectedItem })}
        </MessageListContent>
      </MessageList>
      <ChatInputField onMessageSend={sendMessage}
                      placeholder={placeholder}
                      ref={inputRef}/>
    </ChatContainer>
  )
}

Chat.propTypes = {
  messages   : PropTypes.arrayOf(PropTypes.object).isRequired,
  sendMessage: PropTypes.func.isRequired,
  placeholder: PropTypes.string
}

export { Chat }
