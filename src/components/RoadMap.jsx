import React from "react";
import roadmap from "../assets/images/homepageImages/png/roadmap.jpg";
const RoadMap = () => {
  return (
    <>
      <div className="relative lg:mt-[100px] sm:mt-[65px] mt-[55px]">
        <img src={roadmap} alt="roadmap" className="w-full min-h-[260px]" />
      </div>
    </>
  );
};

export default RoadMap;
