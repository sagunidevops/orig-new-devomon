import React from "react";
import { Link } from "react-router-dom";
import heroPopupCross from "../../assets/images/homepageImages/svg/cross_hero_icon.svg";
const Popup = ({
  popupData,
  closePopup,
  popupVideo,
  popupName,
  parentClass,
}) => {
  return (
    <>
      <div
        onClick={closePopup}
        className={`w-full h-screen flex justify-center items-center fixed top-0 start-0 bg-black bg-opacity-30 z-[51] ${
          popupVideo ? "block" : "hidden"
        }`}
      ></div>
      <div
        className={`-translate-x-1/2 -translate-y-1/2 fixed top-1/2 start-1/2 z-[100] w-full sm:w-auto px-2 ${parentClass} ${
          popupVideo === popupName ? "block" : "hidden"
        }`}
      >
        <div className="p-3 sm:p-10 bg-black rounded-lg shadow-shadowPopup">
          <span
            onClick={closePopup}
            className="fixed end-6 z-50 top-5 cursor-pointer max-w-[18px]"
          >
            <img src={heroPopupCross} alt="crossIcon" />
          </span>
          {popupData}
        </div>
      </div>
    </>
  );
};

export default Popup;
