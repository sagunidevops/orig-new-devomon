/* eslint-disable react/prop-types */
import { useEffect } from "react";
import imdb_icon from "../../assets/images/svg/imdb_icon.svg";
import { LinkedIcon } from "./Icons";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const TeamCard = ({ obj, index }) => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let teamZoom = gsap.timeline({
      scrollTrigger: {
        trigger: ".team_zoom",
        start: "top 70%",
        end: "bottom top",
        immediateRender: false,
      },
    });
    teamZoom.fromTo(
      ".team_zoom",
      {
        scale: 0,
        autoAlpha: 0,
      },
      {
        scale: 1,
        autoAlpha: 1,
        ease: "back(1)",
        duration: 1,
      }
    );
  }, []);
  return (
    <>
      <div className="pt-16 mb-7 sm:mb-[70px] team_zoom w-[30%]">
        <div
          className={`relative px-3 pb-4 max-w-[275px]  hover:scale-105  duration-300 ease-in-out transition-all `}>
          <div className={` -mt-12 sm:-mt-16  `}>
            <img
              className="max-w-[117px] img_shadow"
              src={obj.img}
              alt="team"
            />
          </div>
          <div className={` ${obj.className} flex items-center  gap-3 pt-7 `}>
            <a
              href={obj.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedinAndIMD"
              aria-describedby="LinkedinAndIMD"
              className={`hover:scale-105  duration-300 ease-in-out transition-all ${obj.class}`}
              >
              {" "}
              {index === 2 ? (
                <img className="max-w-[30px]" src={imdb_icon} alt="imdb" />
              ) : (
                <LinkedIcon />
              )}
            </a>
            <div>
              <h2 className="text-[#23CAFF] font-raleway font-bold text-xs sm:text-sm md:text-base">
                {obj.name}
              </h2>
              <p className=" text-xs  font-raleway font-medium  sm:text-sm  opacity-70 text-[#2253F5]">
                {obj.title}
              </p>
            </div>
          </div>

          <div
            className={` text-xs opacity-70 text-white font-normal font-poppins sm:text-sm mt-2 md:mt-4`}>
            <p>{obj.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
