/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import latest_news_slider_img from "../../assets/images/homepageImages/webp/latest_news_slides.webp";
import { Faq_arrow } from "../common/Icons";
import moment from "moment";
import NewsSkellton from "../common/NewsSkellton";
const News2 = ({ newsDataValue, loading }) => {
  return (
    <>
      <section className="bg-latestNews_bg_img bg-no-repeat bg-cover py-14 xl:pt-[120px] xl:pb-[205px] overflow-hidden scroll_hidden">
        <div className="container">
          <p className="text-center text-white font-bold text-4xl pb-[30px] xl:pb-[51px] uppercase">
            Latest news
          </p>
          <div className="flex flex-col xl:flex-row bg-latestNews_bg_color items-center bg-cover rounded-3xl xl:h-[481px] 2xl:h-[564px] bg_faq">
            <div className="flex flex-col xl:flex-row items-center rounded-[12px] sm:w-10/12 lg:w-[45%] 2xl:w-[42.5%] px-3 md:px-0 relative mt-4 md:mt-9 xl:mt-0 h-full">
              <img
                className="w-full rounded-[23px] h-full"
                src={latest_news_slider_img}
                alt="latest_news_slider_img"
              />
            </div>
            <div className="w-11/12 md:w-10/12 xl:w-[53%] xl:ps-8 h-[420px] 2xl:h-[500px] overflow-x-hidden overflow-y-scroll mt-10 xl:mt-0">
              <div>
                {newsDataValue &&
                  newsDataValue.slice(0, 5).map((items, index) => {
                    return (
                      <>
                        {loading ? (
                          <NewsSkellton />
                        ) : (
                          <Link
                            key={index}
                            target="_blank"
                            to={`${items.link}`}
                          >
                            <div className="faq-wrapper cursor-pointer text-white border-b border-gray-500 pb-3 font-raleway">
                              <p className="text-[12px] sm:text-sm md:text-base font-raleway text-white pt-3">
                                {moment(items && items.created).format("MMM Do")}
                              </p>
                              <div className="flex justify-between">
                                <div>
                                  <h3 className="flex items-center justify-between text-base sm:text-lg font-semibold font-raleway text-white">
                                    {items.title}
                                  </h3>
                                  <p className="text-[12px] sm:text-sm md:text-base mt-1 lg:mt-3 font-raleway text-white">
                                    {items.para}
                                  </p>
                                </div>
                                <div>
                                  <Faq_arrow />
                                </div>
                              </div>
                            </div>
                          </Link>
                        )}
                      </>
                    );
                  })}
                <div className="text-end mt-6 mb-8 xl:mb-0">
                  <button
                    type="submit"
                    className=" blue-btn-shadow transition-all ease-in-out duration-300 py-[5px] px-[21px] bg-[#F8C112] hover:bg-transparent border border-[4px] border-[#CEA20C] rounded-[39px] text-sm sm:text-base md:text-lg lg:text-xl text-white font-bold font-poppins "
                  >
                    Show more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News2;
