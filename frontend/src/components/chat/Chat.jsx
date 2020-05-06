import { convertMsgsToViewItems }             from '@shared/utils/view-items'
import { lexActions as Lex }                  from '@state/modules/lex'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector }           from 'react-redux'
import styled                                 from 'styled-components'
import ChatInput                              from './ChatInput'
import DateMarker                             from './DateMarker'
import MessageGroup                           from './MessageGroup'

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  max-height: 100vh;
  width: 50vw;
  min-width: 50vw;

  border-style: solid;
  border-width: ${({ theme }) => theme.chat.border_width};

  font-family: ${({ theme }) => theme.chat.font_family};
  font-size: ${({ theme }) => theme.chat.font_size};
  line-height: ${({ theme }) => theme.chat.line_height};

  color: ${({ theme }) => theme.colors.chat.text};
  background: ${({ theme }) => theme.colors.chat.bg};
  border-color: ${({ theme }) => theme.colors.chat.border};

  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: ${({ theme }) => theme.colors.rgba_transparent};
`

const MessageList = styled.div`
  display: flex;
  flex: auto;
  flex-direction: column;
  max-height: 92.5vh;

  overflow-x: hidden;
  overflow-y: auto;
  align-items: flex-start;
  scroll-behavior: smooth;
`

const MessageListContent = styled.div`
  display: flex;
  flex: auto;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  align-items: flex-start;
  position: relative;
  overflow: hidden;
  padding: ${({ theme }) => theme.chat.message_list_padding_y} ${({ theme }) => theme.chat.message_box_padding_x};

  >*+* {
    margin-top: ${({ theme }) => theme.chat.message_list_spacing};
  }
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
                 placeholder={placeholder}
                 ref={inputRef}/>
    </ChatContainer>
  )
}

export { Chat }
