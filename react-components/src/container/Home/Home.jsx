import React, { Component } from 'react'
import backdrop from '../../img/homeBackground.jpg'
import Manjula from '../../img/mthiagarajan.jpg'

class Home extends Component {
    render() {
        return (
            <div className="container-full mt-5">
                <div className="card" style={{ width: "100%", height: "700px" }}>
                    <img className="card-img-top" src={backdrop} alt="Background" />
                    <div className="card-img-overlay text-center ">
                        <h1 className="card-title text-secondary mx-5 my-5" >Manjula Thiagarajan</h1>
                        <img className="rounded-circle" style={{ width: "25%" }} src={Manjula} alt="MyPicture" />
                    </div>
                </div>
            </div >
        )
    }
}

export default Home