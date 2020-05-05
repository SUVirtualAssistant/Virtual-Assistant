import React  from 'react'
import styled from 'styled-components'

const MsgBox = styled.div`
  width: 100%;
  padding: 10px 16px;
  border-width: 1px;
  border-style: solid;
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
  border-color: rgba(0,0,0,0.12);
  background-color: #fff;
`

const MsgInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  outline: 0;
  display: flex;
  align-items: center;
  overflow: hidden;
  border: 0;
  flex: 1 1 auto;
`

const MsgButton = styled.button`
  border-color: transparent;
  background: none !important;
  box-shadow: none !important;
  transition: color .2s ease-in-out;
  padding: 0;
  flex-shrink: 0;
  border-radius: 2px;
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  font-size: 14px;
  text-align: center;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  user-select: none;
  position: relative;
  outline: none;

  button {
    width: 100vw;
  }

  &:hover {
    color: #3f51b5;
  }

  svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
  }
`
const svgINFO = 'M0,14.3c-0.1,0.6,0.3,0.8,0.8,0.6l14.8-6.5c0.5-0.2,0.5-0.6,0-0.8L0.8,1.1C0.3,0.9-0.1,1.1,0,1.7l0.7,4.2C0.8,6.5,1.4,7,1.9,7.1l8.8,0.8c0.6,0.1,0.6,0.1,0,0.2L1.9,8.9C1.4,9,0.8,9.5,0.7,10.1L0,14.3z'

const NMessage = () => <MsgBox>
  <MsgInput placeholder="Type a message..."/>
  <MsgButton>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 16 16">
      <path d={svgINFO}/>
    </svg>
  </MsgButton>
</MsgBox>

export default NMessage
