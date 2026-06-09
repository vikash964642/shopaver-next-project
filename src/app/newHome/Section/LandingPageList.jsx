"use client";

import { useState,useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { resolveAssetUrl } from "@/lib/imageUrl";
// const listData=[
//     {
//         title:"Restaurant Stores",
//         description:"Shopaver helps restaurants streamline orders, manage tables, track inventory, and handle billing effortlessly.",
//         image:''
//     },
//     {
//         title:"Footwear",
//         description:"Shopaver empowers footwear stores to manage inventory by size, style, and brand with real-time stock tracking.",
//         image:''
//     },
//       {
//         title:"Cosmetic Store",
//         description:"Shopaver helps cosmetic stores manage product variants, expiry dates, and fast-moving SKUs with precision.",
//         image:''
//     },
//       {
//         title:"Accessories Store",
//         description:"Shopaver enables accessories stores to efficiently manage diverse SKUs, track fast-moving items, and simplify billing.",
//         image:''
//     },
//       {
//         title:"Cart and Kiosk",
//         description:"Shopaver helps carts and kiosks manage quick billing, track daily sales, and monitor inventory with ease.",
//         image:''
//     },
//       {
//         title:"Spas & Salon",
//         description:"Shopaver helps spas and salons manage appointments, track service-wise revenue, and maintain client records effortlessly.",
//         image:''
//     },
      
// ]
function LandingPageList({heading}) {
  const [visibleCount, setVisibleCount] = useState(2);
const [slugList, setSlugList] = useState([]);
const [loading, setLoading] = useState(true);


useEffect(() => {
  fetch("https://shopaverleadapi.shopaver.com/api/SupportMarketingDashBoard/GetSlugList", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      search: "",
      page: "1",
      pageSize: "100",
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      setSlugList(data.data || []);
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
      setLoading(false);
    });
}, []);
  return (
    <section className="bg-[#E3E3FF] mt-[7.5rem] py-[3rem] md:py-[2.9rem] lg:py-[3.75rem] xl:py-[4.6rem] xl2:py-[5.65rem]">
      <div className="max-w-[90rem] mx-auto px-[20px] md:px-[32px] lg:px-[47px] xl2:px-[150px] xl3:px-[42px]">
        {/* TITLE */}
        <h2 className="max-w-[325px] md:max-w-full mx-auto text-[#5801B7] text-center text-[27px] xm1:text-[1.875rem]  xl:text-[3rem] xl2:text-[3.65rem] font-bold lg:font-medium font-bricolage leading-[37px] md:leading-none">
         {heading}
        </h2>

        {/* ================= MOBILE ================= */}
       

        <div className="flex items-center flex-col gap-[20px] md:hidden mt-10">
  {loading ? (
    <div className="flex justify-center items-center h-[300px] w-full">
      <span className="loader"></span>
    </div>
  ) : (
    slugList.slice(0, visibleCount).map((item, index) => (
      <div key={index} className="h-[200px] w-full max-w-[400px]">
        <Card item={item} />
      </div>
    ))
  )}
</div>
        {visibleCount < slugList.length && (
          <div className="flex justify-center mt-6 md:hidden">
            <div
              onClick={() => setVisibleCount((prev) => prev + 2)}
              className="flex justify-center items-center gap-[5px] w-[111px] h-11 rounded-xl bg-[#5801B7] cursor-pointer"
            >
              <p className="text-white text-[1rem] font-medium">View More</p>
            </div>
          </div>
        )}
         
        <div className="hidden md:block md:mt-[1.69rem] lg:mt-[36px] xl:mt-[43.55px] xl2:mt-[3.25rem]">
          {loading ? (
    <div className="flex justify-center items-center h-[400px]">
      <span className="loader"></span>
    </div>
  ) : (
    <>
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
  {/* ✅ Har 4 items ka ek group banao */}
  {Array.from({ length: Math.ceil(slugList.length / 4) }).map((_, groupIndex) => (
    <SwiperSlide key={groupIndex}>
      <div className={` ${
            slugList.length === 1 ? "flex justify-center" : "grid grid-cols-2 md:gap-[0.94rem] lg:gap-[1.25rem] xl:gap-[1.5rem] xl2:gap-[1.875rem]"
          }`}>
        {slugList.slice(groupIndex * 4, groupIndex * 4 + 4).map((item, index) => (
          <div key={index} className={`md:h-[193.3px] lg:h-[257.75px] xl3:h-[300px]  ${
            slugList.length === 1 ? "md:max-w-[350px] lg:max-w-[450px] xl2:max-w-[550px]  xl3:max-w-[600px]" : ""
          }`}>
            <Card item={item} />
          </div>
        ))}
      </div>
    </SwiperSlide>
  ))}
</Swiper>
          <div className="flex justify-center gap-[0.796875rem] mt-[0.625rem] lg:mt-[2.5rem]">
            <div
              className="custom-prev h-[1.75rem] w-[1.75rem] lg:h-[2.2725rem] lg:w-[2.2725rem] rounded-full border-2 border-[#5801B7] text-[#5801B7]  text-[0.938rem] lg:text-[1.125rem]  flex justify-center items-center cursor-pointer ">
              <i className="fa-solid fa-angle-left"></i>
            </div>
            <div
              className="custom-next w-[1.75rem] h-[1.75rem] lg:h-[2.2725rem] lg:w-[2.2725rem] rounded-full border-2 border-[#5801B7] text-[#5801B7]  text-[0.938rem] lg:text-[1.125rem] flex justify-center items-center cursor-pointer ">
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </div>
            </>
  )}
        </div>
      </div>
    </section>
  );
}

/* ================= CARD ================= */
function Card({ item }) {
    const details = item?.slugListData?.[0];
  return (
    <div className="flex items-stretch gap-[0.90625rem] lg:gap-[2.1875rem] bg-white rounded-[1.591875rem] border border-[#EBD9FF]  py-[10.24px] pl-[15.3px] pr-[10px] md:p-[11.83px] lg:p-[15.78px] xl:p-[19.1px] xl2:p-[1.46rem] h-full">
      {/* LEFT CONTENT */}
      <div className="flex flex-col w-[50%] justify-between">
     
         <div>
           <p className="text-[#3C3939] text-[18.4px] md:text-[14.96px] lg:text-[19.94px] xl2:text-[24.15px] xl3:text-[1.83rem] font-medium  line-clamp-2 leading-none font-bricolage">
            {item.slug}
          </p>
         <p className="pt-[4px] lg:pt-[5.25px]  xl:pt-[6px] xl2:pt-[0.48rem] text-[#666] text-[12.6px] xm1:text-[14.3px] md:text-[11.96px] lg:text-[15.95px] xl2:text-[19.3px]  font-normal leading-none md:leading-[16px] lg:leading-[21px] xl2:leading-[25px] font-dm-sans line-clamp-3 xl3:line-clamp-4">{details?.description}</p>
         </div>


        <Link href={`https://shopaver.com/service/${item.slug}`} target="_blank"

          className="mb-3 rounded-[1.875rem] bg-[#E6D2FF] w-[6.0625rem] h-[1.875rem] md:w-[74px] md:h-[25px] lg:w-[6.0625rem] lg:h-[1.875rem] xl2:w-[143px] xl2:h-[42px] xl3:h-[46px] flex justify-center items-center gap-[0.28125rem]"
        >
          <p className="text-[#5801B7] font-normal lg:font-medium text-[0.656rem] md:text-[9px] lg:text-[0.75rem] xl2:text-[17.4px]">Read More</p>
          <div className="h-[1.125rem] w-[1.125rem] lg:w-[25.6px] lg:h-[25.6px] xl:w-[21.2px] xl:h-[21.2px] xl2:w-[25.6px] xl2:h-[25.6px] rounded-full bg-[#FFF] flex justify-center items-center ">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="8" viewBox="0 0 11 8" fill="none">
  <path d="M10.3536 4.03519C10.5488 3.83993 10.5488 3.52335 10.3536 3.32809L7.17157 0.146107C6.97631 -0.0491549 6.65973 -0.0491549 6.46447 0.146107C6.2692 0.341369 6.2692 0.657952 6.46447 0.853214L9.29289 3.68164L6.46447 6.51007C6.2692 6.70533 6.2692 7.02191 6.46447 7.21718C6.65973 7.41244 6.97631 7.41244 7.17157 7.21718L10.3536 4.03519ZM0 3.68164L-4.37114e-08 4.18164L10 4.18164L10 3.68164L10 3.18164L4.37114e-08 3.18164L0 3.68164Z" fill="#5801B7"/>
</svg>
          </div>
        </Link>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-[50%] flex justify-end items-center">
        <Image
          // src={resolveAssetUrl(
          //   item.image,
          //   "/landingPage/BusinessSolutionSliderImg6.webp",
          // )}
          src={resolveAssetUrl(details?.image)}
          alt={item.keyword}
          width={218}
          height={227}
          className="rounded-[0.6875rem] w-full h-full "
        />
      </div>
    </div>
  );
}

export default LandingPageList;
