import Canvas   from '@components/canvas'
import { Chat } from '@components/chat'
import Layout   from '@components/layouts'
import React    from 'react'
import styled   from 'styled-components'

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
  return (
    <ChatLayout>
      <Chat user={{ id: 1, name: 'USER' }}
            placeholder='Type a message...'/>
      <Canvas/>
    </ChatLayout>
  )
}

ChatPage.Layout = Layout

export default ChatPage
