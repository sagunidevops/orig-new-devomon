import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import latest_news from "../../assets/images/homepageImages/webp/latest_news_slides.webp";
import { Latest_news_faq_data, Latest_slider_data } from "../common/Helper";
import { motion, AnimatePresence } from "framer-motion";
import { LatestNews_arrow } from "../common/Icons";

const LatestNews = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [view, setView] = useState(null);
  const activeHandler = (value) => {
    if (value === view) {
      setView(null);
    } else {
      setView(value);
    }
  };
  return (
    <>
      <div className="bg-latestNews_bg_img bg-no-repeat bg-cover py-10 xl:pt-[120px] xl:pb-[205px] overflow-hidden scroll_hidden">
        <div className="container">
          <p className="text-center text-white font-bold text-4xl pb-[30px] xl:pb-[51px]">
            Latest news
          </p>
          <div className="flex flex-col xl:flex-row items-center rounded-[12px] xl:h-[456px] bg-latestNews_bg_color pt-10 xl:pt-0 px-3 md:px-0">
            <div className="max-w-[500px]">
              <Slider {...settings}>
                {Latest_slider_data &&
                  Latest_slider_data.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="w-[250px] xs:w-[300px] sm:w-[490px] mx-auto"
                      >
                        <img
                          className="w-[250px] xs:w-[300px] sm:w-[490px] mx-auto"
                          src={item.img}
                          alt="news-slider-img"
                        />
                      </div>
                    );
                  })}
              </Slider>
            </div>
            <div className="mx-auto w-full lg:w-3/4 xl:w-full md:px-4 mt-10 xl:mt-0  xl:h-[470px] pt-[10px]">
              <div className="xl:h-[390px] overflow-x-hidden overflow-y-scroll ">
                {Latest_news_faq_data.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => activeHandler(index)}
                    className={`faq-wrapper cursor-pointer text-white border-b border-gray-500 py-2 sm:py-3 lg:py-5 font-raleway ${
                      index === view ? "active" : ""
                    }`}
                  >
                    <div
                      className={`flex items-center justify-between text-base sm:text-lg font-semibold font-raleway`}
                    >
                      {item.heading}
                      <span
                        className={` transform transition-all ease-in-out duration-300 ${
                          index === view ? "rotate-90 transform" : "drop_icon"
                        }`}
                      >
                        <span className="p-2 inline-block">
                          <LatestNews_arrow />
                        </span>
                      </span>
                    </div>
                    <AnimatePresence>
                      {index === view ? (
                        <>
                          <motion.div
                            transition={{
                              duration: 0.3,
                              ease: [0.04, 0.62, 0.23, 0.98],
                            }}
                            initial={{ height: "auto", opacity: 1 }}
                            animate={{
                              height: "auto",
                              opacity: 1,
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                              transition: {
                                duration: 0.3,
                                ease: [0.04, 0.62, 0.23, 0.98],
                              },
                            }}
                          >
                            <p className="text-xs sm:text-sm md:text-base mt-1 lg:mt-3 font-raleway">
                              {item.para}
                            </p>
                          </motion.div>
                        </>
                      ) : (
                        ""
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
              <div className="xl:text-end text-center mt-5 lg:mt-8 xl:mt-0 pt-3 pb-6 xl:pb-0">
                <button
                  type="submit"
                  className=" blue-btn-shadow hover:scale-105 transition-all ease-in-out duration-300 py-[5px] px-[21px] bg-[#F8C112] border border-[4px] border-[#CEA20C] rounded-[39px] text-sm sm:text-base md:text-lg lg:text-xl text-white font-bold font-poppins "
                >
                  Show more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
