"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { resolveAssetUrl } from "@/lib/imageUrl";
const listData=[
    {
        title:"Restaurant Stores",
        description:"Shopaver helps restaurants streamline orders, manage tables, track inventory, and handle billing effortlessly.",
        image:''
    },
      {
        title:"Footwear",
        description:"Shopaver empowers footwear stores to manage inventory by size, style, and brand with real-time stock tracking.",
        image:''
    },
      {
        title:"Cosmetic Store",
        description:"Shopaver helps cosmetic stores manage product variants, expiry dates, and fast-moving SKUs with precision.",
        image:''
    },
      {
        title:"Accessories Store",
        description:"Shopaver enables accessories stores to efficiently manage diverse SKUs, track fast-moving items, and simplify billing.",
        image:''
    },
      {
        title:"Cart and Kiosk",
        description:"Shopaver helps carts and kiosks manage quick billing, track daily sales, and monitor inventory with ease.",
        image:''
    },
      {
        title:"Spas & Salon",
        description:"Shopaver helps spas and salons manage appointments, track service-wise revenue, and maintain client records effortlessly.",
        image:''
    },
]
function LandingPageList() {
  const [visibleCount, setVisibleCount] = useState(2);


 
   
  return (
    <section className="bg-[#E3E3FF] mt-[100px] py-[41px] lg:py-[62px]">
      <div className="max-w-5xl px-[22px] xl:px-0 mx-auto">
        {/* TITLE */}
        <h2 className="text-[#5801B7] text-center text-[30px] lg:text-[40px] font-bold lg:font-medium font-bricolage">
         Built to Scale Across Every Industry
        </h2>

        {/* ================= MOBILE ================= */}
        {/* <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-[20px] lg:hidden mt-10 ${
            listData.length === 1 ? "justify-items-center" : ""
          }`}
        >
          {listData.slice(0, visibleCount).map((item, index) => (
            <div key={index} className="h-[240px]">
              <Card item={item} />
            </div>
          ))}
        </div>

        
        {visibleCount < listData.length && (
          <div className="flex justify-center mt-6 lg:hidden">
            <div
              onClick={() => setVisibleCount((prev) => prev + 2)}
              className="flex justify-center items-center gap-[5px] w-[111px] h-11 rounded-xl bg-[#5801B7] cursor-pointer"
            >
              <p className="text-white text-[16px] font-medium">View More</p>
            </div>
          </div>
        )} */}
          <div className="block lg:hidden mt-9">
          
          <Swiper
  modules={[Navigation]}
  spaceBetween={20}
  slidesPerView={1}        // ✅ 1 slide = 1 group of 4
  slidesPerGroup={1}
  loop={true}
  navigation={{
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  }}
>
  {/* ✅ Har 2 items ka ek group banao */}
  {Array.from({ length: Math.ceil(listData.length / 2) }).map((_, groupIndex) => (
    <SwiperSlide key={groupIndex}>
      <div className="grid grid-cols-1 gap-[20px]">
        {listData.slice(groupIndex * 2, groupIndex * 2 + 2).map((item, index) => (
          <div key={index} className="h-[240px]">
            <Card item={item} />
          </div>
        ))}
      </div>
    </SwiperSlide>
  ))}
</Swiper>
          <div className="flex justify-center gap-[12.75px] mt-[10px] lg:mt-[40px]">
            <div
              className="custom-prev h-[28px] w-[28px] lg:h-[36.36px] lg:w-[36.36px] rounded-full border-2 border-[#C4C4C4] text-[#C4C4C4]  text-[15px] lg:text-[18px]  flex justify-center items-center cursor-pointer hover:border-[#5801B7] hover:text-[#5801B7] ">
              <i className="fa-solid fa-angle-left"></i>
            </div>
            <div
              className="custom-next w-[28px] h-[28px] lg:h-[36.36px] lg:w-[36.36px] rounded-full border-2 border-[#C4C4C4] text-[#C4C4C4]  text-[15px] lg:text-[18px] flex justify-center items-center cursor-pointer hover:border-[#5801B7] hover:text-[#5801B7]">
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </div>
        <div className="hidden lg:block mt-9">
          
          <Swiper
  modules={[Navigation]}
  spaceBetween={20}
  slidesPerView={1}        // ✅ 1 slide = 1 group of 4
  slidesPerGroup={1}
  loop={true}
  navigation={{
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  }}
>
  {/* ✅ Har 2 items ka ek group banao */}
  {Array.from({ length: Math.ceil(listData.length / 4) }).map((_, groupIndex) => (
    <SwiperSlide key={groupIndex}>
      <div className="grid grid-cols-2 gap-[20px]">
        {listData.slice(groupIndex * 4, groupIndex * 4 + 4).map((item, index) => (
          <div key={index} className="h-[250px]">
            <Card item={item} />
          </div>
        ))}
      </div>
    </SwiperSlide>
  ))}
</Swiper>
          <div className="flex justify-center gap-[12.75px] mt-[10px] lg:mt-[40px]">
            <div
              className="custom-prev h-[28px] w-[28px] lg:h-[36.36px] lg:w-[36.36px] rounded-full border-2 border-[#C4C4C4] text-[#C4C4C4]  text-[15px] lg:text-[18px]  flex justify-center items-center cursor-pointer hover:border-[#5801B7] hover:text-[#5801B7] ">
              <i className="fa-solid fa-angle-left"></i>
            </div>
            <div
              className="custom-next w-[28px] h-[28px] lg:h-[36.36px] lg:w-[36.36px] rounded-full border-2 border-[#C4C4C4] text-[#C4C4C4]  text-[15px] lg:text-[18px] flex justify-center items-center cursor-pointer hover:border-[#5801B7] hover:text-[#5801B7]">
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
  
  return (
    <div className="flex items-stretch gap-[14.5px] lg:gap-[35px] bg-white rounded-[25.47px] border border-[#EBD9FF] py-[13px] pl-[20.5px] pr-[12.7px] h-full">
      {/* LEFT CONTENT */}
      <div className="flex flex-col w-[50%] justify-center">
     
          <p className="text-[#3C3939] text-[18px] font-medium break-words line-clamp-2 font-bricolage">
            {item.title}
          </p>
         <p className="pt-[5.5px] text-[#666] text-[16px] font-normal leading-normal font-dm-sans line-clamp-5">{item.description}</p>
      

        <button
         
          className="mt-[20px] rounded-[30px] bg-[#E6D2FF] w-[97px] h-[30px] flex justify-center items-center gap-[4.5px]"
        >
          <p className="text-[#5801B7] font-normal lg:font-medium text-[10.5px] lg:text-[12px]">Read More</p>
          <div className="h-[18px] w-[18px] rounded-full bg-[#FFF] flex justify-center items-center ">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="8" viewBox="0 0 11 8" fill="none">
  <path d="M10.3536 4.03519C10.5488 3.83993 10.5488 3.52335 10.3536 3.32809L7.17157 0.146107C6.97631 -0.0491549 6.65973 -0.0491549 6.46447 0.146107C6.2692 0.341369 6.2692 0.657952 6.46447 0.853214L9.29289 3.68164L6.46447 6.51007C6.2692 6.70533 6.2692 7.02191 6.46447 7.21718C6.65973 7.41244 6.97631 7.41244 7.17157 7.21718L10.3536 4.03519ZM0 3.68164L-4.37114e-08 4.18164L10 4.18164L10 3.68164L10 3.18164L4.37114e-08 3.18164L0 3.68164Z" fill="#5801B7"/>
</svg>
          </div>
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-[50%] flex justify-end items-center">
        <Image
          src={resolveAssetUrl(
            item.image,
            "/landingPage/BusinessSolutionSliderImg6.webp",
          )}
          alt={item.keyword}
          width={218}
          height={227}
          className="rounded-[11px] w-full h-full object-contain"
        />
      </div>
    </div>
  );
}

export default LandingPageList;
