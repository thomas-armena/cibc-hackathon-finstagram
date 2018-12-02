import React, { Component } from 'react';
import LiveFeed from './pages/Livefeed';
import Insight from './pages/Insight';
import Pool from './pages/Pool';
import axios from 'axios';
import './App.css';

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			content:<LiveFeed/>,
			sidebarActive: false,
		}
		this.handleHomeClick = this.handleHomeClick.bind(this);
		this.handleInsightClick = this.handleInsightClick.bind(this);
		this.handlePoolClick = this.handlePoolClick.bind(this);
		this.handleMenuClick = this.handleMenuClick.bind(this);

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

	handleMenuClick(){
		//window.alert('check')
		this.setState({sidebarActive: !this.state.sidebarActive})
	}

	render() {
		let contentToggle = this.state.sidebarActive ? "sbActive" : "sbInactive";
		let contentClass = "app-content "+contentToggle;

		let sidebarToggle = this.state.sidebarActive ? "show" : "hide";
		let sidebarClass = "sidebar "+sidebarToggle;

		return (
			<div className="App">
				{/*Sidebar*/}
				<div className={sidebarClass}>
					test
				</div>

				<div className={contentClass}>
					{/*Menu Bar */}
					<div className="menubar">
						<div className="menubar-title">finstagram</div>
						<div className="menubar-menu"><i onClick={this.handleMenuClick} className="material-icons">menu</i></div>
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
			</div>
		);
	}
}

export default App;
