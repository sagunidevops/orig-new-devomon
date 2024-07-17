import Hero from "./Hero";
import About from "./About";
import AboutCard from "./AboutCard";
import TouchForm from "./TouchForm";
import { useState } from "react";

const Homepage = () => {
  const [popupVideo, setPopupVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const openPopup = (popupType) => {
    setPopupVideo(popupType);
  };

  const closePopup = () => {
    setPopupVideo(null);
    setIsPlaying(false);
  };
  if (popupVideo) {
    document.documentElement.style.overflow = "hidden";
  } else {
    document.documentElement.style.overflow = "auto";
  }
  return (
    <>
      <Hero
        closePopup={closePopup}
        openPopup={openPopup}
        setPopupVideo={setPopupVideo}
        popupVideo={popupVideo}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <About />
      <AboutCard
        closePopup={closePopup}
        openPopup={openPopup}
        setPopupVideo={setPopupVideo}
        popupVideo={popupVideo}
      />
      <TouchForm />
    </>
  );
};

export default Homepage;
