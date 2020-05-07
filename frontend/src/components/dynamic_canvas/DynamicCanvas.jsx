import Link                           from 'next/link'
import { useRouter }                  from 'next/router'
import React                          from 'react'
import { useSelector }                from 'react-redux'
import { getLayout as getSiteLayout } from 'src/components/layouts/SiteLayout'
import styled                         from 'styled-components'
import { Landing }                    from './modules/Landing'
import { Table }                      from './modules/Table'

const DynamicCanvasContainer = styled.div`
  flex: 1 1 auto;

  display: flex;
  flex-direction: column;
  width: 100%;

  color: rgba(0, 0, 0.87);
  border-color: rgba(0, 0, 0.12);
  background-color: #fafafa;

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

  return (
    <DynamicCanvasContainer>
      <h1>{currentIntent}</h1>
      <h2>{dialogState}</h2>
      {modules.table}
      {children}
    </DynamicCanvasContainer>
  )
}

export default DynamicCanvas
