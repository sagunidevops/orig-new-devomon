import { Link } from "react-router-dom";
import { AboutCardData } from "../common/Helper";
import { useState } from "react";

const AboutCard = () => {
    // Pop-up state and functions
  const [hide, setHide] = useState(false);

  const openPopup = () => {
    setHide(true);
    document.body.style.overflow = "hidden"; // Disable scrolling when the pop-up is open
  };

  const closePopup = () => {
    setHide(false);
    document.body.style.overflow = "auto"; // Enable scrolling when the pop-up is closed
  };

  return (
    <>
      <div className=" -mt-[23%] xs:-mt-[18%] sm:-mt-[24%] md:-mt-[19%] lg:-mt-[14%] xl:-mt-[11%] 2xl:-mt-[14%] relative z-[11]">
    
        {AboutCardData.map((value, index) => {
          return (
            <Link
              to={value.linkValue}
              key={index}
              onClick={value.linkValue ? null : openPopup}
              // target={`${value.title === "News" ? "_blank" : ""}`}
              target={value.linkValue ? "_blank" : ""}
            >
              <div className="relative overflow-hidden duration-500 about_card_outline">
                <div className="about_card_bg h-[180px] sm:h-[200px] lg:h-[220px] 2xl:h-[300px]">
                  <img
                    className="w-full about_card_img duration-500 h-full object-cover"
                    src={value.card_bg}
                    alt="GameFi"
                  />
                  <p className="text-white absolute top-1/2 left-1/2 font-bold uppercase md:text-4xl sm:text-3xl -translate-x-1/2 -translate-y-1/2">
                    {value.title}
                  </p>
                  <span className="about_card_underline w-[90px] sm:w-[180px] lg:w-[278px] h-[2px] sm:h-[3px] absolute top-[70%] sm:top-[65%] lg:top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 duration-500"></span>
                  <img
                    className={`absolute bottom-0 gamefi_character translate-y-full duration-500 ${value.className}`}
                    src={value.character_img}
                    alt="gamefi"
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
       {/* Pop-up */}
       <div className={`bg-[#1E3EA81A] relative overflow-x-hidden ${hide ? "" : "hidden"}`}>
        <div className="text-white whitespace-nowrap bg-black py-12 px-16 rounded-xl -translate-x-1/2 -translate-y-1/2 fixed top-1/2 start-1/2 z-[100] text-center text-xl font-bold popup_shadow">
          <svg
            onClick={closePopup}
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
          onClick={closePopup}
          className="w-full h-screen flex justify-center items-center fixed top-0 start-0 bg-[#00000080] z-[51]"
        ></div>
      </div>
    </>
  );
};

export default AboutCard;
