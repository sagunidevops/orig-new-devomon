/* eslint-disable react/prop-types */
import { CrossIcon} from "./Icons";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const ComingSoonModal = ({
  isOpenComingSoonModal,
  setIsOpenComingSoonModal,
}) => {
  return (
    <>
      <Transition appear show={isOpenComingSoonModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[99999999]"
          onClose={() => {
            setIsOpenComingSoonModal(false);
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-[#0D1014CC]" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div
              className="flex min-h-full items-center justify-center text-center"
              onClick={() => {
                setIsOpenComingSoonModal(false);
              }}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="overflow-hidden popup_shadow transition-all">
                  <div className="max-w-[90%]  sm:max-w-[700px]  bg-[#0D1014] text-center py-9 px-3 sm:px-10 md:px-14 z-10 relative rounded-xl mx-auto text-white popup_shadow">
                    <div
                      className="absolute top-5 right-4 cursor-pointer"
                      onClick={() => {
                        setIsOpenComingSoonModal(false);
                      }}
                    >
                      <CrossIcon />
                    </div>
                    <h4 className="mt-5 text-base sm:text-xl uppercase font-raleway font-bold mb-4">
                      Coming Soon...
                    </h4>
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

export default ComingSoonModal;
