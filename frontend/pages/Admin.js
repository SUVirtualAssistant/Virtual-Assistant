import { getLayout } from '@components/layouts'
import React         from 'react'
import styled        from 'styled-components'

const Page = styled.div`
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

const Toggle = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  .switch {
    display: inline-block;
    width: 80px;
    height: 44px;

    input {
      opacity: 0;
      width: 0;
      height: 0;
      &:checked + .slider {
        background: #f2f3f7;
        box-shadow: inset -3px -2px 5px #ffffff, inset 3px 2px 5px #c4c4c4;
        &:before {
          background-color: rgba(43, 45, 47);
          box-shadow: inset 1px 1px 5px 0 rgba(0, 0, 0, 1);, inset -2px -2px 5px 0 rgba(99, 99, 99, 1);
        }
      }
    }
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(43, 45, 47);
    box-shadow: inset 1px 1px 5px 0 rgba(0, 0, 0, 1),
      inset -2px -2px 5px 0 rgba(99, 99, 99, 1);
    transition: all ease 0.4s;
    border-radius: 34px;
    &:before {
      position: absolute;
      content: "";
      height: 36px;
      width: 36px;
      left: 4px;
      bottom: 4px;
      background-color: #f2f3f7;
      box-shadow: inset -2px -1px 3px #ffffff, inset 2px 1px 3px #c4c4c4;
      transition: all ease 0.5s;
      border-radius: 50%;
    }
  }
`

const Admin = () => {
  return (
    <>
      <Page>
        <h1>
          Under Construction
        </h1>

        <Toggle>
          <label className="switch">
            <input id="switchBox" type="checkbox" />
            <span className="slider round"/>
          </label>
        </Toggle>
      </Page>
    </>
  )
}

Admin.getLayout = getLayout

export default Admin
