// import Chat          from '@components/chat'
// import DynamicCanvas from '@components/dynamic_canvas'

import { Chat }       from '@components/test_chat/Chat'
import { lexActions } from '@state/modules/lex'

import React                  from 'react'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'

// import Head     from 'next/head'
// import Link   from 'next/link'

// const ChatContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   overflow: auto;
//   min-height: 80px;
//   box-sizing: border-box;
//   display: flex;
//   display: -webkit-flex;
//   flex-direction: row;
//   -webkit-flex-direction: row;
// `

class ChatPage extends React.Component {
  constructor(props) {
    super(props)

    this.user = {
      id       : 1,
      avatarUrl: 'https://via.placeholder.com/24/008000/008000.png'
    }

    this.bot = { id: 0 }

    this.state = {
      messages: [
        {
          author          : this.bot,
          suggestedActions: [
            {
              type : 'reply',
              value: 'Oh, really?'
            },
            {
              type : 'reply',
              value: 'Thanks, but this is boring.'
            }
          ],
          timestamp       : new Date(),
          text            :
            "Hello, this is a demo bot. I'm not lex."
        }
      ]
    }
  }

  wrapMessage = text => ({
    botAlias: '$LATEST',
    botName: process.env.BOT_NAME,
    inputText: text,
    userId: 'user'
  })

  addNewMessage = event => {
    let botResponse = Object.assign({}, event.message)
    botResponse.text = this.countReplayLength(event.message.text)
    botResponse.author = this.bot
    this.setState(prevState => ({
      messages: [...prevState.messages, event.message]
    }))
    setTimeout(() => {
      this.setState(prevState => ({
        messages: [...prevState.messages, botResponse]
      }))
    }, 1000)
  }

  countReplayLength = question => {
    let length = question.length
    return question + ' contains exactly ' + length + ' symbols.'
  }

  render() {
    return (
      <div>
        <Chat
          user={this.user}
          messages={this.state.messages}
          onMessageSend={this.addNewMessage}
          placeholder={'Type a message...'}
          width={400}
        />
        <button onClick={() => {
          console.log(this.props.messages)
          console.log(this.wrapMessage("hi"))
          this.props.startSession(startParams)
        }}>start lex</button>
      </div>
    )
  }
}

const startParams = {
  botAlias    : '$LATEST',
  botName     : 'Mercury',
  userId      : 'CONNOR',
  accept      : 'text/plain; charset=utf-8',
  dialogAction: {
    type      : 'Delegate',
    intentName: 'Greeting'
  }
}

// This executes before the page is rendered
ChatPage.getInitialProps = async ({ store }) => {
  store.dispatch(lexActions.startSession(startParams))
}

const mapStateToProps = state => ({
  messages: state.lex.messages
})

const mapDispatchToProps = dispatch => ({
  startSession: bindActionCreators(lexActions.startSession, dispatch),
  sendMessage : bindActionCreators(lexActions.sendMessage, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage)
