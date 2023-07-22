import Video  from "../../assets/video/devomon.mp4";
const About = () => {
  return (
    <>
    <section className="relative py-16 lg:py-[100px] play-earn about_bg_img bg-aboutBgImg bg-no-repeat sm:-translate-y-[100px] -translate-y-[50px] mb-[-50px] sm:-mb-[100px] z-10 bg-cover">
        <div className="container">
            <div className='sm:my-12 lg:mt-12'>
                <h2 className="font-raleway uppercase font-bold text-center text-3xl sm:text-4xl md:text-[40px] lg:text-[44px] xl:text-5xl text-white">About Devomon</h2>
                <div className="max-w-[461px] text-bottom-line-bg h-[3px] mx-auto mt-[15px]"></div>
                <p className="text-white text-center font-normal font-poppins text-xs sm:text-sm md:text-base lg:text-xl max-w-[702px] mx-auto mt-[15px] mb-[35px] ">Unleash the Power of Anime on the Blockchain! Embark on an extraordinary journey through a captivating world, brimming with enigmatic creatures eagerly anticipating your arrival! Experience the pinnacle of entertainment with cutting-edge triple-A smartphone games, captivating comics, exclusive merchandise, and beyond – all crafted with revolutionary web3 technology. Immerse yourself in the ground-breaking fusion of anime and blockchain, like never seen before! Prepare to be amazed by Devomon</p>
                <div className="mt-5 ">
                <video className='w-100 rounded-3xl mx-auto object-cover' width="700" height="700" autoPlay  muted controls >
                 <source src={Video} type="video/mp4"/>
                </video>
      
                {/* <iframe className='w-[280px] h-[160px] xs:w-[422px] xs:h-[240px] sm:w-[500px] sm:h-[280px] md:w-[600px] md:h-[340px] lg:w-[603px] lg:h-[340px] mx-auto rounded-3xl about_video' src={Video} allow='autoplay'></iframe> */}
                </div>
            </div>
            
        </div>
    </section>
    </>
  )
}

export default About