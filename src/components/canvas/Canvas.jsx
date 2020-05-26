import React  from 'react'
import styled from 'styled-components'

import * as Components from './intent_views'

const DynamicCanvasContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  width: 100%;

  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  outline: 0;
  background: ${({ theme }) => theme.ui[1]};
`

const view = {
  BOT  : Components.BOT,
  HOME : Components.Default,
  Error: Components.Error,
  CAL  : Components.CAL,
  Hal  : Components.Hal9000,
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
