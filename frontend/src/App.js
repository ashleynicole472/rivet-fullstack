import React, { Component } from 'react';
import Header from './components/Header.js';
import Content from './components/Content.js';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer.js';
import Page from './components/Page.js';
import NewPage from './components/NewPage.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './stylesheets/App.css';

const API = "http://localhost:3000"

class App extends Component {
  constructor(props){
    super(props)

      this.state = {
        pages: [],
        newPageSuccess: false,
        errors: null
      }
  }

  handleNewPage(){
    fetch(`${API}/pages`, {
        body: JSON.stringify(params),
        headers: {
          'Content-Type': 'application/json'
        },
        method: "POST"
      }
    )
      .then((rawRes) => {
        return rawRes.json()
      })
      .then((parsedRes) => {
        if(parsedResponse.errors){
        this.setState({errors: parsedResponse.errors})
        }else{
        const pages = Object.assign([], this.state.pages)
        pages.push(parsedResponse.page)
        }
        this.setState({
        pages: parsedRes.pages,
        errors: null
      })
    })
  }


  render() {
    return (
      <Router>
        <div>
          <Header />
            <div className="main-container">
              <Sidebar />
              <Switch>
                <Route exact path='/pages' component={ Content } />
                <Route path='/pages/:id' component={ Page } />
              </Switch>
            </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
