import convertMsgsToViewItems from '@shared/utils/view-items'
import React                  from 'react'
import styled                 from 'styled-components'
import { mockChatState }      from './chat/__mock_data__/chat'
import DateMarker             from './chat/DateMarker'

const ChatPage = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  min-height: 80px;
  box-sizing: border-box;
`

const ChatContainer = styled.div`
  border-color: rgba(0, 0, 0.12);
  color: rgba(0, 0, 0.87);
  background-color: #fafafa;

  border-width: 1px;
  border-style: solid;
  box-sizing: border-box;
  outline: 0;
  font-size: 14px;
  line-height: 2;
  height: 100vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const MessageList = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
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
// const startParams = {
//   botAlias: '$LATEST',
//   botName: 'Mercury',
//   userId: 'CONNOR',
//   accept: 'text/plain; charset=utf-8',
//   dialogAction: {
//     type: 'Delegate',
//     intentName: 'Greeting'
//   }
// }

// const messageOneParams = {
//   botAlias: '$LATEST',
//   botName: 'Mercury',
//   inputText: 'I want to look up a professor',
//   userId: 'CONNOR'
// }
//
// const messageTwoParams = {
//   botAlias: '$LATEST',
//   botName: 'Mercury',
//   inputText: 'Hidy',
//   userId: 'CONNOR'
// }
//
// const messageThreeParams = {
//   botAlias: '$LATEST',
//   botName: 'Mercury',
//   inputText: 'Kong',
//   userId: 'CONNOR'
// }

const getViewItemsFromMsgs = msgs => msgs.length > 0 ? convertMsgsToViewItems(msgs) : []

const Chat = () => {
  const { messages } = mockChatState
  const viewItems = getViewItemsFromMsgs(messages)
  console.log(messages)
  // const dispatch = useDispatch()
  // const messages = useSelector(state => state.chat.messages)
  //
  // // FIXME: useEffect is causing a new bot to be created each time someone
  // //        navigates to the page
  // useEffect(() => {
  //   dispatch(lexActions.startSession(startParams))
  // }, [dispatch])

  // const sendMessageOne = e => {
  //   e.preventDefault()
  //   dispatch(lexActions.sendMessage(messageOneParams))
  // }
  //
  // const sendMessageTwo = e => {
  //   e.preventDefault()
  //   dispatch(lexActions.sendMessage(messageTwoParams))
  // }
  //
  // const sendMessageThree = e => {
  //   e.preventDefault()
  //   dispatch(lexActions.sendMessage(messageThreeParams))
  // }

  return (
    <ChatPage>
      <ChatContainer>
        <MessageList>
          <DateMarker/>
          <MessageListContent>
          </MessageListContent>
        </MessageList>
        {/*<button onClick={sendMessageOne}>Message 1</button>*/}
        {/*<button onClick={sendMessageTwo}>Message 2</button>*/}
        {/*<button onClick={sendMessageThree}>Message 3</button>*/}
      </ChatContainer>
    </ChatPage>
  )
}

export default Chat
