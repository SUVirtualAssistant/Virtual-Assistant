import data            from '@shared/test/printing.json'
import React           from 'react'
import CanvasView      from 'src/components/canvas/CanvasView'
import styled          from 'styled-components'
import * as Components from './intent_views'

const DynamicCanvasContainer = styled.div`
  flex: 1 1 auto;

  display: flex;
  flex-direction: column;
  width: 100%;

  color: rgba(0, 0, 0.87);
  border-color: rgba(0, 0, 0.12);
  background-color: rgba(128, 112, 100, .87);
  overflow-x: hidden;
  overflow-y: auto;

  border-width: 1px;
  border-style: solid;
  box-sizing: border-box;
  outline: 0;
  font-size: 14px;
`

const componentCollection = [
  {
    type : 'Links',
    props: { sessionAttributes: data.sessionAttributes }
  }
]

const Canvas = ({
  children
}) => {

  const mapPropsToComponent = (component, props) =>
    ({ ...(component.props || props), type: component.type })

  return (
    <DynamicCanvasContainer>
      <CanvasView
        components={Components}
        collection={componentCollection}
        mapPropsToComponent={mapPropsToComponent}/>
      {children}
    </DynamicCanvasContainer>
  )
}

export default Canvas
