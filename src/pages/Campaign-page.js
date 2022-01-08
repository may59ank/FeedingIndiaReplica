import React from 'react';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CampaignsCard from '../components/CampaignsCard';
import background from '../images/campaignBgImage.avif';
import backgroundHero from '../images/slider1.webp';
import cardImage1 from '../images/photo3.webp';
import cardImage2 from '../images/campaign2.avif';
import cardImage3 from '../images/photo5.webp'
import cardImage4 from '../images/campaign4.avif';
import cardImage5 from '../images/campaign5.avif';
import cardImage6 from '../images/campaign6.avif';
import cardImage7 from '../images/campaign7.avif';
import cardImage8 from '../images/campaign8.avif';
import cardImage9 from '../images/campaign9.avif';
import Button from '../components/Button';
import '../css/styles.css';
import './css/pages.css';

const CampaignPage = () => {
    let pastCampaigns = [{
        image: cardImage1,
        cardSubparaBold: "₹66Cr",
        cardSubpara: "raised towards this goal",
        cardHeading: "India Needs Oxygen",
    },
    {
        image: cardImage2,
        cardSubparaBold: "₹1.29Cr",
        cardSubpara: "raised towards this goal",
        cardHeading: "Educate India - An Unacademy Initiative",
    },
    {
        image: cardImage4,
        cardSubparaBold: "43,52,247",
        cardSubpara: "meals donated",
        cardHeading: "Feed Every Child",
    },
    {
        image: cardImage5,
        cardSubparaBold: "6,34,660",
        cardSubpara: "meals donated",
        cardHeading: "Food For Paws",
    },
    {
        image: cardImage6,
        cardSubparaBold: "9,72,825",
        cardSubpara: "meals donated",
        cardHeading: "COVID-19 Relief Fund",
    },
    {
        image: cardImage7,
        cardSubparaBold: "29,91,345",
        cardSubpara: "meals donated",
        cardHeading: "Assam and Bihar Relief Fund",
    },
    {
        image: cardImage8,
        cardSubparaBold: "7,75,590",
        cardSubpara: "meals donated",
        cardHeading: "Cyclone Amphan Relief Fund",
    },
    {
        image: cardImage9,
        cardSubparaBold: "25,57,772",
        cardSubpara: "meals donated",
        cardHeading: "Meals For Migrants",
    },
    {
        image: cardImage3,
        cardSubparaBold: "786,67,465",
        cardSubpara: "meals donated",
        cardHeading: "Feed The Daily Wager",
    }]

    return (
        <div id="campaign">
            <Navbar />
            <HeroSection bgimage={background} heading="YOUR SUPPORT MATTERS" para="Contribute to help us provide essential food support to those in need" />

            <section id="campaign-second-section">
                <div className="container">
                    <div className="row campaign-second-section">
                        <p>All our initiatives are designed to provide essential <span style={{fontWeight: 500}}>food support to underserved communities</span> in the form of raw grains, freshly cooked food or packaged food products depending on the need. Our aim is to ensure, hunger never comes in the way of a brighter future.</p>
                        <br />
                        <h4>Your donations <strong>make this possible.</strong></h4>
                        <br />
                        <HeroSection bgimage={backgroundHero} heading="Daily Feeding Program" para="We serve cooked meals to people in need daily across India." />
                    </div>
                </div>
            </section>

            <section id="past-campaigns">
                <div className="container">
                    <div className="row past-campaigns">
                        <h4>Past <strong>campaigns</strong></h4>

                        {pastCampaigns.map((camp, index) => {
                            return (
                                <div className="col s12 m6" key={index}>
                                    <CampaignsCard cardImage={camp.image} cardSubparaBold={camp.cardSubparaBold} cardSubpara={camp.cardSubpara} cardHeading={camp.cardHeading} />
                                </div>
                            );
                        })}

                        <div className="col s12 m6 getInTouchCard">
                            <h5>Get In Touch</h5>
                            <p>For corporate donations, please send us your details so our team can get in touch with you.</p>
                            <br /><br />
                            <Button title="Know more" />
                        </div>
                    </div>

                    <p><strong>For more about our programs and initiatives, <a href="#">read here.</a></strong></p>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default CampaignPage;