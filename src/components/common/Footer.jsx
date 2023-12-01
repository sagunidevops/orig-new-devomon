/* eslint-disable no-unused-vars */
import footerLogo from "../../assets/images/svg/footer_logo.svg";
import priceLogo from "../../assets/images/svg/price_logo.svg";
import saguniLogo from "../../assets/images/svg/SaguniLogo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import story_video from "../../assets/video/story_video.mp4";
import cross_icon from "../../assets/images/svg/cross_icon.svg";
import C_icon from "../../assets/images/svg/C_icon.svg";
import dashboard from "../../assets/images/webp/dashboard-coming.webp";
import MerchImage from "../../assets/images/png/Brand_peak.png";
import evoverse from "../../assets/images/webp/evoverse.webp";

import {
  footerIcons,
  footerLinksFirst,
  footerLinksSecond,
  footerLinksThird,
} from "./Helper";
import { useEffect, useState } from "react";
import { useRef } from "react";

const Footer = () => {
  const [popupValue, setPopupValue] = useState("");

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

  const location = useLocation();
  const clickHandler = (value) => {
    setPopupValue(value);
    setHide(!hide);
  };
  return (
    <>
      <section className=" bg-[#1E3EA81A] pt-12 relative overflow-x-hidden">
        <div className="bg-[#1E3EA81A] relative overflow-x-hidden">
          <div className={video ? "" : "hidden"}>
            <div
              className=" 
             -translate-x-1/2 -translate-y-1/2 fixed top-1/2 start-1/2 z-[100]"
            >
              <a
                onClick={() => {
                  setVideo(false), videoRef.current.pause();
                }}
                className="fixed end-[2%] z-50 top-[3%] cursor-pointer max-w-[16px]"
              >
                <img src={cross_icon} alt="cross_icon" />
              </a>
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
                <source src={story_video} type="video/mp4" />
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
        {/* <div className={hide ? "" : "hidden"}>
          <div className="text-white whitespace-nowrap bg-black py-12 px-16 rounded-xl -translate-x-1/2 -translate-y-1/2 fixed top-1/2 start-1/2 z-[100] text-center text-xl font-bold popup_shadow">
            <svg
              onClick={() => {
                setHide(false);
              }}
              className="absolute end-5 z-50 top-[10%] bi bi-x-lg cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"></path>
            </svg>
            Coming Soon
          </div>
          <div
            onClick={() => {
              setHide(false);
            }}
            className="w-full h-screen flex justify-center items-center fixed top-0 start-0 bg-[#00000080] z-[51]"
          ></div>
        </div> */}

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
                  src={cross_icon}
                  alt=""
                />
              )}
              {popupValue === "Dashboard" ? (
                <img className="rounded-xl w-full" src={dashboard} />
              ) : popupValue === "EvoVerse" ? (
                <img className="rounded-xl w-full" src={evoverse} />
              ) : popupValue === "Merchandise" ? (
                <div className="relative p-[20px] custom-xsm:p-0">
                  <img
                    onClick={() => {
                      setHide(false);
                    }}
                    className="absolute z-50 max-w-[20px] sm:max-w-[40px] top-[8%] end-[8%] custom-xsm:top-5 custom-xsm:end-[4%] sm:end-[15%] 3xl:end-[3%] bi bi-x-lg cursor-pointer"
                    src={cross_icon}
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
            <a
              href="https://new-devomon.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="max-w-[120px] lg:max-w-none"
                src={footerLogo}
                alt="footerLogo"
              />
            </a>
          </span>
        </div>
        <div className="container pb-5 xl:pb-7 mt-4">
          <div className="md:flex">
            <div className="w-full md:w-1/2 flex justify-between items-start">
              <div className="mb-2 md:mb-0">
                <p className="text-[10px] lg:text-[14px] max-w-[300px] md:max-w-[200px] lg:max-w-[240px] opacity-70 text-white">
                  Experience the captivating journeys and trials, along with the
                  opportunity to build and enhance robust NFT collections, all
                  within an engaging and ever-evolving setting.
                </p>
                <p className=" text-[10px] lg:text-sm max-w-[300px] md:max-w-[150px] lg:max-w-[240px] opacity-70 text-white mb-5">
                  See you on Callisto!
                </p>
                <div className="flex gap-2 xl:gap-3 mt-3 md:mt-4">
                  {footerIcons.map((value, index) => {
                    return (
                      <a
                        className="transition-all hover:translate-y-[-8px]"
                        target="_blank"
                        rel="noopener noreferrer"
                        key={index}
                        href={value.iconUrl}
                        aria-label="social"
                        aria-describedby="social"
                      >
                        <img
                          className="max-w-[22px]"
                          src={value.footerIcon}
                          alt="social"
                        />
                      </a>
                    );
                  })}
                </div>
                <div className="flex items-center gap-3 xl:gap-4 h-auto me-10 min-[475px]:hidden mt-4 sm:my-0">
                  <div>
                    <span
                      onClick={() => {
                        history("/");
                        scrollToTop();
                      }}
                    >
                      <img
                        className="max-w-[30px] sm:max-w-none"
                        src={priceLogo}
                        alt="priceLogo"
                      />
                    </span>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs xl:text-base font-medium text-white  opacity-70 ">
                      $EVO —-
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 xl:gap-4 pl-6 h-auto sm:me-10 max-[475px]:hidden">
                <div>
                  <span
                    onClick={() => {
                      history("/");
                      scrollToTop();
                    }}
                  >
                    <img
                      className="max-w-[30px] sm:max-w-none"
                      src={priceLogo}
                      alt="priceLogo"
                    />
                  </span>
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs xl:text-base font-medium text-white  opacity-70 ">
                    $EVO —-
                  </p>
                </div>
              </div>
            </div>
            <div className=" w-full md:w-1/2 mt-4 md:mt-0 md:ps-5 lg:ps-0">
              <div className="flex justify-between md:mt-0">
                <div className="w-1/4 md:w-1/5 xl:w-1/4 flex flex-col gap-2 xl:ms-10">
                  <div className="flex cursor-pointer items-center group relative scroll_hidden">
                    <div className="footer_hover absolute translate-x-16 bg-[#0d1015] rounded-lg py-3 px-3 w-[100px] sm:w-[150px] group-hover:block hidden z-[1] max-h-[154px] overflow-y-auto p-3 scroll_hidden">
                      <div className="flex flex-col">
                        <a className=" font-poppins text-xs xl:text-base text-white mb-0 hover:text-[#2253F5] transition-all duration-200"
                          href="https://callisto.devomon.io/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                            GameFi
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://evozone.devomon.io/">
                          <p className=" font-poppins text-xs xl:text-base text-white hover:text-[#2253F5] mt-2 transition-all duration-200 mb-2">
                            Evozone
                          </p>
                        </a>
                        <Link
                          to={"https://callisto.devomon.io/#evomons"}
                          target="_blank"
                        >
                          <p className=" font-poppins text-xs xl:text-base text-white mb-2 hover:text-[#2253F5] transition-all duration-200">
                            NFTs
                          </p>
                        </Link>
                        <span
                          onClick={() => clickHandler("Dashboard")}
                          href=""
                          className=" font-poppins text-xs xl:text-base text-white mb-0 hover:text-[#2253F5] transition-all duration-200"
                        >
                          Dashboard{" "}
                        </span>
                        <span onClick={() => clickHandler("EvoVerse")} href="#" >
                          <p className=" font-poppins text-xs xl:text-base text-white mb-0 hover:text-[#2253F5] mt-2 transition-all duration-200">
                            EvoVerse
                          </p>
                        </span>
                        <span className=" font-poppins text-xs xl:text-base text-white mb-0 hover:text-[#2253F5] mt-2 transition-all duration-200" onClick={() => setVideo(!video)}>
                            Manga
                        </span>
                        <spanLink
                          onClick={() => clickHandler("Anime")}
                          className=" font-poppins text-xs xl:text-base text-white mb-0 hover:text-[#2253F5] mt-2"
                        >
                          Anime{" "}
                        </spanLink>
                        <span href="#" onClick={() => clickHandler("Merchandise")}>
                          <p className=" font-poppins text-xs xl:text-base text-white mb-0 hover:text-[#2253F5] mt-2 transition-all duration-200">
                            Merchandise
                          </p>
                        </span>
                      </div>
                    </div>
                    <p className="  text-xs xl:text-sm text-[#B8BDCA] mb-0 me-2  group-hover:text-white duration-200">
                      D-World
                    </p>
                    <svg
                      className="-rotate-[270deg] group-hover:-rotate-[360deg] duration-200"
                      width="10"
                      height="13"
                      viewBox="0 0 10 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.274973 0.71908C0.727803 1.25155 2.75296 3.55025 4.26239 5.27752L5.36931 6.53726L4.1995 7.88791C3.55799 8.62817 2.32529 10.0438 1.45736 11.0308C0.602017 12.0178 0.0234004 12.7451 0.186922 12.6671C0.337866 12.5762 2.21208 11.3295 4.32529 9.87492C6.45107 8.43337 8.40076 7.12168 8.66491 6.95285C8.91648 6.797 9.13032 6.61518 9.13032 6.56324C9.13032 6.45934 0.312709 0.433366 0.0234004 0.32947C-0.0520713 0.303495 0.0611362 0.485313 0.274973 0.71908Z"
                        fill="#B8BDCA"
                        className=" group-hover:fill-white"
                      />
                    </svg>
                  </div>
                  <div className="flex cursor-pointer items-center group">
                    <button onClick={() => clickHandler("Staking")}
                      className="  text-xs xl:text-sm text-[#B8BDCA] mb-0 me-2  group-hover:text-white duration-200"
                    >
                      Staking
                    </button>
                  </div>
                  <div className="flex cursor-pointer items-center group relative">
                    <div className="absolute translate-x-16 bg-[#0d1015] rounded-lg py-3 px-3 w-[100px] sm:w-[150px] group-hover:block hidden z-[1]">
                      <Link target="_blank" to={"https://team.devomon.io"}>
                        <p className="text-xs xl:text-base text-white mb-0 hover:text-[#2253F5] transition-all duration-200 font-normal font-poppins">
                          Core Team
                        </p>  
                      </Link>
                   
                      <Link target="_blank" to={"https://partners.devomon.io"}>
                        <p className="text-xs xl:text-base text-white hover:text-[#2253F5] mb-0 mt-3 font-normal font-poppins text-start">
                          Partners
                        </p>
                      </Link>
                    </div>
                    <p className="  text-xs xl:text-sm text-[#B8BDCA] mb-0 me-2  group-hover:text-white duration-200">
                      Team
                    </p>
                    <svg
                      className="-rotate-[270deg] group-hover:-rotate-[360deg] duration-200"
                      width="10"
                      height="13"
                      viewBox="0 0 10 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.274973 0.71908C0.727803 1.25155 2.75296 3.55025 4.26239 5.27752L5.36931 6.53726L4.1995 7.88791C3.55799 8.62817 2.32529 10.0438 1.45736 11.0308C0.602017 12.0178 0.0234004 12.7451 0.186922 12.6671C0.337866 12.5762 2.21208 11.3295 4.32529 9.87492C6.45107 8.43337 8.40076 7.12168 8.66491 6.95285C8.91648 6.797 9.13032 6.61518 9.13032 6.56324C9.13032 6.45934 0.312709 0.433366 0.0234004 0.32947C-0.0520713 0.303495 0.0611362 0.485313 0.274973 0.71908Z"
                        fill="#B8BDCA"
                        className=" group-hover:fill-white"
                      />
                    </svg>
                  </div>
                  <div className="flex cursor-pointer items-center group relative">
                    <div className="absolute translate-x-16 bg-[#0d1015] rounded-lg py-3 px-3 w-[100px] sm:w-[150px] group-hover:block hidden z-[11]">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://whitepaper.devomon.io/"
                      >
                        <p className="text-xs xl:text-base text-white mb-0 hover:text-[#2253F5] transition-all duration-200 font-normal font-poppins">
                          Whitepaper
                        </p>
                      </a>
                   
                      <a
                        href="#contact"
                        className="text-xs xl:text-base text-white hover:text-[#2253F5] font-normal font-poppins"
                      >
                        Contact
                      </a>
                    </div>
                    <p className="  text-xs xl:text-sm text-[#B8BDCA] mb-0 me-2  group-hover:text-white duration-200">
                      Help
                    </p>
                    <svg
                      className="-rotate-[270deg] group-hover:-rotate-[360deg] duration-200"
                      width="10"
                      height="13"
                      viewBox="0 0 10 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.274973 0.71908C0.727803 1.25155 2.75296 3.55025 4.26239 5.27752L5.36931 6.53726L4.1995 7.88791C3.55799 8.62817 2.32529 10.0438 1.45736 11.0308C0.602017 12.0178 0.0234004 12.7451 0.186922 12.6671C0.337866 12.5762 2.21208 11.3295 4.32529 9.87492C6.45107 8.43337 8.40076 7.12168 8.66491 6.95285C8.91648 6.797 9.13032 6.61518 9.13032 6.56324C9.13032 6.45934 0.312709 0.433366 0.0234004 0.32947C-0.0520713 0.303495 0.0611362 0.485313 0.274973 0.71908Z"
                        fill="#B8BDCA"
                        className=" group-hover:fill-white"
                      />
                    </svg>
                  </div>
                  <div className="flex cursor-pointer items-center group">
                    <Link
                      target="_blank"
                      to={"https://medium.com/@DevomonOfficial"}
                      className="text-xs xl:text-sm text-[#B8BDCA] mb-0 me-2  group-hover:text-white duration-200"
                    >
                      News
                    </Link>
                  </div>
                </div>
                <div className="xl:w-1/4 w-1/4 sm:w-1/6 md:w-1/4 lg:w-1/5 flex flex-col gap-3">
                  <div className="flex cursor-pointer items-center - group">
                    <button
                      onClick={() => clickHandler("Governance")}
                      className="text-xs xl:text-sm text-[#B8BDCA] mb-0 me-2 group-hover:text-white duration-200"
                    >
                      Governance
                    </button>
                  </div>
                  {/* <div className="flex cursor-pointer items-center - group">
                    <button onClick={() => setHide(!hide)} className="  text-xs xl:text-sm text-[#B8BDCA] mb-0 me-2 group-hover:text-white duration-200">
                      FAQ
                    </button>
                  </div> */}
                  <div className="flex cursor-pointer items-center - group">
                    <button
                      onClick={() => clickHandler("Contributors")}
                      className="text-xs xl:text-sm text-[#B8BDCA] mb-0 me-2 group-hover:text-white duration-200"
                    >
                      Contributors
                    </button>
                  </div>
                  {/* <div className="flex cursor-pointer items-center - group">
                    <button onClick={() => setHide(!hide)} className="text-xs xl:text-sm text-[#B8BDCA] mb-0 me-2 group-hover:text-white duration-200">
                      Jobs
                    </button>
                  </div> */}
                </div>
                <div className=" xl:w-5/12 max-[475px]:w-2/5 min-[475px]:w-1/3 md:w-2/5 lg:w-1/2 flex flex-col gap-2">
                  <a
                    href="https://sagunitech.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="max-w-[96px]"
                      src={saguniLogo}
                      alt="saguniLogo img"
                    />
                  </a>
                  <div className="flex items-center - group">
                    <p className="text-xs xl:text-sm text-[#B8BDCA] mb-0 sm:me-2 font-poppins font-bold">
                      SaGuNi Tech LLC
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
             2023 c Saguni.All Rights Reserved
            </p>
            <div className="flex justify-between sm:mt-0 mt-2 gap-5 md:mr-11 text-white">
              {/* <Link target="_blank"  
                className="text-sm opacity-70 transition-all hover:opacity-100 duration-200"
                to="/cookie-policy"
              >
                Cookie Policy,
              </Link> */}
              <Link target="_blank"  
                className="text-sm opacity-70 transition-all hover:opacity-100 duration-200"
                to="https://legal.devomon.io/"
              >
                Terms and Conditions
              </Link>
              <Link target="_blank"  
                className="text-sm opacity-70 transition-all hover:opacity-100 duration-200"
                to="https://legal.devomon.io/privacy/legal"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Footer