import React      from 'react'
import NewMessage from 'src/components/chat/NewMessage'
import styled     from 'styled-components'

const MessageList = styled.div`
  display: flex;
  flex: 1 1 auto;
  align-items: flex-start;
  overflow-x: hidden;
  overflow-y: auto;
  scroll-behavior: smooth;
`

const MessageListContent = styled.div`
  padding: 16px 16px;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
`


const Chat = () => {

  return (
    <MessageList
      onKeyDown={}
      ref={el => this.chatWrapperEl = el}>
      <MessageListContent
        onBlur={this.onBlur}
        onFocus={this.onFocus}
        role='log'
        aria-live='polite'
        onScroll={e => {this.scrollToBottomOnLoadingData =
          (e.currentTarget.scrollTop === e.currentTarget.scrollHeight - e.currentTarget.clientHeight)}}>
        <div className='k-message-list-content'>
          {this.renderViewItems()}
        </div>
      </MessageListContent>
      <NewMessage
        user={this.props.user}
        onMessageSend={this.onMessageSend}
        ref={comp => this.newMsgComp = comp}
        placeholder={this.props.placeholder}/>
    </MessageList>
  )
}
