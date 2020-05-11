import React  from 'react'
import styled from 'styled-components'

const Title = styled.h1`

`

const Text = styled.p`

`


export const Landing = () => {
  return (
    <>
      <Title>Welcome</Title>
      <Text>
        Hi! I'm Mercury, a virtual assistant for Seattle University. So far
        I can help you find calendar events, faculty & staff contact information,
        and links from the SU website.
      </Text>
    </>
  )

}
