import React from 'react'
import styled from 'styled-components'

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

const MessageGroup = styled.div`
  max-width: 80%;
  background: none;
  box-sizing: border-box;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  position: relative;
`

const MessageGroupKAlt = styled(MessageGroup)`
  align-items: flex-start;
  text-align: left;
`

const MessageGroupNotAlt= styled(MessageGroup)`
  align-self: flex-end;
  align-items: flex-end;
  text-align: right;
`

