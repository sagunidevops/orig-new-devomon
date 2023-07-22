/* eslint-disable no-unused-vars */
import footerLogo from "../../assets/images/svg/footer_logo.svg";
import priceLogo from "../../assets/images/svg/price_logo.svg";
import saguniLogo from "../../assets/images/svg/SaguniLogo.svg";
import { Link, useNavigate } from "react-router-dom";

import {
  footerIcons,
  footerLinksFirst,
  footerLinksSecond,
  footerLinksThird,
} from "./Helper";
import { useState } from "react";


const Footer = () => {
  const [hide, setHide] = useState();
  if (hide) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  const history = useNavigate();
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <>
      <section className=" bg-[#1E3EA81A] pt-12 relative overflow-x-hidden">
      <div className={hide ? "" : "hidden"}>
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
            Comming Soon
          </div>
          <div
            onClick={() => {
              setHide(false);
            }}
            className="w-full h-screen flex justify-center items-center fixed top-0 start-0 bg-[#00000080] z-[51]"
          ></div>
        </div>
        <div className="bg-[#2253F5] w-[420px] h-[134px] blur-[150px] opacity-80 absolute z-[-1] top-[50%] left-[50%]"></div>
        <div className="container relative">
          <span className="inline-block">
            <a
              href="https://devomon.io/"
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
            <div className=" w-full md:w-1/2 flex justify-between items-start">
              <div>
                <p className=" text-[10px] lg:text-sm max-w-[300px] md:max-w-[150px] lg:max-w-[240px] opacity-70 text-white">
                  Enjoy the intriguing adventures and challenges, as well as the
                  possibility to acquire and develop strong NFT collections and
                  become a part of an intriguing and dynamic environment.
                </p>
                <p className=" text-[10px] lg:text-sm max-w-[300px] md:max-w-[150px] lg:max-w-[240px] opacity-70 text-white">
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
                          className="max-w-[22px] "
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
                  <div className="flex cursor-pointer items-center group relative">
                    <div className="absolute translate-x-16 bg-[#0d1015df] rounded-lg py-3 px-3 w-[100px] sm:w-[150px] group-hover:block hidden
                    z-[1]">
                      <a href="https://callisto.devomon.io/">
                        <p className="text-base text-white mb-0 hover:text-[#2253F5] transition-all duration-200 font-normal font-poppins">
                         Callisto
                        </p>
                      </a>
                      <a href="https://tcg.devomon.io/">
                      <p className="text-base text-white mb-0 mt-3 hover:text-[#2253F5] transition-all duration-200 font-normal font-poppins">
                        Card Game
                      </p>
                      </a>
                      <button onClick={() => setHide(!hide)} className="text-base text-white hover:text-[#2253F5] mb-0 mt-3 font-normal font-poppins">
                        Devoland
                      </button>
                    </div>
                    <p className="text-sm text-[#B8BDCA] mb-0 me-2 group-hover:text-white duration-200 font-normal font-poppins">
                      Play
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
                  <div className="flex cursor-pointer items-center group relative scroll_hidden">
                    <div className="footer_hover absolute translate-x-16 bg-[#0d1015df] rounded-lg py-3 px-3 w-[100px] sm:w-[150px] group-hover:block hidden z-[1] max-h-[154px] overflow-y-auto p-3 scroll_hidden">
                    <a href="">
                        <p className="text-base text-white mb-0 hover:text-[#2253F5] transition-all duration-200 font-normal font-poppins">
                        NFTs
                        </p>
                      </a>
                      <button onClick={() => setHide(!hide)} className="text-base text-white mb-0 mt-3 hover:text-[#2253F5] transition-all duration-200 font-normal font-poppins">
                      Dashboard
                      </button>
                      
                      <button onClick={() => setHide(!hide)} className="text-base text-white hover:text-[#2253F5] mb-0 mt-3 font-normal font-poppins w-full text-start">
                      Land
                      </button>
                      
                      <button onClick={() => setHide(!hide)} className="text-base text-white hover:text-[#2253F5] mb-0 mt-3 font-normal font-poppins">
                      DevoDex
                      </button>
                      
                      <button onClick={() => setHide(!hide)} className="text-base text-white hover:text-[#2253F5] mb-0 mt-3 font-normal font-poppins">
                      Brand Shop
                      </button>
                      <a href="/comic">
                      <p className="text-base text-white hover:text-[#2253F5] mb-0 mt-3 font-normal font-poppins">
                      Comic
                      </p>
                      </a>
                      <button onClick={() => setHide(!hide)} className="text-base text-white hover:text-[#2253F5] mb-0 mt-3 font-normal font-poppins">
                      Anime
                      </button>
                      <a target='_blank' href="https://callisto.devomon.io/#gallery" rel="noopener noreferrer">
                      <p className="text-base text-white hover:text-[#2253F5] mb-0 mt-3 font-normal font-poppins">
                      Gallery
                      </p>
                      </a>
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
                    <button onClick={() => setHide(!hide)} className="  text-xs xl:text-sm text-[#B8BDCA] mb-0 me-2  group-hover:text-white duration-200">
                      Staking
                    </button>
                  </div>
                  <div className="flex cursor-pointer items-center group relative">
                    <div className="absolute translate-x-16 bg-[#0d1015df] rounded-lg py-3 px-3 w-[100px] sm:w-[150px] group-hover:block hidden z-[1]">
                    <a href="/team">
                        <p className="text-base text-white mb-0 hover:text-[#2253F5] transition-all duration-200 font-normal font-poppins">
                        Core Team
                        </p>
                      </a>
                      <button onClick={() => setHide(!hide)} className="text-base text-white mb-0 mt-3 hover:text-[#2253F5] transition-all duration-200 font-normal font-poppins">
                      Advisor
                      </button>
                      <button className="text-base text-white hover:text-[#2253F5] mb-0 mt-3 font-normal font-poppins text-start">
                      Streaming Partners
                      </button>
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
                    <div className="absolute translate-x-16 bg-[#0d1015df] rounded-lg py-3 px-3 w-[100px] sm:w-[150px] group-hover:block hidden z-[1]">
                    <a href="https://whitepaper.devomon.io/">
                        <p className="text-base text-white mb-0 hover:text-[#2253F5] transition-all duration-200 font-normal font-poppins">
                        Whitepaper
                        </p>
                      </a>
                      <a href="https://drive.google.com/file/d/160mfNzpK0Uu0JdtmfzKSJOr6xjlhUtgp/view">
                      <p className="text-base text-white mb-0 mt-3 hover:text-[#2253F5] transition-all duration-200 font-normal font-poppins">
                      Pitchdeck
                      </p>
                      </a>
                      <a href="/faqs">
                      <p className="text-base text-white my-3 hover:text-[#2253F5] transition-all duration-200 font-normal font-poppins">
                      FAQ
                      </p>
                      </a>
                      <a href='#contact'
                           className="text-base text-white hover:text-[#2253F5] font-normal font-poppins">
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
                    <button onClick={() => setHide(!hide)} className="  text-xs xl:text-sm text-[#B8BDCA] mb-0 me-2  group-hover:text-white duration-200">
                      News
                    </button>
                  </div>
                </div>
                <div className="xl:w-1/4 w-1/4 sm:w-1/6 md:w-1/4 lg:w-1/5 flex flex-col gap-3">
                  <div className="flex cursor-pointer items-center - group">
                    <p className="  text-xs xl:text-sm text-[#B8BDCA] mb-0 me-2  group-hover:text-white duration-200">
                      Governance
                    </p>
                  </div>
                  <div className="flex cursor-pointer items-center - group">
                    <a href="/faqs" className="  text-xs xl:text-sm text-[#B8BDCA] mb-0 me-2  group-hover:text-white duration-200">
                      Faq
                    </a>
                  </div>
                  <div className="flex cursor-pointer items-center - group">
                    <button onClick={() => setHide(!hide)} className=" text-xs xl:text-sm text-[#B8BDCA] mb-0 me-2  group-hover:text-white duration-200">
                      Contributors
                    </button>
                  </div>
                  <div className="flex cursor-pointer items-center - group">
                    <button onClick={() => setHide(!hide)} className=" text-xs xl:text-sm text-[#B8BDCA] mb-0 me-2  group-hover:text-white duration-200">
                      Jobs
                    </button>
                  </div>
                </div>
                <div className=" xl:w-5/12 max-[475px]:w-2/5 min-[475px]:w-1/3 md:w-2/5 lg:w-1/2 flex flex-col gap-2">
                  <img className="max-w-[96px]" src={saguniLogo} alt="saguniLogo img" />
                  <div className="flex items-center - group">
                    <p className="text-xs xl:text-sm text-[#B8BDCA] mb-0 sm:me-2 font-poppins font-bold">
                      Saguni Tech LLC
                    </p>
                  </div>
                  <div className="flex items-center - group">
                    <p className="text-xs xl:text-sm text-[#B8BDCA] mb-0 sm:me-2 font-poppins ">
                      2203520
                    </p>
                  </div>
                  <div className="flex items-center - group">
                    <p className="text-xs xl:text-sm text-[#B8BDCA] mb-0 sm:me-2 font-poppins ">
                      Business Center 1, M Floor, The Meydan Hotel, Nad AI
                      Sheba, Dubai, U.A.E
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#2253F5] py-3 text-sm opacity-70 relative z-10">
          <div className="container flex flex-col sm:flex-row justify-between">
            <p className="text-center sm:text-start opacity-70 text-white">
              All rights reserved
            </p>
            <div className="flex justify-between  gap-5 mt-2 md:mr-11 text-white">
              <Link
                className="text-sm opacity-70 transition-all hover:opacity-100 duration-200"
                to="/cookie-policy"
              >
                Cookie Policy
              </Link>
              <Link
                className="text-sm opacity-70 transition-all hover:opacity-100 duration-200"
                to="/terms-and-conditions"
              >
                Terms and Conditions
              </Link>
              <Link
                className="text-sm opacity-70 transition-all hover:opacity-100 duration-200"
                to="/privacy-policy"
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