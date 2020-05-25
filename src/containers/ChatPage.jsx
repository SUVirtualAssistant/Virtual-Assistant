import Canvas         from '@components/canvas'
import { Chat }       from '@components/chat'
import { lexActions } from '@state/modules/lex'

import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector }      from 'react-redux'
import styled                            from 'styled-components'

const ChatContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 50px);
  width: 100vw;

  @media (max-width: 1100px) {
    height: calc(100vh - 40px);
  }
`

const ChatPageContainer = () => {
  const dispatch = useDispatch()
  
  const currentView = useSelector(state => state.canvas.currentView)
  const canvasData = useSelector(state => state.canvas)
  const currentDataIdx = useSelector(state => state.canvas.currentDataIndex)
  
  const messages = useSelector(state => state.chat)
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
      <Canvas type={currentView}
              data={canvasData[currentDataIdx] && canvasData[currentDataIdx].data}/>
    </ChatContainer>
  )
}

export default ChatPageContainer
