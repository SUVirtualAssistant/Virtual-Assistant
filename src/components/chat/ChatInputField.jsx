import PropTypes             from 'prop-types'
import React, { forwardRef } from 'react'
import styled                from 'styled-components'

const ChatForm = styled.form`
  padding: ${({ theme }) => theme.chat.input_padding_y} ${({ theme }) => theme.chat.input_padding_x};
  justify-self: flex-end;
  border-width: 1px 0 0;
  border-style: solid;
  flex: 0 0 auto;
  display: flex;
  flex-flow: row nowrap;

  @media (max-width: 1100px) {
    max-height: 47px;
  }
`

const ChatInput = styled.input`
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
`

const SubmitButton = styled.button`
  padding: 0;
  flex-shrink: 0;
  text-align: center;

  height: 30px;
  width: 30px;
  justify-content: center;

  border-color: transparent !important;
  color: inherit;
  background: none !important;
  box-shadow: none !important;

  cursor: pointer;
  user-select: none;
  
  &::before,
  &::after {
    display: none;
  }

  svg {
    display: inline-block;

    width: 100%;
    height: 100%;
    transition: color .2s ease-in-out;

    fill: ${({ theme }) => theme.colors.buttonText};

    &:hover { fill: ${({ theme }) => theme.colors.buttonHover}; }
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
