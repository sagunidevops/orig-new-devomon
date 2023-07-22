import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/common/Footer";
// import Header from "./components/common/Header";
// import Hero from "./components/homepage/Hero";
// import About from "./components/homepage/About";
// import TouchForm from "./components/homepage/TouchForm";
// import AboutCard from "./components/homepage/AboutCard";
// import LatestNews from "./components/homepage/LatestNews";
// import Partner from "./components/homepage/Partner";
import CoreTeam from "./components/homepage/CoreTeam";
// import ComingSoon from "./components/common/ComingSoon";
// import DevomonCallistoBattle from "./components/homepage/DevomonCallistoBattle";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header />
        <Hero />
        <About />
        <AboutCard />
        <LatestNews />
        <TouchForm />
        <Partner/> */}
        {/* <ComingSoon /> */}
        {/* <DevomonCallistoBattle/> */}
        <CoreTeam/>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
