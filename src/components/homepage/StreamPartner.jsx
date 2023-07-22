import Stream from "../../assets/images/webp/stream_partner.jpg";
import Stream2 from "../../assets/images/png/stream2.png";
import Tiktok from "../../assets/images/webp/tiktok.webp";

const StreamPartner = ({ streamPartnerRef,advisorRef }) => {
  return (
    <>
      <section className="relative" ref={advisorRef} id="streampartner">
        <div className="py-20 md:pb-24 lg:pb-30 xl:pb-36 overflow-x-hidden">
          <div className="pb-8 " ref={streamPartnerRef}>
            <h3 className="font-raleway parnter_left whitespace-normal break-words uppercase  font-bold text-center  text-3xl sm:text-4xl md:text-[40px] lg:text-[44px] xl:text-5xl text-white">
              Streaming Partners
            </h3>
            <div className="text-center">
              <span className="contact_border md:w-[471px] w-full inline-block"></span>
            </div>
          </div>
          <div className="container">
            <div className="flex flex-col sm:flex-row justify-center gap-9 sm:gap-2 lg:gap-5">
              <div className="flex flex-col justify-between">
                <div>
                  <div className="bg-yellow-600 p-1 lg:p-2 mx-auto w-[200px] lg:w-[250px] h-[200px] lg:h-[300px] ">
                    <img
                      className="w-full h-full object-cover"
                      src={Stream}
                      alt="Stream"
                    />
                  </div>
                  <p className="text-center mt-3 text-white text-xl">
                    {" "}
                    Melvin Lee Lewis
                  </p>
                </div>
                <div className="flex justify-center items-center mt-2 sm:mt-6">
                  <a
                    href="https://www.tiktok.com/@melvinleelewis?_t=8cSA0z7GcPa&_r=1"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      className="w-[30px] sm:w-[40px] mr-6 transition-all hover:translate-y-[-8px] duration-200 cursor-pointer"
                      src={Tiktok}
                      alt="Tiktok"
                    />
                  </a>
                  {/* <a
                    href="http://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      className="w-[30px] sm:w-[40px] transition-all hover:translate-y-[-8px] duration-200"
                      src={Youtube}
                      alt="Youtube"
                    />
                  </a> */}
                </div>
                {/* <div className="bg-black h-full flex justify-center items-center">
                  <p className="font-raleway   whitespace-normal break-words uppercase  font-bold text-center text-[100px] xl:text-[160px] text-yellow">
                    ?
                  </p>
                </div> */}
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <div className="bg-yellow-600 p-1 lg:p-2 mx-auto w-[200px] lg:w-[250px] h-[200px] lg:h-[300px] ">
                    <img
                      className="w-full h-full object-cover"
                      src={Stream2}
                      alt="Stream"
                    />
                  </div>
                  <p className="text-center mt-3 text-white text-xl">
                    Bartmann
                  </p>
                </div>
                <div className="flex justify-center items-center mt-2 sm:mt-6">
                  <a
                    href="https://www.tiktok.com/@bartmann?_t=8cSA0MSvZUJ&_r=1"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      className="w-[30px] sm:w-[40px] mr-6 transition-all hover:translate-y-[-8px] duration-200 cursor-pointer"
                      src={Tiktok}
                      alt="Tiktok"
                    />
                  </a>
                  {/* <a
                    href="http://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      className="w-[30px] sm:w-[40px] transition-all hover:translate-y-[-8px] duration-200"
                      src={Youtube}
                      alt="Youtube"
                    />
                  </a> */}
                </div>
                {/* <div className="bg-black h-full flex justify-center items-center">
                  <p className="font-raleway   whitespace-normal break-words uppercase  font-bold text-center text-[100px] xl:text-[160px] text-yellow">
                    ?
                  </p>
                </div> */}
              </div>
              <div className="flex flex-col items-center">
              <div className= "border border-4 lg:border-8 border-yellow-600 border-solid w-[200px] lg:w-[250px] h-[200px] lg:h-[300px] flex justify-center items-center">
                  <p className="font-raleway whitespace-normal break-words uppercase font-bold text-center text-[100px] xl:text-[160px] text-yellow-600">
                    ?
                  </p>
              </div>
              <div className="flex justify-center items-center mt-4 sm:mt-6">
                  <a
                    href="https://www.tiktok.com/@bartmann?_t=8cSA0MSvZUJ&_r=1"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      className="w-[30px] sm:w-[40px] mr-6 transition-all hover:translate-y-[-8px] duration-200 cursor-pointer"
                      src={Tiktok}
                      alt="Tiktok"
                    />
                  </a>
                  {/* <a
                    href="http://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      className="w-[30px] sm:w-[40px] transition-all hover:translate-y-[-8px] duration-200"
                      src={Youtube}
                      alt="Youtube"
                    />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StreamPartner;
