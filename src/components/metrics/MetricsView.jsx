
import React, { Component } from 'react';
import BarGraph from "@components/metrics/BarGraph";
import styled from "styled-components";

const GraphContainer = styled.div`
  display: table;
  background-color: white;
`

const MetricsView = () => {
  return (
    <GraphContainer>

      <BarGraph>

      </BarGraph>

    </GraphContainer>
  )
}

export default MetricsView
