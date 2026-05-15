"use client";
 
import Image from "next/image";
 
export default function BusinessHeroSection() {
  return (
    <section className="w-full px-4 my-[130px] md:px-8 lg:px-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-10 overflow-hidden rounded-[32px] border border-purple-200 bg-[#f6f2fb] px-6 py-10 md:flex-row md:px-12 md:py-14">
       
        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold leading-[45px] tracking-tight text-[#5B14D1] md:text-4xl font-bricolage">
            Ready to Take Control of Your Business?
          </h2>
 
          <p className="mt-6 text-[13px] md:text-lg leading-[18px] md:leading-[26px] text-gray-600">
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
      h-[44px] md:h-[54px]
      min-w-[140px] md:min-w-[176px]
      rounded-xl
      bg-[#5B14D1]
      px-5 md:px-8
      text-sm md:text-base
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
      h-[44px] md:h-[54px]
      min-w-[140px] md:min-w-[176px]
      rounded-xl
      border border-gray-300
      bg-white
      px-5 md:px-8
      text-sm md:text-base
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
        <div className="relative flex w-full max-w-md items-end justify-center">
          <Image
            src="/newImage/businessHeroSection.webp"
            alt="Business Management"
            width={500}
            height={500}
            priority
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}