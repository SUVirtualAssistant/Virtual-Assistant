import { useOnClickOutside }      from '@shared/hooks'
import { convertMsgsToViewItems } from '@shared/utils/view-items'
import { lexActions as Lex }      from '@state/modules/lex'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector }                        from 'react-redux'
import styled                                              from 'styled-components'

import ChatInput    from './ChatInput'
import DateMarker   from './DateMarker'
import MessageGroup from './MessageGroup'

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
  font-size: ${({ theme }) => theme.chat.text};
  line-height: ${({ theme }) => theme.chat.line_height};

  background: ${({ theme }) => theme.colors.chat.bg};
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
  user,
  selectedItemIndex,
  onSelectionRequest
}) => {
  const msgs = messages.length > 0 ? convertMsgsToViewItems(messages) : []
  const lastViewItemIndex = msgs.length - 1

  return msgs.map((viewItem, index) => {
    switch (viewItem.type) {
      case 'date-marker':
        return <DateMarker item={viewItem}
                           key={index}/>
      case 'message-group':
        return <MessageGroup group={viewItem}
                             user={user}
                             selectedItemIndex={selectedItemIndex}
                             onRequestSelection={onSelectionRequest}
                             isLastGroup={index === lastViewItemIndex}
                             key={index}/>
      default:
        break
    }
  })
}

const Chat = ({
  botName,
  user,
  placeholder
}) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(null)

  const messageListEl = useRef()
  const inputEl = useRef()

  const messages = useSelector(state => state.chat.messages)
  const active = useSelector(state => state.lex.active)
  const dispatch = useDispatch()

  /**
   * Runs when page loads.
   */
  useEffect(() => {
    const { current } = inputEl
    current.focus()

    if (!active)
      dispatch(Lex.startSession(botName, user.name))
  }, [])

  /**
   * Runs whenever the messages array changes.
   */
  useEffect(() => {
    const { current } = messageListEl
    current.scrollIntoView({ block: 'end', behavior: 'smooth' })

    document.title = 'New Message !'

  }, [messages])

  /**
   * Call hook passing in the ref and a function to call on outside click
   */
  useOnClickOutside(messageListEl, useCallback(() => {
    console.log('clicked outside')
    setSelectedItemIndex(null)
  }, [selectedItemIndex]))

  /**
   * dispatches a new message to lex
   * @type {function(*=): *}
   */
  const addNewMessage = useCallback(message =>
    dispatch(Lex.sendMessage(message)), [dispatch])

  const onSelectionRequest = useCallback(clickedItemIndex => {
    setSelectedItemIndex(clickedItemIndex)
    console.log('clickedItemIndex: ' + clickedItemIndex)
  }, [selectedItemIndex])

  return (
    <ChatContainer>
      <MessageList role='log'
                   aria-live='polite'>
        <MessageListContent ref={messageListEl}>
          {renderMessageList({
            messages,
            user,
            selectedItemIndex,
            onSelectionRequest
          })}
        </MessageListContent>
      </MessageList>
      <ChatInput onMessageSend={addNewMessage}
                 user={user}
                 placeholder={placeholder}
                 ref={inputEl}/>
    </ChatContainer>
  )
}

export { Chat }
