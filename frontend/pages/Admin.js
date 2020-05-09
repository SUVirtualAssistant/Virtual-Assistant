import { getLayout } from '@components/layouts'
import React         from 'react'
import styled        from 'styled-components'

const Content = styled.div`
  position: absolute;
  background: #eee;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    width: 18ch;
    font-size: 4.5rem;
    font-weight: 400;
    font-family: monospace;

    white-space: nowrap;
    overflow: hidden;
    animation: text 1s steps(18);
  }

  @keyframes text {
    0% { width: 0; }
    100% { width: 18ch; }
  }
`

const HiddenToggle = styled.input.attrs({ type: 'checkbox' })`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
`

const ToggleSpan = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  opacity: 1;
  background-color: #fff;
  box-shadow: 0 2px 25px #d9d9d9;
  border-radius: 40px;
  transition: 0.2s ease background-color, 0.2s ease opacity;

  &:before, &:after {
    content: '';
    position: absolute;
    top: 8px;
    width: 58px;
    height: 58px;
    border-radius: 50%;
    transition: 0.5s ease transform, 0.2s ease background-color;
  }

  &:before {
    background-color: #fff;
    transform: translate(-58px,0px);
    z-index: 1;
  }

  &:after {
    background-color: #000;
    transform: translate(8px,0px);
    z-index: 0;
  }
`

const Toggle = styled.div`
  position: relative;
  width: 145px;
  height: 74px;
  margin: 0 auto;
  border-radius: 40px;


  & ${HiddenToggle}:checked + ${ToggleSpan} {
    background-color: #000;
  }

  & ${HiddenToggle}:active + ${ToggleSpan}:before {
    opacity: 0.5;
  }

  & ${HiddenToggle}:checked + ${ToggleSpan}:before {
      background-color: #000;
      transform: translate(56px,-19px);
  }

  & ${HiddenToggle}:checked + ${ToggleSpan}:after {
      background-color: #fff;
      transform: translate(79px,0px);
  }
`

const Admin = props => {
  return (
    <Content>
      <h1>
        Under Construction
      </h1>

      {/*<Toggle>*/}
      {/*  <HiddenToggle {...props} />*/}
      {/*  <ToggleSpan/>*/}
      {/*</Toggle>*/}
    </Content>
  )
}

Admin.getLayout = getLayout

export default Admin
