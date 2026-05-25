"use client";
 
import Image from "next/image";
 
export default function BusinessHeroSection() {
  return (
    <section className="lg:max-w-5xl xl:max-w-[76.25rem] xl2:max-w-[90rem] px-[46.5px] lg:px-[62px] mx-auto my-[90px] lg:my-[120px] xl:my-[135px] xl2:my-[150px]">
     
      <div className="md:h-[27.5rem] xl:h-[500px] xl2:h-[550px] flex flex-col items-center overflow-hidden rounded-[1.3125rem] lg:rounded-[1.875rem] border-[0.04375rem] lg:border border-[#DCD8FF] bg-[#f6f2fb]  md:flex-row">

        {/* LEFT CONTENT */}
        <div className="w-full md:w-[50%] px-[1.25rem] md:px-0 md:pl-[1.25rem]  lg:pl-[4.625rem]">
          <h2 className="text-3xl font-bold leading-[2.8125rem] tracking-tight text-[#5B14D1] md:text-[27px] lg:text-4xl xl:text-[43.5px] xl2:text-[52px] xl:leading-[54px] xl2:leading-[65.75px] font-bricolage">
            Ready to Take Control of Your Business?
          </h2>
 
          <p className="lg:pt-[12.5px] text-[0.812rem] md:text-[0.85rem] lg:text-lg xl:text-[21.77pxpx] xl2:text-[26.3px] leading-[1.125rem] md:leading-[1.625rem] xl:leading-[31.4px] xl2:leading-[38px] text-gray-600">
            Stop using multiple tools. Manage your entire business in one
            place with Shopaver. Join{" "}
            <span className="font-semibold text-[#5B14D1]">
              10,000+ MSMEs
            </span>{" "}
            who trust Shopaver to simplify business operations, save time, and
            grow faster.
          </p>
 
          {/* BUTTONS */}
<div className="mt-8 xl:mt-[28px] xl2:mt-[42px] flex flex-row flex-wrap gap-4">
 
  <button
    className="
      h-[2.51rem] lg:h-[3.34rem] xl2:h-[78.5px]
      w-[8.75rem]  lg:w-[11rem] xl2:w-[255px]
      rounded-[8.2px] lg:rounded-xl
      bg-[#5B14D1]
      
      text-sm lg:text-base xl2:text-[23.3px]
      font-semibold
      text-white
      transition-all
      duration-300
      hover:scale-[1.02]
      hover:bg-[#4b0fc0]
    "
  >
    Start Free Trial
  </button>
 
  <button
    className="
      h-[2.51rem] lg:h-[3.375rem] xl2:h-[78.5px]
      w-[8.75rem]  lg:w-[11rem] xl2:w-[255px]
      rounded-[8.2px] lg:rounded-xl
      border border-gray-300
      bg-white
      
      text-sm lg:text-base xl2:text-[23.3px]
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
        <div className="relative flex items-end justify-center md:justify-end  h-full w-full md:w-[50%]">
          <Image
            src="/newImage/businessHeroSection.webp"
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