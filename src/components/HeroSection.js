import React from 'react'
import { ButtonSecond } from './Button'

const HeroSection = ({ bgimage, heading, para }) => {
    return (
        <section id="heroSection" style={{backgroundImage: `url(${bgimage})`}}>
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <h2 className="hero-heading">{heading}</h2>
                        <p className="hero-para">{para}</p>
                        <br />
                        <ButtonSecond title="Donate Now" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;