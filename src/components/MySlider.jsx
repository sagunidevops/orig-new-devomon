/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import latest_news_slider_img from "../assets/images/homepageImages/webp/latest_news_slides.webp";
import slider_img_1 from "../assets/images/slider_img_1.png";
import slider_img_2 from "../assets/images/slider_img_2.png";
import slider_img_3 from "../assets/images/slider_img_3.png";
// import { LatestNews_arrow } from "./common/Icons";
// import { AnimatePresence } from "framer-motion";
// import { motion } from "framer-motion";
// import Slider from 'react-slick';
// import { Latest_slider_data_dev } from "./common/Helper";
import "slick-carousel/slick/slick.css"; // Import slick carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick carousel theme styles
import { AnimatePresence } from "framer-motion";
import { LatestNews_arrow } from "./common/Icons";
import { motion } from 'framer-motion';


const MySlider = () => {

//     const settings = {
//         dots: true,
//         infinite: true,
//         autoplay: true,
//         arrows: false,
//         speed: 700,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       };
    
//       const [count, setCount] = useState(0);
//       const [array1, setArray1] = useState([
//         {
//           image: [latest_news_slider_img],
//         },
//         {
//           image: [slider_img_1],
//         },
//         {
//           image: [slider_img_2],
//         },
//         {
//           image: [slider_img_3],
//         },
//         {
//           image: [slider_img_1],
//         },
//       ]);
    
//       const [array2, setArray2] = useState([
//         {
//           question: "Condimentum eros praesent condimentum nunc elementum.",
//           answer: "Register, connect your wallet and install the game.",
//         },
//         {
//           question: "Morbi lorem quisque non rutrum quisque blandit tellus.",
//           answer: "Usually 3, in some cases up to 6.",
//         },
//         {
//           question: "Mattis enim eleifend  vulputate bibendum netus amet.",
//           answer: "You can start round-based battles, explore and decorate your island. Communicate with friends.",
//         },
//         {
//           question: "Scelerisque congue proin turpis bibendum duis nulla.",
//           answer: "These include classic types like normal, fire, water, and grass, as well as more specialized types like .",
//         },
//         {
//           question: "Aenean tristique suscipit diam mi gravida aenean non.",
//           answer: "When your fire-type evomon battles a plant-type evomon, you will. ",
//         },
//       ]);
   
//   useEffect(() => {
//     const slideShowInterval = setInterval(() => {
//       setCount((prevCount) => (prevCount + 1) % array1.length);
//     }, 5000);

//     return () => clearInterval(slideShowInterval);
//   }, [array1.length]);

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
  const [array2, setArray2] = useState([
    {
        question: "Condimentum eros praesent condimentum nunc elementum.",
        answer: "Register, connect your wallet and install the game.",
      },
      {
        question: "Morbi lorem quisque non rutrum quisque blandit tellus.",
        answer: "Usually 3, in some cases up to 6.",
      },
      {
        question: "Mattis enim eleifend  vulputate bibendum netus amet.",
        answer: "You can start round-based battles, explore and decorate your island. Communicate with friends.",
      },
      {
        question: "Scelerisque congue proin turpis bibendum duis nulla.",
        answer: "These include classic types like normal, fire, water, and grass, as well as more specialized types like .",
      },
      {
        question: "Aenean tristique suscipit diam mi gravida aenean non.",
        answer: "When your fire-type evomon battles a plant-type evomon, you will. ",
      },
  ]);
  useEffect(() => {
    setTimeout(() => {
      if (count === array1.length) {
        setCount(0);
      } else {
        setCount(count + 1);
      }
    }, 2000);
    for (let index = 0; index < array1.length; index++) {
      if (count === index) {
        setIndexValue(index)
        const element = array1[index];
        setImageValue(element);
      }
    }
  }, [count]);

  return (
//     <section id="news">
//     <div className="bg-latestNews_bg_img bg-no-repeat bg-cover py-10 xl:pt-[120px] xl:pb-[205px] overflow-hidden scroll_hidden">
//       <div className="container">
//         <p className="text-center text-white font-bold text-4xl pb-[30px] xl:pb-[51px] uppercase">
//           Latest news
//         </p>
//         <div className="flex flex-col xl:flex-row items-center rounded-[12px] xl:h-[475px] bg-latestNews_bg_color pt-6 sm:pt-7 lg:pt-9 xl:pt-10 px-3 md:px-0">
//           <div className="max-w-[507.4px] -mt-10">
//             <Slider {...settings}>
//               {array1.map((item, index) => (
//                 <div key={index} className="w-[250px] xs:w-[300px] sm:w-[510px] mx-auto">
//                   <img 
//                     src={item.image}
//                     alt={`Image ${index}`}
//                     className="w-[250px] xs:w-[300px] sm:w-[510px] mx-auto"
//                   />
//                 </div>
//               ))}
//             </Slider>
//           </div>
//           <div className="w-11/12 md:w-10/12 xl:w-1/2 xl:ps-8 h-[420px] overflow-x-hidden overflow-y-scroll mt-10 xl:mt-0">
// {array2.map((item, index) => (
//   <div
//     key={index}
//     onClick={() => activeHandler(index)}
//     className={`faq-wrapper cursor-pointer text-white border-b border-gray-500 py-2 sm:py-3 lg:pb-5 font-raleway ${
//       index === count ? "active" : ""
//     }`}
//   >
//     <div
//       className={`flex items-center justify-between text-base sm:text-lg font-semibold font-raleway`}
//     >
//       {item.question}
//       <span
//         className={` transform transition-all ease-in-out duration-300 ${
//           index === count ? "rotate-90 transform" : "drop_icon"
//         }`}
//       >
//         <span className="p-2 inline-block">
//           <LatestNews_arrow />
//         </span>
//       </span>
//     </div>
//     <AnimatePresence>
//       {index === count ? (
//         <>
//           <motion.div
//             transition={{
//               duration: 0.3,
//               ease: [0.04, 0.62, 0.23, 0.98],
//             }}
//             initial={{ height: "auto", opacity: 1 }}
//             animate={{
//               height: "auto",
//               opacity: 1,
//             }}
//             exit={{
//               height: 0,
//               opacity: 0,
//               transition: {
//                 duration: 0.3,
//                 ease: [0.04, 0.62, 0.23, 0.98],
//               },
//             }}
//           >
//             <p className="text-xs sm:text-sm md:text-base mt-1 lg:mt-3 font-raleway">
//               {item.answer}
//             </p>
//           </motion.div>
//         </>
//       ) : (
//         ""
//       )}
//     </AnimatePresence>
//   </div>
// ))}
// <div className="xl:text-end text-center mt-5 lg:mt-8 xl:mt-0 pt-3 pb-6 xl:pb-0">
//     <button
//       type="submit"
//       className=" blue-btn-shadow hover:scale-105 transition-all ease-in-out duration-300 py-[5px] px-[21px] bg-[#F8C112] border border-[4px] border-[#CEA20C] rounded-[39px] text-sm sm:text-base md:text-lg lg:text-xl text-white font-bold font-poppins "
//     >
//       Show more
//     </button>
// </div>
// </div>
//         </div>
//       </div>
//     </div>
//   </section>
<section id="news">
    <div className="bg-latestNews_bg_img bg-no-repeat bg-cover py-10 xl:pt-[120px] xl:pb-[205px] overflow-hidden scroll_hidden">
   <div className="container">
   <p className="text-center text-white font-bold text-4xl pb-[30px] xl:pb-[51px] uppercase">
          Latest news
        </p>
        <div className="flex">
        <div className="flex flex-col xl:flex-row items-center rounded-[12px]   xl:h-[475px] bg-latestNews_bg_color pt-6 sm:pt-7 lg:pt-9 xl:pt-10 px-3   md:px-0">
           <img className="w-[250px] xs:w-[300px] sm:w-[510px] mx-auto" src={imageValue && imageValue.image} alt="" />
      </div>
      <div className="w-11/12 md:w-10/12 xl:w-1/2 xl:ps-8 h-[420px] overflow-x-hidden overflow-y-scroll mt-10 xl:mt-0">
       {/* {array2.map((val,i)=>{
        return(
          <div key={i} className="ps-3" >
            <h1 className="text-white">{val.question}</h1>
            {
              count===i? <h1 className="text-white">{val.answer}</h1>:""
            }
          </div>
        )
       })} */}
       {array2.map((item, index) => (
  <div
    key={index}
    onClick={() => activeHandler(index)}
    className={`faq-wrapper cursor-pointer text-white border-b border-gray-500 py-2 sm:py-3 lg:pb-5 font-raleway ${
      index === count ? "active" : ""
    }`}
  >
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
            <p className="text-xs sm:text-sm md:text-base mt-1 lg:mt-3 font-raleway">
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
       </div>
        </div>
  
     </div>
     </div>
</section>
  )
}

export default MySlider