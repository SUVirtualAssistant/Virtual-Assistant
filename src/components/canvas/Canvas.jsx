import { Pixels }           from '@components/loading/spinners'
import { useDelayedRender } from '@shared/hooks'
import React                from 'react'
import styled               from 'styled-components'

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

const DelayedRender = ({ delay, children }) =>
  useDelayedRender(delay)(() => children)

const Canvas = ({
  loading,
  type,
  data
}) => {
  const CanvasComponent = view[type]
  
  return (
    <DynamicCanvasContainer>
        {loading
          ? <DelayedRender delay={1000}>
              <Pixels/>
            </DelayedRender>
          : <CanvasComponent data={data}/>}
    </DynamicCanvasContainer>
  )
}

export default Canvas
