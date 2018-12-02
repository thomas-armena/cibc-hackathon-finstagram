import React, { Component } from 'react';
import '../App.css';

export default class Suggestion extends Component {


    render(){
      return(
          <div className="suggestion">
            <i className={this.props.iconclass} style={{fontSize:"50px", color:this.props.iconcolor}}>{this.props.icon}</i>
            <div style={{marginLeft:'15px'}}>
              <div><b>{this.props.title}</b></div>
              <div style={{fontSize:'14px'}}>{this.props.message}</div>
            </div>
          </div>
      );
    }
}
