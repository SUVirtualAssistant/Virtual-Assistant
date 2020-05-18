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
  const canvas_data = useSelector(state => state.canvas)
  
  return (
    <ChatLayout>
      <Chat user={{ id: 1, name: 'USER' }}
            placeholder='Type a message...'/>
      <Canvas data={canvas_data}/>
    </ChatLayout>
  )
}

ChatPage.Layout = Layout

export default ChatPage
