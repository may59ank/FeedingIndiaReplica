import React from 'react'
import cardImage1 from '../images/photo3.webp'
import cardImage2 from '../images/photo4.webp'
import cardImage3 from '../images/photo5.webp'
import CampaignsCard from './CampaignsCard'

const Campaigns = () => {
    return (
        <section id="campaigns">
            <div className="container">
                <div className="row">
                    <h4>Past <strong>Campaigns</strong></h4>
                </div>
                <div className="row">
                    <div className="col s12 m4 card-one">
                        <CampaignsCard cardImage={cardImage1} cardSubparaBold="₹66Cr" cardSubpara="raised towards this goal" cardHeading="India Needs Oxygen" />
                    </div>

                    <div className="col s12 m4 card-two">
                        <CampaignsCard cardImage={cardImage2} cardSubparaBold="43,53,437" cardSubpara="meals donated" cardHeading="Feed Every Child" />
                    </div>
                    
                    <div className="col s12 m4 card-three">
                        <CampaignsCard cardImage={cardImage3} cardSubparaBold="7,86,67,465" cardSubpara="meals donated" cardHeading="Feed The Daily Wager" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Campaigns;