import React from 'react'
import Button from './Button'
import rightImage2 from '../images/photo2.webp'

const ThirdSection = () => {
    return (
        <section id="thirdSection">
            <div className="container">
                <div className="row">
                    <div className="col s12 m8">
                        <h4>Become an <strong style={{fontWeight:"500"}}>agent of change</strong></h4>
                        <div className="thirdSection--firstpara">
                            <p>We design interventions to ensure reliable meals for children in underserved communities where <span style={{fontWeight: "500"}}>food can act as an incentive to education and skill development.</span></p>
                            <br />
                            <p>We support Slum Schools, Skill Development centres, Creches, Community Development Centres and Child Shelter Homes.</p>
                        </div>
                        <br /><br />
                        <Button title="Donate now" />
                    </div>
                    <div className="col s12 m4">
                        <img src={rightImage2} style={{width: "100%"}} alt="second section" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ThirdSection;