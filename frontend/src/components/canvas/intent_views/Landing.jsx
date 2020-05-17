import React  from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  flex: 0 0 auto;
  position: center;
  text-align: left;
  margin-left: 40px;

  font-size: 36px;
  font-family: ${({ theme }) => theme.font.display};

`

const Text = styled.p`
  margin: 20px;
  box-sizing: border-box;

  font-family: ${({ theme }) => theme.font.regular};
  font-size: 28px;
  text-justify: inter-character;
`


export const Landing = () => {
  return (
    <Wrapper>
      <Text>
        Hi! <br/> <br />
        I'm Mercury, a virtual assistant for Seattle University. So far
        I can help you find calendar events, faculty & staff contact information,
        and links from the SU website.
      </Text>
    </Wrapper>
  )

}
