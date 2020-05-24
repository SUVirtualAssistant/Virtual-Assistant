import Canvas   from '@components/canvas'
import { Chat } from '@components/chat'
import * as Lex from '@state/modules/lex/actions'

import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector }      from 'react-redux'
import styled                       from 'styled-components'

const ChatContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 50px);
  width: 100vw;

  @media (max-width: 1100px) {
    height: calc(100vh - 40px);
  }
`

const ChatPageContainer = props => {
  const dispatch = useDispatch()
  
  const currentView = useSelector(state => state.canvas.currentView)
  const canvasData = useSelector(state => state.canvas)
  const currentDataIdx = useSelector(state => state.canvas.currentDataIndex)
  
  const messages = useSelector(state => state.chat)
  const active = useSelector(state => state.lex.active)
  
  useEffect(() => {
    if (!active)
      dispatch(Lex.startSession())
  }, [])
  
  const sendMessage = useCallback(message =>
    dispatch(Lex.sendMessage(message)), [dispatch])
  
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
