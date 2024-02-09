import React, { useEffect, useState } from "react";
import roadmap from "../../assets/images/homepageImages/png/roadmap.jpg";
const RoadMap = () => {
  return (
    <>
      <div className="relative">
        <span
          id="roadmap"
          className="absolute w-0 h-0 -top-[50px] sm:-top-[70px] lg:-top-[95px]"
        ></span>
        <img src={roadmap} alt="roadmap" className="w-full min-h-[260px]" />
      </div>
    </>
  );
};

export default RoadMap;
