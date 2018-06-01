import React from 'react'


const PortfolioLink = props => {
    return (
        <div className="card border-secondary" style={{ width: "400px" }}>
            <img className="card-img-top" style={{ height: "100%" }} src={props.name} alt="Portfolio" />
            <div className="btn btn-secondary">
                <a href={props.url} className="text-light"> Link to github </a>
            </div>
        </div >
    )
}



export default PortfolioLink