import React           from 'react'
import styled          from 'styled-components'
import * as Components from './intent_views'

const DynamicCanvasContainer = styled.div`
  flex: 0 50%;
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  overflow: auto;
  background-color: ${({ theme }) => theme.ui[1]}1A;
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
