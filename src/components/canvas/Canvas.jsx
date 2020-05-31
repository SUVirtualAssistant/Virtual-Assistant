import React           from 'react'
import styled          from 'styled-components'
import * as Components from './intent_views'

const DynamicCanvasContainer = styled.div`
  box-sizing: border-box;
  
  display: flex;
  flex-direction: column;
  
  height: calc(100vh - 50px);
  width: 100%;
  
  overflow-y: scroll;
  overflow-x: hidden;
  
  background: ${({ theme }) => theme.ui[1]};
  
  @media (max-width: 800px) {
    height: calc(100vh - 40px);
  }
`

const view = {
  HOME: Components.Default,
  CAL : Components.CAL,
  DIR : Components.DIR,
  WS  : Components.WS
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
