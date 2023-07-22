import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import latest_news from "../../assets/images/homepageImages/webp/latest_news_slides.webp";

const LatestNews = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="min-h-screen bg-latestNews_bg_img bg-no-repeat bg-cover pt-[120px] pb-[205px] container">
        <p className="text-center text-white font-bold text-4xl pb-[51px]">
          Latest news
        </p>
        <div className="max-w-[485px]">
          <Slider {...settings}>
            <img
              className="max-w-[485px] px-3"
              src={latest_news}
              alt="news-slider-img"
            />
            <img
              className="max-w-[485px] px-3"
              src={latest_news}
              alt="news-slider-img"
            />
            <img
              className="max-w-[485px] px-3"
              src={latest_news}
              alt="news-slider-img"
            />
            <img
              className="max-w-[485px] px-3"
              src={latest_news}
              alt="news-slider-img"
            />
          </Slider>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
