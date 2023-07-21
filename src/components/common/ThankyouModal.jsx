/* eslint-disable react/prop-types */
import { CrossIcon } from "./Icons";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
const ThankyouModal = ({
  isOpenThankYouModal,
  setIsOpenThankYouModal,
  ThankyouModalText,
}) => {
  const pathName = window.location.pathname;

  return (
    <>
      {" "}
      <Transition appear show={isOpenThankYouModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[99999999]"
          onClose={() => {
            setIsOpenThankYouModal(false);
          }}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-[#0D1014CC]" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div
              className="flex min-h-full items-center justify-center text-center"
              onClick={() => {
                setIsOpenThankYouModal(false);
              }}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="    transition-all">
                  <div
                    className={` max-w-[90%]  sm:max-w-[600px]  bg-[#0D1014] text-center py-9 px-3 sm:px-10 md:px-14 z-10 relative rounded-xl mx-auto text-white  ${
                      pathName && pathName === "/"
                        ? "popup_shadow"
                        : "popup_shadow_two"
                    }`}>
                    <div
                      className="absolute top-5 right-4 cursor-pointer"
                      onClick={() => {
                        setIsOpenThankYouModal(false);
                      }}>
                      <CrossIcon />
                    </div>

                    <h4 className="  text-xl sm:text-2xl md:text-[28px] lg:text-3xl xl:text-[32px]  font-raleway font-bold mb-4">
                      {ThankyouModalText.heading}
                    </h4>
                    <h5 className="mb-3 text-sm sm:text-base md:text-lg lg:text-xl  font-raleway font-bold text-yellow ">
                      {ThankyouModalText.title}
                    </h5>
                    {ThankyouModalText.para === "" ? (
                      ""
                    ) : (
                      <p className="font-poppins text-xs sm:text-sm md:text-base">
                        {ThankyouModalText.para}
                      </p>
                    )}
                    <div className=" flex justify-center mt-6">
                      <button
                        type="button"
                        onClick={() => {
                          setIsOpenThankYouModal(false);
                        }}
                        className="border-4 border-[#cea104] bg-[#fcb90a] h-[30px] sm:h-[40px] xl:h-[50px] flex items-center px-2 sm:px-[25px] lg:px-[28px] rounded-full  text-white font-bold  font-Comic text-[10px] sm:text-sm xl:text-xl ease-in-out duration-200 whitespace-nowrap hover:scale-105">
                        Ok
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ThankyouModal;
