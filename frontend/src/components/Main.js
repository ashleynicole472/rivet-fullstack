import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Content from './Content';
import Page from './Page';

const API = "http://localhost:3000"

class Main extends Component{
	constructor(props){
	  super(props)
		this.state = {
		  pages: []
		}
	}

	// map through the objects in the api and return id, rivet_type, and content for every item in the api
	componentWillMount() {
	  // console.log("API IS PULLING-----" + API);
	  fetch (`${API}/pages/`)
	  .then((rawRes) => {
		return rawRes.json()
	  })
	  .then((parsedRes) => {
		// console.log("parsed", parsedRes)
		this.setState({
		  pages: parsedRes.pages
		})
	  })
	  .catch ((error) => {
		return "Could not get pages:" + error;
	  })
	}

	render() {
		return (
			<div className="main-container">
				<Router>
					<Switch>
						<Route exact path="/pages/" render={() =>
							<Content pages={this.state.pages}/>}
						/>
						<Route path="/pages/:id" render={() =>
							<Page pages={this.state.pages}/>}
						/>
					</Switch>
				</Router>
			</div>
		)
	}
}

export default Main;
