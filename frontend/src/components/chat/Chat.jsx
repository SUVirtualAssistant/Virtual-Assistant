import { convertMsgsToViewItems }                from '@shared/utils/view-items'
import { lexActions as Lex }                     from '@state/modules/lex'
import React, { useCallback, useEffect, useRef } from 'react'
import { useDispatch, useSelector }              from 'react-redux'
import styled                                    from 'styled-components'
import ChatInput                                 from './ChatInput'
import DateMarker                                from './DateMarker'
import MessageGroup                              from './MessageGroup'

const ChatContainer = styled.div`
  box-sizing: border-box;
  outline: 0;

  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: calc(100vh - 50px);
  width: 100%;
  margin: auto;

  font-family: ${({ theme }) => theme.chat.font_family};
  font-size: ${({ theme }) => theme.chat.text};
  line-height: ${({ theme }) => theme.chat.line_height};

  background: ${({ theme }) => theme.colors.chat.bg};
  border-color: ${({ theme }) => theme.colors.chat.border};

  ::selection {
    //background-color: ;
    //color: '';
  }

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

  > * + * {
    margin-top: ${({ theme }) => theme.chat.message_list_spacing};
  }
`

function renderMessageList(props) {
  const {
    messages,
    user,
    selectedItemIndex,
    onSelectionRequest
  } = props

  const msgs = messages.length > 0 ? convertMsgsToViewItems(messages)
                                   : []

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

const Chat = ({ botName, user, placeholder }) => {
  const dispatch = useDispatch()

  const messages = useSelector(state => state.chat.messages)
  const active = useSelector(state => state.lex.active)

  const chatWrapperEl = useRef()
  const viewItemsWrapperEl = useRef()
  const inputRef = useRef()
  const selectedItemIndex = useRef(null)

  useEffect(() => {
    if (!active)
      dispatch(Lex.startSession(botName, user.name))
  }, [])

  const addNewMessage = useCallback(message =>
    dispatch(Lex.sendMessage(message)), [dispatch])

  const onSelectionRequest = useCallback(clickedItemIndex => {
    selectedItemIndex.current = clickedItemIndex
    console.log(selectedItemIndex.current)
  }, [])

  return (
    <ChatContainer ref={chatWrapperEl}>
      <MessageList role='log'
                   aria-live='polite'
                   ref={viewItemsWrapperEl}>
        <MessageListContent>
          {renderMessageList({ messages, user, selectedItemIndex, onSelectionRequest})}
        </MessageListContent>
      </MessageList>
      <ChatInput onMessageSend={addNewMessage}
                 user={user}
                 placeholder={placeholder}
                 ref={inputRef}/>
    </ChatContainer>
  )
}

export { Chat }
