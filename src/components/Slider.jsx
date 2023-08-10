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
  );
};

export default Slider;
