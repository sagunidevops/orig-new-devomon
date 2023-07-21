import  { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import footerLogo from "../../assets/images/svg/footer_logo.svg";
import priceLogo from "../../assets/images/svg/price_logo.svg";
import ComingSoonModal from "./ComingSoonModal";
import {
  footerIcons,
  footerLinksFirst,
  footerLinksSecond,
  footerLinksThird,
} from "./Helper";

// eslint-disable-next-line react/prop-types
const Footer = ({ contactToRef }) => {
  const history = useNavigate();
  const [isOpenComingSoonModal, setIsOpenComingSoonModal] = useState(false);

  const [hoverDropDown, setHoverDropDown] = useState(false);
  const [activeHoverDropDown, setActiveHoverDropDown] = useState();
  const hoverHandler = (item) => {
    setActiveHoverDropDown(item);
    setHoverDropDown(true);
  };
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <>
      <section className="bg-[#1E3EA81A] backdrop-blur text-white pt-12 relative overflow-x-hidden">
        {window.location.pathname === "/callisto" ? (
          ""
        ) : (
          <div className="bg-[#2253F5] w-[420px] h-[134px] blur-[150px] opacity-80 absolute z-[-1] top-[50%] left-[50%]"></div>
        )}
        <div className="container relative z-10">
          <span className="inline-block">
            {" "}
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
        <div className="container mx-auto justify-between flex gap-9 pb-5 mt-4 relative z-10">
          <div className="md:flex justify-between w-full lg:gap-12 xl:gap-20">
            <div className="flex justify-between lg:w-full">
              <div>
                <p className="font-normal text-[10px] lg:text-sm max-w-[300px] md:max-w-[150px] lg:max-w-[240px] opacity-70">
                  Enjoy the intriguing adventures and challenges, as well as the
                  possibility to acquire and develop strong NFT collections and
                  become a part of an intriguing and dynamic environment.
                </p>
                <p className="font-normal text-[10px] lg:text-sm max-w-[300px] md:max-w-[150px] lg:max-w-[240px] opacity-70">
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
              </div>
              <div>
                <div className="flex items-center gap-3 xl:gap-4 pl-6 h-auto">
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
                    <p className="text-[10px] sm:text-xs xl:text-base font-medium  opacity-70 ">
                      $EVO —-
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-6 md:mt-0 lg:w-full gap-5 lg:gap-0">
              <div>
                {footerLinksFirst &&
                  footerLinksFirst.map((obj, index) => {
                    return (
                      <div
                        onClick={() =>
                          `${
                            obj.link === "Staking" || obj.link === "News"
                              ? setIsOpenComingSoonModal(true)
                              : ""
                          }`
                        }
                        className="relative"
                        onMouseEnter={() => hoverHandler(index)}
                        // onMouseLeave={() => setHoverDropDown(false)}
                        key={index}
                      >
                        <div className=" mb-2">
                          <div
                            className={`whitespace-nowrap flex items-center  text-xs xl:text-sm opacity-70 transition-all hover:opacity-100 ${
                              obj.link === "Staking" || obj.link === "News"
                                ? " "
                                : ""
                            } cursor-pointer`}
                          >
                            {obj.link}
                            <span
                              className={`${
                                activeHoverDropDown === index && hoverDropDown
                                  ? "rotate-[270deg]"
                                  : ""
                              } inline-block ml-2 `}
                            >
                              {obj.icon}
                            </span>
                          </div>
                        </div>

                        {activeHoverDropDown === index && hoverDropDown ? (
                          <div
                            className={` ${
                              obj.link === "Staking" || obj.link === "News"
                                ? ""
                                : "footer_hover"
                            } z-[1] rounded-md absolute min-w-[150px] top-[-40px] left-[64px] max-h-[154px] overflow-y-auto p-3`}
                          >
                            {obj &&
                              obj.footer &&
                              obj.footer.map((item, i) => {
                                return (
                                  <div
                                    key={i}
                                    className={`${
                                      item.text === "Pitchdeck" ? "mt-2" : ""
                                    } relative`}
                                  >
                                    <div
                                      className={`${
                                        item.text === "Coming soon"
                                          ? " mt-[-12px] pointer-events-none"
                                          : "pt-2"
                                      }`}
                                    >
                                      {item.text === "Callisto" ||
                                      item.text === "Card Game" ||
                                      item.text === "Whitepaper" ||
                                      item.text === "NFTs" ||
                                      item.text === "Pitchdeck" ? (
                                        <>
                                          {" "}
                                          <a
                                            className={` ${
                                              item.text === "Dashboard" ||
                                              item.text === "Devoland" ||
                                              item.text === "Land" ||
                                              item.text === "Brand Shop" ||
                                              item.text === "Anime" ||
                                              item.text ===
                                                "Streaming Partners" ||
                                              item.text === "DevoDex"
                                                ? "cursor-text pointer-events-none "
                                                : "cursor-pointer text-white"
                                            }   text-base font-normal font-poppins `}
                                            href={`${
                                              item.text === "Callisto"
                                                ? "https://callisto.devomon.io/"
                                                : item.text === "Whitepaper"
                                                ? "https://whitepaper.devomon.io/"
                                                : item.text === "Card Game"
                                                ? "https://tcg.devomon.io/"
                                                : item.text === "Pitchdeck"
                                                ? "https://pitchdeck.devomon.io"
                                               
                                                : ""
                                            }`}
                                          >
                                            {item.text === "Callisto"
                                              ? "Callisto"
                                              : item.text === "Whitepaper"
                                              ? "Whitepaper"
                                              : item.text === "Card Game"
                                              ? "Card Game"
                                              : item.text === "NFTs"
                                              ? "NFTs"
                                              : "Pitchdeck"}
                                          </a>
                                        </>
                                      ) : item.text === "Dashboard" ||
                                        item.text === "Devoland" ||
                                        item.text === "Land" ||
                                        item.text === "Brand Shop" ||
                                        item.text === "Anime" ||
                                        item.text === "Streaming Partners" ||
                                        item.text === "DevoDex" ? (
                                        <p
                                          onClick={() =>
                                            setIsOpenComingSoonModal(true)
                                          }
                                          className="cursor-pointer text-white text-base font-normal font-poppins  justify-between items-center flex"
                                        >
                                          {item.text}
                                        </p>
                                      ) : (
                                        <>
                                          {" "}
                                          <Link
                                            to={item.path}
                                            onClick={() => {
                                              scrollToTop();
                                              `${
                                                item.text === "Gallery"
                                                  ? window.open(
                                                      "https://callisto.devomon.io/#gallery"
                                                    )
                                                  : item.text === "Contact"
                                                  // eslint-disable-next-line react/prop-types
                                                  ? contactToRef.current.scrollIntoView(
                                                      {
                                                        behavior: "smooth",
                                                      }
                                                    )
                                                  : ""
                                              }`;
                                            }}
                                          >
                                            <p className="cursor-pointer text-white text-base font-normal font-poppins">
                                              {item.text}
                                            </p>
                                          </Link>
                                        </>
                                      )}
                                    </div>
                                  </div>
                                );
                              })}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    );
                  })}
              </div>
              <div>
                {footerLinksSecond.map((object, index) => {
                  return (
                    <div className="mb-2" key={index}>
                      {object.link === "Jobs" ||
                      object.link === "Contributors" ? (
                        <>
                          <span
                            className="d-inline-block cursor-pointer text-xs xl:text-sm opacity-70 transition-all hover:opacity-100"
                            onClick={() => setIsOpenComingSoonModal(true)}
                          >
                            {object.link}
                          </span>{" "}
                        </>
                      ) : (
                        <>
                          <Link
                            className="text-xs xl:text-sm opacity-70 transition-all hover:opacity-100"
                            to={object.url}
                            key={index}
                            onClick={() =>
                              `${
                                object.link === "Contributors" ||
                                object.link === "Jobs"
                                  ? setIsOpenComingSoonModal(true)
                                  : ""
                              }`
                            }
                          >
                            {object.link}
                          </Link>{" "}
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
              <div>
                {footerLinksThird.map((object, index) => (
                  <span
                    className="text-xs xl:text-sm opacity-70 mb-2 block transition-all  max-w-[170px] lg:max-w-[234px]"
                    key={index}
                  >
                    {object.link}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#2253F5] py-3 text-sm opacity-70 relative z-10">
          <div className="container flex flex-col sm:flex-row justify-between">
            <p className="text-center sm:text-start opacity-70">
              All rights reserved
            </p>
            <div className="flex justify-between  gap-5 mt-2 md:mr-11">
              <Link
                className="text-sm opacity-70 transition-all hover:opacity-100"
                to="/cookie-policy"
              >
                Cookie Policy
              </Link>
              <Link
                className="text-sm opacity-70 transition-all hover:opacity-100"
                to="/terms-and-conditions"
              >
                Terms and Conditions
              </Link>
              <Link
                className="text-sm opacity-70 transition-all hover:opacity-100"
                to="/privacy-policy"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ComingSoonModal
        isOpenComingSoonModal={isOpenComingSoonModal}
        setIsOpenComingSoonModal={setIsOpenComingSoonModal}
      />
    </>
  );
};
export default Footer;