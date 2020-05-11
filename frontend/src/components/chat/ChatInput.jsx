import { KEYS }          from '@shared/constants'
import PropTypes         from 'prop-types'
import React, { useRef } from 'react'
import styled            from 'styled-components'

const WrappedChatInput = styled.div`
  padding: ${({ theme }) => theme.chat.input_padding_y} ${({ theme }) => theme.chat.input_padding_x};
  justify-self: flex-end;
  border-width: 1px 0 0;
  border-style: solid;
  flex: 0 0 auto;
  display: flex;
  flex-flow: row nowrap;

  input {
    display: inline-block;
    overflow: hidden;

    width: 100%;
    margin: 0;
    padding: 0;
    border: 0;

    font: inherit;
    text-overflow: ellipsis;

    flex: 1 1 auto;
    outline: none;

    background: none;
    color: ${({ theme }) => theme.colors.chat.bubble_text};

    &:focus::placeholder {
      color: transparent;
    }
  }

  button {
    padding: 0;
    flex-shrink: 0;
    text-align: center;

    height: 36px;
    width: 36px;
    justify-content: center;

    border-color: transparent !important;
    color: inherit;
    background: none !important;
    box-shadow: none !important;

    cursor: pointer;
    user-select: none;

    svg {
      display: inline-block;

      width: 100%;
      height: 100%;
      transition: color .2s ease-in-out;

      fill: ${({ theme }) => theme.colors.buttonText};

      &:hover { fill: ${({ theme }) => theme.colors.buttonHover}; }
    }

    &::before,
    &::after {
      display: none;
    }
  }
`

const ChatInput = React.forwardRef((props, ref) => {
  const {
    onMessageSend,
    user,
    placeholder
  } = props

  const focused = useRef(false)

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

    if (ref) ref.current.value = null
  }

  return (
    <WrappedChatInput>
      <input type='text'
             placeholder={placeholder}
             onKeyDown={onInputKeyDown}
             onFocus={() => focused.current = true}
             onBlur={() => focused.current = false}
             ref={ref}/>
      <button onClick={sendMessage}
              aria-label={placeholder}>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 16 16">
          <path
            d='M0,14.3c-0.1,0.6,0.3,0.8,0.8,0.6l14.8-6.5c0.5-0.2,0.5-0.6,0-0.8L0.8,1.1C0.3,0.9-0.1,1.1,0,1.7l0.7,4.2C0.8,6.5,1.4,7,1.9,7.1l8.8,0.8c0.6,0.1,0.6,0.1,0,0.2L1.9,8.9C1.4,9,0.8,9.5,0.7,10.1L0,14.3z'/>
        </svg>
      </button>
    </WrappedChatInput>
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
