import React           from 'react'
import { useSelector } from 'react-redux'
import styled          from 'styled-components'
import * as Components from './modules'

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

const testComponentConfig = [
  { type: 'Table' },
  { type: 'Landing' }
]

export const DynamicCanvas = props => {
  const dialogState = useSelector(state => state.lex.dialogState)
  const currentIntent = useSelector(state => state.lex.currentIntent)
  const latestData = useSelector(state => state.chat.latestData)

  const mapPropsToComponent = (component, props) =>
    ({ ...(component.props || props), type: component.type })

  return (
    <DynamicCanvasContainer>
      <h1>{currentIntent}</h1>
      <h2>{dialogState}</h2>
      {/*{latestData && <Table data={latestData}/>}*/}
      <Components.ModuleCollection
        components={Components}
        collection={testComponentConfig}
        mapPropsToComponent={mapPropsToComponent}/>

      {props.children}
    </DynamicCanvasContainer>
  )
}
