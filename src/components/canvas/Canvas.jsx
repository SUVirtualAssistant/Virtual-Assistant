import React           from 'react'
import { useSelector } from 'react-redux'
import styled          from 'styled-components'

import DIRdata         from './__mocks__/DIR_GetEmailByName.json'
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
`

const view = {
  BOT  : Components.Default,
  Error: Components.Error,
  CAL  : Components.CAL,
  Hal  : Components.Hal9000,
  DIR  : Components.DIR,
  WS   : Components.WS
}

const Canvas = () => {
  const canvasData = useSelector(state => state.canvas)
  
  const CanvasComponent = view['Hal']
  
  return (
    <DynamicCanvasContainer>
      <CanvasComponent data={DIRdata}/>
    </DynamicCanvasContainer>
  )
}

export default Canvas
