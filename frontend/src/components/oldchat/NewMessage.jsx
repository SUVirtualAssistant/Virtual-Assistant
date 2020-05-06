import { KEYS }       from '@shared/constants'
import { classNames } from '@shared/utils/classNames'
import React          from 'react'

class NewMessage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      focused: false
    }
    this.inputEl = null
  }

  onInputKeyDown = event => {
    if (event.keyCode === KEYS.enter)
      this.sendMessage(event)
  }

  sendMessage = event => {
    if (this.props.onMessageSend && this.inputEl !== null) {
      const messageText = this.inputEl.value

      if (messageText) {
        const message = {
          author   : this.props.user,
          text     : messageText,
          timestamp: new Date()
        }
        this.props.onMessageSend(message, event)
      }
    }

    if (this.inputEl !== null) {
      this.inputEl.value = null
    }
  }

  render() {
    const messageInput = <input className={this.getClassNames()}
                                type='text'
                                placeholder={this.props.placeholder}
                                onKeyDown={this.onInputKeyDown}
                                onFocus={() => this.setState({ focused: true })}
                                onBlur={() => this.setState({ focused: false })}
                                ref={el => this.inputEl = el}/>

    const sendButton =
      <button className='k-button k-flat k-button-icon k-button-send' onClick={this.sendMessage} aria-label='Send...'>
        <svg version='1.1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 16 16'>
          <path
            d='M0,14.3c-0.1,0.6,0.3,0.8,0.8,0.6l14.8-6.5c0.5-0.2,0.5-0.6,0-0.8L0.8,1.1C0.3,0.9-0.1,1.1,0,1.7l0.7,4.2C0.8,6.5,1.4,7,1.9,7.1l8.8,0.8c0.6,0.1,0.6,0.1,0,0.2L1.9,8.9C1.4,9,0.8,9.5,0.7,10.1L0,14.3z'/>
        </svg>
      </button>

    return <div className='k-message-box'>{messageInput}{sendButton}</div>
  }

  focusInput() {
    if (this.inputEl !== null)
      this.inputEl.focus()
  }

  getClassNames() {
    return classNames({ 'k-state-focused': this.state.focused }, 'k-input')
  }
}

export default NewMessage
