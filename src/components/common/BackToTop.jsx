import { useState, useEffect } from "react";
import { BackToTopIcon } from "./Icons";
export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [pageYOffset, setPageYOffset] = useState(0);
  // SCROLL TO TOP FUNCTION WHEN CLICK ON THIS PAGE SCROLL TOP
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  // TO FIND SCROLL Y POSITION
  useEffect(() => {
    window.addEventListener("scroll", function () {
      setPageYOffset(window.pageYOffset);
    });
  }, []);
  // THIS USEFFECT GIVE US POSITION OF SCROLL AT Y-AXIS IN EVERY PIXELS OF PAGE WHEN WE SCROLL AND
  // IF PAGE SCROLL VALUE GRATER THAN 300 THEN SHOW BACK TO TOP BUTTON
  useEffect(() => {
    if (pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [pageYOffset]);
  return (
    <>
      <div
        onClick={() => scrollToTop()}
        className={`${
          isVisible ? "opactiy-100 right-3" : "opacity-0 -right-12"
        } fixed sm:bottom-3 bottom-12 w-12 h-12 rounded-full flex justify-center items-center shadow-lg cursor-pointer z-[41] bg-[#FFA800] hover:opacity-90 hover:shadow-[#FFA800] transition-all duration-150 ease-linear`}
      >
        <BackToTopIcon />
      </div>
    </>
  );
}
