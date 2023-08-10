/* eslint-disable react/prop-types */
import {useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";

const GetInTouchForm = ({ status, message, onSubmitted }) => {
  const [formDetail, setFormDetail] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    companyName: "",
  });
  const [isLoading, setLoading] = useState(false);
  const [reCaptchaCodeVerify, setRecaptchaCodeVerify] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formDetail.firstName !== "" &&
      formDetail.lastName !== "" &&
      formDetail.email !== "" &&
      formDetail.subject !== "" &&
      formDetail.message !== ""
    ) {
      setLoading(true);
      onSubmitted({
        EMAIL: formDetail.email,
        LNAME: formDetail.lastName,
        FNAME: formDetail.firstName,
        SUBJECT: formDetail.subject,
        MESSAGE: formDetail.message,
        COMPANYNA: formDetail.companyName,
      });
    }
  };
  useEffect(() => {
    if (status === "success") {
      setFormDetail({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        companyName: "",
        captchaCode: "",
        message: "",
      });
      setRecaptchaCodeVerify(null);
      setLoading(false);
      Swal.fire({
        title: "Congratulations",
        text: "Your form has been submitted!",
        icon: "success",
        timer: 3000,
      });
    } else if (status === "error") {
      setLoading(false);
      setRecaptchaCodeVerify(null);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  }, [status, message]);
  return (
    <>
      <form className="relative z-10" onSubmit={handleSubmit}>
        <div className="sm:flex pb-3.5	">
          <div className="sm:pr-1.5 pb-3.5 sm:pb-0 w-full">
            <input
              type="text"
              value={formDetail.firstName}
              onChange={(e) => {
                setFormDetail({
                  ...formDetail,
                  firstName: e.target.value,
                });
              }}
              required
              placeholder="first name"
              className="form_input text-xs xl:text-sm outline-none border border-1 border-transparent hover:border-blue focus:border-blue  w-full text-white  py-4 px-3.5 placeholder:text-white placeholder:uppercase font-poppins placeholder:opacity-50"
            />
          </div>
          <div className="sm:pl-1.5 w-full">
            <input
              type="text"
              value={formDetail.lastName}
              required
              onChange={(e) => {
                setFormDetail({
                  ...formDetail,
                  lastName: e.target.value,
                });
              }}
              placeholder="last name"
              className="form_input text-xs xl:text-sm outline-none border border-1 border-transparent hover:border-blue focus:border-blue w-full text-white  py-4 px-3.5 placeholder:text-white placeholder:uppercase font-poppins placeholder:opacity-50"
            />
          </div>
        </div>
        <div className="sm:flex pb-3.5	">
          <div className="sm:pr-1.5 pb-3.5 sm:pb-0 w-full">
            <input
              value={formDetail.email}
              type="email"
              required
              onChange={(e) => {
                setFormDetail({
                  ...formDetail,
                  email: e.target.value,
                });
              }}
              placeholder="email"
              className="form_input text-xs xl:text-sm w-full outline-none border border-1 border-transparent hover:border-blue focus:border-blue text-white  py-4 px-3.5 placeholder:text-white placeholder:uppercase font-poppins placeholder:opacity-50"
            />
          </div>
          <div className="sm:pl-1.5 w-full">
            <input
              type="tel"
              value={formDetail.subject}
              onChange={(e) => {
                setFormDetail({
                  ...formDetail,
                  subject: e.target.value,
                });
              }}
              required
              placeholder="Subject"
              className="form_input text-xs xl:text-sm w-full outline-none border border-1 border-transparent hover:border-blue focus:border-blue text-white  py-4 px-3.5 placeholder:text-white placeholder:uppercase font-poppins placeholder:opacity-50"
            />
          </div>
        </div>

        <div className="flex pb-3.5	">
          <div className="w-full">
            <input
              type="text"
              value={formDetail.companyName}
              required
              onChange={(e) => {
                setFormDetail({
                  ...formDetail,
                  companyName: e.target.value,
                });
              }}
              placeholder="Company Name"
              className="form_input text-xs xl:text-sm outline-none border border-1 border-transparent hover:border-blue focus:border-blue text-white w-full  py-4 px-3.5 placeholder:text-white placeholder:uppercase font-poppins placeholder:opacity-50"
            />
          </div>
        </div>
        <div className="flex pb-3.5	">
          <div className="w-full">
            <textarea
              value={formDetail.message}
              required
              onChange={(e) => {
                setFormDetail({
                  ...formDetail,
                  message: e.target.value,
                });
              }}
              placeholder="message"
              rows="4"
              className="form_input py-4 w-full text-white px-3.5 placeholder:uppercase font-poppins resize-none  outline-none border border-1 border-transparent hover:border-blue focus:border-blue placeholder:opacity-50 placeholder:text-white"
            />
          </div>
        </div>

        <div className="mt-4 mb-[33px]">
          <ReCAPTCHA
            className="recaptcha-box w-full mr-16 sm:mr-0"
            sitekey="6LdGbGwkAAAAAE8TmVdjmBo7ZiFGG7c4KD9EwVUw"
            onChange={(value) => setRecaptchaCodeVerify(value)}
          />
        </div>
        <button
          disabled={reCaptchaCodeVerify === null ? true : false}
          type="submit"
          className=" blue-btn-shadow hover:scale-105 transition-all ease-in-out duration-300 py-[5px] px-[21px] bg-[#2253F5] rounded-[39px] text-[14px] sm:text-base md:text-lg lg:text-xl text-white font-bold font-poppins  w-full "
        >
          {isLoading ? "Loading..." : " Submit"}
        </button>
      </form>
    </>
  );
};

export default GetInTouchForm;
