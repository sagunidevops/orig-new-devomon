import React, { useState } from "react";
import { SideSocialIconData } from "./Helper";
import { Social_arrow } from "./Icons";

const SideSocialIcon = () => {
  const [open, setclose] = useState(false);
  return (
    <>
      <div className="fixed right-0 top-1/2 z-20">
        <div
          className={
            open
              ? "translate-x-full duration-300 relative"
              : "duration-300 relative"
          }
        >
          <div
            className="bg-black absolute -left-[30px] top-0 w-[30px] h-[52px] cursor-pointer flex items-center justify-center rounded-[5px]"
            onClick={() => setclose(!open)}
          >
            <Social_arrow />
          </div>
          <div className="bg-white py-6 pl-6 pr-9">
            {SideSocialIconData.map((obj, i) => {
              return (
                <a
                  href="#"
                  key={i}
                  className="flex items-center mb-4 inline-block scale_social_icon"
                >
                  <span className="social_icon duration-200">
                    <img className="w-[22px]" src={obj.img} alt="social-icon" />
                  </span>
                  <span className="pl-[9px] uppercase text-sm opacity-70 text-black font-raleway font-medium hover:text-[#2253F5] inline-block duration-200">
                    {obj.para}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideSocialIcon;
