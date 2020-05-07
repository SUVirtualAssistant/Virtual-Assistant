import React           from 'react'
import { useSelector } from 'react-redux'
import styled          from 'styled-components'
import { Landing }     from './modules/Landing'
import { Table }       from './modules/Table'

const DynamicCanvasContainer = styled.div`
  flex: 1 1 auto;

  display: flex;
  flex-direction: column;
  width: 100%;

  color: rgba(0, 0, 0.87);
  border-color: rgba(0, 0, 0.12);
  background-color: #fafafa;
  overflow-x: hidden;
  overflow-y: auto;

  border-width: 1px;
  border-style: solid;
  box-sizing: border-box;
  outline: 0;
  font-size: 14px;
`

const modules = {
  landing: <Landing/>,
  table  : <Table/>
}

const DynamicCanvas = ({ children }) => {
  const dialogState = useSelector(state => state.lex.dialogState)
  const currentIntent = useSelector(state => state.lex.currentIntent)
  const latestData = useSelector(state => state.lex.latestData)

  /*
    <Tabs pass through state here>

   */

  return (
    <DynamicCanvasContainer>
      <h1>{currentIntent}</h1>
      <h2>{dialogState}</h2>
      <Table data={latestData}/>
      {children}
    </DynamicCanvasContainer>
  )
}

export default DynamicCanvas
