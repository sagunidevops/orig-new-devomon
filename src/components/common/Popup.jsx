import React, { useState } from "react";
import heroPopupCross from "../../assets/images/homepageImages/svg/cross_hero_icon.svg";
const Popup = () => {
  const [popupVideo, setPopupVideo] = useState(null);
  const openPopup = (popupType) => {
    setPopupVideo(popupType);
  };

  const closePopup = () => {
    setPopupVideo(null);
  };
  if (popupVideo) {
    document.documentElement.style.overflow = "hidden";
  } else {
    document.documentElement.style.overflow = "auto";
  }
  return (
    <>
      <div
        onClick={closePopup}
        className={`w-full h-screen flex justify-center items-center fixed top-0 start-0 bg-black bg-opacity-30 z-[51] ${
          popupVideo ? "block" : "hidden"
        }`}
      ></div>
      <div
        className={`-translate-x-1/2 -translate-y-1/2 fixed top-1/2 start-1/2 z-[100] w-full sm:w-auto px-2 ${
          popupVideo === "apps" ? "block" : "hidden"
        }`}
      >
        <div className="p-3 sm:p-10 bg-black rounded-lg shadow-shadowPopup">
          <Link
            onClick={closePopup}
            className="fixed end-6 z-50 top-5 cursor-pointer max-w-[18px]"
          >
            <img src={heroPopupCross} alt="crossIcon" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Popup;
