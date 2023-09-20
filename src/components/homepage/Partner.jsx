import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ourPartner } from "../common/Helper";

const Partner = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let parnterLeft = gsap.timeline({
      scrollTrigger: {
        trigger: ".parnter_left",
        start: "top 70%",
        end: "bottom top",
        immediateRender: false,
      },
    });
    parnterLeft.fromTo(
      ".parnter_left",
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

    let parnterRight = gsap.timeline({
      scrollTrigger: {
        trigger: ".parnter_right",
        start: "top 70%",
        end: "bottom top",
        immediateRender: false,
      },
    });
    parnterRight.fromTo(
      ".parnter_right",
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
  }, []);
  return (
    <section className="sm:py-10 lg:py-20 xl:pt-[100px] partner_bg bg-cover bg-no-repeat relative">
      <div className="partner_top_layer absolute left-0 w-full top-0 h-[80px] sm:h-[150px] lg:h-[250px]"></div>
      <div className="partner_bottom_layer absolute left-0 w-full bottom-0 h-[80px] sm:h-[150px] lg:h-[250px]"></div>
      <div className="container overflow-x-hidden">
        <div className="md:pb-6 mt-10 lg:mt-6">
          <h3 className="font-raleway parnter_left whitespace-normal break-words uppercase  font-bold text-center  text-3xl sm:text-4xl md:text-[40px] lg:text-[44px] xl:text-5xl text-white">
            PARTNERS
          </h3>
          <div className="text-center">
            <span className="contact_border md:w-[471px] w-full inline-block"></span>
          </div>
        </div>

        {ourPartner &&
          ourPartner.map((obj, i) => {
            return (
              <div key={i}>
                <div className="flex justify-center items-center sm:space-x-[40px] mt-3 flex-wrap py-2">
                  {obj &&
                    obj.partnericon1 &&
                    obj.partnericon1.map((item, i) => {
                      return (
                        <div className="parnter_right" key={i}>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={item.url}
                          >
                            <img
                              className="hover:scale-105 max-w-[100px] md:max-w-[200px] sm:h-full w-[200px] max-h-[80px] duration-300 ease-in-out transition-all sm:mt-8 xs:mt-10 mx-4 mt-3"
                              src={item.icon}
                              alt=""
                            />
                          </a>
                        </div>
                      );
                    })}
                </div>
                <div className="flex justify-center items-center sm:space-x-[40px] flex-wrap sm:py-2">
                  {obj &&
                    obj.partnericon2 &&
                    obj.partnericon2.map((item, i) => {
                      return (
                        <div className="sm:mx-4 mx-2 parnter_left" key={i}>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={item.url}
                          >
                            <img
                              className={`${
                                i === 2 ? "" : "",item.className
                              } hover:scale-105 max-w-[100px] md:max-w-[200px] sm:h-full xl:max-w-[210px] max-h-[80px] duration-300 ease-in-out transition-all lg:mt-0 mb-4`}
                              src={item.icon}
                              alt=""
                            />
                          </a>
                        </div>
                      );
                    })}
                </div>
                <div className="justify-center items-center sm:space-x-[40px] mt-3 flex-wrap py-2 hidden">
                  {obj &&
                    obj.partnericon3 &&
                    obj.partnericon3.map((item, i) => {
                      return (
                        <div className="sm:mx-4 mx-2 parnter_left " key={i}>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={item.url}
                          >
                            <img
                              className="hover:scale-105 w-[80px] xl:max-w-[210px] max-h-[80px] duration-300 ease-in-out transition-all filter-property"
                              src={item.icon}
                              alt=""
                            />
                          </a>
                        </div>
                      );
                    })}
                </div>
                <div className="flex justify-center items-center sm:space-x-[40px] flex-wrap md:py-2 space-y-6 sm:space-y-0 mb-14">
                  {obj &&
                    obj.partnericon4 &&
                    obj.partnericon4.map((item, i) => {
                      return (
                        <div className="sm:mx-4 mx-2 parnter_left " key={i}>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={item.url}
                          >
                            <img
                              className={` hover:scale-1 max-w-[80px] sm:max-w-[210px] max-h-[80px] duration-300 ease-in-out transition-all ${
                                (i === 0 || i == 1 || i == 3
                                  ? ""
                                  : "",
                                item.className)
                              }`}
                              src={item.icon}
                              alt=""
                            />
                          </a>
                        </div>
                      );
                    })}
                </div>
              </div>
            );
          })}
      </div>
      {/* <img
        className="absolute bottom-[-60px] xl:bottom-[-20%]  left-0 w-[100px] md:w-[150px] xl:w-[300px] z-[2]"
        src={Gino}
        alt="Gino"
      />
      <img
        className="absolute bottom-[-70px] xl:bottom-[-20%]  right-0 w-[120px] md:w-[170px] xl:w-[300px] z-[2]"
        src={Thunder}
        alt="thunder"
      /> */}
    </section>
  );
};

export default Partner;
