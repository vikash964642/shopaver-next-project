// import React from 'react'
import "./FormHome.css";

function FormHome() {
  return (
    <>
      <section className="my-24">
        <div className="border-solid border  border-black rounded-[28.94px] lg:w-[1011px] lg:mx-auto mx-4 w-auto shadow-platiniumcolor shadow-md pt-4 pb-4">
          <div className="">
            <p className="text-[24.73px] sm:text-[34.73px] font-medium text-primary text-center leading-[45px] pt-7">
              Schedule a free demo
            </p>
          </div>
          <div className="md:space-x-10 flex md:px-14 flex-col md:flex-row mx-5 md:mx-0 md:mt-7">
            <input
              type="text"
              className=" border-solid border border-webtext   placeholder-[#5F5F5F] md:w-[435.11px] h-[36px] md:h-[45.33px] mt-5 rounded-lg "
              style={{ paddingLeft: "18.33px" }}
              placeholder="Your Name *"
            />
            <input
              type="text"
              className=" border-solid border border-webtext  placeholder-[#5F5F5F] md:w-[435.11px] h-[36px]  md:h-[45.33px] mt-5 rounded-lg "
              style={{ paddingLeft: "18.33px" }}
              placeholder="Company Name "
            />
          </div>
          <div className="flex md:space-x-10 md:px-14 flex-col md:flex-row mx-5 md:mx-0 mt-5 md:mt-5">
            <input
              type="text"
              className="border-solid border border-webtext placeholder-[#5F5F5F] md:w-[435.11px] h-[36px]  md:h-[45.33px]  rounded-lg "
              style={{ paddingLeft: "18.33px" }}
              placeholder="Contact Number *"
            />
            <input
              type="text"
              className=" border-solid border border-webtext  placeholder-[#5F5F5F] md:w-[435.11px] h-[36px]  md:h-[45.33px] rounded-lg mt-5 md:mt-0"
              style={{ paddingLeft: "18.33px" }}
              placeholder="Business Email Address"
            />
          </div>
          <div className="md:mx-14 mx-5 mt-5 md:mt-8">
            <input
              type="text"
              className=" border-solid border border-webtext placeholder-[#5F5F5F] w-full sm:w-full h-[65px]  md:h-[81.03px] rounded-lg "
              style={{ paddingLeft: "18.33px", paddingBottom: "38px" }}
              placeholder="Your Message"
            />
          </div>
          <div className="flex justify-center items-center text-center  mx-[40px] mt-4  text-webtext">
            <p className=" text-xs md:text-base md:w-[48%]">
              Please fill up the details below & we will get in touch with you
              at the earliest.
            </p>
          </div>
          <div className="text-center sm:mt-10 mt-5 pb-12 md:pb-[72px]">
            <button
              type="button"
              className="bg-primary  sm:w-[460.97px] sm:h-[59.48px] rounded-[39.25px] w-[248px] h-[41px] text-xl md:text-[22.66px] text-white font-bold cursor-pointer"
            >
              Submit
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default FormHome;
