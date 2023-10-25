
import { VscChromeClose } from "react-icons/vsc";
const ComingSoonPopup = ({ setSoonPopup }) => {
  return (
    <>
      <div className="relative">
        <div
          onClick={() => {
            setSoonPopup(false);
            document.body.classList.remove("overflow-hidden");
          }}
          className="min-h-screen w-full bg-[#00000060] flex justify-center items-center"
        ></div>
        <div className="soon_popup custom-sm:w-[400px] w-[270px] custom-sm:h-[180px] h-[110px] bg-black flex justify-center items-center rounded-xl absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h2 className=" text-white font-bold ff_poppins custom-sm:text-[24px] text-[18px] uppercase">
            Coming Soon
          </h2>
          <button
            onClick={() => {
              setSoonPopup(false);
              document.body.classList.remove("overflow-hidden");
            }}
            className="absolute top-3 right-3 custom-sm:text-[30px] text-[24px] font-semibold text-white cursor-pointer"
          >
            <VscChromeClose />
          </button>
        </div>
      </div>
    </>
  );
};

export default ComingSoonPopup;
