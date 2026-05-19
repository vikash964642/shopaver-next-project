"use client";
 
import Image from "next/image";
 
export default function BusinessHeroSection() {
  return (
    <section className="mx-auto max-w-5xl w-full px-3 xl:px-0 my-[130px]">
      <div className="md:h-[450px] flex flex-col items-center overflow-hidden rounded-[21px] lg:rounded-[30px] border-[0.7px] lg:border border-[#DCD8FF] bg-[#f6f2fb]  md:flex-row">
       
        {/* LEFT CONTENT */}
        <div className="w-full md:w-[50%] px-[20px] md:px-0 md:pl-[20px]  lg:pl-[74px]">
          <h2 className="text-3xl font-bold leading-[45px] tracking-tight text-[#5B14D1] lg:text-4xl font-bricolage">
           Get Your WhatsApp Business Verified Today!
          </h2>
 
          <p className="mt-6 text-[13px] md:text-[15px] lg:text-lg leading-[18px] md:leading-[26px] text-[#525252]">
           Build trust, increase customer engagement, and strengthen your brand identity with WhatsApp Blue Tick Verification.
          </p>
 
          {/* BUTTONS */}
<div className="mt-8 flex flex-row flex-wrap gap-4">
 
  <button
    className="
      h-[44px] lg:h-[54px]
      w-[140px] md:w-[165px] lg:w-[176px]
      rounded-xl
      bg-[#5B14D1]
      
      text-sm lg:text-base
      font-semibold
      text-white
      transition-all
      duration-300
      hover:scale-[1.02]
      hover:bg-[#4b0fc0]
    "
  >
    Apply Now
  </button>
 
  <button
    className="
      h-[44px] lg:h-[54px]
      w-[140px] md:w-[165px] lg:w-[176px]
      rounded-xl
      border border-gray-300
      bg-white
      
      text-sm lg:text-base
      font-semibold
      text-gray-700
      transition-all
      duration-300
      hover:border-[#5B14D1]
      hover:text-[#5B14D1]
    "
  >
    Schedule a Demo
  </button>
 
</div>
        </div>
 
        {/* RIGHT IMAGE */}
        <div className="pr-[20px] flex items-end justify-center md:justify-end  h-full w-full md:w-[50%]">
          <Image
            src="/newImage/businessWhatsappHeroSection.webp"
            alt="Business Management"
            width={385}
            height={417}
            priority
            className=""
          />
        </div>
      </div>
    </section>
  );
}