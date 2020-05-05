import { Chat }       from '@components/chat'
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
    if (!this.props.active)
      this.props.startSession(process.env.BOT_NAME, 'USER')
  }

  addNewMessage = event => {
    this.props.sendMessage(event.message)
  }

  render() {
    return (
      <div>
        <Chat user={{ id: 1 }}
              messages={this.props.messages}    // fixme: this is adding messages to the store
              onMessageSend={this.addNewMessage}
              placeholder={'Type a message...'}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  messages: state.lex.messages,
  active  : state.lex.active
})

const mapDispatchToProps = dispatch => ({
  startSession: bindActionCreators(lexActions.startSession, dispatch),
  sendMessage : bindActionCreators(lexActions.sendMessage, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage)
