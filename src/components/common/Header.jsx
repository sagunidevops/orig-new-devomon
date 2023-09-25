/* eslint-disable no-unused-vars */
import nav_logo from "../../assets/images/webp/header-logo.webp";
import Callisto_logo from "../../assets/images/png/Devomon_Callisto_logo.png";
import { Disclosure } from "@headlessui/react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { VscChromeClose } from "react-icons/vsc";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
  const history = useNavigate();
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const [Nav, setNav] = useState(1);
  if (Nav) {
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
  }

  // POPUP JS
  const [hide, setHide] = useState();
  if (hide) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  const location = useLocation();

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
    <>
      <nav className="relative z-50">
        <div className="bg-[#1E3EA81A] relative overflow-x-hidden">
          <div className={hide ? "" : "hidden"}>
            <div
              className="text-white whitespace-nowrap bg-black py-12 px-16 rounded-xl 
             -translate-x-1/2 -translate-y-1/2 fixed top-1/2 start-1/2 z-[100] text-center text-xl font-bold popup_shadow"
            >
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
        </div>
        <div className="px-4 md:py-0 lg:py-0 xl:py-[0.7px] sm:px-6 xl:px-14 bg-[#000000f8] fixed top-0 w-full">
          <div className="flex justify-between items-center relative">
            <ul>
              <li className="cursor-pointer flex items-center">
                <Link to={"/"} onClick={() => {
                      history("/");
                      scrollToTop();
                    }}>
                  <img
                    className=" sm:w-[70px] xl:w-20 w-11 h-11 sm:h-[70px] xl:h-20"
                    src={nav_logo}
                    alt="nav_logo"
                  />
                </Link>
              </li>
            </ul>
            <ul className="xl:gap-[11px] gap-0 items-center hidden lg:flex">
              <li className=" flex items-center cursor-pointer hover:bg-[#ffffff] hover:bg-opacity-10 group h-[95px] xl:px-4 px-2 -skew-x-12 duration-200 relative">
                <div className="absolute top-[95px] start-3 skew-x-12 bg-[#0d1015df] rounded-lg py-4 px-4 w-[200px] flex-col group-hover:block hidden z-10">
                  <div className="flex flex-col">
                    <a href="https://new-callisto.web.app/" target="_blank"rel="noopener noreferrer" >
                      <p className=" font-poppins text-xs xl:text-base text-white mb-2 hover:text-[#2253F5] transition-all duration-200">
                        GameFi
                      </p>
                    </a>
                    <a href="https://evozone-web.web.app/">
                      <p className=" font-poppins text-xs xl:text-base text-white hover:text-[#2253F5] mt-2 transition-all duration-200 mb-4">
                        Evozone
                      </p>
                    </a>
                    <Link to={"https://new-callisto.web.app/#evomons"} target="_blank" onClick={() => setNav(!Nav)}>
                      <p className=" font-poppins text-xs xl:text-base text-white mb-4 hover:text-[#2253F5] transition-all duration-200">
                        NFTs
                      </p>
                    </Link>
                    <a
                      href="https://new-callisto.web.app/alpha "
                      target="_blank" //" target="_blank" rel="noopener noreferrer""
                      rel="noopener noreferrer"
                      className=" font-poppins text-xs xl:text-base text-white hover:text-[#2253F5] transition-all duration-200"
                    >
                      Dashboard{" "}
                    </a>
                    <a href="#" onClick={() => setHide(!hide)}>
                      <p className=" font-poppins text-xs xl:text-base text-white mb-0 hover:text-[#2253F5] mt-4 transition-all duration-200">
                        EvoVerse
                      </p>
                    </a>
                    <a href="#" onClick={() => setHide(!hide)}>
                      <p className=" font-poppins text-xs xl:text-base text-white mb-0 hover:text-[#2253F5] mt-4 transition-all duration-200">
                        Manga
                      </p>
                    </a>
                    <p
                      onClick={() => setHide(!hide)}
                      className=" font-poppins text-xs xl:text-base text-white mb-0 hover:text-[#2253F5] mt-4"
                    >
                      Anime{" "}
                    </p>
                    <a href="#" onClick={() => setHide(!hide)}>
                      <p className=" font-poppins text-xs xl:text-base text-white mb-0 hover:text-[#2253F5] mt-4 transition-all duration-200">
                      Merchandise
                      </p>
                    </a>
                    {/* <Link to={"/coming-soon"}>
                      <p className=" font-poppins text-xs xl:text-base text-white mb-0 hover:text-[#2253F5] mt-4 transition-all duration-200">
                        coming soon
                      </p>
                    </Link> */}
                  </div>
                </div>
                <a
                  className="skew-x-12 font-normal duration-200 group-hover:text-[#2253F5] text-white me-2 whitespace-nowrap font-poppins"
                  href="#news"
                >
                  D-World
                </a>
                <svg
                  className="skew-x-12 group-hover:-rotate-180 duration-200"
                  width="13"
                  height="10"
                  viewBox="0 0 13 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5004 0.901438C11.9679 1.35427 9.66923 3.37942 7.94196 4.88886L6.68222 5.99578L5.33157 4.82597C4.59131 4.18446 3.17573 2.95175 2.18871 2.08383C1.2017 1.22848 0.474428 0.649865 0.55235 0.813387C0.643259 0.964331 1.89001 2.83854 3.34456 4.95175C4.78612 7.07754 6.09781 9.02722 6.26664 9.29137C6.42248 9.54295 6.6043 9.75678 6.65625 9.75678C6.76014 9.75678 12.7861 0.939173 12.89 0.649865C12.916 0.574394 12.7342 0.687601 12.5004 0.901438Z"
                    fill="white"
                    className="group-hover:fill-[#2253F5]"
                  />
                </svg>
              </li>
              <li className=" flex items-center cursor-pointer hover:bg-[#ffffff] hover:bg-opacity-10 group h-[95px] xl:px-4 px-2 -skew-x-12 duration-200">
                <a
                  onClick={() => setHide(!hide)}
                  className="skew-x-12 font-normal duration-200 group-hover:text-[#2253F5] text-white me-2 whitespace-nowrap font-poppins"
                  href="#"
                >
                  Staking
                </a>
              </li>
              <li className=" flex items-center cursor-pointer hover:bg-[#ffffff] hover:bg-opacity-10 group h-[95px] xl:px-4 px-2 -skew-x-12 duration-200 relative">
                <div className="absolute top-[95px] start-2 skew-x-12 bg-[#0d1015df] rounded-lg py-4 px-4 w-[200px] flex-col group-hover:block hidden z-10">
                  <div className="flex flex-col">
                    <span>
                      <Link to={"/team"}>
                        <p className="font-normal text-base text-white hover:text-[#2253F5] transition-all duration-200 cursor-pointer font-poppins mb-2 xl:mb-4">
                          Core Team
                        </p>
                      </Link>
                    </span>
                    {/* <span>
                      <Link onClick={() => setHide(!hide)}>
                        <p className="font-normal text-base text-white hover:text-[#2253F5] transition-all duration-200 cursor-pointer font-poppins mb-2 xl:mb-4">
                          Advisors
                        </p>
                      </Link>
                    </span> */}
                    <span>
                      <Link to={"/stream-partner"}>
                        <p className="font-normal text-base text-white hover:text-[#2253F5] transition-all duration-200 cursor-pointer font-poppins">
                          Streaming Partners
                        </p>
                      </Link>
                    </span>
                  </div>
                </div>
                <a
                  className="skew-x-12 font-normal duration-200 group-hover:text-[#2253F5] text-white me-2 whitespace-nowrap font-poppins"
                  href="#"
                >
                  Team
                </a>
                <svg
                  className="skew-x-12 group-hover:-rotate-180 duration-200"
                  width="13"
                  height="10"
                  viewBox="0 0 13 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5004 0.901438C11.9679 1.35427 9.66923 3.37942 7.94196 4.88886L6.68222 5.99578L5.33157 4.82597C4.59131 4.18446 3.17573 2.95175 2.18871 2.08383C1.2017 1.22848 0.474428 0.649865 0.55235 0.813387C0.643259 0.964331 1.89001 2.83854 3.34456 4.95175C4.78612 7.07754 6.09781 9.02722 6.26664 9.29137C6.42248 9.54295 6.6043 9.75678 6.65625 9.75678C6.76014 9.75678 12.7861 0.939173 12.89 0.649865C12.916 0.574394 12.7342 0.687601 12.5004 0.901438Z"
                    fill="white"
                    className="group-hover:fill-[#2253F5]"
                  />
                </svg>
              </li>
              <li className=" flex items-center cursor-pointer hover:bg-[#ffffff] hover:bg-opacity-10 group h-[95px] xl:px-4 px-2 -skew-x-12 duration-200 relative">
                <div className="absolute top-[95px] start-3 skew-x-12 bg-[#0d1015df] rounded-lg py-4 px-4 w-[200px] flex-col group-hover:block hidden z-10">
                  <div className="flex flex-col">
                    {" "}
                    <span>
                      <a
                        target="_blank"
                        href="https://whitepaper.devomon.io/"
                        className="font-normal text-base text-white mb-0 hover:text-[#2253F5] transition-all inline-block duration-200 cursor-pointer font-poppins"
                        rel="noopener noreferrer"
                      >
                        Whitepaper
                      </a>
                    </span>
                    {/* <span className="mt-2 xl:mt-3">
                      {" "}
                      <a
                        target="_blank"
                        href="https://pitchdeck.devomon.io"
                        className="font-normal text-base text-white hover:text-[#2253F5] transition-all duration-200 cursor-pointer font-poppins"
                        rel="noopener noreferrer"
                      >
                        Pitchdeck
                      </a>
                    </span> */}
                    {/* <span className="mt-2 xl:mt-3">
                      <a
                        onClick={() => setHide(!hide)}
                        href="#"
                        className="font-normal text-base text-white hover:text-[#2253F5] transition-all duration-200 cursor-pointer font-poppins"
                        rel="noopener noreferrer"
                      >
                        FAQ
                      </a>
                    </span> */}
                    <span className="mt-2 xl:mt-3">
                      {" "}
                      <a
                        href="/#contact"
                        className="font-medium text-base text-white hover:text-[#2253F5] transition-all duration-200 cursor-pointer font-poppins"
                      >
                        Contact
                      </a>
                    </span>
                  </div>
                </div>
                <a
                  className="skew-x-12 font-normal duration-200 group-hover:text-[#2253F5] text-white me-2 whitespace-nowrap font-poppins"
                  href="#"
                >
                  Help
                </a>
                <svg
                  className="skew-x-12 group-hover:-rotate-180 duration-200"
                  width="13"
                  height="10"
                  viewBox="0 0 13 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5004 0.901438C11.9679 1.35427 9.66923 3.37942 7.94196 4.88886L6.68222 5.99578L5.33157 4.82597C4.59131 4.18446 3.17573 2.95175 2.18871 2.08383C1.2017 1.22848 0.474428 0.649865 0.55235 0.813387C0.643259 0.964331 1.89001 2.83854 3.34456 4.95175C4.78612 7.07754 6.09781 9.02722 6.26664 9.29137C6.42248 9.54295 6.6043 9.75678 6.65625 9.75678C6.76014 9.75678 12.7861 0.939173 12.89 0.649865C12.916 0.574394 12.7342 0.687601 12.5004 0.901438Z"
                    fill="white"
                    className="group-hover:fill-[#2253F5]"
                  />
                </svg>
              </li>
              <li className=" flex items-center cursor-pointer hover:bg-[#ffffff] hover:bg-opacity-10 group h-[95px] xl:px-4 px-2 -skew-x-12 duration-200">
                <Link target="_blank" to={"https://medium.com/@DevomonOfficial"}
                  className="skew-x-12 font-normal duration-200 group-hover:text-[#2253F5] text-white me-2 whitespace-nowrap font-poppins"
                >
                  News
                </Link>
              </li>
            </ul>
            <ul className="gap-2 items-center flex">
              <li className="group">
                <a
                  href="https://callisto.devomon.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#3d79c7] flex items-center rounded-lg"
                >
                  <span className="font-poppins font-medium lg:text-[20px] sm:text-[16px] text-[14px] text-white sm:px-3 px-1">
                    PLAY
                  </span>
                  <img
                    className="cursor-pointer lg:w-[46px] w-[36px] lg:h-[46px] h-[36px] hover:scale-[1.05] duration-300 p-[3px]"
                    src={Callisto_logo}
                    alt="Callisto_logo"
                  />
                </a>
              </li>
            </ul>
            <div
              className="lg:hidden cursor-pointer text-[35px] text-white"
              onClick={() => setNav(!Nav)}
            >
              <HiMenuAlt3 />
            </div>
            <ul
              className={
                Nav
                  ? "flex fixed flex-col justify-center min-w-full min-h-screen bottom-0 left-[-100%] items-center lg:hidden transition-all duration-500 ease-in-out gap-7"
                  : "left-0 flex fixed flex-col justify-center min-w-full min-h-screen bottom-0 items-center lg:hidden transition-all duration-500 ease-in-out bg-[#000000] gap-7"
              }
            >
              <span
                onClick={() => setNav(!Nav)}
                className="absolute end-4 z-50 top-[20px] cursor-pointer text-[34px] text-white"
              >
                <VscChromeClose />
              </span>
              <div className=" w-[210px] mx-auto pt-16">
                <div className="mx-auto w-[210px] max-w-md bg-transparent p-2 overflow-y-auto scroll_hidden max-h-[500px]">
                  <Disclosure className="transition_300">
                    {({ open }) => (
                      <>
                        <Disclosure.Panel className="px-4 py-2 text-gray-500 bg-black transition_300 flex flex-col">
                          <a
                            target="_blank"
                            href="https://callisto.devomon.io/"
                            className="font-normal font-poppins text-base text-white mb-0 hover:text-[#2253F5]   transition-all inline-block duration-200 cursor-pointer"
                            rel="noopener noreferrer"
                          >
                            Callisto
                          </a>
                          <a
                            target="_blank"
                            href="https://tcg.devomon.io/"
                            className="font-normal font-poppins text-base text-white mb-0 mt-1 hover:text-[#2253F5] transition-all duration-200 cursor-pointer"
                            rel="noopener noreferrer"
                          >
                            Card Game
                          </a>
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
                          <span className=" mb-0 font-poppins">D-World</span>
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
                            <a href="https://new-callisto.web.app/" target="_blank" rel="noopener noreferrer">
                              <p className="font-poppins text-xs xl:text-base text-white mb-0 hover:text-[#2253F5] mt-2 transition-all duration-200">
                                GameFi
                              </p>
                            </a>
                            <a href="https://evozone-web.web.app/">
                              <p className="font-poppins text-xs xl:text-base text-white hover:text-[#2253F5] mt-2 transition-all duration-200 mb-2">
                                Evozone
                              </p>
                            </a>
                            <Link to={"https://new-callisto.web.app/#evomons"} target="_blank" onClick={() => setNav(!Nav)}>
                              <p className="font-poppins text-xs xl:text-base text-white mb-2 hover:text-[#2253F5] transition-all duration-200">
                                NFTs
                              </p>
                            </Link>
                            <a
                              onClick={() => setNav(!Nav)}
                              href="https://new-callisto.web.app/alpha "
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-poppins text-xs xl:text-base text-white mb-0 hover:text-[#2253F5] transition-all duration-200"
                            >
                              Dashboard{" "}
                            </a>
                            <a href="#" onClick={() => setHide(!hide)}>
                              <p className="font-poppins text-xs xl:text-base text-white mb-0 hover:text-[#2253F5] mt-2 transition-all duration-200">
                                EvoVerse
                              </p>
                            </a>
                            <a href="#" onClick={() => setHide(!hide)}>
                              <p className="font-poppins text-xs xl:text-base text-white mb-0 hover:text-[#2253F5] mt-2 transition-all duration-200">
                                Manga
                              </p>
                            </a>
                            <p
                              onClick={() => setHide(!hide)}
                              className="font-poppins text-xs xl:text-base text-white mb-0 hover:text-[#2253F5] mt-2"
                            >
                              Anime{" "}
                            </p>
                            <a href="#" onClick={() => setHide(!hide)}>
                              <p className="font-poppins text-xs xl:text-base text-white mb-0 hover:text-[#2253F5] mt-2 transition-all duration-200">
                              Merchandise
                              </p>
                            </a>
                            {/* <Link
                              to={"/coming-soon"}
                              onClick={() => setNav(!Nav)}
                              className=" font-poppins text-xs xl:text-base text-white mb-0 hover:text-[#2253F5] mt-2 transition-all duration-200"
                            >
                              coming soon
                            </Link> */}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure className="transition_300 mt-4">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex items-center w-full justify-between bg-transparent px-4 text-left font-medium text-white focus:outline-[0px] focus-visible:ring-opacity-75 transition_300 mt-6">
                          <a
                            onClick={() => setNav(!Nav)}
                            className="font-normal duration-200 group-hover:text-[#2253F5] text-white me-2 whitespace-nowrap font-poppins"
                            href="#"
                          >
                            Staking
                          </a>
                        </Disclosure.Button>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure className="transition_300 mt-4">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex items-center w-full justify-between bg-transparent px-4 text-left font-medium text-white focus:outline-[0px] focus-visible:ring-opacity-75 transition_300 mt-6">
                          <span className=" mb-0 font-poppins">Team</span>
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
                          <span>
                            <Link to={"/team"} onClick={() => setNav(!Nav)}>
                              <p className="font-normal text-[12px] text-white mb-0 mt-3 hover:text-[#2253F5] transition-all duration-200 cursor-pointer font-poppins">
                                Core Team
                              </p>
                            </Link>
                          </span>
                          {/* <span>
                            <Link
                              onClick={() => {
                                setHide(!hide);
                                setNav(!Nav);
                              }}
                            >
                              <p className="font-normal text-[12px] text-white mb-0 mt-3 hover:text-[#2253F5] transition-all duration-200 cursor-pointer font-poppins">
                                Advisors
                              </p>
                            </Link>
                          </span> */}
                          <span>
                            <Link
                              to={"/stream-partner"}
                              onClick={() => setNav(!Nav)}
                            >
                              <p className="font-normal text-[12px] text-white mb-0 mt-3 hover:text-[#2253F5] transition-all duration-200 cursor-pointer font-poppins">
                                Streaming Partners
                              </p>
                            </Link>
                          </span>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure className="transition_300 mt-4">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex items-center w-full justify-between bg-transparent px-4 text-left font-medium text-white focus:outline-[0px] focus-visible:ring-opacity-75 transition_300 mt-6">
                          <span className=" mb-0 font-poppins">Help</span>
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
                          <span>
                            <a
                              target="_blank"
                              href="https://whitepaper.devomon.io/"
                              className="font-normal text-[12px] text-white mb-0 hover:text-[#2253F5] transition-all inline-block duration-200 cursor-pointer font-poppins"
                              rel="noopener noreferrer"
                            >
                              Whitepaper
                            </a>
                          </span>
                          {/* <span className="mt-4">
                            {" "}
                            <a
                              target="_blank"
                              href="https://pitchdeck.devomon.io"
                              className="font-normal text-[12px] text-white hover:text-[#2253F5] transition-all duration-200 cursor-pointer font-poppins"
                              rel="noopener noreferrer"
                            >
                              Pitchdeck
                            </a>
                          </span> */}
                          {/* <span className="mt-4">
                            <a
                              onClick={() => {
                                setHide(!hide);
                                setNav(!Nav);
                              }}
                              href="#"
                              className="font-normal text-[12px] text-white hover:text-[#2253F5] transition-all duration-200 cursor-pointer font-poppins"
                              rel="noopener noreferrer"
                            >
                              FAQ
                            </a>
                          </span> */}
                          <span className="mt-4">
                            {" "}
                            <a
                              onClick={() => setNav(!Nav)}
                              href="#contact"
                              className="font-medium text-[12px] text-white mb-0 hover:text-[#2253F5] transition-all duration-200 cursor-pointer font-poppins"
                            >
                              Contact
                            </a>
                          </span>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure className="transition_300 mt-4">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex items-center w-full justify-between bg-transparent px-4 text-left font-medium text-white focus:outline-[0px] focus-visible:ring-opacity-75 transition_300 mt-6">
                          <Link target="_blank" to={"https://medium.com/@DevomonOfficial"}
                          onClick={() => {
                            setNav(!Nav);
                          }}
                            className=" mb-0 font-poppins"
                          >
                            News
                          </Link>
                        </Disclosure.Button>
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
