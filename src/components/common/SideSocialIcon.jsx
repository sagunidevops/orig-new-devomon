import { useState } from "react";
import { SideSocialIconData } from "./Helper";
import { Social_arrow } from "./Icons";

const SideSocialIcon = () => {
  const [open, setclose] = useState(true);
  return (
    <>
      <div className={
            open
              ? "translate-x-full duration-300 fixed right-0 top-1/2 z-20" 
              : "duration-300 fixed right-0 top-1/2 z-20"
          }>
        <div>
          <div
            className="bg-black absolute -left-[30px] top-0 w-[30px] h-[52px] cursor-pointer flex items-center justify-center rounded-[5px]"
            onClick={() => setclose(!open)}
          >
            <span className={open ? "rotate-180" : ""}>
              <Social_arrow />
            </span>
          </div>
          <div className="bg-white py-6 pl-6 pr-9 z-50 relative">
            {SideSocialIconData.map((obj, i) => {
              return (
                <a
                  href={obj.href}
                  key={i}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center scale_social_icon ${obj.className}`}
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
