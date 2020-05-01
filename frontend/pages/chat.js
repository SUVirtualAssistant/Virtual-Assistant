import Chat  from '@components/Chat'
import Head  from 'next/head'
import Link  from 'next/link'
import React from 'react'

const ChatPage = () =>
  <>
    <Head>
      <title>page title</title>                                   {/* TODO: add count of new messages here                  */}
      <meta property="og:title" content="page title" key="title"/>{/*  src: https://nextjs.org/docs/api-reference/next/head */}
    </Head>
    <Link href='/'><a>Home</a></Link>
    <Chat/>
  </>

export default ChatPage


