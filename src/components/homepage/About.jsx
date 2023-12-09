const About = () => {
  return (
    <>
      <section className="relative pt-[100px] pb-[80px] xs:pb-[100px] lg:py-[100px] xl:pb-[50px] play-earn about_bg_img bg-aboutBgImg bg-no-repeat sm:-translate-y-[142px] -translate-y-[80px] mb-[-50px] 2xl:mb-16 z-10 bg-cover">
        <div className="container">
          <div className="sm:my-12 lg:mt-12 pb-16">
            <h2 className="font-raleway uppercase font-bold text-center text-3xl sm:text-4xl md:text-[40px] lg:text-[44px] xl:text-5xl text-white">
              About Devomon
            </h2>
            <div className="text-center">
              <span className="contact_border md:w-[471px] w-full inline-block"></span>
            </div>
            <div className="max-w-[461px] text-bottom-line-bg h-[3px] mx-auto mt-[15px]"></div>
            <p className="text-white text-center font-normal font-poppins text-xs sm:text-sm md:text-base lg:text-xl max-w-[702px] mx-auto mt-[15px] mb-[35px] ">
              Unleash the Power of Anime on the Blockchain! Embark on an
              extraordinary journey through a captivating world, brimming with
              enigmatic creatures eagerly anticipating your arrival! Experience
              the pinnacle of entertainment with cutting-edge triple-A
              smartphone games, captivating comics, exclusive merchandise, and
              beyond – all crafted with revolutionary web3 technology. Immerse
              yourself in the ground-breaking fusion of anime and blockchain,
              like never seen before! Prepare to be amazed by Devomon.
            </p>
            <div className="mt-5 ">
              <video
                className="w-100 rounded-3xl mx-auto object-cover"
                width="700"
                height="700"
                autoPlay
                muted
                controls
              >
                <source
                  src="https://firebasestorage.googleapis.com/v0/b/devomon-home.appspot.com/o/about.mp4?alt=media&token=17e63c8c-9a4e-4266-9f83-eb294e51a01c"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
