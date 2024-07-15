/* eslint-disable no-unused-vars */
import { Disclosure } from "@headlessui/react";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { VscChromeClose } from "react-icons/vsc";
import { HiMenuAlt3 } from "react-icons/hi";
import storyVideo from "../../assets/video/story_video.mp4";
import crossIcon from "../../assets/images/svg/cross_icon.svg";
import dashboard from "../../assets/images/webp/dashboard-coming.webp";
import MerchImage from "../../assets/images/png/Brand_peak.png";
import evoverse from "../../assets/images/webp/evoverse.webp";
import { HeraderLinkArrow } from "./Icons";
import { track } from "@vercel/analytics";
import { useLayoutChangerProvider } from "../../context/LanguageProvider";
import { HeaderIconsList } from "./Helper";
const Header = () => {
  const [video, setVideo] = useState();
  const { getTranslation, langSelector, languageHandler } =
    useLayoutChangerProvider();
  const videoRef = useRef(null);
  const [popupValue, setPopupValue] = useState("");
  const localValue = localStorage.getItem("lang");

  useEffect(() => {
    if (video) {
      document.body.style.overflow = "hidden";
      if (videoRef.current) {
        videoRef.current.pause();
      }
    } else {
      document.body.style.overflow = "auto";
    }
  }, [video]);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const [Nav, setNav] = useState(1);
  if (Nav) {
    document.documentElement.style.overflow = "auto";
  } else {
    document.documentElement.style.overflow = "hidden";
  }

  // POPUP JS
  const [hide, setHide] = useState();
  if (hide) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  const location = useLocation();
  const clickHandler = (value) => {
    setPopupValue(value);
    setHide(!hide);
  };
  useEffect(() => {
    if (location.hash) {
      const targetElement = document.querySelector(location.hash);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  return (
    <nav className="relative z-50">
      <div className="bg-[#1E3EA81A] relative overflow-x-hidden">
        <div className={video ? "" : "hidden"}>
          <div
            className=" 
             -translate-x-1/2 -translate-y-1/2 fixed top-1/2 start-1/2 z-[100]"
          >
            <Link
              onClick={() => {
                setVideo(false), videoRef.current.pause();
              }}
              className="fixed end-[2%] z-50 top-[3%] cursor-pointer max-w-[16px]"
            >
              <img src={crossIcon} alt="crossIcon" />
            </Link>
            <video
              ref={videoRef}
              className="w-100 mx-auto object-cover 
                rounded-xl max-w-[300px] xs:max-w-[430px] sm:max-w-[600px] md:max-w-[700px]"
              width="700"
              height="700"
              autoPlay
              loop
              controls
              muted
            >
              <source src={storyVideo} type="video/mp4" />
            </video>
          </div>
          <div
            onClick={() => {
              setVideo(false), videoRef.current.pause();
            }}
            className="w-full h-screen flex justify-center items-center fixed top-0 start-0 bg-[#00000080] z-[51]"
          ></div>
        </div>
      </div>
      <div className="bg-[#1E3EA81A] relative overflow-x-hidden">
        <div className={hide ? "" : "hidden"}>
          <div
            className={`text-white whitespace-nowrap rounded-xl 
             -translate-x-1/2 -translate-y-1/2 fixed top-1/2 start-1/2 z-[100] text-center text-xl font-bold w-auto ${
               popupValue === "Dashboard" ||
               popupValue === "EvoVerse" ||
               popupValue === "Merchandise"
                 ? "max-w-[700px] 3xl:max-w-[1200px] px-4 w-full"
                 : "bg-black popup_shadow py-12 px-16"
             }`}
          >
            {popupValue === "Merchandise" ? (
              ""
            ) : (
              <img
                onClick={() => {
                  setHide(false);
                }}
                className={`absolute z-50 bi bi-x-lg cursor-pointer ${
                  popupValue === "Dashboard" ||
                  popupValue === "EvoVerse" ||
                  popupValue === "Merchandise"
                    ? "top-[5%] end-[6%] custom-xsm:top-[5%] custom-xsm:end-[5%] max-w-[20px] sm:max-w-[40px]"
                    : "max-w-[20px] end-[5%] custom-xsm:end-4 top-[12%]"
                }`}
                src={crossIcon}
                alt="crossIcon"
              />
            )}
            {popupValue === "Dashboard" ? (
              <img className="rounded-xl w-full" src={dashboard} />
            ) : popupValue === "EvoVerse" ? (
              // <img className="rounded-xl w-full" src={evoverse} />
              <iframe
                width="80%"
                height="450px"
                src="https://www.youtube.com/embed/SkPiiKX39WQ?si=uqkGWr33jchB4wAb"
                title="YouTube video player"
                frameBorder="0"
                referrerpolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="mx-auto w-full lg:w-[80%] h-[300px] md:h-[450px] object-cover"
              ></iframe>
            ) : popupValue === "Merchandise" ? (
              <div className="relative p-[20px] custom-xsm:p-0">
                <img
                  onClick={() => {
                    setHide(false);
                  }}
                  className="absolute z-50 max-w-[20px] sm:max-w-[40px] top-[8%] end-[8%] custom-xsm:top-5 custom-xsm:end-[4%] 3xl:end-[10%] sm:end-[15%] bi bi-x-lg cursor-pointer"
                  src={crossIcon}
                  alt="crossIcon"
                />
                <img
                  className="rounded-xl w-full sm:h-[500px] sm:w-[500px] 3xl:w-[1000px] 3xl:h-[925px] mx-auto"
                  src={MerchImage}
                />
              </div>
            ) : (
              "Coming Soon"
            )}
          </div>
          <div
            onClick={() => {
              setHide(false);
            }}
            className="w-full h-screen flex justify-center items-center fixed top-0 start-0 bg-[#00000080] z-[51]"
          ></div>
        </div>
      </div>
      <div className="px-4 md:py-0 lg:py-0 xl:py-[0.7px] sm:px-6 xl:px-14 navbar_bg fixed top-0 w-full">
        <div className="flex justify-between items-center relative">
          <ul className="xl:gap-[11px] gap-0 items-center hidden lg:flex">
            <li className=" flex items-center cursor-pointer hover:bg-[#ffffff] hover:bg-opacity-10 group h-[55px] xl:px-4 px-2 -skew-x-12 duration-200 relative">
              <div className="absolute top-[55px] start-3 skew-x-12 bg-[#0d1015df] rounded-lg py-4 px-4 w-[200px] flex-col group-hover:block hidden z-10">
                <div className="flex flex-col">
                  <Link
                    to={"https://callisto.devomon.io/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-poppins text-sm lg:text-base text-white mb-2 xl:mb-3 hover:text-[#2253F5] transition-all duration-200"
                  >
                    {getTranslation("GameFi")}
                  </Link>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    to={"https://evozone.devomon.io/"}
                    className="font-poppins text-sm lg:text-base text-white mb-2 xl:mb-3 hover:text-[#2253F5] transition-all duration-200"
                  >
                    {getTranslation("Evozone")}
                  </Link>
                  <Link
                    to={"https://callisto.devomon.io/#evomons"}
                    target="_blank"
                    // onClick={() => setNav(!Nav)}
                    className="font-poppins text-sm lg:text-base text-white mb-2 xl:mb-3 hover:text-[#2253F5] transition-all duration-200"
                  >
                    {getTranslation("NFTs")}
                  </Link>
                  <span
                    onClick={() => clickHandler("Dashboard")}
                    rel="noopener noreferrer"
                    className="font-poppins text-sm lg:text-base text-white mb-2 xl:mb-3 hover:text-[#2253F5] transition-all duration-200"
                  >
                    {getTranslation("Dashboard")}
                  </span>
                  <span
                    onClick={() => clickHandler("EvoVerse")}
                    className="font-poppins text-sm lg:text-base text-white mb-2 xl:mb-3 hover:text-[#2253F5] transition-all duration-200"
                  >
                    {getTranslation("EvoVerse")}
                  </span>
                  <Link
                    onClick={() => setVideo(!video)}
                    className="font-poppins text-sm lg:text-base text-white mb-2 xl:mb-3 hover:text-[#2253F5] transition-all duration-200"
                  >
                    {getTranslation("Manga")}
                  </Link>
                  <span
                    onClick={() => clickHandler("Anime")}
                    className="font-poppins text-sm lg:text-base text-white mb-2 xl:mb-3 hover:text-[#2253F5]"
                  >
                    {getTranslation("Anime")}
                  </span>
                  <span
                    onClick={() => clickHandler("Merchandise")}
                    className="font-poppins text-sm lg:text-base text-white mb-0 hover:text-[#2253F5] transition-all duration-200"
                  >
                    {getTranslation("Merchandise")}
                  </span>
                </div>
              </div>
              <Link
                className="skew-x-12 font-normal duration-200 group-hover:text-[#2253F5] text-white me-2 whitespace-nowrap font-poppins"
                to={"#news"}
              >
                {getTranslation("D-World")}
              </Link>
              <HeraderLinkArrow />
            </li>
            <li className=" flex items-center cursor-pointer hover:bg-[#ffffff] hover:bg-opacity-10 group h-[55px] xl:px-4 px-2 -skew-x-12 duration-200">
              <Link
                to="https://bit.ly/WS-DEVO-STAKE"
                className="skew-x-12 font-normal duration-200 group-hover:text-[#2253F5] text-white me-2 whitespace-nowrap font-poppins"
                target="_blank"
              >
                {getTranslation("Staking")}
              </Link>
            </li>
            <li className=" flex items-center cursor-pointer hover:bg-[#ffffff] hover:bg-opacity-10 group h-[55px] xl:px-4 px-2 -skew-x-12 duration-200 relative">
              <div className="absolute top-[55px] start-3 skew-x-12 bg-[#0d1015df] rounded-lg py-4 px-4 w-[200px] flex-col group-hover:block hidden z-10">
                <div className="flex flex-col">
                  <Link
                    target="_blank"
                    to={"https://whitepaper.devomon.io/"}
                    className="font-normal text-sm lg:text-base text-white hover:text-[#2253F5] transition-all inline-block duration-200 cursor-pointer font-poppins"
                    rel="noopener noreferrer"
                  >
                    {getTranslation("Whitepaper")}
                  </Link>
                  <Link
                    to={"/#contact"}
                    className="font-medium text-sm lg:text-base text-white hover:text-[#2253F5] transition-all duration-200 cursor-pointer font-poppins mt-2 xl:mt-3"
                  >
                    {getTranslation("Contact")}
                  </Link>
                  <NavLink
                    to="/roadmap"
                    className="font-medium text-sm lg:text-base text-white hover:text-[#2253F5] transition-all duration-200 cursor-pointer font-poppins mt-2 xl:mt-3"
                  >
                    {getTranslation("Roadmap")}
                  </NavLink>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    to={"https://team.devomon.io"}
                    className="font-normal text-sm lg:text-base text-white hover:text-[#2253F5] transition-all duration-200 cursor-pointer font-poppins mt-2 xl:mt-3"
                  >
                    {getTranslation("Core Team")}
                  </Link>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    to={"https://partners.devomon.io"}
                    className="font-normal text-sm lg:text-base text-white hover:text-[#2253F5] transition-all duration-200 cursor-pointer font-poppins mt-2 xl:mt-3"
                  >
                    {getTranslation("Partners")}
                  </Link>
                </div>
              </div>
              <Link
                className="skew-x-12 font-normal duration-200 group-hover:text-[#2253F5] text-white me-2 whitespace-nowrap font-poppins"
                to={"#"}
              >
                {getTranslation("Info")}
              </Link>
              <HeraderLinkArrow />
            </li>
            <li className=" flex items-center cursor-pointer hover:bg-[#ffffff] hover:bg-opacity-10 group h-[55px] xl:px-4 px-2 -skew-x-12 duration-200">
              <Link
                target="_blank"
                to={"https://medium.com/@DevomonOfficial"}
                className="skew-x-12 font-normal duration-200 group-hover:text-[#2253F5] text-white me-2 whitespace-nowrap font-poppins"
              >
                {getTranslation("News")}
              </Link>
            </li>
            <li className=" flex items-center cursor-pointer hover:bg-[#ffffff] hover:bg-opacity-10 group h-[55px] xl:px-4 px-2 -skew-x-12 duration-200 relative">
              <div className="absolute top-[55px] start-2 skew-x-12 bg-[#0d1015df] rounded-lg py-4 px-4 w-[200px] flex-col group-hover:block hidden z-10">
                <div className="flex flex-col">
                  <span onClick={() => track("buy evomon gateio")}>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      to={"https://devomon.ink/WS-DEVO-GATE"}
                      className="font-normal text-sm lg:text-base text-white hover:text-[#2253F5] transition-all duration-200 cursor-pointer font-poppins mb-2 xl:mb-3 block"
                    >
                      {getTranslation("GateIO")}
                    </Link>
                  </span>
                  <span onClick={() => track("buy evomon mexc")}>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      to={"https://devomon.ink/WS-DEVO-MEXC"}
                      className="font-normal text-sm lg:text-base text-white hover:text-[#2253F5] transition-all duration-200 cursor-pointer font-poppins mb-2 xl:mb-3 block"
                    >
                      {getTranslation("MEXC")}
                    </Link>
                  </span>
                  <span onClick={() => track("buy evomon pancakeswap")}>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      to={"https://https://devomon.ink/WS-DEVO-PCS"}
                      className="font-normal text-sm lg:text-base text-white hover:text-[#2253F5] transition-all duration-200 cursor-pointer font-poppins"
                    >
                      {getTranslation("PancakeSwap")}
                    </Link>
                  </span>
                </div>
              </div>
              <Link
                className="skew-x-12 font-normal duration-200 group-hover:text-[#2253F5] text-white me-2 whitespace-nowrap font-poppins"
                to={"#"}
              >
                {getTranslation("Buy Evo")}
              </Link>
              <HeraderLinkArrow />
            </li>
          </ul>
          <ul className="gap-4 items-center flex py-2">
            {HeaderIconsList.map((obj, index) => {
              return (
                <li className="group" key={index}>
                  <Link to={obj.url} target="_blank" rel="noopener noreferrer">
                    <img
                      src={obj.icons}
                      alt="icon"
                      width={30}
                      className="hover:scale-[1.1] transition-all duration-300 w-[27px] sm:w-[30px]"
                    />
                  </Link>
                </li>
              );
            })}
            <li className="bg-black rounded-md border border-white pe-1">
              <select
                onChange={(e) => languageHandler(e.target.value)}
                value={langSelector}
                className="w-[90px] sm:w-[115px] rounded-md outline-none font-poppins font-normal text-sm xl:text-base px-1 sm:py-1 text-white bg-black borde cursor-pointer"
              >
                {localValue === langSelector ? (
                  ""
                ) : (
                  <option value="localValue">
                    {localValue ? localValue : langSelector}
                  </option>
                )}

                <option value="English">English</option>
                <option value="French">French</option>
                <option value="Japanese">Japanese</option>
                <option value="German">German</option>
                <option value="Spanish">Spanish</option>
                <option value="Italian">Italian</option>
                <option value="Chinese ">Chinese </option>
                <option value="Turkish">Turkish</option>
              </select>
            </li>
          </ul>
          <div
            className="lg:hidden cursor-pointer text-[35px] text-white relative  z-10"
            onClick={() => setNav(!Nav)}
          >
            {Nav ? <HiMenuAlt3 /> : <VscChromeClose />}
          </div>
          <ul
            className={
              Nav
                ? "flex fixed flex-col justify-center min-w-full min-h-screen bottom-0 left-[-100%] items-center lg:hidden transition-all duration-500 ease-in-out gap-7"
                : "left-0 flex fixed flex-col justify-center min-w-full min-h-screen bottom-0 items-center lg:hidden transition-all duration-500 ease-in-out bg-[#000000] gap-7"
            }
          >
            <div className=" w-full mx-auto min-h-screen flex flex-col relative justify-center">
              <div className="mx-auto w-[210px] max-w-md bg-transparent p-2 overflow-y-auto scroll_hidden max-h-[500px]">
                <Disclosure className="transition_300">
                  {({ open }) => (
                    <>
                      <Disclosure.Panel className="px-4 py-2 text-gray-500 bg-black transition_300 flex flex-col">
                        <Link
                          target="_blank"
                          to={"https://callisto.devomon.io/"}
                          className="font-normal font-poppins text-base text-white mb-0 hover:text-[#2253F5]   transition-all inline-block duration-200 cursor-pointer"
                          rel="noopener noreferrer"
                        >
                          Callisto
                        </Link>
                        <Link
                          target="_blank"
                          to={"https://tcg.devomon.io/"}
                          className="font-normal font-poppins text-base text-white mb-0 mt-1 hover:text-[#2253F5] transition-all duration-200 cursor-pointer"
                          rel="noopener noreferrer"
                        >
                          Card Game
                        </Link>
                        <p
                          className="font-normal font-poppins text-base
                            text-[#9188A6] mb-0 mt-1 cursor-text"
                        >
                          Devoland
                        </p>
                        <Link
                          to={"/coming-soon"}
                          className="font-medium font-poppins uppercase 
                           text-[12px] text-[#9188A6] mb-0 cursor-text"
                        >
                          Coming soon
                        </Link>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure className="transition_300 mt-4">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex items-center w-full justify-between bg-transparent px-4 text-left font-medium text-white focus:outline-[0px] focus-visible:ring-opacity-75 transition_300 mt-6">
                        <span className=" mb-0 font-poppins">
                          {getTranslation("D-World")}
                        </span>
                        <svg
                          className={`${
                            open
                              ? "rotate-180 transform duration-300"
                              : "duration-300"
                          } h-3 w-3 text-white duration-300`}
                          width="5"
                          height="5"
                          viewBox="0 0 13 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.5004 0.901438C11.9679 1.35427 9.66923 3.37942 7.94196 4.88886L6.68222 5.99578L5.33157 4.82597C4.59131 4.18446 3.17573 2.95175 2.18871 2.08383C1.2017 1.22848 0.474428 0.649865 0.55235 0.813387C0.643259 0.964331 1.89001 2.83854 3.34456 4.95175C4.78612 7.07754 6.09781 9.02722 6.26664 9.29137C6.42248 9.54295 6.6043 9.75678 6.65625 9.75678C6.76014 9.75678 12.7861 0.939173 12.89 0.649865C12.916 0.574394 12.7342 0.687601 12.5004 0.901438Z"
                            fill="white"
                          />
                        </svg>
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 py-2 text-gray-500 bg-black transition_300 flex flex-col">
                        <div className="flex flex-col">
                          <Link
                            to={"https://callisto.devomon.io/"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-poppins text-xs xl:text-base text-white hover:text-[#2253F5] mt-3 transition-all duration-200"
                          >
                            {getTranslation("GameFi")}
                          </Link>
                          <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            to={"https://evozone.devomon.io/"}
                            className="font-poppins text-xs xl:text-base text-white hover:text-[#2253F5] mt-3 transition-all duration-200"
                          >
                            {getTranslation("Evozone")}
                          </Link>
                          <Link
                            to={"https://callisto.devomon.io/#evomons"}
                            target="_blank"
                            onClick={() => setNav(!Nav)}
                            className="font-poppins text-xs xl:text-base text-white mt-3 hover:text-[#2253F5] transition-all duration-200"
                          >
                            {getTranslation("NFTs")}
                          </Link>
                          <span
                            onClick={() => {
                              clickHandler("Dashboard"), setNav(!Nav);
                            }}
                            className="font-poppins text-xs xl:text-base text-white mt-3 hover:text-[#2253F5] transition-all duration-200"
                          >
                            {getTranslation("Dashboard")}
                          </span>
                          <Link
                            onClick={() => {
                              clickHandler("EvoVerse"), setNav(!Nav);
                            }}
                            to={"#"}
                            className="font-poppins text-xs xl:text-base text-white hover:text-[#2253F5] mt-3 transition-all duration-200"
                          >
                            {getTranslation("EvoVerse")}
                          </Link>
                          <Link
                            to={"#"}
                            onClick={() => {
                              setVideo(!video), setNav(!Nav);
                            }}
                            className="font-poppins text-xs xl:text-base text-white hover:text-[#2253F5] mt-3 transition-all duration-200"
                          >
                            {getTranslation("Manga")}
                          </Link>
                          <span
                            onClick={() => {
                              clickHandler("Anime"), setNav(!Nav);
                            }}
                            className="font-poppins text-xs xl:text-base text-white hover:text-[#2253F5] mt-3"
                          >
                            {getTranslation("Anime")}
                          </span>
                          <span
                            onClick={() => {
                              clickHandler("Merchandise"), setNav(!Nav);
                            }}
                            className="font-poppins text-xs xl:text-base text-white hover:text-[#2253F5] mt-3 transition-all duration-200"
                          >
                            {getTranslation("Merchandise")}
                          </span>
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure className="transition_300 mt-4">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex items-center w-full justify-between bg-transparent px-4 text-left font-medium text-white focus:outline-[0px] focus-visible:ring-opacity-75 transition_300 mt-6">
                        <Link
                          to="https://bit.ly/WS-DEVO-STAKE"
                          onClick={() => {
                            setNav(!Nav);
                          }}
                          className="font-normal duration-200 group-hover:text-[#2253F5] text-white me-2 whitespace-nowrap font-poppins"
                          target="_blank"
                        >
                          {getTranslation("Staking")}
                        </Link>
                      </Disclosure.Button>
                    </>
                  )}
                </Disclosure>

                <Disclosure className="transition_300 mt-4">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex items-center w-full justify-between bg-transparent px-4 text-left font-medium text-white focus:outline-[0px] focus-visible:ring-opacity-75 transition_300 mt-6">
                        <span className=" mb-0 font-poppins">
                          {getTranslation("Info")}
                        </span>
                        <svg
                          className={`${
                            open
                              ? "rotate-180 transform duration-300"
                              : "duration-300"
                          } h-3 w-3 text-white duration-300`}
                          width="5"
                          height="5"
                          viewBox="0 0 13 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.5004 0.901438C11.9679 1.35427 9.66923 3.37942 7.94196 4.88886L6.68222 5.99578L5.33157 4.82597C4.59131 4.18446 3.17573 2.95175 2.18871 2.08383C1.2017 1.22848 0.474428 0.649865 0.55235 0.813387C0.643259 0.964331 1.89001 2.83854 3.34456 4.95175C4.78612 7.07754 6.09781 9.02722 6.26664 9.29137C6.42248 9.54295 6.6043 9.75678 6.65625 9.75678C6.76014 9.75678 12.7861 0.939173 12.89 0.649865C12.916 0.574394 12.7342 0.687601 12.5004 0.901438Z"
                            fill="white"
                          />
                        </svg>
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 py-2 text-gray-500 bg-black transition_300 flex flex-col">
                        <span className="mt-3">
                          <Link
                            target="_blank"
                            to={"https://whitepaper.devomon.io/"}
                            className="font-normal text-[12px] text-white hover:text-[#2253F5] transition-all inline-block duration-200 cursor-pointer font-poppins"
                            rel="noopener noreferrer"
                          >
                            {getTranslation("Whitepaper")}
                          </Link>
                        </span>
                        <Link
                          onClick={() => setNav(!Nav)}
                          to={"#contact"}
                          className="font-medium text-[12px] text-white hover:text-[#2253F5] transition-all duration-200 cursor-pointer font-poppins mt-3"
                        >
                          {getTranslation("Contact")}
                        </Link>
                        <NavLink
                          onClick={() => {
                            setNav(!Nav), scrollToTop();
                          }}
                          to="/roadmap"
                          className="font-medium text-[12px] text-white hover:text-[#2253F5] transition-all duration-200 cursor-pointer font-poppins mt-3"
                        >
                          {getTranslation("Roadmap")}
                        </NavLink>
                        <Link
                          target="_blank"
                          rel="noopener noreferrer"
                          to={"https://team.devomon.io"}
                          onClick={() => setNav(!Nav)}
                          className="font-medium text-[12px] text-white hover:text-[#2253F5] transition-all duration-200 cursor-pointer font-poppins mt-3"
                        >
                          {getTranslation("Core Team")}
                        </Link>
                        <Link
                          target="_blank"
                          to={"https://partners.devomon.io"}
                          onClick={() => setNav(!Nav)}
                          className="font-medium text-[12px] text-white hover:text-[#2253F5] transition-all duration-200 cursor-pointer font-poppins mt-3"
                        >
                          {getTranslation("Partners")}
                        </Link>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure className="transition_300 mt-4">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex items-center w-full justify-between bg-transparent px-4 text-left font-medium text-white focus:outline-[0px] focus-visible:ring-opacity-75 transition_300 mt-6">
                        <Link
                          target="_blank"
                          to={"https://medium.com/@DevomonOfficial"}
                          onClick={() => {
                            setNav(!Nav);
                          }}
                          className="mb-0 font-poppins"
                        >
                          {getTranslation("News")}
                        </Link>
                      </Disclosure.Button>
                    </>
                  )}
                </Disclosure>
                <Disclosure className="transition_300 mt-4">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex items-center w-full justify-between bg-transparent px-4 text-left font-medium text-white focus:outline-[0px] focus-visible:ring-opacity-75 transition_300 mt-6">
                        <span className=" mb-0 font-poppins">
                          {getTranslation("Buy Evo")}
                        </span>
                        <svg
                          className={`${
                            open
                              ? "rotate-180 transform duration-300"
                              : "duration-300"
                          } h-3 w-3 text-white duration-300`}
                          width="5"
                          height="5"
                          viewBox="0 0 13 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.5004 0.901438C11.9679 1.35427 9.66923 3.37942 7.94196 4.88886L6.68222 5.99578L5.33157 4.82597C4.59131 4.18446 3.17573 2.95175 2.18871 2.08383C1.2017 1.22848 0.474428 0.649865 0.55235 0.813387C0.643259 0.964331 1.89001 2.83854 3.34456 4.95175C4.78612 7.07754 6.09781 9.02722 6.26664 9.29137C6.42248 9.54295 6.6043 9.75678 6.65625 9.75678C6.76014 9.75678 12.7861 0.939173 12.89 0.649865C12.916 0.574394 12.7342 0.687601 12.5004 0.901438Z"
                            fill="white"
                          />
                        </svg>
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 py-2 text-gray-500 bg-black transition_300 flex flex-col">
                        <span onClick={() => track("buy evomon gateio")}>
                          <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            to={"https://devomon.ink/WS-DEVO-GATE"}
                            onClick={() => setNav(!Nav)}
                            className="font-normal text-[12px] text-white mt-3 hover:text-[#2253F5] transition-all duration-200 cursor-pointer font-poppins block"
                          >
                            {getTranslation("GateIO")}
                          </Link>
                        </span>
                        <span onClick={() => track("buy evomon mexc")}>
                          <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            to={"https://devomon.ink/WS-DEVO-MEXC"}
                            onClick={() => setNav(!Nav)}
                            className="font-normal text-[12px] text-white mt-3 hover:text-[#2253F5] transition-all duration-200 cursor-pointer font-poppins block"
                          >
                            {getTranslation("MEXC")}
                          </Link>
                        </span>
                        <span onClick={() => track("buy evomon pancakeswap")}>
                          <Link
                            target="_blank"
                            to={"https://devomon.ink/WS-DEVO-PCS"}
                            onClick={() => setNav(!Nav)}
                            className="font-normal text-[12px] text-white mt-3 hover:text-[#2253F5] transition-all duration-200 cursor-pointer font-poppins block"
                          >
                            {getTranslation("PancakeSwap")}
                          </Link>
                        </span>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
