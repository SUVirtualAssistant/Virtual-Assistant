import Canvas         from '@components/canvas'
import { Chat }       from '@components/chat'
import { lexActions } from '@state/modules/lex'

import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector }      from 'react-redux'
import styled                            from 'styled-components'

const ChatContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 800px) {
    height: calc(100vh - 40px);
  }
`

const ChatPageContainer = () => {
  const dispatch = useDispatch()
  
  const canvasData = useSelector(state => state.canvas)
  const currentView = useSelector(state => state.canvas.currentView)
  const currentDataIdx = useSelector(state => state.canvas.currentDataIndex)
  
  const messages = useSelector(state => state.chat)
  const sendingMessage = useSelector(state => state.lex.sendingMessage)
  const active = useSelector(state => state.lex.active)
  
  useEffect(() => {
    if (!active)
      dispatch(lexActions.startSession())
  }, [])
  
  const sendMessage = useCallback(message =>
    dispatch(lexActions.sendMessage(message)), [dispatch])
  
  return (
    <ChatContainer>
      <Chat messages={messages}
            sendMessage={sendMessage}
            placeholder='Type a message...'/>
      <Canvas loading={sendingMessage}
              type={currentView}
              data={canvasData[currentDataIdx] && canvasData[currentDataIdx].data}/>
    </ChatContainer>
  )
}

export default ChatPageContainer
