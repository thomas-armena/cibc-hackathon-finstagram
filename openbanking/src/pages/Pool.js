import React, {Component} from 'react';
import './Pool.css';

export default class Pool extends Component {

  render(){
    return(
      <div>
        <div className="Pool-Div">
          <h1 className="Pool-Title">
          Pool
          </h1>
          <p className="Achieving">
          You achieved 3 out of 6 goals!
          </p>
        </div>

        <ul class="flex-container">
          <li class="flex-item">1</li>
          <li class="flex-item">2</li>
          <li class="flex-item">3</li>
          <li class="flex-item">4</li>
        </ul>
      </div>
    )
  }
}
