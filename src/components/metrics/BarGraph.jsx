import React from 'react';
import styled from "styled-components";

import AWS from 'aws-sdk'
AWS.config.region = process.env.LEX_REGION
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: process.env.LEX_IDENTITY_POOL_ID
});

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  LabelSeries
} from 'react-vis';

let greenData = [];
const labelData = greenData.map((d, idx) => ({
  x: d.x,
  y: 100
}));

export default class Example extends React.Component {
  state = {
    isLoaded: false,
    useCanvas: false,
    data: null
  };

  async componentDidMount() {
    const url = 'https://ea7k8rm5oc.execute-api.us-west-2.amazonaws.com/Prod';
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          let GraphData = [];
          for (const [x, y] of Object.entries(result['body'])) {
            GraphData.push({x, y});
          }
          this.setState({
            isLoaded: true,
            data: GraphData
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }

  render() {
    const {useCanvas} = this.state;
    const content = useCanvas ? 'TOGGLE TO SVG' : 'TOGGLE TO CANVAS';
    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;

    return (
        <XYPlot xType="ordinal" width={300} height={300} xDistance={100}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <BarSeries className="vertical-bar-series-example" data={this.state.data} />
          <LabelSeries data={labelData} getLabel={d => d.x} />
        </XYPlot>
    );
  }
}
