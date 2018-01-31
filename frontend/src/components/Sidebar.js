import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Sidebar extends Component {



  render(){

    return(
      <div className="side-container">
          <h2>Pages</h2>
          <hr />
              <ul>
                <li>
                </li>
              </ul>
            <Button className="button">Create Page</Button>
      </div>
    )
  }
}

export default Sidebar;
