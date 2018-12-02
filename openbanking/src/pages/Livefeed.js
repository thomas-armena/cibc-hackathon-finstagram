import React, {Component} from 'react';
import TransactionFeed from '../components/TransactionFeed';
import axios from 'axios';
import '../App.css';



export default class Livefeed extends Component {

  constructor(props){
    super(props);
    this.state = {
      transactionData:{}
    }
  }

  componentDidMount(){
    const customerID = "1";
    const accountID = "4520462058033580";

    axios.defaults.headers.common['Ocp-Apim-Subscription-Key'] = '5396d28023f147439c63ef73571705c6'
    axios.get("https://api.azureminilab.com/accounts/"+accountID+"/transactions")
      .then(response => {
        const data = response.data.slice(-20);
        console.log(data)
        this.setState({ transactionData: data });

      })
      .catch(error => {console.log(error) })
  }

  render(){
    if (!this.state.transactionData) {
      return (<div>Loading transaction ... </div>);
    }
    return(
      <div>
        <div className="lf-item">
          <TransactionFeed transaction={this.state.transactionData[0]} />
        </div>

        <div className="lf-item">
          <TransactionFeed transaction={this.state.transactionData[1]} />
        </div>

        <div className="lf-item">
          <TransactionFeed transaction={this.state.transactionData[2]} />
        </div>

        <div className="lf-item">
          <TransactionFeed transaction={this.state.transactionData[3]} />
        </div>

        <div className="lf-item">
          <TransactionFeed transaction={this.state.transactionData[4]} />
        </div>

        <div className="lf-item">
          <TransactionFeed transaction={this.state.transactionData[5]} />
        </div>

        <div className="lf-item">
          <TransactionFeed transaction={this.state.transactionData[6]} />
        </div>

        <div className="lf-item">
          <TransactionFeed transaction={this.state.transactionData[7]} />
        </div>

        <div className="lf-item">
          <TransactionFeed transaction={this.state.transactionData[8]} />
        </div>

        <div className="lf-item">
          <TransactionFeed transaction={this.state.transactionData[9]} />
        </div>
      </div>
    )
  }
}
