import Layout            from '@components/layouts'
import ChatPageContainer from '@containers/ChatPage'
import Head              from 'next/head'
import React             from 'react'

const ChatPage = () =>
  <>
    <Head>
      <title>Mercury</title>
    </Head>
    <ChatPageContainer/>
  </>

ChatPage.Layout = Layout

export default ChatPage
