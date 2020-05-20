import React  from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`

const Text = styled.p`
  margin: 20px;
  box-sizing: border-box;

  font-family: ${({ theme }) => theme.font.regular};
  font-size: 28px;
  text-justify: inter-character;
`

export const Default = () =>
    <Text>
      Hi! <br/> <br/>
      I'm Mercury, a virtual assistant for Seattle University. So far
      I can help you find calendar events, faculty & staff contact information,
      and links from the SU website.
    </Text>
