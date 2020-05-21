import Canvas          from '@components/canvas'
import { Chat }        from '@components/chat'
import Layout          from '@components/layouts'
import React           from 'react'
import { useSelector } from 'react-redux'
import styled          from 'styled-components'

const ChatLayout = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 50px);
  width: 100vw;

  @media (max-width: 1100px) {
    height: calc(100vh - 40px);
  }
`

const ChatPage = () => {
  const currentDataIndex = useSelector(state => state.canvas.currentDataIndex)
  const currentData = useSelector(state => state.canvas)
  const currentView = useSelector(state => state.canvas.currentView)
  
  return (
    <ChatLayout>
      <Chat placeholder='Type a message...'/>
      <Canvas type={currentView} data={currentData[currentDataIndex] && currentData[currentDataIndex].data} />
    </ChatLayout>
  )
}

ChatPage.Layout = Layout

export default ChatPage
