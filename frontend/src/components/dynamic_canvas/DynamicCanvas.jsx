import React from 'react'
import styled from 'styled-components'

const DynamicCanvas = styled.div`
  color: rgba(0, 0, 0.87);
  border-color: rgba(0, 0, 0.12);
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

// todo: use static variables to decide which component to render,
//       this will have to be a class? ehh you can attach static
//       variables outside of the main definition.
export default DynamicCanvas
