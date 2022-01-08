import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import logo from '../images/logo.webp'

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="row">
                    <div className="col s12 m4">
                        <img src={logo} alt="logo" style={{width: "74%"}}/>
                        <br /><br />
                        <p className="footerlogo-para">Registered as Hunger Heroes.<br />Under Indian Society Registration Act XXI, 1860</p>
                        <br />
                        <p className="footerlogo-para">All donations are tax-exempted as eligible under section 80G of the the Income Tax Act, 1961.</p>
                    </div>
                    <div className="col s12 m2 offset-m2">
                        <p className="small-para"><strong>Who we are</strong></p>
                        <br />
                        <ul className="footer-menu-items">
                            <li className="footer-menu-item">About us</li>
                            <li className="footer-menu-item">Contact us</li>
                        </ul>
                    </div>
                    <div className="col s12 m2">
                        <p className="small-para"><strong>Get involved</strong></p>
                        <br />
                        <ul className="footer-menu-items">
                            <li className="footer-menu-item">Donate</li>
                            <li className="footer-menu-item">Request for food</li>
                            <li className="footer-menu-item">Partner with us</li>
                        </ul>
                    </div>
                    <div className="col s12 m2">
                        <p className="small-para"><strong>Social</strong></p>
                        <br />
                        <ul className="footer-social-menu-items">
                            <li className="footer-social-menu-item"><a href="/" target="_blank"><FaFacebookF /></a></li>
                            <li className="footer-social-menu-item"><a href="/" target="_blank"><FaTwitter /></a></li>
                            <li className="footer-social-menu-item"><a href="/" target="_blank"><FaInstagram /></a></li>
                            <li className="footer-social-menu-item"><a href="/" target="_blank"><FaLinkedinIn /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;