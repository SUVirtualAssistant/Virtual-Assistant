import Canvas         from '@components/canvas'
import { Chat }       from '@components/chat'
import { lexActions } from '@state/modules/lex'
import { chatActions } from '@state/modules/chat'

import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector }      from 'react-redux'
import styled                            from 'styled-components'

const ChatContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`

const ChatPageContainer = () => {
  const dispatch = useDispatch()
  
  const canvasData = useSelector(state => state.canvas)
  const currentView = useSelector(state => state.canvas.currentView)
  const currentDataIdx = useSelector(state => state.canvas.currentDataIndex)
  
  const messages = useSelector(state => state.chat.messages)
  const selectedItemIndex = useSelector(state => state.chat.selectedItemIndex)
  const active = useSelector(state => state.lex.active)
  
  useEffect(() => {
    if (!active)
      dispatch(lexActions.startSession())
  }, [])
  
  const sendMessage = useCallback(message =>
    dispatch(lexActions.sendMessage(message)), [dispatch])
  
  const setSelectedItem = useCallback(idx =>
    dispatch(chatActions.setSelectedItem(idx)), [dispatch])
  
  return (
    <ChatContainer>
      <Chat messages={messages}
            sendMessage={sendMessage}
            placeholder='Type a message...'
            selectedItemIndex={selectedItemIndex}
            setSelectedItem={setSelectedItem}/>
      <Canvas type={currentView}
              data={canvasData[currentDataIdx] && canvasData[currentDataIdx].data}/>
    </ChatContainer>
  )
}

export default ChatPageContainer
