import Hero from './Hero';
import About from './About';
import AboutCard from './AboutCard';
import LatestNews from './LatestNews';
import Partner from './Partner';
import TouchForm from './TouchForm';
import SideSocialIcon from '../common/SideSocialIcon';
const Homepage = () => {
  return (
    <>
    <SideSocialIcon/>
    <Hero/>
    <About/>
    <AboutCard/>
    <LatestNews/>
    <Partner/>
    <TouchForm/>
    </>
  )
}

export default Homepage