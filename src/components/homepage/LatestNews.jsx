/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import latest_news_slider_img from "../../assets/images/homepageImages/webp/latest_news_slides.webp";
import slider_img_1 from "../../assets/images/slider_img_1.png";
import slider_img_2 from "../../assets/images/slider_img_2.png";
import slider_img_3 from "../../assets/images/slider_img_3.png";
import "slick-carousel/slick/slick.css"; // Import slick carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick carousel theme styles
import { AnimatePresence, motion } from "framer-motion";
import { LatestNews_arrow } from "../common/Icons";
import { Dots_data, array2 } from "../common/Helper";

const LatestNews = () => {
  const activeHandler = (index) => {
    setCount(index);
  };

  const [count, setCount] = useState(0);
  const [imageValue, setImageValue] = useState();
  const [questionValue, setQuestionValue] = useState();
  const [indexValue, setIndexValue] = useState(0);
  const [array1, setArray1] = useState([
    {
    image: [latest_news_slider_img],
    },
    {

      image: [slider_img_1],
    },
    {
      image: [slider_img_2],
    },
    {
      image: [slider_img_3],
    },
    {
      image: [slider_img_1],
    },
  ]);
  useEffect(() => {
    setTimeout(() => {
      if (count === array1.length) {
        setCount(0);
      } else {
        setCount(count + 1);
      }
    }, 7000);
    for (let index = 0; index < array1.length; index++) {
      if (count === index) {
        setIndexValue(index);
        const element = array1[index];
        setImageValue(element);
      }
    }
  }, [count]);

  return (
    <section id="news">
      <div className="bg-latestNews_bg_img bg-no-repeat bg-cover py-14 pt-[100px] sm:pt-[150px] xl:pb-[205px] overflow-hidden scroll_hidden">
        <div className="container">
          <p className="text-center text-white font-bold text-4xl pb-[30px] xl:pb-[51px] uppercase">
            Latest news
          </p>
          <div className="flex flex-col xl:flex-row bg-latestNews_bg_color items-center bg-cover rounded-[30px] xl:rounded-lg xl:h-[481px] 2xl:h-[564px]">
            <div className="flex flex-col xl:flex-row items-center rounded-[12px] sm:w-10/12 lg:w-[45%] 2xl:w-[42.5%] px-3 md:px-0 relative mt-4 md:mt-9 xl:mt-0">
              <img
                className="w-full sm:w-[507px] xl:w-full rounded-[12px]"
                src={imageValue && imageValue.image}
                alt=""
              />
              <div className="flex gap-4 items-center justify-center absolute bottom-0 left-1/2 -translate-x-[50%] mb-6">
              {  console.log("indexValue",indexValue,count,indexValue === count )}
              {Dots_data &&
                  Dots_data.map((item, index) => {
                    return (
                        <span key={index}
                        className={` ${
                          index === count ? "bg-white scale-125" : "bg-[rgb(34,83,245)]"
                        } ${item.dot_class}`}
                      ></span>
                    );
                  })}
              </div>
            </div>
            <div className="w-11/12 md:w-10/12 xl:w-[53%] xl:ps-8 h-[420px] 2xl:h-auto overflow-x-hidden overflow-y-scroll mt-10 xl:mt-0">
              {array2.map((item, index) => (
                <div
                  key={index}
                  onClick={() => activeHandler(index)}
                  className={`faq-wrapper cursor-pointer text-white border-b border-gray-500 py-2 sm:py-3 lg:pb-5 font-raleway ${
                    index === count ? "active" : ""
                  }`}
                >
                  <p>
                    {item.date}
                  </p>
                  <div
                    className={`flex items-center justify-between text-base sm:text-lg font-semibold font-raleway`}
                  >
                    {item.question}
                    <span
                      className={` transform transition-all ease-in-out duration-300 ${
                        index === count ? "rotate-90 transform" : "drop_icon"
                      }`}
                    >
                      <span className="p-2 inline-block">
                        <LatestNews_arrow />
                      </span>
                    </span>
                  </div>
                  <AnimatePresence>
                    {index === count ? (
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
                              duration: 0.8,
                              ease: [0.04, 0.62, 0.23, 0.98],
                            },
                          }}
                        >
                          <p className="text-[12px] sm:text-sm md:text-base mt-1 lg:mt-3 font-raleway">
                            {item.answer}
                          </p>
                        </motion.div>
                      </>
                    ) : (
                      ""
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="xl:text-end text-center mt-5 lg:mt-8 xl:mt-4 pt-3 pb-6 xl:pb-0">
                <button
                  type="submit"
                  className=" blue-btn-shadow hover:bg-transparent transition-all ease-in-out duration-300 py-[5px] px-[21px] bg-[#F8C112] border border-[4px] border-[#CEA20C] rounded-[39px] text-sm sm:text-base md:text-lg lg:text-xl text-white font-bold font-poppins"
                >
                  Show more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
