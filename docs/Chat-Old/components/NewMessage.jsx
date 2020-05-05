import React                from 'react'
import PropTypes            from 'prop-types'
import { classNames, Keys } from '../utils'
import Toolbar              from './Toolbar'

class NewMessage extends React.Component {
  static buttonIconPath = 'M0,14.3c-0.1,0.6,0.3,0.8,0.8,0.6l14.8-6.5c0.5-0.2,0.5-0.6,0-0.8L0.8,1.1C0.3,0.9-0.1,1.1,0,1.7l0.7,4.2C0.8,6.5,1.4,7,1.9,7.1l8.8,0.8c0.6,0.1,0.6,0.1,0,0.2L1.9,8.9C1.4,9,0.8,9.5,0.7,10.1L0,14.3z'
  
  state = { focused: false }
  inputEl = null
  
  onInputKeyDown = event => {
    if (event.keyCode === Keys.enter)
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
    if (this.inputEl !== null)
      this.inputEl.value = null
  }
  
  render () {
    const messageInput = <input type="text"
                                className={this.getClassNames()}
                                placeholder={this.props.placeholder}
                                onKeyDown={this.onInputKeyDown}
                                onFocus={() => this.setState({ focused: true })}
                                onBlur={() => this.setState({ focused: false })}
                                ref={el => this.inputEl = el}/>
    const sendButton =
            <button className='k-button k-flat k-button-icon k-button-send'
                    onClick={event => this.sendMessage(event)}
                    aria-label="Send..."
                    dir={this.props.isDirectionRightToLeft ? 'rtl' : undefined}>
              <svg version='1.1'
                   xmlns='http://www.w3.org/2000/svg'
                   x='0px'
                   y='0px'
                   viewBox='0 0 16 16'>
                <path d={NewMessage.buttonIconPath}/>
              </svg>
            </button>
    const toolbarButton =
            <button className='k-button k-flat k-button-icon k-button-toggle'
                    onClick={event => this.props.onToolbarActionButtonClick(!this.props.showToolbar, event)}>
              <svg version='1.1'
                   id='Layer_1'
                   x='opx'
                   y='0px'
                   viewBox='0 0 512 512'>
                <g>
                  <path d='M128,240c0-26.4-21.6-48-48-48s-48,21.6-48,48s21.6,48,48,48S128,266.4,128,240z'/>
                  <path
                    d='M192,240c0,26.4,21.6,48,48,48c26.4,0,48-21.6,48-48s-21.6-48-48-48C213.6,192,192,213.6,192,240z'/>
                  <path
                    d='M352,240c0,26.4,21.6,48,48,48c26.4,0,48-21.6,48-48s-21.6-48-48-48C373.6,192,352,213.6,352,240z'/>
                </g>
              </svg>
            </button>
    
    return (
      <>
        <div className='k-message-box'>
          {this.props.MessageBox
           ? React.createElement(this.props.MessageBox, {
              messageInput: messageInput,
              sendButton: sendButton,
              toolbarButton: toolbarButton
            })
           : React.createElement(React.Fragment, null, messageInput, this.props.toolbar && toolbarButton, sendButton)
          }
        </div>
        {this.props.showToolbar && React.createElement(Toolbar, null, this.props.toolbar)}
      </>
    )
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