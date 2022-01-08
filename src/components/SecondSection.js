import React from 'react'
import Button from './Button'
import rightImage from '../images/photo1.webp'

const SecondSection = () => {
    return (
        <section id="secondSection">
            <div className="container">
                <div className="row secondSection--heading">
                    <div className="col s12">
                        <h4>Feeding India by Zomato is a <strong>not for profit organization,</strong> designing interventions to <strong>reduce hunger</strong> among underserved communities in India.</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m6">
                        <p>In January 2019, Zomato and Feeding India's association gave birth to The Feeding Foundation - moving from a primarily philanthropic relationship to a deeply collaborative alliance. Feeding India by Zomato has served over 15.3 Cr meals as of September 2021.</p>
                        <br /><br /><br />
                        <Button title="More about us" />
                    </div>
                    <div className="col s12 m6">
                        <img src={rightImage} style={{width: "100%"}} alt="second section" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SecondSection;