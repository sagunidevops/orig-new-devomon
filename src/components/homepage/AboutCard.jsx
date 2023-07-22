import { AboutCardData } from "../common/Helper";

const AboutCard = () => {
  return (
    <>
      <div>
        {AboutCardData.map((value, index) => {
          return (
            <div
              className="relative overflow-hidden duration-500 about_card_outline"
              key={index}
            >
              <a href="#" className="about_card_bg">
                <img
                  className="w-full about_card_img duration-500"
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
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AboutCard;
