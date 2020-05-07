import { KEYS }                               from '@shared/constants/keys'
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
  flex-flow: column nowrap;
  justify-content: flex-end;
  width: 100%;
  height: 100vh;
  flex: 1 1 auto;

  overflow: hidden;

  outline: 0;
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
  flex: 1 1 98%;
  flex-direction: column;

  align-items: flex-start;
  overflow-x: hidden;
  overflow-y: auto;
  scroll-behavior: smooth;
`

const MessageListContent = styled.div`
  padding: ${({ theme }) => theme.chat.message_list_padding_y} ${({ theme }) => theme.chat.message_box_padding_x};
  width: 100%;
  box-sizing: border-box;
  position: relative;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;

  >*+* {
    margin-top: ${({ theme }) => theme.chat.message_list_spacing};
  }
`

const Chat = ({ botName, user, placeholder }) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(null)

  const selectedItemIndexRef = useRef(selectedItemIndex)
  const timeoutIdForChatLosingFocus = useRef(null)
  const scrollToBottomOnLoadingData = useRef(true)
  const chatWrapperEl = useRef(null)
  const viewItemsWrapperEl = useRef(null)

  const inputRef = useRef()

  /* ------ Store hooks ------ */
  const dispatch = useDispatch()

  // noinspection JSUnresolvedVariable
  const messages = useSelector(state => state.lex.messages)
  // noinspection JSUnresolvedVariable
  const active = useSelector(state => state.lex.active)

  /**
   * Starts lex session on mount
   */
  useEffect(() => {
    if (!active)
      dispatch(Lex.startSession(botName, user.name))

    inputRef.current.focus()

    const nextTickId = setTimeout(() => scrollViewItemsToBottom(), 250)
    return () => clearTimeout(nextTickId)
  }, [])

  const onFocus = () => {
    clearTimeout(timeoutIdForChatLosingFocus.current)
    selectLastViewItemWhenNoCurrentSelection()
    console.log('onFocus fired')
  }

  const onBlur = () => {
    selectedItemIndexRef.current = selectedItemIndex
    console.log('onBlur fired')
  }

  const onSelectionRequest = clickedItemIndex => {
    console.log(clickedItemIndex)
    setSelectedItemIndex(clickedItemIndex)
  }

  const onKeyDown = e => {
    let newSelectedItemIndex = null
    const currentSelectedItemIndex = selectedItemIndex !== null ? selectedItemIndex : messages.lastSelectionIndex

    switch (e.keyCode) {
      case KEYS.up:
        if (currentSelectedItemIndex === null) {
          newSelectedItemIndex = 0
        } else if (currentSelectedItemIndex > 0) {
          newSelectedItemIndex = currentSelectedItemIndex - 1
        }
        break
      case KEYS.down:
        if (currentSelectedItemIndex === null) {
          newSelectedItemIndex = 0
        } else if (currentSelectedItemIndex < messages.lastSelectionIndex) {
          newSelectedItemIndex = currentSelectedItemIndex + 1
        }
        break
      default:
        break
    }

    if (newSelectedItemIndex !== null) {
      setSelectedItemIndex(newSelectedItemIndex)
      e.preventDefault()
    }
  }

  const selectLastViewItemWhenNoCurrentSelection = () => {
    if (selectedItemIndex === null)
      setSelectedItemIndex(messages.lastSelectionIndex)
  }

  const scrollViewItemsToBottom = () => {
    if (viewItemsWrapperEl) {
      viewItemsWrapperEl.current.scrollTop = viewItemsWrapperEl.scrollHeight - viewItemsWrapperEl.clientHeight
    }
  }

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
                               onRequestSelection={onSelectionRequest}
                               isLastGroup={index === lastViewItemIndex}
                               key={index}/>
        default:
          break
      }
    })
  }

  return (
    <ChatContainer onKeyDown={onKeyDown}
                   ref={chatWrapperEl}>
      <MessageList role='log'
                   aria-live='polite'
                   onBlur={onBlur}
                   onFocus={onFocus}
                   onScroll={e => scrollToBottomOnLoadingData.current =
                     e.currentTarget.scrollTop === e.currentTarget.scrollHeight - e.currentTarget.clientHeight}
                   ref={viewItemsWrapperEl}
      >
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
