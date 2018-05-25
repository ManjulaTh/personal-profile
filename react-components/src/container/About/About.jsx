import React, { Component } from 'react'
import backdrop from '../../img/aboutBackground.jpg'
import aboutMe from '../../img/AboutMe.png'

class About extends Component {
    render() {
        return (
            <div className="container-full mt-5">
                <div className="card" style={{ width: "100%", height: "700px" }}>
                    <img className="card-img-top" src={backdrop} alt="Card image" />
                    <div className="card-img-overlay text-center ">
                        <img style={{ width: "60%" }} src={aboutMe} />
                    </div>
                </div>
            </div >
        )
    }
}

export default About