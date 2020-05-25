import PropTypes             from 'prop-types'
import React, { forwardRef } from 'react'
import styled                from 'styled-components'

const ChatForm = styled.form`
  padding: ${({ theme }) => theme.chat.input_padding_y}
           ${({ theme }) => theme.chat.input_padding_x};
  flex: 0 0 auto;
  justify-self: flex-end;
  display: flex;
  flex-flow: row nowrap;
  
  background: ${({ theme }) => theme.field[2]};
  @media (max-width: 1100px) {
    max-height: 47px;
  }
`

const ChatInput = styled.input`
  display: inline-block;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  flex: 1 1 auto;
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;

  color: ${({ theme }) => theme.inverse[1]};
  background: none;

  &:focus::placeholder {
    color: transparent;
  }
`

const SubmitButton = styled.button`
  flex-shrink: 0;
  justify-content: center;
  padding: 0;
  height: 30px;
  width: 30px;
  cursor: pointer;
  text-align: center;
  user-select: none;
  color: inherit;
  background: none !important;
  border-color: transparent !important;
  box-shadow: none !important;
  &::before,
  &::after {
    display: none;
  }

  svg {
    display: inline-block;
    width: 100%;
    height: 100%;
    transition: color .2s ease-in-out;
    fill: ${({ theme }) => theme.icon[2]};
    &:hover { fill: ${({ theme }) => theme.hoverPrimary}; }
  }
`

const ChatInputField = forwardRef(({
  onMessageSend,
  placeholder
}, ref) => {
  
  const sendMessage = e => {
    e.preventDefault()
    
    const { current } = ref
    
    if (onMessageSend && ref !== null) {
      const messageText = current.value
      
      if (messageText.trim()) {
        const message = {
          text     : messageText,
          timestamp: new Date()
        }
        onMessageSend(message)
      }
    }
    
    if (ref !== null)
      current.value = null
  }
  
  return (
    <ChatForm onSubmit={sendMessage}>
      <ChatInput type='text'
                 placeholder={placeholder}
                 ref={ref}/>
      <SubmitButton type="submit"
                    aria-label={placeholder}>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 16 16">
          <path
            d='M0,14.3c-0.1,0.6,0.3,0.8,0.8,0.6l14.8-6.5c0.5-0.2,0.5-0.6,0-0.8L0.8,1.1C0.3,0.9-0.1,1.1,0,1.7l0.7,4.2C0.8,6.5,1.4,7,1.9,7.1l8.8,0.8c0.6,0.1,0.6,0.1,0,0.2L1.9,8.9C1.4,9,0.8,9.5,0.7,10.1L0,14.3z'/>
        </svg>
      </SubmitButton>
    </ChatForm>
  )
})

ChatInputField.propTypes = {
  onMessageSend: PropTypes.func.isRequired,
  placeholder  : PropTypes.string
}

ChatInputField.defaultProps = {
  placeholder: 'Type a message...'
}

export default ChatInputField
