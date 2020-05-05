import { KEYS }            from '@shared/constants'
import { classNames }      from '@shared/utils/classNames'
import PropTypes           from 'prop-types'
import React, { useState } from 'react'
import styled              from 'styled-components'

const MsgBox = styled.div`
  border-color: inherit;
  color: rgba(0,0,0,0.87);
  background-color: #fff;

  padding: 10px 16px;
  border-width: 1px 0 0;
  border-style: solid;
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  input {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    background: none;
    flex: 1 1 auto;
  }

  button {
    padding: 0;
    flex-shrink: 0;
  }
`

const MsgInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  outline: 0;
  color: inherit;
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;

  &:focus {
    outline-offset: -2px;
  }
`

const MsgButton = styled.button`
  border-color: transparent !important;
  color: inherit;
  background: none !important;
  box-shadow: none !important;
  transition: color .2s ease-in-out;

  text-transform: uppercase;
  font-weight: 500;

  border-radius: 2px;
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  font-size: 14px;
  text-align: center;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  user-select: none;
  position: relative;
  outline: none;

  &:hover {
    color: #3f51b5;
  }

  svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
  }
`

const ChatInput = React.forwardRef(({ onMessageSend, user, placeholder }, ref) => {
  const [focused, setFocused] = useState(false)

  const onInputKeyDown = event => {
    if (event.keyCode === KEYS.enter)
      sendMessage(event)
  }

  const sendMessage = event => {
    if (onMessageSend && ref !== null) {
      const messageText = ref.current.value

      if (messageText) {
        const message = {
          author   : user,
          text     : messageText,
          timestamp: new Date()
        }
        onMessageSend(message, event)
      }
    }

    if (ref !== null)
      ref.current.value = null
  }

  // const getClassNames = () => classNames({ 'k-state-focused': focused }, 'k-input')

  // const messageInput = <input className={getClassNames()}
  //                             type='text'
  //                             placeholder={placeholder}
  //                             onKeyDown={onInputKeyDown}
  //                             onFocus={() => setFocused(true)}
  //                             onBlur={() => setFocused(false)}
  //                             ref={ref}/>
  //
  // const sendButton = <button className='k-button k-flat k-button-icon k-button-send'
  //                            onClick={sendMessage}
  //                            aria-label={placeholder}>
  //   <svg version='1.1'
  //        xmlns='http://www.w3.org/2000/svg'
  //        x='0px'
  //        y='0px'
  //        viewBox='0 0 16 16'>
  //     <path
  //       d='M0,14.3c-0.1,0.6,0.3,0.8,0.8,0.6l14.8-6.5c0.5-0.2,0.5-0.6,0-0.8L0.8,1.1C0.3,0.9-0.1,1.1,0,1.7l0.7,4.2C0.8,6.5,1.4,7,1.9,7.1l8.8,0.8c0.6,0.1,0.6,0.1,0,0.2L1.9,8.9C1.4,9,0.8,9.5,0.7,10.1L0,14.3z'/>
  //   </svg>
  // </button>
  //
  //   <div className='k-message-box'>{messageInput}{sendButton}</div>
  return (
    <MsgBox>
      <MsgInput type='text'
                placeholder={placeholder}
                onKeyDown={onInputKeyDown}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                ref={ref}/>
      <MsgButton onClick={sendMessage}
                 aria-label={placeholder}>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 16 16">
          <path d='M0,14.3c-0.1,0.6,0.3,0.8,0.8,0.6l14.8-6.5c0.5-0.2,0.5-0.6,0-0.8L0.8,1.1C0.3,0.9-0.1,1.1,0,1.7l0.7,4.2C0.8,6.5,1.4,7,1.9,7.1l8.8,0.8c0.6,0.1,0.6,0.1,0,0.2L1.9,8.9C1.4,9,0.8,9.5,0.7,10.1L0,14.3z'/>
        </svg>
      </MsgButton>
  </MsgBox>
  )
})

ChatInput.propTypes = {
  onMessageSend: PropTypes.func.isRequired,
  user         : PropTypes.object.isRequired,
  placeholder  : PropTypes.string
}

ChatInput.defaultProps = {
  placeholder: 'Type a message...'
}

export default ChatInput