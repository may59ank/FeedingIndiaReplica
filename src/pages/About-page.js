import React from 'react'
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import background from '../images/slider1.webp';
import SecondSection from '../components/SecondSection';

const AboutPage = () => {
    return (
        <div>
            <Navbar />
            <HeroSection bgimage={background} optionalPara="OUR MISSION" heading="Make India Hunger Free" />
            <SecondSection />
        </div>
    )
}

export default AboutPage;