import Link            from 'next/link'
import { useRouter }   from 'next/router'
import { getLayout as getSiteLayout}    from 'src/components/layouts/SiteLayout'
import React           from 'react'
import styled          from 'styled-components'
import { useSelector } from 'react-redux'
import { Landing }     from './modules/Landing'
import { Table }       from './modules/Table'

const DynamicCanvasContainer = styled.div`
  color: rgba(0, 0, 0.87);
  border-color: rgba(0, 0, 0.12);
  background-color: #fafafa;

  display: flex;
  flex-direction: column;
  width: 100vw;

  border-width: 1px;
  border-style: solid;
  box-sizing: border-box;
  outline: 0;
  font-size: 14px;
  line-height: 2;
  overflow: hidden;
`

// todo: use static variables to decide which component to render,
//       this will have to be a class? ehh you can attach static
//       variables outside of the main definition.


const ActiveLink = ({ children, href }) => {
  const router = useRouter()
  return (
    <Link href={href} scroll={false}>
      <a className={`${
        router.pathname === href
        ? "hi"
        : "hi"
      } `}
         >
        {children}
      </a>
    </Link>
  )
}

const modules = {
  landing: <Landing />,
  table: <Table />
}

const mapToChat = () => {
  return modules.landing
}

const DynamicCanvas = ({ children }) => {
  const dialogState = useSelector(state => state.lex.dialogState)
  const currentIntent = useSelector(state => state.lex.currentIntent)

  return (
    <DynamicCanvasContainer>
      <h1>{currentIntent}</h1>
      <h2>{dialogState}</h2>
      {children}
    </DynamicCanvasContainer>
  )
}

export const getLayout = page =>
  getSiteLayout(<DynamicCanvas>{page}</DynamicCanvas>)

export default DynamicCanvas
