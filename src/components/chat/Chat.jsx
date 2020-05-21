import { useOnClickOutside }      from '@shared/hooks'
import { convertMsgsToViewItems } from '@shared/utils/view-items'
import { lexActions as Lex }      from '@state/modules/lex'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector }                        from 'react-redux'
import styled                                              from 'styled-components'

import ChatInputField from './ChatInputField'
import DateMarker     from './DateMarker'
import MessageGroup   from './MessageGroup'

const ChatContainer = styled.div`
  box-sizing: border-box;
  outline: 0;

  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: calc(100vh - 50px);
  width: 100%;
  min-width: 400px;
  margin: auto;

  font-family: ${({ theme }) => theme.chat.font_family};
  font-size:   ${({ theme }) => theme.chat.text};
  line-height: ${({ theme }) => theme.chat.line_height};

  background:   ${({ theme }) => theme.colors.chat.bg};
  border-color: ${({ theme }) => theme.colors.chat.border};

  @media (max-width: 1100px) {
    height: calc(100vh - 40px);
  }
`

const MessageList = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  overflow-x: hidden;
  overflow-y: auto;
  scroll-behavior: smooth;
`

const MessageListContent = styled.div`
  padding: ${({ theme }) => theme.chat.message_list_padding_y} ${({ theme }) => theme.chat.message_list_padding_x};
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
                                                     group={viewItem}
                                                     {...other}/>)
}

const Chat = ({ placeholder }) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(null)
  
  const messageListRef = useRef(null)
  const inputRef = useRef(null)
  
  const messages = useSelector(state => state.chat)
  const active = useSelector(state => state.lex.active)
  
  const dispatch = useDispatch()
  
  /**
   * Runs on page load.
   */
  useEffect(() => {
    if (!active)
      dispatch(Lex.startSession())
  }, [])
  
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
  
  /**
   * Call hook passing in the ref and a function to call on outside click
   */
  useOnClickOutside(messageListRef, useCallback(() => {
    setSelectedItemIndex(null)
  }, []))
  
  /**
   * dispatches a new message to lex
   * @type {function(*=): *}
   */
  const addNewMessage = useCallback(message =>
    dispatch(Lex.sendMessage(message)), [dispatch]
  )
  
  const onMessageSelected = useCallback(clickedItemIndex => {
    setSelectedItemIndex(clickedItemIndex)
  }, [selectedItemIndex])
  
  return (
    <ChatContainer>
      <MessageList role='log'
                   aria-live='polite'>
        <MessageListContent ref={messageListRef}>
          <DateMarker timestamp={new Date()}/>
          {
            renderMessageList({
              messages,
              selectedItemIndex,
              onMessageSelected
            })
          }
        </MessageListContent>
      </MessageList>
      <ChatInputField onMessageSend={addNewMessage}
                      placeholder={placeholder}
                      ref={inputRef}/>
    </ChatContainer>
  )
}

export { Chat }
