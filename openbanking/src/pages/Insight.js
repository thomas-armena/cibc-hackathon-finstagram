import React, { Component } from 'react';
import {LineChart} from 'react-easy-chart';

export default class Insight extends Component {
  render(){
    return(



    <LineChart
    xType={'text'}
    axes
    dataPoints
    yDomainRange={[0, 45]}
    lineColors={['green']}
    width={375}
    height={200}
    data={[
      [
        { x: 'Jun', y: 25 },
        { x: 'Jul', y: 15 },
        { x: 'Aug', y: 20 },
        { x: 'Sep', y: 10 },
        { x: 'Oct', y: 33 },
        { x: 'Nov', y: 45 },
        { x: 'Dec', y: 15 }
      ]
    ]}
  />
    );
  }
}
