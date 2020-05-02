import SendSVG    from '../../shared/assets/icons/send.svg'
import React   from 'react'
import styled  from 'styled-components'

const StyledSendButton = styled.button`
  background: ${({ theme }) => theme.buttonBackground};
  border: .5px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 2px;
  cursor: pointer;
  justify-content: space-between;
  font-size: 0.5rem;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  width: 6rem;
  height: 3rem;

  svg {
    height: auto;
    width: 2rem;

    filter: ${({ theme }) => theme.sendBtnFilter};
  }
`

const SendButton = () => (
  <StyledSendButton>
    <SendSVG />
  </StyledSendButton>
)

export default SendButton


