import React, { Component } from 'react';
import {LineChart} from 'react-easy-chart';
import './Insight.css';

export default class Insight extends Component {

  render(){
    return(
      <div>
    <LineChart
      xType={'text'}
      axes
      dataPoints
      yDomainRange={[0, 45]}
      lineColors={['green']}
      width={375}
      height={200}
      clickHandler={(d) => this.setState({
        dataDisplay: `The value of x is ${d.x} and y is ${d.y}`
      })}
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
    <hr/>

    <div className = "each-box">
    <i className="material-icons md-48">local_offer</i>
    <p>This month you have spent $500</p>
    </div>
    <hr/>

    <div className = "each-box">
    <i className="material-icons md-48">attach_money</i>
    <p>This month you have earned $350</p>
    </div>
    <hr/>

    <div className = "each-box">
    <i className="material-icons md-48">attach_money</i>
    <p>Great job! You've saved $250 this month!</p>
    </div>
    <hr/>

    <div className = "each-box">
    <i className="material-icons md-48">attach_money</i>
    <p>Save $100.00 next month by going to starbucks once a week</p>
    </div>

    </div>

    );
  }
}
