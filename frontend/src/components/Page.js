import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Edit from './Edit.js';
import Sidebar from './Sidebar.js';
import ("../stylesheets/bootstrap.flatly.min.css");

// page about one type of rivet aka rivet Profile

    class Page extends Component {

        render () {
            console.log("props", this.props.pages);
            const { id, rivet_type, content } = this.props.pages;

            return(
                <div>
                    <div><Sidebar pages={this.props.pages}/></div>
                        <div className="card border-primary mb-3">
                        <div className="card-body text-primary">
                            <h4 className="card-title">{rivet_type}</h4>
                            <p className="card-text">{content}</p>
                        </div>
                        <div>
                            <Button className="button">
                                <Link to={`/pages/${id}/edit`}>Edit Page</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            )
        }
    }

export default Page;
