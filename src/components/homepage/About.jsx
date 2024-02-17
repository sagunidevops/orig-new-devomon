import { useEffect } from "react";
import twitter from "../../assets/images/homepageImages/png/twitter.png";
const About = () => {
  useEffect(() => {
    // Load Twitter widgets.js asynchronously
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://platform.twitter.com/widgets.js";
    script.charset = "utf-8";
    document.head.appendChild(script);
    return () => {
      // Cleanup script tag on component unmount
      document.head.removeChild(script);
    };
  }, []);
  return (
    <>
      <section className="relative py-14 lg:py-20 play-earn about_bg_img bg-aboutBgImg bg-no-repeat z-10 bg-cover">
        <div className="container 2xl:max-w-[1520px]">
          <div className="flex flex-wrap">
            <div className="w-full px-3">
              <h2 className="font-raleway uppercase font-bold text-center text-3xl sm:text-4xl md:text-[40px] lg:text-[44px] xl:text-5xl text-white">
                About Devomon
              </h2>
              <div className="text-center">
                <span className="contact_border md:w-[471px] w-full inline-block"></span>
              </div>
              <p className="text-white text-center font-normal font-poppins text-xs sm:text-sm xl:text-base max-w-[600px] mx-auto mt-4 mb-4 ">
                An anime brand revolutionizing fan engagement worldwide. Beyond
                gaming, it encompasses manhwas, anime, and more. Expect
                immersive games, unique merchandise, and a universe that brings
                together every facet of anime culture.
              </p>
              <video
                className="w-100 rounded-xl mx-auto object-cover w-[400px] lg:w-[500px]"
                width="500"
                height="500"
                autoPlay
                muted
                controls
              >
                <source
                  // src="/src/assets/video/Devomon_Game_Announcement_Trailer_1080p.mp4"
                  src="https://firebasestorage.googleapis.com/v0/b/devomon-1d489.appspot.com/o/Devomon_Game_Announcement_Trailer_1080p.mp4?alt=media&token=8c701118-9919-484d-be49-ca097c5d6beb"
                  type="video/mp4"
                />
              </video>
            </div>
            {/* <div className="w-full lg:w-6/12 -mt-3 sm:mt-0 px-3">
              <div className="mx-auto max-w-[466px] md:max-w-[550px] scale-y-[0.9] xl:scale-[1] rounded-xl text-center text-white font-poppins text-sm">
                <blockquote className="twitter-tweet">
                  <p lang="en" dir="ltr">
                    Take a look at why Devomon chose Unreal Engine for the
                    development of their mobile game, Callisto!:
                    <a href="https://t.co/PJTJihukj4">
                      https://t.co/PJTJihukj4
                    </a>
                  </p>
                  &mdash; Unreal Engine (@UnrealEngine)
                  <a href="https://twitter.com/UnrealEngine/status/1757389172988330192?ref_src=twsrc%5Etfw">
                    February 13, 2024
                  </a>
                </blockquote>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
