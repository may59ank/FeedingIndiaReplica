import React from 'react'
import Button from './Button'
import './css/components.css';

const CampaignsCard = ({cardImage, cardSubparaBold, cardSubpara, cardHeading}) => {
    return (
        <div className="card-campaigns">
            <div className="campaigns-card">
                <img src={cardImage} alt="Card" />
                <p className="card-subpara"><strong>{cardSubparaBold}</strong> {cardSubpara}</p>
            </div>
            <h6 className="card-heading"><strong>{cardHeading}</strong></h6>
            <Button title="Read more" />
        </div>
    )
}

export default CampaignsCard;