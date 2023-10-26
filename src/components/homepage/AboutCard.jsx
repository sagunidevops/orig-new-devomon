import { Link, useNavigate } from "react-router-dom";
import { AboutCardData } from "../common/Helper";
import { useRef, useState } from "react";
import story_video from "../../assets/video/story_video.mp4";
import cross_icon from "../../assets/images/svg/cross_icon.svg";
import { useEffect } from "react";

const AboutCard = () => {

  // VIDEO POPUP JS
const [video, setVideo] = useState();
const videoRef = useRef(null);
const [hide, setHide] = useState(false);
const [modalImage,setModalImage]=useState()
const [modalPara,setModalPara]=useState()
console.log(modalImage?modalImage.popupImage:"")
useEffect(() => {
  if (video||hide) {
    document.body.style.overflow = "hidden";
    if (videoRef.current) {
      videoRef.current.pause();
    }
  } else {
    document.body.style.overflow = "auto";
  }
}, [video,hide]);

    // Pop-up state and functions
  const openPopup = (value) => {
    console.log(value)
    setModalImage(value
      )
      setModalPara(value.popupPara
      )
    setHide(true);
  };
  const closePopup = () => {
    setHide(false);
  };

  const history = useNavigate();
 
  return (
    <>
      <div className=" -mt-[23%] xs:-mt-[18%] sm:-mt-[24%] md:-mt-[19%] lg:-mt-[14%] xl:-mt-[11%] 2xl:-mt-[14%] relative z-[11]">
        {/* ==== VIDEO POP-UP ==== */}
      <div className="bg-[#1E3EA81A] relative overflow-x-hidden">
          <div className={video ? "" : "hidden"}>
            <div
              className=" 
             -translate-x-1/2 -translate-y-1/2 fixed top-1/2 start-1/2 z-[100]"
            >
              <a onClick={() => {setVideo(false), videoRef.current.pause();}}
                 className="fixed end-[2%] z-50 top-[3%] cursor-pointer max-w-[16px]">
                <img src={cross_icon} alt="cross_icon" />
              </a>
                <video  ref={videoRef} className='w-100 mx-auto object-cover 
                rounded-xl max-w-[300px] xs:max-w-[430px] sm:max-w-[600px] md:max-w-[700px]' width="700" height="700" autoPlay loop controls muted >
                 <source src={story_video} type="video/mp4"/>
               </video>
            </div>
            <div
              onClick={() => {
                setVideo(false), videoRef.current.pause()
                ;
              }}
              className="w-full h-screen flex justify-center items-center fixed top-0 start-0 bg-[#00000080] z-[51]"
            ></div>
          </div>
      </div>
        {AboutCardData.map((value, index) => {
          return (
            <Link
              to={value.linkValue}
              key={index}
              target={value.title==="GameFi"||value.title==="Evozone"||value.title==="NFT"||value.title==="News"?"_blank":""}
              onClick={() => { 
                if (value.title === "Manga") {
                  setVideo(!video);
                } else if (!value.linkValue) {
                  openPopup(value);
                  history("/");
                 
                }
              }}
            >
              <div className="relative overflow-hidden duration-500 about_card_outline">
                <div className="about_card_bg h-[180px] sm:h-[200px] lg:h-[220px] 2xl:h-[300px]">
                  <img
                    className="w-full about_card_img duration-500 h-full object-cover"
                    src={value.card_bg}
                    alt="GameFi"
                  />
                  <p className="text-white absolute top-1/2 left-1/2 font-bold uppercase md:text-4xl sm:text-3xl -translate-x-1/2 -translate-y-1/2">
                    {value.title}
                  </p>
                  <span className="about_card_underline w-[90px] sm:w-[180px] lg:w-[278px] h-[2px] sm:h-[3px] absolute top-[60%] sm:top-[65%] lg:top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity duration-500 opacity-0"></span>
                  <img
                    className={`absolute bottom-0 gamefi_character translate-y-full duration-500 ${value.className}`}
                    src={value.character_img}
                    alt="gamefi"
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
       {/* Pop-up */}
       <div className={`relative overflow-x-hidden ${hide ? "" : "hidden"}`}>
        <div className="text-white whitespace-nowrap min-w-[90%] xl:min-w-[70%] min-h-[90%] xl:min-h-[70%] 2xl:min-h-0 2xl:min-w-0 2xl:max-w-[100%] 2xl:max-h-[100%] rounded-xl -translate-x-1/2 -translate-y-1/2 fixed top-1/2 start-1/2 z-[100] text-center text-xl font-bold p-[15px] custom-xsm:p-[40px] lg:p-[96px] mt-[48px] flex justify-center items-center">
       <div className="relative">
       <svg onClick={closePopup} className={`absolute z-50 cursor-pointer max-w-[20px] sm:max-w-[26px] ${modalPara ? "end-[4%] top-[6%]" : "lg:-end-[8%] lg:-top-[11%] -end-[6%] -top-[14%] md:-top-[10%]"}`} width="26" height="26" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="14.8491" width="3" height="21" rx="1.5" transform="rotate(45 14.8491 0)" fill="white"/>
        <rect x="14.8491" width="3" height="21" rx="1.5" transform="rotate(45 14.8491 0)" fill="white"/>
        <rect x="14.8491" width="3" height="21" rx="1.5" transform="rotate(45 14.8491 0)" fill="white"/>
        <rect x="14.8491" width="3" height="21" rx="1.5" transform="rotate(45 14.8491 0)" fill="white"/>
        <rect y="2.12134" width="3" height="21" rx="1.5" transform="rotate(-45 0 2.12134)" fill="white"/>
        <rect y="2.12134" width="3" height="21" rx="1.5" transform="rotate(-45 0 2.12134)" fill="white"/>
        <rect y="2.12134" width="3" height="21" rx="1.5" transform="rotate(-45 0 2.12134)" fill="white"/>
        <rect y="2.12134" width="3" height="21" rx="1.5" transform="rotate(-45 0 2.12134)" fill="white"/>
        </svg>
          {/* <img className="w-full h-full rounded-xl" src={modalImage?modalImage.popupImage:""} alt="" />
          {
           modalImage&& modalImage.title==="Dashboard"||modalImage&&modalImage.title==="EvoVerse"||modalImage&&modalImage.title==="MERCHANDISE"?"":  <div className="bg-black py-16 px-12 sm:px-24 sm:py-20 rounded-2xl max-w-[320px] flex justify-center items-center popup_shadow">
            <p className="text-3xl text-white">{modalPara}</p>
            </div>
          } */}
          {(modalImage && modalImage.title === "Dashboard") ||
            (modalImage && modalImage.title === "EvoVerse") ||
            (modalImage && modalImage.title === "MERCHANDISE") ? (
              <img
              className={`rounded-xl ${modalImage&&modalImage.title === "MERCHANDISE" ? "w-[310px] custom-xsm:w-full custom-xsm:h-full sm:w-[500px] sm:h-[500px] 3xl:w-[600px] 3xl:h-[600px]": "w-full h-full"}`}
              src={modalImage ? modalImage.popupImage : ""}
              alt=""
            />
            ) : (
              <div className="bg-black py-16 px-12 sm:px-24 sm:py-20 rounded-2xl max-w-[320px] flex justify-center items-center popup_shadow">
                <p className="text-3xl text-white">{modalPara}</p>
              </div>
            )}
        
       </div>
        </div>
        <div
          onClick={closePopup}
          className="w-full h-screen flex justify-center items-center fixed top-0 start-0 bg-[#00000080] z-[51]rounded-xl"
        ></div>
      </div>
    </>
  );
};

export default AboutCard;
