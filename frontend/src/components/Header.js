import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import ("../stylesheets/bootstrap.flatly.min.css");

class Header extends Component{
  render() {
    return(
      <div>

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="#company">Acme Rivet Co.</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Register</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Login</a>
              </li>
            </ul>
          </div>

        </nav>

      </div>
    )
  }
}

export default Header;
