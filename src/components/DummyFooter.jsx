import { useState } from "react";
import footer_logo from "../../src/assets/images/png/devomon-logo.png";
import saguni_logo from "../../src/assets/images/png/Saguni-Logo.png";
import emotiongaming from "../../src/assets/images/png/EMOTIONS_GAMING.png";
import { Link } from "react-router-dom";
import ComingSoonPopup from "./common/ComingSoonPopup";

const DummyFooter = () => {
    const [soonPopup, setSoonPopup] = useState(false);
    // setSoonPopup(soonPopup);
    // function scrollToTop() {
    //   window.scrollTo({
    //     top: 0,
    //     behavior: "smooth",
    //   });
    // }
  return (
    <>
     <div className="bg-black relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-[#2253F5] custom-sm:after:bottom-[54px] 2xl:after:bottom-[100px] after:bottom-[75px]  after:left-0 before:content-[''] overflow-hidden">
        <div className="container 2xl:container 2xl:max-w-none 2xl:px-36 xl:max-w-[1140px] mx-auto xl:px-0 px-3 relative z-[1]">
          <div className="flex custom-xsm:justify-between justify-center pt-[32px] pb-[29px] items-center w-full flex-wrap">
            <Link to={"/"} className="order-1 w-auto custom-xsm:mb-0 mb-5">
              {/* ========================= DEVOMON LOGO ========================== */}
              <img
                className="lg:max-w-[188px] 2xl:max-w-[288px] custom-xsm:max-w-[150px] max-w-[170px]"
                src={footer_logo}
                alt="Devomon"
              />
            </Link>
            <ul className="flex md:gap-[30px] gap-4 items-center sm:order-2 order-3 sm:pt-0 pt-5 mx-auto">
              <li>
              <Link target="_blank" to={"https://medium.com/@DevomonOfficial"} className="text-xs xl:text-sm text-[#B8BDCA] mb-0 me-2  group-hover:text-white duration-200">
                      News
                    </Link>
              </li>
              <li>
              <Link to={"/team"}>
                        <p className="text-xs xl:text-sm text-[#B8BDCA] mb-0 me-2  group-hover:text-white duration-200">
                        Core Team
                        </p>
                      </Link>
              </li>
              {/* <li>
                <button
                  onClick={() => {
                    setSoonPopup(true);
                    document.body.classList.add("overflow-hidden");
                  }}
                  className="text-white opacity-70 2xl:text-[24px] custom-3xl:text-[30px] text-[14px] ff_poppins font-normal leading-[150%] hover:opacity-100 transition-all duration-200"
                >
                  Jobs
                </button>
              </li> */}
            </ul>
            {/* ===================== COMPANY LOGOS ====================== */}
            <div className="flex md:gap-5 custom-sm:gap-3 gap-5 items-center custom-xsm:justify-end justify-center sm:order-3 order-2 sm:w-auto custom-xsm:w-1/2 w-full">
              <a target="_blank" rel="noopener noreferrer" href="https://sagunitech.com/">
                <img
                  className="lg:max-w-[120px] 2xl:max-w-[220px] w-full sm:max-w-[100px] max-w-[90px]"
                  src={saguni_logo}
                  alt="saguni"
                />
              </a>
              <a href="#">
                <img
                  className="lg:max-w-[94px] 2xl:max-w-[194px] w-full sm:max-w-[80px] max-w-[70px] max-h-[188px]"
                  src={emotiongaming}
                  alt="Emotion-gaming"
                />
              </a>
            </div>
          </div>
          <div className="flex justify-between items-center py-4 custom-sm:flex-row flex-col gap-2">
            <p className="text-[#B3B4B7] opacity-70 sm:text-[14px] text-[12px] ff_poppins font-normal  leading-[150%] custom:3xl:text-[26px]">
              Copyright © Devomon. All rights reserved
            </p>
            <p className="text-[#B3B4B7] opacity-70 sm:text-[14px] text-[12px] ff_poppins font-normal  leading-[150%] custom:3xl:text-[26px]">
              Presented by Saguni Tech
            </p>
          </div>
        </div>
        <div className="bg-[#2253F5] rounded-[420px] w-[420px] h-[179px] absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 blur-[200px] z-[0]"></div>
        {/* popup coming soon */}
        {soonPopup ? (
          <div className="fixed top-0 left-0 w-full min-h-screen z-[999]">
            <ComingSoonPopup setSoonPopup={setSoonPopup} />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  )
}

export default DummyFooter