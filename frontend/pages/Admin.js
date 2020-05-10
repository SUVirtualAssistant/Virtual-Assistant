import { getLayout } from '@components/layouts'
import React         from 'react'
import styled        from 'styled-components'

const Content = styled.div`
  position: absolute;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  h1 {
    width: 18ch;
    font-size: 4.5rem;
    font-weight: 400;

    white-space: nowrap;
    overflow: hidden;
    animation: text 1s steps(18);
  }

  @keyframes text {
    0% { width: 0; }
    100% { width: 18ch; }
  }
`

const Admin = () => {
  return (
    <Content>
      <h1>
        Under Construction
      </h1>
    </Content>
  )
}

Admin.getLayout = getLayout

export default Admin
