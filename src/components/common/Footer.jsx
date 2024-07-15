/* eslint-disable no-unused-vars */
import footerLogo from "../../assets/images/svg/footer_logo.svg";
import priceLogo from "../../assets/images/svg/price_logo.svg";
import saguniLogo from "../../assets/images/png/saguni_studios.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import storyVideo from "../../assets/video/story_video.mp4";
import crossIcon from "../../assets/images/svg/cross_icon.svg";
import dashboard from "../../assets/images/webp/dashboard-coming.webp";
import MerchImage from "../../assets/images/png/Brand_peak.png";
import evoverse from "../../assets/images/webp/evoverse.webp";

import { footerIcons } from "./Helper";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { priceApi } from "./Api";
import { PRICE_URL } from "./ApiUrl";
import { FooterLinkArrow } from "./Icons";
import { useLayoutChangerProvider } from "../../context/LanguageProvider";

const Footer = () => {
  const { getTranslation, languageHandler } = useLayoutChangerProvider();
  const [popupValue, setPopupValue] = useState("");
  const [evoPrice, setEvoPrice] = useState("");

  // VIDEO POPUP JS
  const [video, setVideo] = useState();
  const videoRef = useRef(null); // Create a reference to the video element
  if (video) {
    document.body.style.overflow = "hidden";
    if (videoRef.current) {
      videoRef.current.pause();
    }
  } else {
    document.body.style.overflow = "auto";
  }
  const [hide, setHide] = useState();
  useEffect(() => {
    if (hide) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [hide]);
  const history = useNavigate();
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const clickHandler = (value) => {
    setPopupValue(value);
    setHide(!hide);
  };
  const priceHandler = async () => {
    const response = await priceApi(PRICE_URL);
    const responseValue = response.devomon.usd;
    setEvoPrice(responseValue);
  };

  useEffect(() => {
    // Run console log when the component mounts or refreshes
    priceHandler();

    // Set interval to run a specific condition every 45000 milliseconds
    const interval = setInterval(() => {
      priceHandler(); // Place your condition here
    }, 45000);

    // Clean up interval when the component unmounts or refreshes
    return () => clearInterval(interval);
  }, []);

  const [playing, setPlaying] = useState(false);
  const iframeRef = useRef(null);
  const handlePause = () => {
    setHide(false);
    setPlaying(false);
    iframeRef.current.contentWindow.postMessage(
      '{"event":"command","func":"' + "pauseVideo" + '","args":""}',
      "*"
    );
  };

  //  CURRENT YEAR
  const currentYear = new Date().getFullYear();
  return (
    <section className=" bg-[#1E3EA81A] pt-12 relative overflow-x-hidden">
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
                onClick={handlePause}
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
                ref={iframeRef}
                width="80%"
                height="450px"
                src={`https://www.youtube.com/embed/SkPiiKX39WQ?enablejsapi=1&autoplay=0`}
                frameBorder="0"
                allowFullScreen
                className="mx-auto w-full xl:w-[80%] h-[300px] md:h-[450px] object-cover"
              />
            ) : popupValue === "Merchandise" ? (
              <div className="relative p-[20px] custom-xsm:p-0">
                <img
                  onClick={() => {
                    setHide(false);
                  }}
                  className="absolute z-50 max-w-[20px] sm:max-w-[40px] top-[8%] end-[8%] custom-xsm:top-5 custom-xsm:end-[4%] sm:end-[15%] 3xl:end-[3%] bi bi-x-lg cursor-pointer"
                  src={crossIcon}
                  alt=""
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
      <div className="bg-[#2253F5] w-[420px] h-[134px] blur-[150px] opacity-80 absolute z-[-1] top-[50%] left-[50%]"></div>
      <div className="container relative">
        <span className="inline-block">
          <Link
            to={"https://new-devomon.web.app/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="max-w-[120px] lg:max-w-none"
              src={footerLogo}
              alt="footerLogo"
            />
          </Link>
        </span>
      </div>
      <div className="container pb-5 xl:pb-7 mt-4">
        <div className="md:flex flex-wrap">
          <div className="w-full xl:w-[55%] flex lg:justify-between items-start">
            <div className="mb-2 md:mb-0">
              <p className="text-[10px] lg:text-[14px] max-w-[300px] md:max-w-[200px] lg:max-w-[240px] opacity-70 text-white">
                {getTranslation("footer description")}
              </p>
              <p className=" text-[10px] lg:text-sm max-w-[300px] md:max-w-[150px] lg:max-w-[240px] opacity-70 text-white mb-5">
                {getTranslation("See you on Callisto!")}
              </p>
              <div className="flex gap-2 xl:gap-3 mt-3 md:mt-4">
                {footerIcons.map((value, index) => {
                  return (
                    <Link
                      className="transition-all hover:translate-y-[-8px]"
                      target="_blank"
                      rel="noopener noreferrer"
                      key={index}
                      to={value.iconUrl}
                      aria-label="social"
                      aria-describedby="social"
                    >
                      <img
                        className="max-w-[22px]"
                        src={value.footerIcon}
                        alt="social"
                      />
                    </Link>
                  );
                })}
              </div>
              <div className="h-auto me-10 md:hidden mt-4 md:my-0">
                <div className="flex items-center gap-3 xl:gap-4">
                  <div>
                    <span
                      onClick={() => {
                        history("/");
                        scrollToTop();
                      }}
                    >
                      <img
                        className="max-w-[40px] sm:max-w-none"
                        src={priceLogo}
                        alt="priceLogo"
                      />
                    </span>
                  </div>
                  <div>
                    <p className="text-[12px] sm:text-xs xl:text-base font-medium text-white  opacity-70 flex gap-3">
                      <span>$EVO </span> <span>{evoPrice}</span>
                    </p>
                    <p className="text-[12px] mt-2 break-all sm:text-xs xl:text-base font-medium text-white opacity-70 ">
                      {getTranslation(
                        "Official Contract: 0xF2B688b2201979d44FdF18d1d8C641305Cf560Ba"
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pl-6 h-auto sm:me-10 max-[900px]:w-[60%] md:block hidden">
              <div className="flex gap-3 items-center xl:gap-4">
                <div>
                  <span
                    onClick={() => {
                      history("/");
                      scrollToTop();
                    }}
                  >
                    <img
                      className="max-w-[50px] sm:max-w-none"
                      src={priceLogo}
                      alt="priceLogo"
                    />
                  </span>
                </div>
                <div>
                  <p
                    onClick={priceHandler}
                    className="text-[10px] sm:text-xs xl:text-base font-medium text-white opacity-70 flex gap-4"
                  >
                    <span>{getTranslation("$EVO 0.00602")} </span>{" "}
                    <span>{evoPrice}</span>
                  </p>
                  <p className="text-[10px] mt-2 break-all xl:text-base sm:text-xs font-medium text-white opacity-70 ">
                    {getTranslation(
                      "Official Contract: 0xF2B688b2201979d44FdF18d1d8C641305Cf560Ba"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[45%] mt-4 lg:mt-5 xl:mt-0 lg:ps-0">
            <div className="flex justify-between md:mt-0">
              <div className="w-[32%] md:w-1/5 xl:w-1/4 flex flex-col gap-2 xl:ms-10">
                <div className="flex cursor-pointer items-center group relative scroll_hidden">
                  <div className="footer_hover absolute translate-x-16 bg-[#0d1015] rounded-lg px-2 py-2 sm:py-3 sm:px-3 w-[110px] sm:w-[150px] group-hover:block hidden z-[1] max-h-[154px] overflow-y-auto p-3 scroll_hidden">
                    <div className="flex flex-col">
                      <Link
                        className="font-poppins text-xs xl:text-base text-white mb-0 hover:text-[#2253F5] transition-all duration-200"
                        to={"https://callisto.devomon.io/"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {getTranslation("GameFi")}
                      </Link>
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        to={"https://evozone.devomon.io/"}
                        className="font-poppins text-xs xl:text-base text-white hover:text-[#2253F5] mt-2 transition-all duration-200 mb-2"
                      >
                        {getTranslation("Evozone")}
                      </Link>
                      <Link
                        to={"https://callisto.devomon.io/#evomons"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-poppins text-xs xl:text-base text-white mb-2 hover:text-[#2253F5] transition-all duration-200"
                      >
                        {getTranslation("NFTs")}
                      </Link>
                      <Link
                        onClick={() => clickHandler("Dashboard")}
                        to={"#"}
                        className=" font-poppins text-xs xl:text-base text-white mb-0 hover:text-[#2253F5] transition-all duration-200"
                      >
                        {getTranslation("Dashboard")}
                      </Link>
                      <Link
                        onClick={() => clickHandler("EvoVerse")}
                        href={"#"}
                        className="font-poppins text-xs xl:text-base text-white mb-0 hover:text-[#2253F5] mt-2 transition-all duration-200"
                      >
                        {getTranslation("EvoVerse")}
                      </Link>
                      <Link
                        to={"#"}
                        className=" font-poppins text-xs xl:text-base text-white mb-0 hover:text-[#2253F5] mt-2 transition-all duration-200"
                        onClick={() => setVideo(!video)}
                      >
                        {getTranslation("Manga")}
                      </Link>
                      <Link
                        onClick={() => clickHandler("Anime")}
                        className=" font-poppins text-xs xl:text-base text-white mb-0 hover:text-[#2253F5] mt-2"
                      >
                        {getTranslation("Anime")}
                      </Link>
                      <Link
                        to={"#"}
                        rel="noopener noreferrer"
                        onClick={() => clickHandler("Merchandise")}
                        className="font-poppins text-xs xl:text-base text-white mb-0 hover:text-[#2253F5] mt-2 transition-all duration-200"
                      >
                        {getTranslation("Merchandise")}
                      </Link>
                    </div>
                  </div>
                  <p className="text-xs xl:text-sm text-[#B8BDCA] mb-0 me-2  group-hover:text-white duration-200">
                    {getTranslation("D-World")}
                  </p>
                  <FooterLinkArrow />
                </div>
                <div className="flex cursor-pointer items-center group">
                  <Link
                    target="_blank"
                    to="https://bit.ly/WS-DEVO-STAKE"
                    className="  text-xs xl:text-sm text-[#B8BDCA] mb-0 me-2  group-hover:text-white duration-200"
                  >
                    {getTranslation("Staking")}
                  </Link>
                </div>
                <div className="flex cursor-pointer items-center group relative">
                  <div className="absolute translate-x-16 bg-[#0d1015] rounded-lg px-2 py-2 sm:py-3 sm:px-3 w-[130px] sm:w-[180px] group-hover:block hidden z-[11]">
                    <Link
                      target="_blank"
                      rel="noreferrer"
                      to={"https://whitepaper.devomon.io/"}
                      className="text-xs xl:text-base text-white mb-0 hover:text-[#2253F5] transition-all duration-200 font-normal font-poppins"
                    >
                      {getTranslation("Whitepaper")}
                    </Link>
                    <Link
                      to={"/#contact"}
                      className="text-xs xl:text-base text-white hover:text-[#2253F5] font-normal font-poppins block mt-2"
                    >
                      {getTranslation("Contact")}
                    </Link>
                    <NavLink
                      onClick={() => {
                        scrollToTop();
                      }}
                      to="/roadmap"
                      className="text-xs xl:text-base text-white hover:text-[#2253F5] font-normal font-poppins block mt-2"
                    >
                      {getTranslation("Roadmap")}
                    </NavLink>
                    <Link
                      target="_blank"
                      to={"https://team.devomon.io"}
                      className="text-xs xl:text-base text-white mb-0 mt-2 hover:text-[#2253F5] transition-all duration-200 block font-normal font-poppins"
                    >
                      {getTranslation("Core Team")}
                    </Link>
                    <Link
                      target="_blank"
                      to={"https://partners.devomon.io"}
                      className="text-xs xl:text-base text-white hover:text-[#2253F5] mb-0 mt-2 font-normal font-poppins"
                    >
                      {getTranslation("Partners")}
                    </Link>
                  </div>
                  <p className="text-xs xl:text-sm text-[#B8BDCA] mb-0 me-2  group-hover:text-white duration-200">
                    {getTranslation("Info")}
                  </p>
                  <FooterLinkArrow />
                </div>
                <div className="flex cursor-pointer items-center group">
                  <Link
                    target="_blank"
                    to={"https://medium.com/@DevomonOfficial"}
                    className="text-xs xl:text-sm text-[#B8BDCA] mb-0 me-2  group-hover:text-white duration-200"
                  >
                    {getTranslation("News")}
                  </Link>
                </div>
                <div className="flex cursor-pointer items-center group relative">
                  <div className="absolute translate-x-16 bg-[#0d1015] rounded-lg px-2 py-2 sm:py-3 sm:px-3 w-[130px] sm:w-[180px] group-hover:block hidden z-[11]">
                    <Link
                      target="_blank"
                      rel="noreferrer"
                      to={"https://devomon.ink/WS-DEVO-GATE"}
                      className="text-xs xl:text-base text-white mb-0 hover:text-[#2253F5] transition-all duration-200 font-normal font-poppins"
                    >
                      {getTranslation("GateIO")}
                    </Link>
                    <Link
                      target="_blank"
                      rel="noreferrer"
                      to={"https://devomon.ink/WS-DEVO-MEXC"}
                      className="text-xs xl:text-base text-white hover:text-[#2253F5] font-normal block mt-2 font-poppins"
                    >
                      {getTranslation("MEXC")}
                    </Link>
                    <Link
                      target="_blank"
                      rel="noreferrer"
                      to={"https://devomon.ink/WS-DEVO-PCS"}
                      className="text-xs xl:text-base text-white hover:text-[#2253F5] font-normal block mt-2 font-poppins"
                    >
                      {getTranslation("PancakeSwap")}
                    </Link>
                  </div>
                  <p className="text-xs xl:text-sm text-[#B8BDCA] mb-0 me-2  group-hover:text-white duration-200">
                    {getTranslation("Buy Evo")}
                  </p>
                  <FooterLinkArrow />
                </div>
              </div>
              <div className="xl:w-1/4 w-[32%] sm:w-1/6 md:w-1/4 lg:w-1/5 flex flex-col gap-3">
                <div className="flex cursor-pointer items-center - group">
                  <button
                    onClick={() => clickHandler("Governance")}
                    className="text-xs xl:text-sm text-[#B8BDCA] mb-0 me-2 group-hover:text-white duration-200"
                  >
                    {getTranslation("Governance")}
                  </button>
                </div>
                <div className="flex cursor-pointer items-center - group">
                  <button
                    onClick={() => clickHandler("Contributors")}
                    className="text-xs xl:text-sm text-[#B8BDCA] mb-0 me-2 group-hover:text-white duration-200"
                  >
                    {getTranslation("Contributors")}
                  </button>
                </div>
              </div>
              <div className="xl:w-5/12 max-[475px]:w-[36%] min-[475px]:w-1/3 md:w-2/5 lg:w-1/2 flex flex-col gap-2">
                <Link
                  to={"https://sagunitech.com/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="max-w-[96px]"
                    src={saguniLogo}
                    alt="saguniLogo img"
                  />
                </Link>
                <div className="flex items-center - group">
                  <p className="text-xs xl:text-sm text-[#B8BDCA] mb-0 sm:me-2 font-poppins font-bold">
                    {getTranslation("SaGuNi Tech LLC")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#2253F5] py-3 text-sm opacity-70 relative z-10">
        <div className="container flex flex-col sm:flex-row justify-between">
          <p className="text-center sm:text-start opacity-70 text-white flex items-center gap-1 justify-center">
            Devomon &copy; {currentYear},
            {getTranslation("Saguni.All Rights Reserved")}
          </p>
          <div className="flex justify-between sm:mt-0 mt-2 gap-5 md:mr-11 text-white">
            <Link
              target="_blank"
              className="text-sm opacity-70 transition-all hover:opacity-100 duration-200"
              to="/terms-conditons"
            >
              {getTranslation("Terms and Conditions")}
            </Link>
            <Link
              target="_blank"
              className="text-sm opacity-70 transition-all hover:opacity-100 duration-200"
              to="/privacy-policy"
            >
              {getTranslation("Privacy Policy")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
