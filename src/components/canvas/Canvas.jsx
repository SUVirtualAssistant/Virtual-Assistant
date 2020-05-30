import React  from 'react'
import styled from 'styled-components'

import * as Components from './intent_views'

const DynamicCanvasContainer = styled.div`
  overflow-y: scroll;
  height: 100vh;

  display: flex;
  flex-direction: column;
  width: 100%;

  overflow-x: hidden;
  box-sizing: border-box;
  
  background: ${({ theme }) => theme.ui[1]};
`

const view = {
  HOME : Components.Default,
  Error: Components.Error,
  CAL  : Components.CAL,
  DIR  : Components.DIR,
  WS   : Components.WS
}

const Canvas = ({
  type,
  data
}) => {
  const CanvasComponent = view[type]
  
  return (
    <DynamicCanvasContainer>
      <CanvasComponent data={data}/>
    </DynamicCanvasContainer>
  )
}

export default Canvas
