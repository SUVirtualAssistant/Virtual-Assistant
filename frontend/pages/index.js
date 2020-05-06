import { Chat }      from '@components/chat'
import DynamicCanvas from '@components/dynamic_canvas'
import { getLayout } from '@components/layouts'
import React         from 'react'
import styled        from 'styled-components'

const ChatLayout = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`

const NewChatPage = () => {
  return (
    <ChatLayout>
      <Chat botName={process.env.BOT_NAME}
            user={{ id: 1, name: 'USER' }}
            placeholder='Type a message...'/>
      <DynamicCanvas/>

    </ChatLayout>
  )
}

NewChatPage.getLayout = getLayout

export default NewChatPage
