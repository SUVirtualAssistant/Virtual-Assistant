import { Chat }       from '@components/test_chat/Chat'
import { lexActions } from '@state/modules/lex'

import React                  from 'react'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'

class ChatPage extends React.Component {
  constructor(props) {
    super(props)
    this.addNewMessage = this.addNewMessage.bind(this)
  }

  componentDidMount() {
    this.props.startSession(startParams)
  }

  parseText = event => {
    if (event.action !== undefined) {
      return event.action.value
    } else if (event.value) {
      return event.value
    } else {
      return event.message.text
    }
  }

  addNewMessage = event => {
    let value = this.parseText(event)
    this.props.sendMessage(value)
  }

  render() {
    return (
      <div>
        <Chat
          user={{id : 1}}
          messages={this.props.messages}
          onMessageSend={this.addNewMessage}
          placeholder={'Type a message...'}
          width={400}
        />
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

const mapStateToProps = state => ({
  messages: state.lex.messages
})

const mapDispatchToProps = dispatch => ({
  startSession: bindActionCreators(lexActions.startSession, dispatch),
  sendMessage : bindActionCreators(lexActions.sendMessage, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage)
