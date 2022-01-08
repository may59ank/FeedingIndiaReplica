import React from 'react'
import logo from '../images/logo.webp'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav id="navbar">
            <div className="container col s12 nav-wrapper">
                <Link to="/" className="logo-container"><img src={logo} alt="logo" style={{width: "160px", filter:  "brightness(0) invert(1)"}}/></Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/campaign">Campaigns</Link></li>
                    <li><Link to="/request-for-food">Request for food</Link></li>
                    <li><Link to="/partner">Partner</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;