import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ("../stylesheets/bootstrap.flatly.min.css");
// list out all pages in seperate cards this is part of the first page loaded

    class Content extends Component {
        render(){
            console.log(this.props);
            return(
                <div>
                    {this.props.pages.map((page, index) => {
                            return (
                            <div className="card border-primary mb-3">
                                <div className="card-body text-primary" key={index}>
                                    <h4 className="card-title">{page.rivet_type}</h4>
                                    <p className="card-text">{page.content}</p>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
            )
        }
    }

export default Content;
