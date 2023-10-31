import { BrowserRouter, Route, Routes, } from "react-router-dom";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BackToTop from "./components/common/BackToTop";
import Preloader from "./components/common/Preloader";
import { useEffect, useState } from "react";
import ComingSoon from './components/common/ComingSoon';
import StreamPartner from './components/homepage/StreamPartner';
import Header from "./components/common/Header";
import Footer from './components/common/Footer';
import Homepage from "./components/homepage/Homepage";
import Team from "./components/homepage/Team";
import CookiePolicyText from "./components/CookiePolicyText";
// import PrivacyPolicyTexts from "./components/PrivacyPolicyTexts";
// import TermsAndConditionsTexts from "./components/TermsAndConditionsTexts";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);1
    }, 4000);
      if (loading) {
        document.body.classList.add("overflow_hidden");
      } else {
        document.body.classList.remove("overflow_hidden");
      }
    }, [loading]);
  return (
    <>
      <BrowserRouter >
        {loading && <Preloader />}
        <BackToTop />
        <Header/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/coming-soon" element={<ComingSoon/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/stream-partner" element={<StreamPartner/>}/>
          <Route path="/cookie-policy" element={<CookiePolicyText/>}/>
          {/* <Route path="/privacy-policy" element={<PrivacyPolicyTexts/>}/> */}
          {/* <Route path="/terms-conditions" element={<TermsAndConditionsTexts/>}/> */}
          {/* <Route path="/latest-news" element={<LatestNews/>}/> */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
