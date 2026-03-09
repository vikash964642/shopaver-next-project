"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./home.module.css";
// const cards = [
//   {
//     id: 1,
//     image: "/landingPage/PosHomeImg1.webp",
//     title: "Lightning-Fast & Error-Free Billing",
//     description:
//       "Serve more customers in less time with an intuitive POS software. Scan items quickly, apply discounts, auto-calculate GST or custom taxes, print invoices, and accept payments via cash, card, and UPI.",
//   },
//   {
//     id: 2,
//     image: "/landingPage/PosHomeImg2.webp",
//     title: "Multi-Outlet Retail Management",
//     description:
//       "Keep all outlets in sync with a centralized POS. Use uniform pricing, track stock and sales in real time, and manage all locations from a single web portal.",
//   },
//   {
//     id: 3,
//     image: "/landingPage/PosHomeImg3.webp",
//     title: "Know Your Stock Levels",
//     description:
//       "Track inventory in real time with automated stock management. Get low-stock alerts, manage product variants, and handle barcode tracking for expiry-based products.",
//   },
// ];
function WhyChooseSection({ data = [] }) {
  const ScrollTop = () => {
    window.scrollTo({ top: 0 });
  };
    const filteredData = [...data]
  return (
    <section className="pt-15 lg:pt-[78px] px-[20px] xl:px-0 max-w-5xl mx-auto">
      <h2 className="text-[#5801B7] text-center lg:text-[30px] text-[22px] font-semibold">
        Why Choose Shopaver Retail POS Software?
      </h2>
      <div className="mt-[38px] bg-[#F9F4FF] hidden lg:grid grid-cols-3 gap-10 shadow-[0_0_4px_0_rgba(0,0,0,0.20)] w-full  p-[45px]">
        {filteredData.map((item, index) => (
          <div
            key={index}
            className="bg-[#FFF] px-2.5 pt-2.5 pb-[15px] shadow-[0_0_4px_0_rgba(0,0,0,0.20)]"
          >
            <Image
              src={item.image ||  "/landingPage/PosHomeImg1.webp"}
              alt={item.heading}
              width={264}
              height={264}
            ></Image>
            <p className="pt-3 max-w-[210px] text-[#0A0A0A] text-[18px] font-medium font-[Poppins] leading-[normal]">
              {item.heading}
            </p>
            <p className="pt-[5px] text-[#525252] text-[12px] font-normal font-[Poppins]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      {/* <div className="block lg:hidden mt-[38px]">
      <div className="flex overflow-x-auto gap-[22px] pb-2 cursor-grab hide-scrollbar mt-[68px]"  style={{ scrollSnapType: "x mandatory" }}>
         {cards.map((item) => (
          <div
            key={item.id}
            className="bg-[#FFF] shrink-0 w-[200px] px-2.5 pt-2.5 pb-[15px] shadow-[0_0_4px_0_rgba(0,0,0,0.20)]"
          >
            <Image src={item.image} alt={item.title} width={264} height={264}></Image>
            <p className="pt-3 max-w-[210px] text-[#0A0A0A] text-[18px] font-medium font-[Poppins] leading-[normal]">{item.title}</p>
            <p className="pt-[5px] text-[#525252] text-[12px] font-normal font-[Poppins]">{item.description}</p>
          </div>
        ))}
      </div>
  </div> */}
      <div className="block lg:hidden mt-[38px]">
        <div
          className={`flex md:justify-center overflow-x-auto gap-[11px] pt-1 pl-0.5 pr-0.5 pb-2 cursor-grab ${styles.hideScrollbar}`}
          style={{ scrollSnapType: "x mandatory" }}
        >
          {filteredData.map((item,index) => (
            <div
              key={index}
              className="bg-[#FFF] shrink-0 w-[180px] sm:w-[200px] md:w-[220px] px-2.5 pt-2.5 pb-[15px] shadow-[0_0_4px_0_rgba(0,0,0,0.20)]"
            >
              <Image
                src={item.image || "/landingPage/PosHomeImg2.webp"}
                alt={item.heading}
                width={264}
                height={264}
              />
              <p className="pt-[11.5] max-w-[150px] text-[#0A0A0A] text-[15px] sm:text-[16.5px] font-medium font-[Poppins]">
                {item.heading}
              </p>
              <p className="pt-1 text-[#525252] text-[11px] sm:text-[12px] font-normal font-[Poppins]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseSection;
