import { Chat } from '@components/new_chat/Chat'
import React  from 'react'

const NewChatPage = () => {
  return <Chat botName={process.env.BOT_NAME}
               user={{ id: 1, name: 'USER' }}
               placeholder='Type a message...'/>
}

export default NewChatPage
