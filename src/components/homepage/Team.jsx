import { TeamData } from "../common/Helper"
import { LinkedIcon } from "../common/Icons"
import imdb_icon from "../../assets/images/svg/imdb_icon.svg";

const Team = () => {
  // function countWords(str) {
  //   return str.split(/\s+/).filter(word => word !== '').length;
  // }

  return (
    <>
      <section className="relative pt-20 sm:pt-28 md:pt-36 pb-[35px] sm:pb-[42px] md:pb-16">
        <div className="team-layer w-[300px] h-[800px] absolute -right-0 top-16 -z-[3]"></div>
        <div className="px-[12px] min-[480px]:px-[60px]">
          <h3 className="font-raleway team_left uppercase font-bold text-center text-2xl min-[480px]:text-3xl sm:text-4xl md:text-[40px] lg:text-[44px] xl:text-5xl text-white">
            the devomon Team
          </h3>
          <div className="text-center">
            <span className="contact_border md:w-[550px] h-[5px] w-full inline-block mt-5"></span>
          </div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-12 mt-16">
            {TeamData &&
              TeamData.map((data, index) => (
                <div key={index}>
                  <div className="">
                    <div className="flex sm:flex-col md:flex-row  items-center sm:items-start md:items-center gap-4 hover:scale-105 duration-300 transition-all ease-in-out">
                      <img className="max-w-[70px] md:max-w-[90px] lg:max-w-[117px] img_shadow" src={data.img} alt="team image" />
                      <div>
                        <div className="flex items-center mb-2">
                          <a
                            href={data.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedinAndIMD"
                            aria-describedby="LinkedinAndIMD"
                            className={`hover:scale-105  duration-300 ease-in-out transition-all ${data.class}`}
                            >
                            {" "}
                            {index === 6 ? (
                              <img className="max-w-[30px]" src={imdb_icon} alt="imdb" />
                            ) : (
                              <LinkedIcon />
                            )}
                          </a>
                          <div className="ms-[11px]">
                            <h3 className="font-raleway font-bold text-[#23CAFF] leading-5 text-sm lg:text-base">{data.name}</h3>
                            <p className="font-raleway font-medium text-[#2253F5] leading-5 text-sm">{data.title}</p>
                          </div>
                        </div>
                        {/* <p className={`text-white font-light font-poppins text-sm custom-scrollbar pe-2 ${countWords(data.desc) > 20 ? 'overflow-y-auto max-h-[80px] sm:max-h-[42px] md:max-h-[80px]' : ''}`}>
                          {data.desc}
                        </p> */}
                        <p className="text-white font-light font-poppins text-sm custom-scrollbar pe-2 overflow-y-auto max-h-[80px] sm:max-h-[42px] md:max-h-[80px]">
                          {data.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Team
