


"use client";
 
import Image from "next/image";
 
export default function BusinessHeroSection() {
  return (
    <section className="max-w-[90rem] flex justify-center px-[12.5px]  md:px-[46.5px] lg:px-[60px] xl2:px-[175px] mx-auto my-[90px] lg:my-[120px] xl:my-[135px] xl2:my-[150px]">
     
      <div className="max-w-[400px] md:max-w-full md:h-[328px] lg:h-[420px] xl2:h-[500px] xl3:h-[550px] pt-[30px] md:pt-0 flex flex-col items-center gap-[45px] md:gap-0 overflow-hidden rounded-[1.3125rem] lg:rounded-[1.875rem] border-[0.04375rem] lg:border border-[#DCD8FF] bg-[#f6f2fb]  md:flex-row">

        {/* LEFT CONTENT */}
        <div className="w-full md:w-[60%] px-[1.25rem] md:px-0 md:pl-[24px] lg:pl-[32px] xl2:pl-[36px]  xl3:pl-[45px]">
          <h2 className="text-3xl font-bold leading-[2.8125rem] tracking-tight text-[#5B14D1] md:text-[27px] lg:text-4xl xl2:text-[43.5px] xl3:text-[52px] md:leading-[33px] xl2:leading-[54px] xl3:leading-[65.75px] font-bricolage">
           Get Your WhatsApp Business Verified Today!
          </h2>
 
          <p className="lg:pt-[12.5px] text-[0.85rem] lg:text-lg xl2:text-[21.77pxpx] xl3:text-[26.3px] leading-[19.5px] lg:leading-[25.5px] xl2:leading-[31.4px] xl3:leading-[38px] text-gray-600">
            Build trust, increase customer engagement, and strengthen your brand identity with WhatsApp Blue Tick Verification.
          </p>
 
          {/* BUTTONS */}
<div className="mt-8 xl:mt-[28px] xl2:mt-[42px] flex flex-row flex-wrap gap-4">
 
  <button
    className="
      h-[2.5rem] lg:h-[3.33rem] xl2:h-[65px] xl3:h-[78.5px]
      w-[8.2rem]  lg:w-[11rem] xl2:w-[200px] xl3:w-[255px]
      rounded-[8.2px] lg:rounded-xl
      bg-[#5B14D1]
      
     text-[12px] lg:text-base xl2:text-[19px] xl3:text-[23px]
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
       h-[2.5rem] lg:h-[3.33rem] xl2:h-[65px] xl3:h-[78.5px]
      w-[8.2rem]  lg:w-[11rem] xl2:w-[200px] xl3:w-[255px]
      rounded-[8.2px] lg:rounded-xl
      border border-gray-300
      bg-white
      
      text-[12px] lg:text-base xl2:text-[19px] xl3:text-[23px]
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
        <div className="relative flex items-end justify-center md:justify-end  h-full w-full md:w-[40%]">
          <Image
            src="/newImage/businessWhatsappHeroSection.webp"
            alt="Business Management"
            width={385}
            height={417}
            priority
            className="w-full md:h-[312px] lg:h-[400px] xl2:h-auto"
          />
        </div>
      </div>

    </section>
  );
}