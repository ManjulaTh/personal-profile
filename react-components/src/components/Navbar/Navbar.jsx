import React, { Component } from 'react'
import '../../App.css'
import Navlink from './Navlink/Navlink'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-secondary navbar-dark fixed-top mw-5" >
                {/* <div className="container d-flex bg-light mx-0 mw-100"> */}
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        {this.props.links.map(link => (
                            <Navlink
                                key={link.name}
                                name={link.name}
                                url={link.url}
                                className={link.className}
                            />
                        ))}
                    </ul>
                    <a class="btn btn-light text-secondary" href="https://drive.google.com/file/d/1RJVpgehsNHr1MB6fkIvwbM2Al4x03jOB/view?ths=true" role="button">See Profile</a>

                </div>
                {/* </div> */}
            </nav>
        )
    }
}

export default Navbar
