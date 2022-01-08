import './css/styles.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import Campaigns from './components/Campaigns';
import SocialSection from './components/SocialSection';
import Footer from './components/Footer';
import background from './images/slider1.webp';

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection bgimage={background} heading="Daily Feeding Program" para="We serve cooked meals to people in need daily across India." />
      <SecondSection />
      <ThirdSection />
      <Campaigns />
      <SocialSection />
      <Footer /> 
    </>
  );
}

export default App;
