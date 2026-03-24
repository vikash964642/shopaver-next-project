
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

function RetailBusinessCard({ onePlatform = [] }) {
 const [visibleCount, setVisibleCount] = useState(2);
const [isBeginning, setIsBeginning] = useState(true);
const [isEnd, setIsEnd] = useState(false);
  const filteredData = onePlatform.filter(
    (item) => item.heading && item.description
  );

  if (filteredData.length === 0) return null;

  return (
    <section className="bg-[#F9F4FF] mt-[100px] py-[41px] lg:pt-[68px] lg:pb-[81px]">
      <div className="max-w-5xl px-[22px] xl:px-0 mx-auto">

        {/* TITLE */}
        <h2 className="text-[#5801B7] text-center text-[26px] lg:text-[30px] font-semibold">
          One platform to Run Every type of Retail Business
        </h2>

        {/* ================= MOBILE ================= */}
        <div   className={`grid grid-cols-1 sm:grid-cols-2 gap-[10.5px] lg:hidden mt-10 ${
    filteredData.length === 1 ? "justify-items-center" : ""
  }`}>
          {filteredData.slice(0, visibleCount).map((item, index) => (
    <div key={index}>
      <Card item={item} />
    </div>
  ))}
        </div>

        {/* SHOW MORE BUTTON */}
      {visibleCount < filteredData.length && (
  <div className="flex justify-center mt-6 lg:hidden">
    <div
      onClick={() => setVisibleCount(prev => prev + 2)}
      className="flex justify-center items-center gap-[5px] w-[111px] h-11 rounded-xl bg-[#5801B7] cursor-pointer"
    >
      <p className="text-white text-[16px] font-medium">View More</p>
    </div>
  </div>
)}
    <div className="hidden lg:block mt-10">
          <Swiper
          onSlideChange={(swiper) => {
  setIsBeginning(swiper.isBeginning);
  setIsEnd(swiper.isEnd);
}}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={2}
            loop={false}
            navigation={{
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  }}
          >
            {filteredData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="w-full max-w-[500px] mx-auto">
                  <Card item={item} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
                 <div className="flex justify-center gap-[12.75px] mt-[10px] lg:mt-[40px]">

        <div
           
           className={`custom-prev h-[28px] w-[28px] lg:h-[36.36px] lg:w-[36.36px] rounded-full border-2 border-[#C4C4C4] text-[#C4C4C4]  text-[15px] lg:text-[18px]  flex justify-center items-center ${
    isBeginning ? "cursor-not-allowed" : "cursor-pointer hover:border-[#5801B7] hover:text-[#5801B7]"
  }`}
         >
           <i className="fa-solid fa-angle-left"></i>
         </div>
         <div
        
           className={`custom-next w-[28px] h-[28px] lg:h-[36.36px] lg:w-[36.36px] rounded-full border-2 border-[#C4C4C4] text-[#C4C4C4]  text-[15px] lg:text-[18px] flex justify-center items-center ${
    isEnd ? "cursor-not-allowed" : "cursor-pointer hover:border-[#5801B7] hover:text-[#5801B7]"
  }`}
        >
           <i className="fa-solid fa-angle-right"></i>
        </div>

      </div>
        </div>
      </div>
    </section>
  );
}

/* ================= CARD ================= */
function Card({ item }) {
  const BASE_IMAGE_URL = "https://media-shopaver-uat.s3.amazonaws.com";

  return (
    <div className="flex items-center h-full gap-[14.5px] lg:gap-[35px] bg-white rounded-[25.47px] border border-[#EBD9FF] p-4">

      <div className="flex flex-col w-[50%]">
        <p className="text-[#5801B7] text-[18px] font-medium break-words">
          {item.heading}
        </p>

        <p className="pt-[5px] text-[#525252] text-[10px] md:text-[12px] break-words">
          {item.description}
        </p>

        <Link
          href={`/service/${item.slug}`}
          className="mt-[20px] rounded-[30px] bg-[#E6D2FF] w-[90px] h-[27px] flex justify-center items-center"
        >
          <p className="text-[#5801B7] text-[10px]">Read More</p>
        </Link>
      </div>

      <div className="w-[50%] flex justify-end items-center">
        <Image
          src={
            item.image
              ? `${BASE_IMAGE_URL}${item.image}`
              : "/landingPage/BusinessSolutionSliderImg6.webp"
          }
          alt={item.heading}
          width={218}
          height={227}
          className="max-[375px]:h-auto max-[375px]:w-full w-[147px] h-[153px] lg:w-[218px] lg:h-[227px]"
        />
      </div>

    </div>
  );
}

export default RetailBusinessCard;