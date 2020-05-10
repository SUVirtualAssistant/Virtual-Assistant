import { convertMsgsToViewItems }                          from '@shared/utils/view-items'
import { lexActions as Lex }                               from '@state/modules/lex'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector }                        from 'react-redux'
import styled                                              from 'styled-components'

import DateMarker   from './DateMarker'
import MessageGroup from './MessageGroup'
import ChatInput    from './ChatInput'

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

const MessageList = styled(ChatContainer)`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  overflow-x: hidden;
  overflow-y: auto;
  scroll-behavior: smooth;
`

const MessageListContent = styled(ChatContainer)`
  padding: ${({ theme }) => theme.chat.message_list_padding_y} ${({ theme }) => theme.chat.message_box_padding_x};
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

const Chat = ({ botName, user, placeholder }) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(null)

  const chatWrapperEl = useRef(null)
  const viewItemsWrapperEl = useRef(null)
  const inputRef = useRef()

  /* ------ Store hooks ------ */
  const dispatch = useDispatch()
  const messages = useSelector(state => state.chat.messages)
  const active = useSelector(state => state.lex.active)

  /**
   * Starts lex session on mount
   */
  useEffect(() => {
    if (!active) dispatch(Lex.startSession(botName, user.name))
  }, [])

  const onSelectionRequest = clickedItemIndex => {
    console.log('--OLD selectedItemIndex: ' + selectedItemIndex)
    setSelectedItemIndex(clickedItemIndex)
    console.log('NEW selectedItemIndex: ' + clickedItemIndex)
  }

  // const onKeyDown = e => {
  //   let newSelectedItemIndex = null
  //   const currentSelectedItemIndex = selectedItemIndex !== null ? selectedItemIndex : messages.lastSelectionIndex
  //
  //   switch (e.keyCode) {
  //     case KEYS.up:
  //       if (currentSelectedItemIndex === null) {
  //         newSelectedItemIndex = 0
  //       } else if (currentSelectedItemIndex > 0) {
  //         newSelectedItemIndex = currentSelectedItemIndex - 1
  //       }
  //       break
  //     case KEYS.down:
  //       if (currentSelectedItemIndex === null) {
  //         newSelectedItemIndex = 0
  //       } else if (currentSelectedItemIndex < messages.lastSelectionIndex) {
  //         newSelectedItemIndex = currentSelectedItemIndex + 1
  //       }
  //       break
  //     default:
  //       break
  //   }
  //
  //   if (newSelectedItemIndex !== null) {
  //     setSelectedItemIndex(newSelectedItemIndex)
  //     e.preventDefault()
  //   }
  // }

  /**
   * Callback sent to `NewMessage`; gets called when a user hits enter or send
   * @param message
   */
  const addNewMessage = useCallback(message => dispatch(Lex.sendMessage(message)), [
    dispatch
  ])

  /**
   * Loops through msgs returning items to render
   * @returns {*}
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
    <ChatContainer ref={chatWrapperEl}>
      <MessageList>
        <MessageListContent role='log'
                            aria-live='polite'
                            ref={viewItemsWrapperEl}>
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
