import Logo from "../../assets/images/webp/logo.webp";
import { useEffect, useState } from "react";
import ThankyouModal from "../common/ThankyouModal";
// import Subscribe from "../common/Subscribe";
// import MailchimpSubscribe from "react-mailchimp-subscribe";
import { useMediaQuery } from 'react-responsive'
import { CrossIcon } from "../common/Icons";
import VimeoPlayer from "@u-wave/react-vimeo";
import story_video from "../../assets/video/story_video.mp4";
import cross_icon from "../../assets/images/svg/cross_icon.svg";
import white_dot from "../../assets/images/svg/white_dot.svg";
import { useRef } from "react";

const Hero = () => {
  // VIDEO POPUP JS
  const [video, setVideo] = useState();
  const videoRef = useRef(null); // Create a reference to the video element

  useEffect(() => {
    if (video) {
      document.body.style.overflow = "hidden";
      if (videoRef.current) {
        videoRef.current.pause();
      }
    } else {
      document.body.style.overflow = "auto";
    }
  }, [video]);
      // POPUP JS
    const [hide, setHide] = useState();
    useEffect(() => {
      if (hide) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }, [hide]);
  const [comingSoon, setComingSoon] = useState(false);
  const [isOpenThankYouModal, setIsOpenThankYouModal] = useState(false);
  useEffect(() => {
    if (comingSoon) {
      document.body.classList.add("overflow-y-hidden");
    } else if (!comingSoon) {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [comingSoon]);
  const videoId =
    "https://player.vimeo.com/video/823406218?playsinline=0&background=1&autoplay=1&muted=1";
  const ThankyouModalText = {
    heading: " Thank you!",
    title: "You have successfully subscribed.",
    para: "We’ll contact you via e-mail about our recent updates and the pre-sale rounds! You’ll have enough time to participate!”",
  };
   const isDesktopOrLaptop = useMediaQuery({
     query: "(min-width: 768px)",
   });
   const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767.99px)" });

  return (
    <>
     <div className="bg-[#1E3EA81A] relative overflow-x-hidden">
          <div className={hide ? "" : "hidden"}>
            <div
              className="text-white bg-black opacity-95 p-4 sm:p-6 custom-xsm:p-8 rounded-xl 
             -translate-x-1/2 -translate-y-1/2 fixed top-1/2 start-1/2 z-[100] text-xl font-bold"
            >
              <svg
                onClick={() => {
                  setHide(false);
                }}
                className="fixed end-[4%] z-50 top-[3%] cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"></path>
              </svg>
               <h3 className="font-raleway font-bold text-4xl text-[#FFBD07] mb-4">STORY</h3>
                <div className="w-[240px] custom-xsm:w-[300px] custom-sm:w-[400px] sm:w-[500px] md:w-[600px] xl:max-w-[700px] h-[300px] custom-xsm:h-[380px] sm:h-[500px] md:h-[540px] overflow-y-auto pe-1 custom-xsm:pe-2 story_popup">
                 <div className="flex">
                 <div className="mt-[5px] me-2">
                  <img className="max-w-[16px]" src={white_dot} alt="" />
                 </div>
                  <p className="text-base font-thin leading-5">
                  In the vast expanse of the cosmos, where stars and moons waltz through the celestial heavens, there's Calisto. It was once a desolate orb, shrouded in mystery. But now, it throbs with a hidden tale, a destiny woven by cosmic forces.
                 </p>
                 </div>
                 <div className="flex mt-3">
                 <div className="mt-[5px] me-2">
                  <img className="max-w-[16px]" src={white_dot} alt="" />
                 </div>
                 <p className="text-base font-thin leading-5">
                  Here, in the heart of the cosmos, an epic cosmic battle unfolds—a spectacle that ignites the very fabric of existence. Three legendary Evomons engage in a cataclysmic clash that sets the universe ablaze. Calisto, once barren, is transformed into a living marvel, the result of powers that defy comprehension. The battle, however, is far from over.
                 </p>
                 </div>
                 <div className="flex mt-3">
                 <div className="mt-[5px] me-2">
                  <img className="max-w-[16px]" src={white_dot} alt="" />
                 </div>
                 <p className="text-base font-thin leading-5">
                  Even with their celestial might, the sacred Devomons cannot secure victory. Desperation drives them to unleash ancient magic, banishing their dark adversary to the depths of Calisto's enigmatic surface, where secrets lie dormant, waiting to be unraveled.
                 </p>
                 </div>
                 <div className="flex mt-3">
                 <div className="mt-[5px] me-2">
                  <img className="max-w-[16px]" src={white_dot} alt="" />
                 </div>
                 <p className="text-base font-thin leading-5">
                  A century passes, and destiny takes a new turn. A young adventurer is haunted by vivid visions, a cryptic whisper that refuses to be silenced. Suddenly, a rift in the fabric of reality tears open, ensnaring the adventurer in an odyssey of epic proportions.
                 </p>
                 </div>
                 <div className="flex mt-3">
                 <div className="mt-[5px] me-2">
                  <img className="max-w-[16px]" src={white_dot} alt="" />
                 </div>
                 <p className="text-base font-thin leading-5">
                  He awakens amidst whispering trees and ethereal winds on Calisto, his heart racing, fear and anticipation reflected in his eyes. Above him, Flokimon, a fiery and joyful Evomon, materializes. An unbreakable bond forms between them, marking the beginning of an extraordinary journey.
                 </p>
                 </div>
                 <div className="flex mt-3">
                 <div className="mt-[5px] me-2">
                  <img className="max-w-[16px]" src={white_dot} alt="" />
                 </div>
                 <p className="text-base font-thin leading-5">
                  Each night, the boy is tormented by the voice that calls for liberation. The duo embarks on a voyage cloaked in mysteries and fraught with perils. They liberate oppressed realms and gather allies, all in an effort to thwart the dark forces that threaten to resurface.
                 </p>
                 </div>
                 <div className="flex mt-3">
                 <div className="mt-[5px] me-2">
                  <img className="max-w-[16px]" src={white_dot} alt="" />
                 </div>
                 <p className="text-base font-thin leading-5">
                  Their path leads them to a mysterious Evomon and the enigmatic laboratory of Professor Rix, where fragmented memories and concealed truths unravel tales of dark energies, wayward Evomons, and a destiny that remains inexplicably intertwined.
                 </p>
                 </div>
                 <div className="flex mt-3">
                 <div className="mt-[5px] me-2">
                  <img className="max-w-[16px]" src={white_dot} alt="" />
                 </div>
                 <p className="text-base font-thin leading-5">
                  As they delve deeper into the enigma of Calisto, they uncover malevolent plots led by a sinister Evomon, and a group of clandestine scientists with ominous ambitions. Their goal is nothing short of unleashing the legendary Devomon sealed within Calisto, giving life to their nefarious desires.
                 </p>
                 </div>
                 <div className="flex mt-3">
                 <div className="mt-[5px] me-2">
                  <img className="max-w-[16px]" src={white_dot} alt="" />
                 </div>
                 <p className="text-base font-thin leading-5">
                  The enigmatic voice, once haunting the young adventurer, conceals a deep mystery, a being of magical and holy nature—a guardian of ancient wisdom, bound by an inscrutable fate to break the seal of the cosmic force within Calisto, all while veiling its true intentions in shadow.
                 </p>
                 </div>
                 <div className="flex mt-3">
                 <div className="mt-[5px] me-2">
                  <img className="max-w-[16px]" src={white_dot} alt="" />
                 </div>
                 <p className="text-base font-thin leading-5">
                  Now, the adventurer and his companions must foil these malevolent plots, free the lands from the grip of darkness, and ultimately confront the very embodiment of cosmic chaos.
                 </p>
                 </div>
                 <div className="flex mt-3">
                 <div className="mt-[5px] me-2">
                  <img className="max-w-[16px]" src={white_dot} alt="" />
                 </div>
                 <p className="text-base font-thin leading-5">
                  This odyssey, bursting with long-guarded revelations and the enigma of ancient secrets, beats with exhilaration. It extends a daring challenge for you to step into a cosmos where the very universe becomes your realm.
                 </p>
                 </div>
                 <div className="flex mt-3">
                 <div className="mt-[5px] me-2">
                  <img className="max-w-[16px]" src={white_dot} alt="" />
                 </div>
                 <p className="text-base font-thin leading-5">
                  Dare to immerse yourself, for the essence of this tale pulses with eager anticipation. Embark on a journey to uncover the hidden mysteries of the Evomons, unlock the secrets of dark energies, and unveil destinies inexplicably intertwined.
                 </p>
                 </div>
                 <div className="flex mt-3">
                 <div className="mt-[5px] me-2">
                  <img className="max-w-[16px]" src={white_dot} alt="" />
                 </div>
                 <p className="text-base font-thin leading-5">
                  An electrifying adventure awaits—an expedition calling upon your courage and curiosity, a quest to liberate Calisto and shape the destiny of the cosmos itself!
                 </p>
                 </div>
                </div>
            </div>
            <div
              onClick={() => {
                setHide(false);
              }}
              className="w-full h-screen flex justify-center items-center fixed top-0 start-0 bg-[#00000080] z-[51]"
            ></div>
          </div>
     </div>
      <section className="min-h-screen relative h-screen hero_section ">
      <div className="bg-[#1E3EA81A] relative overflow-x-hidden">
          <div className={video ? "" : "hidden"}>
            <div
              className=" 
             -translate-x-1/2 -translate-y-1/2 fixed top-1/2 start-1/2 z-[100]"
            >
              <a  onClick={() => {
                setVideo(false), videoRef.current.pause()
                ;
              }}
              className="fixed end-[2%] z-50 top-[3%] cursor-pointer max-w-[16px]"
              >
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
        {comingSoon ? (
          <>
            <div
              className="fixed top-0 w-full h-full bg-[#00000088] z-20 flex items-center"
              onClick={() => {
                setComingSoon(false);
              }}
            > 
              <div className="sm:max-w-[559px] bg-[#0D1014] text-center py-16 px-14 z-10 relative rounded-xl mx-auto text-white popup_shadow">
                <div
                  className="absolute top-5 right-4 cursor-pointer"
                  onClick={() => {
                    setComingSoon(false);
                  }}
                >
                  <CrossIcon />
                </div>
                <p className="text-3xl">Coming Soon</p>
              </div>
            </div>
          </>
        ) : (
          ""
        )}

        {isDesktopOrLaptop && (
          
          <div className="video-container">
            <VimeoPlayer
              className="vimvideo"
              autoplay
              loop
              muted
              background={true}
              responsive={true}
              controls={false}
              playsInline
              video={videoId}
            />
          </div>
        )}
        {isTabletOrMobile && (
          <div className="video-container">
            <VimeoPlayer
              className="vimvideo"
              autoplay
              loop
              muted
              background={true}
              responsive={true}
              controls={false}
              playsInline
              video="https://player.vimeo.com/video/823406218?playsinline=0&background=1&autoplay=1&muted=1"
            />
          </div>
        )}
        <div className="absolute top-1/2  left-1/2 w-full container -translate-x-[50%] -translate-y-[50%] z-10 mt-10 ">
          <div className="text-center max-w-[300px] sm:max-w-full mx-auto">
            <img
              className=" max-w-full sm:max-w-[261px] mx-auto mb-5"
              src={Logo}
              alt="logo"
            />
            {/* <div className="flex justify-center w-full gap-3 items-center">
              {heroIcons.map((value, index) => {
                return (
                  <>
                    <div
                      key={index}
                      className="transition-all ease-in-out duration-300 hover:translate-y-[-8px] cursor-pointer"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="social"
                      aria-describedby="social"
                    >
                      <Link to={"https://new-callisto.web.app/"} target="_blank"rel="noopener noreferrer" className="max-w-[25px] sm:max-w-[40px] inline">
                        {value.footerIcon}
                      </Link>
                    </div>
                    {index === 2 ? (
                      ""
                    ) : (
                      <div className=" bg-[#ffffff] h-[30px] w-[3px] "></div>
                    )}
                  </>
                );
              })}
            </div> */}
            <h2 className="text-white text-base leading-[114.32%] font-bold font-raleway my-5 sm:mt-6 sm:mb-9 max-w-[288px] sm:max-w-full mx-auto drop-shadow-lg">
            Once upon a Time
            </h2>
            <button onClick={() => setHide(!hide)} className="bg-[#2253F5] text-white font-poppins text-xl font-bold
            px-[30px] py-[5px] border-4 border-[#2042B2] border-solid rounded-full shadow-hero_btn_shadow hover:bg-transparent duration-300 me-2 hero_btn_text">
            Story
            </button>
            <button onClick={() => setVideo(!video)} className="bg-[#FFC40A] text-white font-poppins text-xl font-bold
            px-[30px] py-[5px] border-4 border-[#D0A205] border-solid rounded-full shadow-hero_btn_shadow hover:bg-transparent duration-300 ms-2 hero_btn_text">
            Manga
            </button>
          </div>
        </div>
      </section>
      <ThankyouModal
        ThankyouModalText={ThankyouModalText}
        isOpenThankYouModal={isOpenThankYouModal}
        setIsOpenThankYouModal={setIsOpenThankYouModal}
      />
    </>
  );
};

export default Hero;
