import React, { Component } from 'react';
import './stylesheets/App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';


    class App extends Component {

        render() {
            return (

                <div>
                    <Header />
                        <Main />
                    <Footer />
                </div>

            );
        }
    }

export default App;
