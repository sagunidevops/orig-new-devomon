/* eslint-disable react/prop-types */
import { useEffect } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import GetInTouchForm from "./../common/GetInTouchForm";

const TouchForm = ({ contactToRef }) => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let touchformZoom = gsap.timeline({
      scrollTrigger: {
        trigger: ".touchform_zoom",
        start: "top 90%",
        end: "bottom top",
        immediateRender: false,
      },
    });
    touchformZoom.fromTo(
      ".touchform_zoom",
      {
        scale: 0,
        autoAlpha: 0,
      },
      {
        scale: 1,
        autoAlpha: 1,
        ease: "back(1)",
        duration: 1,
      }
    );
  }, []);

  return (
    <>
      <section
        ref={contactToRef}
        className="py-20 sm:py-20 md:py-24 relative"
        id="contact"
      >
        {/* FORM HEADING  */}
        <div className="container  relative z-10">
          <div className="">
            <h3 className="font-raleway touchform_zoom uppercase  font-bold text-center  text-3xl sm:text-4xl md:text-[40px] lg:text-[44px] xl:text-5xl text-white">
              Get in Touch
            </h3>
            <div className="text-center">
              <span className="contact_border md:w-[471px] w-full inline-block"></span>
            </div>
          </div>

          {/* FORM SECTION HERE */}
          <div className="flex justify-center  touchform_zoom pt-5">
            <div className="contact_form_bg sm:p-6 p-4 w-full sm:max-w-[652px] relative ">
              <MailchimpSubscribe
                url="https://drivesfn.us14.list-manage.com/subscribe/post?u=c2d03db1a3ab51904dc274156&amp;id=7e74a68b3e&amp;f_id=0025a1e0f0"
                render={({ subscribe, status, message }) => (
                  <div>
                    <GetInTouchForm
                      message={message}
                      status={status}
                      contactToRef={contactToRef}
                      onSubmitted={(formData) => subscribe(formData)}
                    />
                  </div>
                )}
              />
              <div className="team-layer w-full md:w-[700px] lg:w-[820px] h-[250px] absolute left-1/2 -translate-x-[50%] top-[40%] "></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TouchForm;
