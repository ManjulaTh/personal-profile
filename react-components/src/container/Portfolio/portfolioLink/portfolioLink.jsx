import React, { Component } from 'react'
import java from '../../../img/Java.png'
import javaScript from '../../../img/JavaScript.png'
import spring from '../../../img/Spring.png'
import react from '../../../img/React.png'

const PortfolioLink = props => {
    return (
        <div className="card border-secondary" style={{ width: "400px" }}>
            <img className="card-img-top" src={props.name} alt="Assessment" />
            <div className="btn btn-secondary">
                <a href={props.url} className="text-light"> Link to github </a>
            </div>
        </div >

    )
}

export default PortfolioLink