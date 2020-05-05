import { convertMsgsToViewItems }             from '@shared/utils/view-items'
import { lexActions as Lex }                  from '@state/modules/lex'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector }           from 'react-redux'
import DateMarker                             from 'src/components/chat/DateMarker'
import MessageGroup                           from 'src/components/chat/MessageGroup'
import styled                                 from 'styled-components'
import ChatInput                              from './ChatInput'

const ChatContainer = styled.div`
  border-width: $chat-border-width;

`

const MessageList = styled.div`

`

const MessageListContent = styled.div`

`

/**
 * NewChat
 * TODO
 *    * Autoscroll to bottom on new message
 *
 */

const Chat = ({ botName, user, placeholder }) => {

  const [selectedItemIndex, setSelectedItemIndex] = useState(null)
  const scrollToBottomOnLoadingData = useRef(true)
  const inputRef = useRef()

  /* ------ Store hooks ------ */
  const dispatch = useDispatch()

  const messages = useSelector(state => state.lex.messages)
  const active = useSelector(state => state.lex.active)

  /**
   * Starts lex session on mount
   */
  useEffect(() => {
    if (!active)
      dispatch(Lex.startSession(botName, user.name))

    inputRef.current.focus()
  }, [])

  /**
   * Callback sent to `NewMessage`; gets called when a user hits enter or send
   * @param message
   */
  const addNewMessage = message => {
    dispatch(Lex.sendMessage(message))
  }

  /**
   * Loops through msgs returning items to render
   * @returns {*}
   * @param msgList
   */
  const renderMessageList = msgList => {
    const msgs = msgList.length > 0 ? convertMsgsToViewItems(msgList) : []
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
                               onRequestSelection={setSelectedItemIndex}
                               isLastGroup={index === lastViewItemIndex}
                               key={index}/>
        default:
          break
      }
    })
  }

  return (
    <ChatContainer>
      <MessageList role='log'
                   aria-live='polite'
                   onScroll={e => scrollToBottomOnLoadingData.current =
                     e.currentTarget.scrollTop === e.currentTarget.scrollHeight - e.currentTarget.clientHeight}>
        <MessageListContent>
          {renderMessageList(messages)}
        </MessageListContent>
      </MessageList>
      <ChatInput onMessageSend={addNewMessage}
                 user={user}
                 ref={inputRef}/>
    </ChatContainer>
  )
}

export { Chat }
