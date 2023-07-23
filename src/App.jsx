import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Hero from "./components/homepage/Hero";
import About from "./components/homepage/About";
import TouchForm from "./components/homepage/TouchForm";
import AboutCard from "./components/homepage/AboutCard";
import LatestNews from "./components/homepage/LatestNews";
import Partner from "./components/homepage/Partner";
// import StreamPartner from "./components/homepage/StreamPartner";
import CoreTeam from "./components/homepage/CoreTeam";
import BackToTop from "./components/common/BackToTop";
import Preloader from "./components/common/Preloader";
import { useEffect, useState } from "react";
import SideSocialIcon from "./components/common/SideSocialIcon";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
    if (loading) {
      document.body.classList.add("overflow_hidden");
    } else {
      document.body.classList.remove("overflow_hidden");
    }
  }, [loading]);
  return (
    <>
      <BrowserRouter>
        {loading && <Preloader />}
        <BackToTop />
        <SideSocialIcon />
        <Header />
        <Hero />
        <About />
        <AboutCard />
        <LatestNews />
        <Partner />
        <TouchForm />

        {/* <StreamPartner/> */}

        {/* <ComingSoon /> */}
        {/* <DevomonCallistoBattle/> */}
        <CoreTeam />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
