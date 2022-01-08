import React from 'react'
import { FaTwitter, FaInstagram} from 'react-icons/fa'
import Button from './Button'

const SocialSection = () => {
    return (
        <section id="socialSection">
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <h4><strong>Follow</strong> our journey</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m6 social-col">
                        <FaTwitter className="social-col-icon" /><h6><strong> @feedingindia</strong></h6>
                    </div>
                    <div className="col s12 m6 social-col">
                        <FaInstagram className="social-col-icon" /><h6><strong> @feedingindia</strong></h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <h6><strong>Get Support</strong></h6>
                        <p>We would love to partner with organisations working towards a similar cause. Reach out to us if you’re an NGO, private organisation or educational institute that is in need of support.</p>
                        <br />
                        <Button title="Register Now" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SocialSection;