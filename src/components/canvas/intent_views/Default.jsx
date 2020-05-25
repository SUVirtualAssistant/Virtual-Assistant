import { lexActions }  from '@state/modules/lex'
import React           from 'react'
import styled          from 'styled-components'
import { useDispatch } from 'react-redux'

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`

const Text = styled.p`
  margin: 20px;
  box-sizing: border-box;

  ${({ theme }) => theme.type.display[2]};
  color: ${({ theme }) => theme.text[1]};
  font-size: 28px;
  text-justify: inter-character;
`

export const Default = () => {
  const dispatch = useDispatch()
  
  const getSessionDeets = () => {
    dispatch(lexActions.getSessionDetails())
  }
  
  
  return (
    <Wrapper>
      <Text>
        <button onClick={getSessionDeets}>Log Session Deets</button>
        Hi! <br/> <br/>
        I'm Mercury, a virtual assistant for Seattle University. So far
        I can help you find calendar events, faculty & staff contact information,
        and links from the SU website.
      </Text>
    </Wrapper>
    
  )
}

