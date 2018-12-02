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
          <li class="flex-item">
            Cancun
            <div>
              <img src={'./100.png'} className="App-logo"/>
            </div>
          </li>
          <li class="flex-item">
            Car
            <div>
              <img src={'./100_without.png'} className="App-logo-without"/>
            </div>
          </li>
          <li class="flex-item">
            College Fund
            <div>
              <img src={'./1_without.png'} className="App-logo-without"/>
            </div>
          </li>
          <li class="flex-item">
            Mom's Birthday
            <div>
              <img src={'./100_without.png'} className="App-logo-without"/>
            </div>
          </li>
          <li class="flex-item">
            Condo Fund
            <div>
              <img src={'./1_without.png'} className="App-logo-without"/>
            </div>
          </li>
          <li class="flex-item">
            Dad's Birthday
            <div>
              <img src={'./100.png'} className="App-logo"/>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
