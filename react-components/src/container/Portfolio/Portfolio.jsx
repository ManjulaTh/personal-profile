import React, { Component } from 'react'

import PortfolioLink from '../Portfolio/portfolioLink/portfolioLink'



class Portfolio extends Component {


    render() {
        return (
            <div className="card-deck mt-5 pt-5">
                {this.props.links.map(link => (
                    <PortfolioLink
                        key={link.name}
                        name={link.name}
                        url={link.url}
                    />
                ))}

            </div >

        )
    }
}

export default Portfolio