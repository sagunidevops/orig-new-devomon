import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/webp/logo.webp";
import headingImg1 from "../../assets/images/homepageImages/png/title_01_apple_chancery.png";
import headingImg2 from "../../assets/images/homepageImages/png/title_02_apple_chancery.png";
import subtitle from "../../assets/images/homepageImages/png/subtitle_archangelsk.png";
import playButtonHero from "../../assets/images/homepageImages/png/play_button.png";
import storyButton from "../../assets/images/homepageImages/png/story_button.png";
import gamefiButton from "../../assets/images/homepageImages/png/gamefi_button.png";
import crossIcon from "../../assets/images/svg/cross_icon.svg";
import googlePlay from "../../assets/images/homepageImages/png/google_play_button.png";
import textFlight from "../../assets/images/homepageImages/png/apple_testflight_button.png";
import tabMasterLogo from "../../assets/images/homepageImages/png/tabmaster_logo.png";
import { heroVideoList } from "../common/Helper";
import { PlayIconVideo } from "../common/Icons";

const Hero = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null);
  const handleVideoClick = (index) => {
    setCurrentVideoIndex(index);
  };
  const [popupVideo, setPopupVideo] = useState(null);
  const openPopup = (popupType) => {
    setPopupVideo(popupType);
  };

  const closePopup = () => {
    setPopupVideo(null);
    setCurrentVideoIndex(null);
  };
  if (popupVideo) {
    document.documentElement.style.overflow = "hidden";
  } else {
    document.documentElement.style.overflow = "auto";
  }
  return (
    <>
      {/* popup */}
      <div
        onClick={closePopup}
        className={`w-full h-screen flex justify-center items-center fixed top-0 start-0 bg-black bg-opacity-80 z-[51] ${
          popupVideo ? "block" : "hidden"
        }`}
      ></div>
      <div
        className={`-translate-x-1/2 -translate-y-1/2 fixed top-1/2 start-1/2 z-[100] flex gap-5 items-center flex-col w-full md:w-auto px-2 ${
          popupVideo === "apps" ? "block" : "hidden"
        }`}
      >
        <Link
          onClick={closePopup}
          className="fixed end-[3%] z-50 top-[-100%] cursor-pointer max-w-[22px]"
        >
          <img src={crossIcon} alt="crossIcon" />
        </Link>
        <Link
          target="_blank"
          to={"https://bit.ly/Devomon-tabmasters-websiteLink"}
          rel="noopener noreferrer"
        >
          <img
            src={tabMasterLogo}
            alt="logo"
            className="max-w-[150px] lg:max-w-[185px] hover:scale-[1.04] transition-all duration-300 ease-in-out border border-white border-opacity-60 rounded-lg bg-black"
          />
        </Link>
        <div className="flex gap-5 justify-center">
          <Link
            target="_blank"
            to={"https://bit.ly/WS-DEVO-PLAY"}
            rel="noopener noreferrer"
          >
            <img
              src={googlePlay}
              alt="logo"
              className="max-w-[150px] lg:max-w-[185px] w-full hover:scale-[1.04] transition-all duration-300 ease-in-out"
            />
          </Link>
          <Link
            target="_blank"
            to={"https://bit.ly/WS-DEVO-IOS"}
            rel="noopener noreferrer"
          >
            <img
              src={textFlight}
              alt="logo"
              className="max-w-[150px] lg:max-w-[185px] w-full hover:scale-[1.04] transition-all duration-300 ease-in-out"
            />
          </Link>
        </div>
      </div>
      <div
        className={`-translate-x-1/2 -translate-y-1/2 fixed top-1/2 start-1/2 z-[100] max-w-[964px] w-full h-full ${
          popupVideo === "video-links" ? "block" : "hidden"
        }`}
      >
        <Link
          onClick={closePopup}
          className="fixed end-2 z-50 top-3 cursor-pointer max-w-[18px]"
        >
          <img src={crossIcon} alt="crossIcon" />
        </Link>
        <div className="flex flex-wrap justify-center h-full overflow-auto video-scrollbar py-5">
          {heroVideoList.map((obj, index) => (
            <div className="w-full md:w-5/12 px-2 mt-4" key={index}>
              <div className="border border-white">
                <div className="relative h-[180px] md:h-[220px]">
                  {currentVideoIndex === index ? (
                    <iframe
                      width="100%"
                      height="220"
                      src={`${obj.videoUrl}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="h-full w-full max-w-[454px]"
                    ></iframe>
                  ) : (
                    <div
                      className="absolute top-0 left-0 w-full h-full bg-black cursor-pointer"
                      onClick={() => handleVideoClick(index)}
                    >
                      <img
                        src={`https://img.youtube.com/vi/${obj.videoThemnail}/hqdefault.jpg`}
                        alt="Video Thumbnail"
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2">
                        <PlayIconVideo />
                      </span>
                    </div>
                  )}
                </div>
                <p className="text-white text-lg font-medium text-center p-3">
                  {obj.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <section className="min-h-screen relative h-screen hero_section">
        <div className="bg-[#1E3EA81A] relative overflow-x-hidden h-full">
          {/* Logo with a link to the homepage */}
          <Link to={"/"}>
            <img
              className="max-w-[150px] sm:max-w-[200px] lg:max-w-[261px] mt-12 lg:mt-16 ms-5 lg:ms-10 cursor-pointer"
              src={Logo}
              alt="logo"
            />
          </Link>

          {/* Main content of the hero section */}
          <div className="absolute top-1/2 left-1/2 w-full container -translate-x-[50%] -translate-y-[50%] z-10 mt-10">
            <div className="text-center max-w-[400px] sm:max-w-full mx-auto">
              {/* Heading images */}
              <img
                src={headingImg1}
                alt="heading"
                className="max-w-[500px] md:max-w-[600px] mx-auto w-full"
              />
              <img
                src={headingImg2}
                alt="heading"
                className="max-w-[400px] md:max-w-[500px] mx-auto w-full"
              />

              {/* Subtitle image */}
              <img
                src={subtitle}
                alt="subtitle"
                className="max-w-[350px] md:max-w-[450px] mx-auto mt-4 w-full"
              />

              {/* Buttons with links */}
              <div className="flex justify-center items-center gap-5 sm:gap-10 mt-14 sm:mt-16">
                <Link
                  to={"https://story.devomon.io/"}
                  target="_blank"
                  className="cursor-pointer"
                >
                  <img
                    src={storyButton}
                    alt="story"
                    className="max-w-[200px] md:max-w-[250px] w-full"
                  />
                </Link>
                <Link onClick={() => openPopup("apps")}>
                  <img
                    src={playButtonHero}
                    alt="play"
                    className="max-w-[70px] md:max-w-[100px] w-full"
                  />
                </Link>
                <Link onClick={() => openPopup("video-links")}>
                  <img
                    src={gamefiButton}
                    alt="gamefi"
                    className="max-w-[200px] md:max-w-[250px] w-full"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Video container */}
          <div className="video-container">
            <video
              className="vimvideo"
              autoPlay={true}
              loop={true}
              playsInline
              muted={true}
            >
              <source
                src="https://firebasestorage.googleapis.com/v0/b/sinup-c4f28.appspot.com/o/devo_epic_rise_20ec_h264_40mbit_uhd.mp4?alt=media&token=f4bde004-2f10-4ae9-94bc-421f5d7819af"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
