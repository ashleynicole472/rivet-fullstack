import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
    constructor(props){
        super(props)

    }

    render() {
        const {id, rivet_type} = this.props.pages;

        return(
            <div className="side-container">
                <h2>Pages</h2>
                <hr />
                    <ul>
                        <li key={id}>
                            <Link to={{pathname: `/pages/${id}`}}>{rivet_type}</Link>
                        </li>
                    </ul>
                <Button className="button">Create Page</Button>
            </div>
        )
    }
}

export default Sidebar;
