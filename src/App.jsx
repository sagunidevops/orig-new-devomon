import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BackToTop from "./components/common/BackToTop";
import Preloader from "./components/common/Preloader";
import { useEffect, useState } from "react";
import ComingSoon from "./components/common/ComingSoon";
import StreamPartner from "./components/homepage/StreamPartner";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Homepage from "./components/homepage/Homepage";
import Team from "./components/homepage/Team";
import CookiePolicyText from "./components/CookiePolicyText";
import TermsAndConditionsTexts from "./components/TermsAndConditionsTexts";
import PrivacyPolicyTexts from "./components/PrivacyPolicyTexts";
import RoadMap from "./components/RoadMap";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [loading, setLoading] = useState(true);
  if (loading) {
    document.querySelector("body").style.overflow = "hidden";
    document.querySelector("body").style.height = "100vh";
  } else {
    document.querySelector("body").style.overflow = "auto";
    document.querySelector("body").style.height = "auto";
  }
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, [loading]);

  return (
    <>
      <BrowserRouter>
        {loading && <Preloader />}
        <BackToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/team" element={<Team />} />
          <Route path="/stream-partner" element={<StreamPartner />} />
          <Route path="/cookie-policy" element={<CookiePolicyText />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyTexts />} />
          <Route path="/roadmap" element={<RoadMap />} />
          <Route
            path="/terms-conditons"
            element={<TermsAndConditionsTexts />}
          />
        </Routes>
        <Analytics />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
