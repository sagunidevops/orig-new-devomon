import { Link } from "react-router-dom";
import { AboutCardData } from "../common/Helper";

const AboutCard = () => {
  return (
    <>
      <div className=" -mt-[23%] xs:-mt-[18%] sm:-mt-[24%] md:-mt-[19%] lg:-mt-[14%] xl:-mt-[11%] 2xl:-mt-[14%] relative z-[11]">
        {AboutCardData.map((value, index) => {
          return (
            <Link
              to={value.linkValue}
              key={index}
              // target={`${value.title === "News" ? "_blank" : ""}`}
              target="_blank"
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
                  <span className="about_card_underline w-[90px] sm:w-[180px] lg:w-[278px] h-[2px] sm:h-[3px] absolute top-[70%] sm:top-[65%] lg:top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 duration-500"></span>
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
    </>
  );
};

export default AboutCard;
