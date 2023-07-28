import { useState, useEffect } from "react";

const Slider = () => {
  const [count, setCount] = useState(0);
  const [imageValue, setImageValue] = useState();
  const [questionValue, setQuestionValue] = useState();
  const [indexValue, setIndexValue] = useState(0);
  const [array1, setArray1] = useState([
    {
      image: "imag1",
    },
    {
      image: "image2",
    },
    {
      image: "image3",
    },
    {
      image: "image4",
    },
    {
      image: "image5",
    },
  ]);
  const [array2, setArray2] = useState([
    {
      question: "imag1",
      answer: "imag1",
    },
    {
      question: "image2",
      answer: "imag2",
    },
    {
      question: "image3",
      answer: "imag3",

    },
    {
      question: "image4",
      answer: "imag4",

    },
    {
      question: "image5",
      answer: "imag5",

    },
  ]);
  useEffect(() => {
    setTimeout(() => {
      if (count === array1.length) {
        setCount(0);
      } else {
        setCount(count + 1);
      }
    }, 5000);
    for (let index = 0; index < array1.length; index++) {
      if (count === index) {
        setIndexValue(index)
        const element = array1[index];
        setImageValue(element);
      }
    }
  }, [count]);
 

  return (
    <div className="flex">
      <h1 className="text-white">{imageValue && imageValue.image}</h1>
      {array2.map((val,i)=>{
        return(
          <div key={i} className="ps-3" >
            <h1 className="text-white">{val.question}</h1>
            {
              count===i? <h1 className="text-white">{val.answer}</h1>:""
            }
           
          </div>
        )
      })}
  
    </div>

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
  );
};

export default Slider;
