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
      axisLabels={{y: 'Your Spending'}}
      yDomainRange={[0, 100]}
      lineColors={['green']}
      width={375}
      height={200}
      clickHandler={(d) => this.setState({
        dataDisplay: `The value of x is ${d.x} and y is ${d.y}`
      })}
      data={[
        [
          { x: 'Jun', y: 50 },
          { x: 'Jul', y: 30 },
          { x: 'Aug', y: 40 },
          { x: 'Sep', y: 20 },
          { x: 'Oct', y: 66 },
          { x: 'Nov', y: 90 },
          { x: 'Dec', y: 30 }
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
    <i className="material-icons md-48">account_balance_wallet</i>
    <p>Great job! You've saved $250 this month!</p>
    </div>
    <hr/>

    <div className = "each-box">
    <i className="material-icons md-48">announcement</i>
    <p>Save $100.00 next month by going to starbucks once a week</p>
    </div>
    <hr/>

    </div>

    );
  }
}
