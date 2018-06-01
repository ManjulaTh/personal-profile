import React from 'react'
import { NavLink } from 'react-router-dom'

const Navlink = props => {
    return (
        <li className="nav-item">
            <NavLink
                to={props.url}
                exact
                className="nav-link float-right">
                {props.name}
            </NavLink>
        </li>
    )

}

export default Navlink