import { BrowserRouter, Route, Routes, } from "react-router-dom";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BackToTop from "./components/common/BackToTop";
import Preloader from "./components/common/Preloader";
import { useEffect, useState } from "react";
import ComingSoon from './components/common/ComingSoon';
import CoreTeam from './components/homepage/CoreTeam';
import StreamPartner from './components/homepage/StreamPartner';
// import Header from "./components/common/Header";
// import Footer from './components/common/Footer';
import Homepage from "./components/homepage/Homepage";
import Nft from './components/homepage/Nft';
// import { Slider } from 'react-slick';
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
      <BrowserRouter>
       
        {loading && <Preloader />}
        <BackToTop />
        {/* <Header/> */}
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/coming-soon" element={<ComingSoon/>}/>
          <Route path="/team" element={<CoreTeam/>}/>
          <Route path="/stream-partner" element={<StreamPartner/>}/>
          <Route path="/nft" element={<Nft/>}/>
          {/* <Route path="/slider" element={<Slider/>}/> */}
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </>
  );
}

export default App;
