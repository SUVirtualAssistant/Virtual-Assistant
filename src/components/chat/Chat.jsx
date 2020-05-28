import { useOnClickOutside }      from '@shared/hooks'
import { convertMsgsToViewItems } from '@shared/utils/view-items'

import PropTypes                                           from 'prop-types'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled                                              from 'styled-components'

import ChatInputField from './ChatInputField'
import DateMarker     from './DateMarker'
import MessageGroup   from './MessageGroup'

const ChatContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  
  outline: 0;
  margin: auto;
  
  background: ${({ theme }) => theme.background};
  border-right: 1px solid ${({ theme }) => theme.ui[3]};
  
  overflow: hidden;
  width: 100%;
  min-width: 400px;
  height: calc(100vh - 50px);
  
  @media (max-width: 800px) {
    ${({ theme }) => theme.type.bodyShort[1]};
    height: calc(100vh - 40px);
  }
`

const MessageList = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
`

const MessageListContent = styled.div`
  padding: ${({ theme }) => theme.chat.message_list_padding_y}
           ${({ theme }) => theme.chat.message_list_padding_x};
  width: 100%;
  box-sizing: border-box;
  position: relative;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  scroll-behavior: smooth;
  
  > * + * {
    margin-top: ${({ theme }) => theme.chat.message_list_spacing};
  }
`

const renderMessageList = ({
  messages,
  ...other
}) => {
  const msgs = messages.length > 0 ? convertMsgsToViewItems(messages) : []
  
  return msgs.map((viewItem, index) => <MessageGroup key={index}
                                                     index={index}
                                                     group={viewItem}
                                                     {...other}/>)
}

const Chat = ({
  messages,
  sendMessage,
  placeholder
}) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(null)
  
  const messageListRef = useRef(null)
  const inputRef = useRef(null)
  
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
    setSelectedItemIndex(null)
  }, []))
  
  const onMessageSelected = useCallback(clickedItemIndex => {
    setSelectedItemIndex(clickedItemIndex)
  }, [selectedItemIndex])
  
  return (
    <ChatContainer>
      <MessageList role='log'
                   aria-live='polite'>
        <MessageListContent ref={messageListRef}>
          <DateMarker timestamp={new Date()}/>
          {renderMessageList({ messages, selectedItemIndex, onMessageSelected })}
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
