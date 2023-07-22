import { LinkedIcon } from "./Icons";
import Youtube from "../../assets/images/webp/youtube.webp";

const TeamSliderCard = ({ obj, index }) => {
  return (
    <>
      <div className="text-center focus:outline-none hover:scale-110 duration-300 ease-in-out transition-all">
        <img
          className="max-w-[100px] sm:max-w-[130px] mx-auto mb-6 rounded-full"
          src={obj.img}
          alt="team-slider"
        />
        <h2 className="text-white text-xs sm:text-sm md:text-base uppercase font-bold font-raleway">
          {obj.name}
        </h2>
        <p className="text-xs opacity-70 text-white font-poppins sm:text-sm md:text-base my-1 uppercase">
          {obj.title}
        </p>
        <a
          href={obj.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedinAndYoutube"
          aria-describedby="LinkedinAndYoutube"
          className={` ${obj.class} flex justify-center hover:scale-110  duration-300 ease-in-out transition-all`}
        >
          {index === 4 ? (
            <img className="max-w-[30px]" src={Youtube} alt="Youtube" />
          ) : (
            <LinkedIcon />
          )}
        </a>
      </div>
    </>
  );
};

export default TeamSliderCard;
