import { useEffect } from "react";
import imdb from "../../assets/images/webp/imdb.webp";
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
      <div className="pt-16 mb-7 sm:mb-[70px] team_zoom">
        <div
          className={` team_bg  border border-1 border-[#3B3B3B] rounded-3xl   relative   px-3 pb-4 max-w-[275px]  hover:scale-105  duration-300 ease-in-out transition-all `}>
          <div className={` -mt-12 sm:-mt-16 flex justify-center `}>
            <img
              className="max-w-[120px] sm:max-w-[152px] mx-auto rounded-full"
              src={obj.img}
              alt="team"
            />
          </div>
          <h2 className="text-white text-center font-raleway font-bold text-xs sm:text-sm md:text-base pt-4 uppercase">
            {obj.name}
          </h2>
          <p className="text-center text-xs font-raleway sm:text-sm md:text-base opacity-70 text-white uppercase">
            {obj.title}
          </p>
          <div
            className={` h-[119px] px-1 overflow-auto team-scrollbar text-xs opacity-70 text-white font-poppins sm:text-sm md:text-base mt-5`}>
            <p className="text-center">{obj.desc}</p>
          </div>

          <a
            href={obj.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedinAndIMD"
            aria-describedby="LinkedinAndIMD"
            className="flex justify-center py-4 hover:scale-105  duration-300 ease-in-out transition-all">
            {" "}
            {index === 2 ? (
              <img className="max-w-[30px]" src={imdb} alt="imdb" />
            ) : (
              <LinkedIcon />
            )}
          </a>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
