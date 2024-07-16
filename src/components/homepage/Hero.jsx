import React, { useState } from "react";
import { Link } from "react-router-dom";
import appLogoHero from "../../assets/images/homepageImages/png/app_logo_hero.png";
import gamefiButton from "../../assets/images/homepageImages/png/gamefi_button.png";
import playButtonHero from "../../assets/images/homepageImages/png/play_button.png";
import storyButton from "../../assets/images/homepageImages/png/story_button.png";
import subtitle from "../../assets/images/homepageImages/png/subtitle_archangelsk.png";
import tabMasterLogo from "../../assets/images/homepageImages/png/tabmaster_logo.png";
import headingImg1 from "../../assets/images/homepageImages/png/title_01_apple_chancery.png";
import headingImg2 from "../../assets/images/homepageImages/png/title_02_apple_chancery.png";
import Logo from "../../assets/images/webp/logo.webp";
import { heroVideoList } from "../common/Helper";
import { PlayIconVideo } from "../common/Icons";
import Popup from "../common/Popup";

const Hero = ({ openPopup, closePopup, popupVideo }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };
  const handleVideoClick = (index) => {
    setCurrentVideoIndex(index);
  };

  return (
    <>
      <Popup
        closePopup={closePopup}
        popupName="apps"
        popupVideo={popupVideo}
        popupData={
          <div className="flex justify-between gap-3 sm:gap-5">
            <div className="text-center">
              <Link
                target="_blank"
                to={"https://bit.ly/WS-DEVO-IOS"}
                rel="noopener noreferrer"
              >
                <img
                  src={appLogoHero}
                  alt="logo"
                  className="max-w-[111px] w-full sm:w-auto"
                />
                <span className="uppercase text-white font-raleway text-center mt-3 inline-block font-bold text-sm sm:text-base">
                  Apple store
                </span>
              </Link>
            </div>
            <div className="text-center">
              <Link
                target="_blank"
                to={"https://bit.ly/WS-DEVO-PLAY"}
                rel="noopener noreferrer"
              >
                <img
                  src={appLogoHero}
                  alt="logo"
                  className="max-w-[111px] w-full sm:w-auto"
                />
                <span className="uppercase text-white font-raleway inline-block text-center mt-3 font-bold text-sm sm:text-base">
                  play store
                </span>
              </Link>
            </div>
            <div className="text-center">
              <Link
                target="_blank"
                to={"https://bit.ly/Devomon-tabmasters-websiteLink"}
                rel="noopener noreferrer"
              >
                <img
                  src={tabMasterLogo}
                  alt="logo"
                  className="max-w-[140px] w-full sm:w-auto"
                />
                <span className="uppercase text-white font-raleway inline-block text-center mt-3 font-bold text-sm sm:text-base">
                  tap game
                </span>
              </Link>
            </div>
          </div>
        }
      />
      <Popup
        closePopup={closePopup}
        popupName="video-links"
        popupVideo={popupVideo}
        parentClass="max-w-[812px] w-full"
        popupData={
          <>
            <div className="relative max-w-[690px] mx-auto w-full h-[300px] md:h-[390px] cursor-pointer rounded-xl">
              {isPlaying ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={heroVideoList[currentVideoIndex].videoUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full object-cover rounded-xl"
                ></iframe>
              ) : (
                <>
                  <img
                    src={`https://img.youtube.com/vi/${heroVideoList[currentVideoIndex].videoThemnail}/hqdefault.jpg`}
                    alt="Video Thumbnail"
                    className="w-full h-full object-cover absolute top-0 start-0 rounded-xl"
                  />
                  <span
                    className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    onClick={handlePlayClick}
                  >
                    <PlayIconVideo />
                  </span>
                </>
              )}
            </div>
            <div className="flex mt-4 lg:mt-10 gap-4 sm:gap-6 overflow-x-auto">
              {heroVideoList.map((obj, index) => {
                return (
                  <div
                    className="relative min-w-[170px] sm:min-w-[247px] cursor-pointer"
                    key={index}
                    onClick={() => handleVideoClick(index)}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${obj.videoThemnail}/hqdefault.jpg`}
                      alt="Video Thumbnail"
                      className={`object-cover w-full h-[100px] md:h-[137px] rounded ${
                        currentVideoIndex == index &&
                        "border-2 border-[#2253F5]"
                      }`}
                    />
                    <p className="text-white text-base font-bold pt-3">
                      {obj.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </>
        }
      />
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
