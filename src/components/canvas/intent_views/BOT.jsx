/**
 * Possible joke
 *
 * src: https://codepen.io/mambroz/pen/awBfC
 */
import React                 from 'react'
import styled, { keyframes } from 'styled-components'

const flash = keyframes`
     0%,  11.5%,   32%,
    40%, 41.25%,   55%,
    60%,    69%, 74.2%,
    78%,    86%,   90%,
    97%,   100%         { opacity:  0; }
  74.9%                 { opacity: .1; }
    25%,    46%,   56%,
    84%,    95%         { opacity: .2; }
     9%                 { opacity: .3; }
  56.8%,  74.8%         { opacity: .4; }
     6%,    93%         { opacity: .5; }
  10.5%,    80%         { opacity: .6; }
    73%                 { opacity: .7; }
    49%,    65%,   85%  { opacity: .8; }
    10%,    18%,   38%,
    43%                 { opacity: .9; }
     4%,     8%, 11.2%,
    30%,    41%,   47%,
  53.5%,  56.3%,   57%,
  75.2%,    87%, 95.5%,
    98%                 { opacity:  1; }
`

const Hal = styled.div`
  border: .15em solid rgba(0,0,0,.28);
  box-shadow: 0 0 1em rgba(0,0,0,.2), 0 .5em .5em rgba(0,0,0,.2);
  height: 325px;
  position: relative;
  margin: 2em auto;
  transition: height .15s ease, width .15s ease;
  width: 325px;
  
  :before {
    background: linear-gradient(to bottom, rgb(201,208,219) 0%, rgb(182,187,196) 35%, rgb(161,165,173) 50%, rgb(127,130,135) 100%);
    z-index: 1;
  }
  
  :after {
    background: linear-gradient(to bottom, rgb(40,41,43) 0%, rgb(62,63,66) 45%, rgb(91,92,96) 55%, rgb(193,195,204) 100%);
    z-index: 2;
    margin: 2%;
    height: 96%;
    width: 96%;
  }
  
`

const Eye = styled.div`
  background: rgb(0,0,0);
  border: 1px solid rgba(0,0,0,.2);
  height: 90%;
  left: 5%;
  position: absolute;
  top: 5%;
  width: 90%;
  z-index: 3;
  
  :before {
    background: radial-gradient(ellipse at center, rgb(255,215,215) 0%, rgb(255,0,0) 5%, rgb(150,0,0) 35%, rgb(0,0,0) 60%, rgb(0,0,0) 85%);
  }
  
  :after {
    animation: ${flash} 30s ease-in-out infinite alternate;
    background: radial-gradient(ellipse at center, rgb(255,215,215) 0%, rgb(255,0,0) 15%, rgb(150,0,0) 45%, rgb(0,0,0) 70%, rgb(0,0,0) 95%);
  }
`

const Reflection = styled.div`
  height: 15%;
  left: 38%;
  top: 10%;
  width: 24%;
  z-index: 4;
  
  :before {
    right: 120%;
    transform:rotate(-50 deg);
    z-index: 5;
  }
  
  :after {
    left: 120%;
    transform: rotate(50 deg);
    z-index: 6;
  }
  
  &, &:before, &:after {
    background: radial-gradient(ellipse at bottom, rgba(255,255,255,0) 20%,rgba(255,255,255,.08) 21%) no-repeat center 100%;
    background-size: 425% 100%;
    border-radius:  100% 100% 0 0 / 35% 35% 0 0;
    position: absolute;
  }
  
  &:before, &:after {
    content: '';
    display: block;
    height: 100%;
    top: 80%;
    width: 80%;
  }
`

const Container = styled.div`
  height: 100%;
  margin: 0;
  padding: 0;
  
  ${Hal}, ${Hal}:before, ${Hal}:after,
  ${Eye}, ${Eye}:before, ${Eye}:after {
    border-radius: 100%;
    box-sizing: border-box;
  }
  
  ${Hal}:before, ${Hal}:after,
  ${Eye}:before, ${Eye}:after {
    content: '';
    display: block;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }
`

export const BOT = () =>
  <Container>
    <Hal>
      <Eye/>
      <Reflection/>
    </Hal>
  </Container>
