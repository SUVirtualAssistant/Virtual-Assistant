import { getLayout }  from '@components/layouts'
import { Chat }       from '@components/oldchat'
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
      <>
        <Chat user={{ id: 1 }}
              messages={this.props.messages}    // fixme: this is adding messages to the store
              onMessageSend={this.addNewMessage}
              placeholder={'Type a message...'}
              width={500}/>
      </>
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

ChatPage.getLayout = getLayout

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage)
