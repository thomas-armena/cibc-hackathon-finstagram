import React, {Component} from 'react';
import TransactionFeed from '../components/TransactionFeed';
import Suggestion from '../components/Suggestion';
import axios from 'axios';
import '../App.css';



export default class Livefeed extends Component {

  constructor(props){
    super(props);
    this.state = {
      transactionData:{},
      hide1: "hide-info",
      exp1: "show-info",
      hide2: "hide-info",
      exp2: "show-info",
      hide3: "hide-info",
      exp3: "show-info",
    }
    this.handleHide1 = this.handleHide1.bind(this);
    this.handleHide2 = this.handleHide2.bind(this);
    this.handleHide3 = this.handleHide3.bind(this);


  }

  handleHide1(){
    let nextClass1 = this.state.hide1 == "show-info" ? "hide-info" : "show-info";
    let nextClass2 = this.state.exp1 == "show-info" ? "hide-info" : "show-info";
    this.setState({
      hide1: nextClass1,
      exp1: nextClass2,
    })
  }

  handleHide2(){
    let nextClass1 = this.state.hide2 == "show-info" ? "hide-info" : "show-info";
    let nextClass2 = this.state.exp2 == "show-info" ? "hide-info" : "show-info";
    this.setState({
      hide2: nextClass1,
      exp2: nextClass2,
    })
  }

  handleHide3(){
    let nextClass1 = this.state.hide3 == "show-info" ? "hide-info" : "show-info";
    let nextClass2 = this.state.exp3 == "show-info" ? "hide-info" : "show-info";
    this.setState({
      hide3: nextClass1,
      exp3: nextClass2,
    })
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
          <Suggestion
            icon="mood_bad"
            title="Checking Account"
            message="I am only left with $470 this month! What were you thinking?"
          />
        </div>
        <div className="lf-item" onClick={this.handleHide1}>
          <Suggestion
            icon="mood"
            title="Aventura Visa"
            message="Aventura Visa is feeling happy. Bought $181 of clothing!"
          />
          <div className={this.state.exp1}>
            <i style={{display: "block", textAlign: 'center', width: '100%'}} className="material-icons">expand_more</i>
          </div>
          <br />

          <div className={this.state.hide1}>
            <TransactionFeed transaction={this.state.transactionData[0]} />
            <TransactionFeed transaction={this.state.transactionData[1]} />
            <i style={{display: "block", textAlign: 'center', width: '100%'}} className="material-icons">expand_less</i>
            <br/>

          </div>
        </div>

        <div className="lf-item">
          <Suggestion
            icon="monetization_on"
            title="Tips"
            message="Christmas is coming! Do you know how much you spent last year?"
          />
        </div>

        <div className="lf-item">
          <Suggestion
            icon="monetization_on"
            title="Tips"
            message="You will have to work 10 hours extra to make up for your credit card bill."
          />
        </div>

        <div className="lf-item" onClick={this.handleHide2}>
          <Suggestion
            icon="mood_bad"
            title="Aventura Visa"
            message=" Aventura Visa is feeling anxious about your spending. Next time try waiting for Black Friday for tech purchases!"
          />
          <div className={this.state.exp2}>
            <i style={{display: "block", textAlign: 'center', width: '100%'}} className="material-icons">expand_more</i>
          </div>
          <br />

          <div className={this.state.hide2}>
            <TransactionFeed transaction={this.state.transactionData[2]} />
            <TransactionFeed transaction={this.state.transactionData[3]} />
            <TransactionFeed transaction={this.state.transactionData[4]} />

            <i style={{display: "block", textAlign: 'center', width: '100%'}} className="material-icons">expand_less</i>
            <br/>

          </div>
        </div>




        <div className="lf-item">
          <Suggestion
            icon="mood"
            title="Savings Account"
            message="Is excited by the growth."
          />
        </div>

        <div className="lf-item">
          <Suggestion
            icon="people"
            title="Bruce Banner"
            message="Bruce Banner has reached his Cancun Trip goals! You have currently saved 80%."
          />
        </div>

      </div>
    )
  }
}
