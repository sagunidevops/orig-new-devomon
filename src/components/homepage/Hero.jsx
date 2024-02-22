import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/webp/logo.webp";
import heading_img_1 from "../../assets/images/homepageImages/png/title_01_apple_chancery.png";
import heading_img_2 from "../../assets/images/homepageImages/png/title_02_apple_chancery.png";
import subtitle from "../../assets/images/homepageImages/png/subtitle_archangelsk.png";
import play_button_hero from "../../assets/images/homepageImages/png/play_button.png";
import story_button from "../../assets/images/homepageImages/png/story_button.png";
import gamefi_button from "../../assets/images/homepageImages/png/gamefi_button.png";

const Hero1 = () => {
  return (
    <>
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
                src={heading_img_1}
                alt="heading"
                className="max-w-[500px] md:max-w-[600px] mx-auto w-full"
              />
              <img
                src={heading_img_2}
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
                    src={story_button}
                    alt="story"
                    className="max-w-[200px] md:max-w-[250px] w-full"
                  />
                </Link>
                <Link
                  className="cursor-pointer"
                  target="_blank"
                  to={"https://www.youtube.com/watch?v=YPP4wEnvzsI"}
                >
                  <img
                    src={play_button_hero}
                    alt="play"
                    className="max-w-[70px] md:max-w-[100px] w-full"
                  />
                </Link>
                <Link
                  to={"https://callisto.devomon.io/"}
                  target="_blank"
                  className="cursor-pointer"
                >
                  <img
                    src={gamefi_button}
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

export default Hero1;
