/* eslint-disable react/prop-types */
import { useEffect } from "react";
import TeamCard from "../common/TeamCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { TeamData } from "../common/Helper";

// eslint-disable-next-line no-unused-vars
const CoreTeam = ({ teamToRef2 }) => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let teamLeft = gsap.timeline({
      scrollTrigger: {
        trigger: ".team_left",
        start: "top 70%",
        end: "bottom top",
        immediateRender: false,
      },
    });
    teamLeft.fromTo(
      ".team_left",
      {
        xPercent: -100,
        autoAlpha: 0,
      },
      {
        xPercent: 0,
        autoAlpha: 1,
        ease: "back(1)",
        duration: 1,
      }
    );

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
    <section className="relative pt-20 sm:pt-28 md:pt-36 pb-[35px] sm:pb-[42px] md:pb-16">
      <div className="team-layer w-[269px] h-[257px] absolute right-0 top-0"></div>
      <div className="team-layer w-[269px] h-[257px] absolute left-0 bottom-1/4"></div>
      <div className="container">
        <div className="pb-10 md:pb-16">
          <h3 className="font-raleway  team_left uppercase  font-bold text-center text-3xl sm:text-4xl md:text-[40px] lg:text-[44px] xl:text-5xl text-white">
            the devomon Team
          </h3>
          <div className="text-center">
            <span className="contact_border md:w-[471px] w-full inline-block"></span>
          </div>
        </div>
        {/* TEAM CARD START */}
        <div className="flex flex-wrap justify-center space-x-1">
          {TeamData &&
            TeamData.map((obj, index) => (
              <TeamCard obj={obj} key={index} index={index} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default CoreTeam;
