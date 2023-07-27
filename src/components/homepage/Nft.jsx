/* eslint-disable react/prop-types */
import ScrollTrigger from "gsap/ScrollTrigger";
import Slider from "react-slick";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CallistoBattle } from "../common/Helper";
import right_arrow from "../../assets/images/png/right_arrow.png"
import left_arrow from "../../assets/images/png/left_arrow.png"

const Nft = ({ NftRef }) => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let ownershipLeft = gsap.timeline({
      scrollTrigger: {
        trigger: ".ownership_left",
        start: "top 70%",
        end: "bottom top",
        immediateRender: false,
      },
    });
    ownershipLeft.fromTo(
      ".ownership_left",
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

    let ownershipRight = gsap.timeline({
      scrollTrigger: {
        trigger: ".ownership_right",
        start: "top 50%",
        end: "bottom top",
        immediateRender: false,
      },
    });
    ownershipRight.fromTo(
      ".ownership_right",
      {
        xPercent: 100,
        autoAlpha: 0,
      },
      {
        xPercent: 0,
        autoAlpha: 1,
        ease: "back(1)",
        duration: 1,
      }
    );
    let ownershipZoom = gsap.timeline({
      scrollTrigger: {
        trigger: ".ownership_zoom",
        start: "top 90%",
        end: "bottom top",
        immediateRender: false,
      },
    });
    ownershipZoom.fromTo(
      ".ownership_zoom",
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

  const slider = useRef(null);
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <>
      <section
        ref={NftRef}
        className="h_lg_screen relative bg-devomonCallistoBattelBg bg-no-repeat bg-cover py-16 sm:py-20 md:py-[105px] lg:py-0 overflow-x-hidden flex justify-center items-center mt-[44px] sm:mt-[70px] lg:mt-[81px]"
        id="nft_collection">
        <div className="container relative z-20 py-5">
          <div className="onwership-slider ownership_zoom">
            <Slider ref={slider} {...settings}>
              {CallistoBattle &&
                CallistoBattle.length > 0 &&
                CallistoBattle.map((obj, index) => {
                  return (
                    <div className="px-3 sm:px-0 group" key={index}>
                      <div className="onwership-slider-bg">
                        <img
                          className="w-full rounded-[4.54545px]"
                          src={obj.img}
                          alt="ownership"
                        />
                      </div>
                    </div>
                  );
                })}
            </Slider>
            <div className=" px-0 justify-between translate_y xl:-translate-y-[608%] 2xl:-translate-y-[700%] gap-3 hidden  lg:flex">
              <button
                className=" -translate-x-[60%] lg:-translate-x-[100%]"
                onClick={() => slider.current.slickPrev()}>
              <img className="max-w-[35px]" src={left_arrow} alt="left_arrow" />
              </button>
              <button
                className=" translate-x-[60%] lg:translate-x-[100%]"
                onClick={() => slider.current.slickNext()}>
                <img className="max-w-[35px]" src={right_arrow} alt="right_arrow" />
              </button>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className=" blue-btn-shadow hover:scale-105 transition-all ease-in-out duration-300 py-[5px] px-[21px] bg-[#F8C112] border border-[4px] border-[#CEA20C] rounded-[39px] text-sm sm:text-base md:text-lg lg:text-xl text-white font-bold font-poppins">
              View all
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nft;
