import Layout from '@components/layouts'
import React         from 'react'
import styled        from 'styled-components'
import MetricsView from "@components/metrics";

const ChartContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(50vh - 50px);
  width: 80vw;
  background-color : #12171c;

  @media (max-width: 1100px) {
    height: calc(100vh - 40px);
  }
`

const Content = styled.div`
  display: table;
  position: absolute;
  background: #eee;
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
  
   .rv-xy-plot {
    font-family: sans-serif;
    background-color:black;
  }
  .rv-xy-plot__axis__tick__text {
    fill: white;
    font-size: 7px;
  }
  
`

const Admin = () => {
    return (
        <Content>
            <h1>Metrics</h1>
            <ChartContainer>
                {MetricsView()}
            </ChartContainer>
        </Content>
    )
}

Admin.Layout = Layout

export default Admin

