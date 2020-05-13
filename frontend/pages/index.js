import { Chat }          from '@components/chat'
import { DynamicCanvas } from '@components/dynamic_canvas'
import { getLayout }     from '@components/layouts'
import React             from 'react'
import styled            from 'styled-components'

const ChatLayout = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 50px);
  width: 100vw;

  @media (max-width: 1100px) {
    height: calc(100vh - 40px);
  }
`

const ChatPage = React.memo(() =>
  <ChatLayout>
    <Chat botName={process.env.BOT_NAME}
          user={{ id: 1, name: 'USER' }}
          placeholder='Type a message...'/>
    <DynamicCanvas/>
  </ChatLayout>
)

ChatPage.getLayout = getLayout

export default ChatPage
