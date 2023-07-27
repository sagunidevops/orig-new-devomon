import Logo from "../../assets/images/webp/logo.webp";
import { useEffect, useState } from "react";
import ThankyouModal from "../common/ThankyouModal";
// import Subscribe from "../common/Subscribe";
// import MailchimpSubscribe from "react-mailchimp-subscribe";
import { useMediaQuery } from 'react-responsive'
import { CrossIcon } from "../common/Icons";
import { heroIcons } from "../common/Helper";
import VimeoPlayer from "@u-wave/react-vimeo";

const Hero = () => {
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
      <section className="min-h-screen relative h-screen hero_section ">
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
        {/* <div className="video-container">
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
        </div> */}

        <div className="absolute top-1/2  left-1/2 w-full container -translate-x-[50%] -translate-y-[50%] z-10 mt-10 ">
          <div className="text-center max-w-[300px] sm:max-w-full mx-auto">
            <img
              className=" max-w-full sm:max-w-[261px] mx-auto mb-5"
              src={Logo}
              alt="logo"
            />
            {/* <h1 className="text-white text-xl sm:text-2xl md:text-[28px] lg:text-3xl leading-[114.32%] font-normal  font-cinzel my-5  uppercase">
              explore calisto{" "}
            </h1> */}

            {/* <div className="flex items-center justify-center flex-col sm:flex-row">
              <MailchimpSubscribe
                url="https://drivesfn.us14.list-manage.com/subscribe/post?u=c2d03db1a3ab51904dc274156&amp;id=7e74a68b3e&amp;f_id=0025a1e0f0"
                render={({ subscribe, status, message }) => (
                  <div>
                    <Subscribe
                      message={message}
                      status={status}
                      setIsOpenThankYouModal={setIsOpenThankYouModal}
                      onSubmitted={(formData) => subscribe(formData)}
                    />
                  </div>
                )}
              />
            </div>
             */}

            <div className="flex justify-center w-full gap-3 items-center">
              {heroIcons.map((value, index) => {
                return (
                  <>
                    <div
                      key={index}
                      onClick={() => setComingSoon(true)}
                      className="transition-all ease-in-out duration-300 hover:translate-y-[-8px] cursor-pointer"
                      target="_blank"
                      rel="noopener noreferrer"
                      // href={value.iconUrl}
                      aria-label="social"
                      aria-describedby="social"
                    >
                      <span className="max-w-[25px] sm:max-w-[40px] inline">
                        {value.footerIcon}
                      </span>
                    </div>
                    {index === 2 ? (
                      ""
                    ) : (
                      <div className=" bg-[#ffffff] h-[30px] w-[3px] "></div>
                    )}
                  </>
                );
              })}
            </div>
            <h2 className="text-white text-base leading-[114.32%] font-bold font-raleway my-5 sm:mt-6 sm:mb-9 max-w-[288px] sm:max-w-full mx-auto">
              Immerse yourself in the ultimate anime gaming experience
            </h2>
          </div>
        </div>
        {/* <div className="bottom-layer h-[124px] absolute bottom-0 w-full left-0"></div> */}
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
