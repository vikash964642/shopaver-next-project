"use client";
 
import Image from "next/image";
 
export default function BusinessHeroSection() {
  return (
    <section className="mx-auto  max-w-[115.625rem]  my-[7.5rem]">
      <div className="mx-32 px-3 xl:px-0">
      <div className="md:h-[27.5rem] flex flex-col items-center overflow-hidden rounded-[1.3125rem] lg:rounded-[1.875rem] border-[0.04375rem] lg:border border-[#DCD8FF] bg-[#f6f2fb]  md:flex-row">

        {/* LEFT CONTENT */}
        <div className="w-full md:w-[50%] px-[1.25rem] md:px-0 md:pl-[1.25rem]  lg:pl-[4.625rem]">
          <h2 className="text-3xl font-bold leading-[2.8125rem] tracking-tight text-[#5B14D1] lg:text-4xl font-bricolage">
            Ready to Take Control of Your Business?
          </h2>
 
          <p className="mt-6 text-[0.812rem] md:text-[0.938rem] lg:text-lg leading-[1.125rem] md:leading-[1.625rem] text-gray-600">
            Stop using multiple tools. Manage your entire business in one
            place with Shopaver. Join{" "}
            <span className="font-semibold text-[#5B14D1]">
              10,000+ MSMEs
            </span>{" "}
            who trust Shopaver to simplify business operations, save time, and
            grow faster.
          </p>
 
          {/* BUTTONS */}
<div className="mt-8 flex flex-row flex-wrap gap-4">
 
  <button
    className="
      h-[2.75rem] lg:h-[3.375rem]
      w-[8.75rem] md:w-[10.3125rem] lg:w-[11rem]
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
    Start Free Trial
  </button>
 
  <button
    className="
      h-[2.75rem] lg:h-[3.375rem]
      w-[8.75rem] md:w-[10.3125rem] lg:w-[11rem]
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
      </div>
    </section>
  );
}