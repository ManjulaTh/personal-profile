import React, { Component } from 'react'
import java from '../../img/Java.png'
import javaScript from '../../img/JavaScript.png'
import spring from '../../img/Spring.png'
import react from '../../img/React.png'
// import PortfolioLink from '../Portfolio/portfolioLink/portfolioLink'



class Portfolio extends Component {

    // render(portfolioLinks) {
    render() {
        return (
            <div className="card-deck mt-5 pt-5">
                <div className="card border-secondary" style={{ width: "400px" }}>
                    <img className="card-img-top" style={{ height: "100%" }} src={java} alt="Java" />
                    <div className="btn btn-secondary">
                        <a href="https://github.com/cooksystemsinc/java-xml-file-transfer-assessment-ManjulaTh.git" className="text-light"> Link to github </a>
                    </div>
                </div >
                <div className="card border-secondary" style={{ width: "400px" }}>
                    <img className="card-img-top" style={{ height: "100%" }} src={javaScript} alt="Java Script" />
                    <div className="btn btn-secondary">
                        <a href="https://github.com/cooksystemsinc/js-assessment-quizler-ManjulaTh.git" class="text-light">Link to github</a>
                    </div>
                </div >
                <div className="card border-secondary" style={{ width: "400px" }}>
                    <img className="card-img-top " style={{ height: "100%" }} src={spring} alt="Spring" />
                    <div className="btn btn-secondary">
                        <a href="https://github.com/cooksystemsinc/spring-controllers-and-services-ManjulaTh.git" class="text-light">Link to github</a>
                    </div>
                </div >
                <div className="card border-secondary" style={{ width: "400px" }}>
                    <img className="card-img-top " style={{ height: "100%" }} src={react} alt="React" />
                    <div className="btn btn-secondary">
                        <a href="https://github.com/cooksystemsinc/redux-assignment-ManjulaTh.git" class="text-light">Link to github</a>
                    </div>
                </div >
                {/* {this.portfolioLinks.map(portfolioLink => (
                    <PortfolioLink
                        key={portfolioLink.name}
                        name={portfolioLink.name}
                        url={portfolioLink.url}
                    />
                ))} */}
            </div >

        )
    }
}

export default Portfolio