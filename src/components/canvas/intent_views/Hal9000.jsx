/**
 * Possible joke
 *
 * src: https://codepen.io/mambroz/pen/awBfC
 */
import React  from 'react'
import styled from 'styled-components'



const Hal = styled.div`
  border: .15em solid rgba(0,0,0,.28);
  box-shadow: 0 0 1em rgba(0,0,0,.2), 0 .5em .5em rgba(0,0,0,.2);
  height: 325px;
  position: relative;
  margin: 2em auto;
  transition: height .15s ease, width .15s ease;
  width: 325px;
  
  :before {
    background: -webkit-linear-gradient(top, rgb(201,208,219) 0%, rgb(182,187,196) 35%, rgb(161,165,173) 50%, rgb(127,130,135) 100%);
    background: linear-gradient(to bottom, rgb(201,208,219) 0%, rgb(182,187,196) 35%, rgb(161,165,173) 50%, rgb(127,130,135) 100%);
    z-index: 1;
  }
  
  :after {
    background: -webkit-linear-gradient(top, rgb(40,41,43) 0%, rgb(62,63,66) 45%, rgb(91,92,96) 55%, rgb(193,195,204) 100%);
    background: linear-gradient(to bottom, rgb(40,41,43) 0%, rgb(62,63,66) 45%, rgb(91,92,96) 55%, rgb(193,195,204) 100%);
    height: 96%;
    margin: 2%;
    width: 96%;
    z-index: 2;
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
    background: -webkit-radial-gradient(center, ellipse cover, rgb(255,215,215) 0%, rgb(255,0,0) 5%, rgb(150,0,0) 35%, rgb(0,0,0) 60%, rgb(0,0,0) 85%);
    background: radial-gradient(ellipse at center, rgb(255,215,215) 0%, rgb(255,0,0) 5%, rgb(150,0,0) 35%, rgb(0,0,0) 60%, rgb(0,0,0) 85%);
  }
  
  :after {
    -webkit-animation: flash 30s ease-in-out infinite alternate;
    animation: flash 30s ease-in-out infinite alternate;
    background: -webkit-radial-gradient(center, ellipse cover, rgb(255,215,215) 0%, rgb(255,0,0) 15%, rgb(150,0,0) 45%, rgb(0,0,0) 70%, rgb(0,0,0) 95%);
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
    -ms-transform: rotate(-50 deg);
    -webkit-transform: rotate(-50 deg);
    transform:rotate(-50 deg);
    z-index: 5;
  }
  
  :after {
    left: 120%;
    -ms-transform: rotate(50 deg);
    -webkit-transform: rotate(50deg);
    transform: rotate(50 deg);
    z-index: 6;
  }
  
  &, &:before, &:after {
    background: -webkit-radial-gradient(bottom, ellipse cover, rgba(255,255,255,0) 20%,rgba(255,255,255,.08) 21%);
    background: radial-gradient(ellipse at bottom, rgba(255,255,255,0) 20%,rgba(255,255,255,.08) 21%);
    background-position: center 100%;
    background-repeat: no-repeat;
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
  
  ${Hal}, ${Hal}:before, ${Hal}:after, ${Eye}, ${Eye}:before, ${Eye}:after {
    border-radius: 100%;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  ${Hal}:before, ${Hal}:after,
  ${Eye}:before, ${Eye}:after {
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
  
  @-webkit-keyframes flash {
    0%{ opacity: 0; }
    4%{ opacity: 1; }
    6%{ opacity: .5; }
    8%{ opacity: 1; }
    9%{ opacity: .3; }
    10%{ opacity: .9; }
    10.5%{ opacity: .6; }
    11.2%{ opacity: 1; }
    11.5%{ opacity: 0; }
    18%{ opacity: .9; }
    25%{ opacity: .2; }
    30%{ opacity: 1; }
    32%{ opacity: 0; }
    38%{ opacity: .9; }
    40%{ opacity: 0; }
    41%{ opacity: 1; }
    41.25%{ opacity: 0; }
    43%{ opacity: .9; }
    46%{ opacity: .2; }
    47%{ opacity: 1; }
    49%{ opacity: .8; }
    53.5%{ opacity: 1; }
    55%{ opacity: 0; }
    56%{ opacity: .2; }
    56.3%{ opacity: 1; }
    56.8%{ opacity: .4; }
    57%{ opacity: 1; }
    60%{ opacity: 0; }
    65%{ opacity: .8; }
    69%{ opacity: 0; }
    73%{ opacity: .7; }
    74.2%{ opacity: 0; }
    74.8%{ opacity: .4; }
    74.9%{ opacity: .1; }
    75.2%{ opacity: 1; }
    78%{ opacity: 0; }
    80%{ opacity: .6; }
    84%{ opacity: .2; }
    85%{ opacity: .8; }
    86%{ opacity: 0; }
    87%{ opacity: 1; }
    90%{ opacity: 0; }
    93%{ opacity: .5; }
    95%{ opacity: .2; }
    95.5%{ opacity: 1; }
    97%{ opacity: 0; }
    98%{ opacity: 1; }
    100%{ opacity: 0; }
  }

  @keyframes flash {
    0%{ opacity: 0; }
    4%{ opacity: 1; }
    6%{ opacity: .5; }
    8%{ opacity: 1; }
    9%{ opacity: .3; }
    10%{ opacity: .9; }
    10.5%{ opacity: .6; }
    11.2%{ opacity: 1; }
    11.5%{ opacity: 0; }
    18%{ opacity: .9; }
    25%{ opacity: .2; }
    30%{ opacity: 1; }
    32%{ opacity: 0; }
    38%{ opacity: .9; }
    40%{ opacity: 0; }
    41%{ opacity: 1; }
    41.25%{ opacity: 0; }
    43%{ opacity: .9; }
    46%{ opacity: .2; }
    47%{ opacity: 1; }
    49%{ opacity: .8; }
    53.5%{ opacity: 1; }
    55%{ opacity: 0; }
    56%{ opacity: .2; }
    56.3%{ opacity: 1; }
    56.8%{ opacity: .4; }
    57%{ opacity: 1; }
    60%{ opacity: 0; }
    65%{ opacity: .8; }
    69%{ opacity: 0; }
    73%{ opacity: .7; }
    74.2%{ opacity: 0; }
    74.8%{ opacity: .4; }
    74.9%{ opacity: .1; }
    75.2%{ opacity: 1; }
    78%{ opacity: 0; }
    80%{ opacity: .6; }
    84%{ opacity: .2; }
    85%{ opacity: .8; }
    86%{ opacity: 0; }
    87%{ opacity: 1; }
    90%{ opacity: 0; }
    93%{ opacity: .5; }
    95%{ opacity: .2; }
    95.5%{ opacity: 1; }
    97%{ opacity: 0; }
    98%{ opacity: 1; }
    100%{ opacity: 0; }
  }
`

export const Hal9000 = () =>
  <Container>
    <Hal>
      <Eye/>
      <Reflection/>
    </Hal>
  </Container>
