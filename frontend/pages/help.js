import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
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
    <Container>
      <UnderConstruction>
        <p>Under Construction</p>
      </UnderConstruction>
    </Container>
  )
}

export default HelpPage
