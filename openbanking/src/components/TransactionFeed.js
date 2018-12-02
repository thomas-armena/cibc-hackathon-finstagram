import React, { Component } from 'react';
import '../App.css';

export default class TransactionFeed extends Component {
  render(){
    let content;
    if (this.props.transaction){
      content = (
        <div>
          <div className="transaction">
            <div className="transaction-title">
              {this.props.transaction.description}
              <br />
              <div style={{fontSize:'12px',color:'gray'}}>{this.props.transaction.transaction_date}</div>
              <div style={{fontSize:'12px',color:'gray'}}>{this.props.transaction.type}</div>
            </div>
            <div className="transaction-value">
              -${this.props.transaction.transaction_value}
            </div>
          </div>
        </div>
      );
    } else {
      content = <div/>
    }
    return(
      <div>
        {content}
      </div>
    )
  }
}
