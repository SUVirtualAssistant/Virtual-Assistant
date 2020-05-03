import React from 'react'
import styled        from 'styled-components'
import DynamicCanvas from '@components/dynamic_canvas'

const ChatContainer = styled.div`
  border-color: rgba(0, 0, 0.12);
  color: rgba(0, 0, 0.87);
  background-color: #fafafa;

  border-width: 1px;
  border-style: solid;
  box-sizing: border-box;
  outline: 0;
  font-size: 14px;
  line-height: 2;
  height: 100vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const UnderConstruction = styled.div`
  p {
    font-family: ${({ theme }) => theme.font};
    font-size: ${({ theme }) => theme.fontSize.title}px;
    max-width: 125px;
    text-align: center;
    margin: .25rem;
    padding: .25rem;
  }
`


const HelpPage = props => {
  return (
    <>
      <Container>
        <ChatContainer />
        <DynamicCanvas />
      </Container>
    </>
  )
}

export default HelpPage
