import React, { Component } from 'react';
//import menuBar from 'components/menuBar';
import LiveFeed from './pages/Livefeed';
import Insight from './pages/Insight';
import Pool from './pages/Pool';
import axios from 'axios';
import './App.css';

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			content:<LiveFeed/>
		}
		this.handleHomeClick = this.handleHomeClick.bind(this);
		this.handleInsightClick = this.handleInsightClick.bind(this);
		this.handlePoolClick = this.handlePoolClick.bind(this);

	}

	componentDidMount(){
		axios.defaults.headers.common['Ocp-Apim-Subscription-Key'] = '5396d28023f147439c63ef73571705c6'
		axios.get("https://api.azureminilab.com/customers/1/accounts")
			.then(response => { console.log(response) })
			.catch(error => {console.log(error) })
	}

	handleHomeClick(){
		this.setState({content: <LiveFeed />});
	}

	handleInsightClick(){
		this.setState({content: <Insight />});
	}

	handlePoolClick(){
		this.setState({content: <Pool />});
	}

	render() {
		return (
			<div className="App">
				{/*Menu Bar */}
				<div className="menubar">
					<div className="menubar-menu"><i className="material-icons">menu</i></div>
					<div className="menubar-title">finstagram</div>
				</div>

				{/*Content*/}
				<div className="content">
					{this.state.content}
				</div>

				{/*Navigation Bar */}
				<div className="navbar">
					<div className="navbar-item"><i onClick={this.handleInsightClick} className="material-icons">bar_chart</i></div>
					<div className="navbar-item"><i onClick={this.handleHomeClick} className="material-icons">home</i></div>
					<div className="navbar-item"><i onClick={this.handlePoolClick} className="material-icons">people</i></div>
				</div>
			</div>
		);
	}
}

export default App;
