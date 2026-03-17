// "use client";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/autoplay";
// import { Autoplay, Pagination } from "swiper/modules";
// import { EffectFade } from "swiper/modules";
// import "swiper/css/effect-fade";
// import { useLayoutEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);
// const CardData = [
//   {
//     image: "/landingPage/BusinessSolutionSliderImg1.webp",
//     heading: "POS Billing",
//     subHeading: "Fast, Simple & Reliable",
//     paragraph:
//       "Create bills with a simple, error-free billing experience designed for busy retail counters, making checkout fast and seamless.",
//   },
//   {
//     image: "/landingPage/BusinessSolutionSliderImg2.webp",
//     heading: "Quick Billing",
//     subHeading: "Built for Speed at the Counter",
//     paragraph:
//       "Generate invoices instantly in seconds without the need for inventory updates and accept  payments easily with no delays or mistakes.",
//   },
//   {
//     image: "/landingPage/BusinessSolutionSliderImg3.webp",
//     heading: "Inventory Management",
//     subHeading: "Always Know Your Stock",
//     paragraph:
//       "Track inventory in real time across products and outlets, prevent stockouts, and manage  supplies with confidence.",
//   },
//   {
//     image: "/landingPage/BusinessSolutionSliderImg4.webp",
//     heading: "Digital Khata",
//     subHeading: "Smarter Credit Management",
//     paragraph:
//       "Maintain complete customer credit and debit records digitally, track dues easily, and ensure  timely collections.",
//   },
//   {
//     image: "/landingPage/BusinessSolutionSliderImg5.webp",
//     heading: "Online Store",
//     subHeading: "Sell Beyond Your Physical Shop",
//     paragraph:
//       "Launch your online store instantly and manage orders, payments, and inventory from single  smart dashboard.",
//   },
//   {
//     image: "/landingPage/BusinessSolutionSliderImg6.webp",
//     heading: "WhatsApp Commerce",
//     subHeading: "Turn Chats into Sales",
//     paragraph:
//       "Turn WhatsApp conversations into confirmed orders by sharing catalogues, receiving  payments, and fulfilling faster.",
//   },
//   {
//     image: "/landingPage/BusinessSolutionSliderImg7.webp",
//     heading: "WhatsApp Marketing",
//     subHeading: "Increase More & Repeat Sales",
//     paragraph:
//       "Engage customers with targeted campaigns, personalized offers, and timely updates to boost  repeat business.",
//   },
// ];
// function BusinessSolutionSlider({ data = [] }) {
//  const BASE_IMAGE_URL = "https://media-shopaver-uat.s3.amazonaws.com";

//   const filteredData = [...data];
//   const [activeIndex, setActiveIndex] = useState(0);
//   const swiperRef = useRef(null);
//   const sectionRef = useRef(null);
//   const isDesktop =
//     typeof window !== "undefined" ? window.innerWidth >= 768 : false;
//   useLayoutEffect(() => {
//     if (!swiperRef.current || !isDesktop) return;

//     let swiper = swiperRef.current;

//     const st = ScrollTrigger.create({
//       trigger: sectionRef.current,
//       start: "center center",
//       //   end: () => `+=${CardData.length * window.innerHeight}`,
//       end: () =>
//         "+=" + sectionRef.current.offsetHeight * (filteredData.length - 1),
//       pin: true,
//       scrub: 1,
//       pinSpacing: true,
//       onUpdate: (self) => {
//         let progress = self.progress * (filteredData.length - 1);

//         let currentIndex = Math.round(progress);

//         swiper.slideToLoop(currentIndex);
//         setActiveIndex(currentIndex);
//       },
//     });

//     ScrollTrigger.refresh();
//     return () => st.kill();
//   }, []);
//   return (
//     <>
//       <section
//         ref={sectionRef}
//         className="bg-[#F9F4FF] hidden lg:block mt-[100px] lg:mt-[120px] py-[60px]"
//       >
//         <div className="max-w-5xl mx-auto px-3 xl:px-0">
//           <h2 className="text-[#5801B7] text-center text-[26px] lg:text-[30px] font-semibold">
//             All-in-One Business Solution
//           </h2>

//           <div className="flex justify-center items-center mt-12">
//             {filteredData.map((_, index) => (
//               <div key={index} className="flex items-center">
//                 {/* Circle */}
//                 <div
//                   className={`w-6 h-6 rounded-full flex justify-center items-center transition-colors duration-300  ${index <= activeIndex ? "bg-[#5801B7]" : "border border-[#939393] bg-[#F8F8F8]"}`}
//                 >
//                   {index <= activeIndex && (
//                     <Image
//                       src="/landingPage/TickMarkImg.svg"
//                       alt="TickMark"
//                       width={12.8}
//                       height={8.8}
//                     />
//                   )}
//                 </div>

//                 {/* Line (last item ke baad line nahi hogi) */}
//                 {index !== filteredData.length - 1 && (
//                   <div
//                     className={`h-px w-[105px] transition-colors duration-300 ${index <= activeIndex ? "bg-[#5801B7]" : " bg-[#939393]"}`}
//                   />
//                 )}
//               </div>
//             ))}
//           </div>
//           <div className="overflow-hidden h-full  mt-[45px] md:mt-15 ">
//             <Swiper
//               onSwiper={(swiper) => (swiperRef.current = swiper)}
//               className="h-full"
//               modules={[Autoplay, Pagination, EffectFade]}
//               allowTouchMove={!isDesktop}
//               loop={false}
//               effect="fade"
//               fadeEffect={{ crossFade: true }}
//               speed={800}
//             >
//               {filteredData.map((card, index) => (
//                 <SwiperSlide key={index}>
//                   <div className="flex flex-col md:flex-row items-stretch max-[360px]:px-[15px] max-[400px]:px-[25px] px-10 md:px-0 ">
//                     <div className="md:w-[50%] pt-[45px] md:pt-0 md:pl-[30px] lg:pl-[57px] flex flex-col justify-center items-center md:items-start">
//                       <h3 className=" text-[32.895px] lg:text-[40px] font-semibold text-[#5801B7] ">
//                         {card.heading}
//                       </h3>
//                       <p className="pt-5 text-[16.44px] lg:text-[25px] font-medium text-[#0A0A0A]">
//                         {card.subHeading}
//                       </p>
//                       <p className=" text-[14px] lg:text-[16px] font-normal text-[#5F5F5F] pt-[11px] lg:w-[362px]">
//                         {card.description}
//                       </p>
//                     </div>
//                     <div className=" md:w-[50%] flex justify-center items-center">
//                       <Image
//                         // src={"/landingPage/BusinessSolutionSliderImg6.webp"}
//                         src={
//                           card.image
//                             ? `${BASE_IMAGE_URL}${card.image}`
//                             : "/landingPage/BusinessSolutionSliderImg6.webp"
//                         }
//                         className="lg:w-[400px] lg:h-[400px]"
//                         alt={card.heading}
//                         width={400}
//                         height={400}
//                       ></Image>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>
//       </section>
//       <div className="block lg:hidden py-[45px] mt-[80px] bg-[#F9F4FF]">
//         <div className="flex justify-center">
//           <h2 className="w-[250px] sm:w-full text-[#5801B7] text-center text-[26px] sm:text-[30px] font-semibold">
//             All-in-One Business Solution
//           </h2>
//         </div>
//         <Swiper
//           spaceBetween={11}
//           slidesPerView="auto"
//           slidesOffsetBefore={22}
//           slidesOffsetAfter={22}
//           className="mt-[30px]  "
//         >
//           {filteredData.map((card, index) => (
//             <SwiperSlide key={index} className="!w-[250px]">
//               <div className="rounded-[17.512px] border-[0.922px] border-[#E7D1FF]  h-full flex flex-col px-[6.45px] pt-[6.45px] pb-[20px]">
//                 <div className="flex justify-center">
//                   <Image
//                     src={
//                           card.image
//                             ? `${BASE_IMAGE_URL}${card.image}`
//                             : "/landingPage/BusinessSolutionSliderImg1.webp"
//                         }
//                     alt={card.heading}
//                     width={234}
//                     height={234}
//                     className="w-full aspect-square object-cover"
//                   />
//                 </div>
//                 <h2 className="pt-[14.68px] text-[20.55px] sm:text-[22px] font-semibold text-[#5801B7]">
//                   {card.heading}
//                 </h2>
//                 <p className="pt-[5px] text-[16.14px] sm:text-[18px] font-medium text-[#0A0A0A]">
//                   {card.subHeading}
//                 </p>
//                 <p className="pt-[2px] text-[10.275px] sm:text-[12px] font-normal text-[#5F5F5F]">
//                   {card.description}
//                 </p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </>
//   );
// }

// export default BusinessSolutionSlider;



"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function BusinessSolutionSlider({ data = [] }) {
  const BASE_IMAGE_URL = "https://media-shopaver-uat.s3.amazonaws.com";

  const filteredData = [...data];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const swiperRef = useRef(null);
  const sectionRef = useRef(null);

  // ✅ SSR SAFE
  useEffect(() => {
    setIsMounted(true);

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // lg breakpoint
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ SCROLLTRIGGER
  useLayoutEffect(() => {
    if (!isMounted || !isDesktop) return;
    if (!swiperRef.current || !sectionRef.current) return;

    const swiper = swiperRef.current;

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "center center",
      end: () =>
        "+=" + sectionRef.current.offsetHeight * (filteredData.length - 1),
      pin: true,
      scrub: 1,
      pinSpacing: true,

      onUpdate: (self) => {
        const progress = self.progress * (filteredData.length - 1);
        const index = Math.round(progress);

        swiper.slideTo(index); // ✅ FIXED
        setActiveIndex(index);
      },
    });

    ScrollTrigger.refresh();

    return () => st.kill();
  }, [isMounted, isDesktop, filteredData.length]);

  // ✅ HYDRATION FIX
  if (!isMounted) return null;

  return (
    <>
      {/* DESKTOP */}
      <section
        ref={sectionRef}
        className="bg-[#F9F4FF] hidden lg:block mt-[100px] lg:mt-[120px] py-[60px]"
      >
        <div className="max-w-5xl mx-auto px-3 xl:px-0">
          <h2 className="text-[#5801B7] text-center text-[26px] lg:text-[30px] font-semibold">
            All-in-One Business Solution
          </h2>

          {/* PROGRESS */}
          <div className="flex justify-center items-center mt-12">
            {filteredData.map((_, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={`w-6 h-6 rounded-full flex justify-center items-center ${
                    index <= activeIndex
                      ? "bg-[#5801B7]"
                      : "border border-[#939393] bg-[#F8F8F8]"
                  }`}
                >
                  {index <= activeIndex && (
                    <Image
                      src="/landingPage/TickMarkImg.svg"
                      alt="Tick"
                      width={12}
                      height={8}
                    />
                  )}
                </div>

                {index !== filteredData.length - 1 && (
                  <div
                    className={`h-px w-[105px] ${
                      index <= activeIndex
                        ? "bg-[#5801B7]"
                        : "bg-[#939393]"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* SLIDER */}
          <div className="overflow-hidden mt-[45px]">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Autoplay, Pagination, EffectFade]}
              allowTouchMove={!isDesktop}
              loop={false}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              speed={800}
            >
              {filteredData.map((card, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col md:flex-row items-center px-6 md:px-0">
                    
                    {/* TEXT */}
                    <div className="md:w-1/2 md:pl-[40px]">
                      <h3 className="text-[32px] lg:text-[40px] font-semibold text-[#5801B7]">
                        {card.heading}
                      </h3>

                      <p className="pt-4 text-[16px] lg:text-[24px] font-medium text-[#0A0A0A]">
                        {card.subHeading}
                      </p>

                      <p className="text-[14px] lg:text-[16px] text-[#5F5F5F] pt-2 max-w-[380px]">
                        {card.description}
                      </p>
                    </div>

                    {/* IMAGE */}
                    <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
                      <Image
                        src={
                          card.image
                            ? `${BASE_IMAGE_URL}${card.image}`
                            : "/landingPage/BusinessSolutionSliderImg1.webp"
                        }
                        alt={card.heading}
                        width={400}
                        height={400}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* MOBILE */}
      <div className="block lg:hidden py-[45px] mt-[80px] bg-[#F9F4FF]">
        <h2 className="text-[#5801B7] text-center text-[26px] font-semibold">
          All-in-One Business Solution
        </h2>

        <Swiper
          spaceBetween={12}
          slidesPerView="auto"
          slidesOffsetBefore={20}
          slidesOffsetAfter={20}
          className="mt-[30px]"
        >
          {filteredData.map((card, index) => (
            <SwiperSlide key={index} className="!w-[250px]">
              <div className="rounded-[16px] border border-[#E7D1FF] flex flex-col p-3">
                
                <Image
                  src={
                    card.image
                      ? `${BASE_IMAGE_URL}${card.image}`
                      : "/landingPage/BusinessSolutionSliderImg1.webp"
                  }
                  alt={card.heading}
                  width={250}
                  height={250}
                  className="w-full aspect-square object-cover rounded-md"
                />

                <h3 className="pt-3 text-[18px] font-semibold text-[#5801B7]">
                  {card.heading}
                </h3>

                <p className="text-[14px] font-medium text-[#0A0A0A]">
                  {card.subHeading}
                </p>

                <p className="text-[12px] text-[#5F5F5F]">
                  {card.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default BusinessSolutionSlider;