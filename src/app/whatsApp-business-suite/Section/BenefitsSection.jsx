"use client";

import Image from "next/image";
import React,{useState,useRef} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const benefits = [
  {
    title: "Increased Customer Engagement",
    description:
      "Communicate with customers on the platform they use most.",
      Image:"/newImage/BenefitsSectionImg1.webp",
  },
  {
    title: "Higher Sales Conversions",
    description:
      "Convert conversations into purchases with built-in commerce tools.",
           Image:"/newImage/BenefitsSectionImg2.webp",
  },
  {
    title: "Marketing at Scale",
    description:
      "Send targeted promotional campaigns to thousands of customers.",
           Image:"/newImage/BenefitsSectionImg3.webp",
  },
   {
    title: "Automation for Efficiency",
    description:
      "Automate repetitive conversations and workflows.",
           Image:"/newImage/BenefitsSectionImg4.webp",
  },
   {
    title: "Data-Driven Insights",
    description:
      "Track performance and optimize communication strategies.",
           Image:"/newImage/BenefitsSectionImg5.webp",
  },
   {
    title: "Faster Customer Support",
    description:
      "Respond to customer queries instantly with organized chat management",
           Image:"/newImage/BenefitsSectionImg6.webp",
  },
];

function BenefitsSection() {
    const [activeButton, setActiveButton] = useState("next");
    const sectionRef = useRef(null);
const cardsRef = useRef(null);
    useGSAP(() => {
  if (window.innerWidth < 768) return;

  const cards = cardsRef.current;
  const section = sectionRef.current;

  const scrollWidth = cards.scrollWidth;
  const visibleWidth = cards.offsetWidth;

  gsap.to(cards, {
    x: -(scrollWidth - visibleWidth),

    ease: "none",

    scrollTrigger: {
      trigger: section,
      start: "top 12%",
      end: () => `+=${scrollWidth - visibleWidth}`,
      scrub: 1,
      pin: true,
      anticipatePin: 1,
    },
  });
});
  return (
    <section  ref={sectionRef} className="xl2:max-w-[1220px] xl3:max-w-[90rem] mx-auto  md:px-[65px] lg:px-[93px] xl2:px-[60px]  xl3:px-[72px] w-full  mt-[90px] lg:mt-[110px] xl2:mt-[130px] xl3:mt-[170px] ">
      
   
        
        {/* HEADING */}
        <div className="mx-auto max-w-3xl text-center">
          
          <h2 className=" text-[#5801B7] text-[30.5px] md:text-[27.5px] lg:text-[36.5px] xl2:text-[48px] xl3:text-[55px] font-bold leading-[37px] md:leading-[33px] lg:leading-[44px] xl2:leading-[58px] xl3:leading-[65px] font-bricolage">
            Benefits of {""}
            <br className="hidden sm:block" />
            WhatsApp  <br className=" sm:hidden" /> Business Suite
          </h2>

          <p className="mx-auto mt-3 xl3:mt-5 max-w-[300px] md:max-w-[500px] lg:max-w-[625px] xl3:max-w-3xl  text-[#525252]  text-[14px] lg:text-[21px] xl3:text-[24.5px] leading-[18px] lg:leading-[27px] xl2:leading-[27px] xl3:leading-[32px]">
            Using WhatsApp Business Suite offers several advantages for
            businesses looking to improve communication and sales.
          </p>
        </div>

        {/* CARDS */}
    <div className="overflow-hidden">
          <div  ref={cardsRef} className="mt-6 md:mt-7 lg:mt-10 xl2:mt-12 xl3:mt-14 hidden md:flex gap-3 lg:gap-5 xl2:gap-6 ">
          
          {benefits.map((item, index) => (
            <div
              key={index}
              className="rounded-[22px] shrink-0 md:w-[200px] lg:w-[275px] xl2:w-[350px] xl3:w-[375px] lg:rounded-[28px] border border-[#D9D3FF] bg-[#F8F8FF] p-4 lg:p-5 flex flex-col justify-between"
            >
              
              {/* CONTENT */}
              <div>
                <h3 className="w-[90%] lg:w-[85%] text-[18.3px] md:text-[14px] lg:text-[18.3px] xl2:text-[24px] xl3:text-[28px] font-medium leading-[22px] md:leading-[17px] lg:leading-[24px] xl2:leading-[28.5px]   text-[#5801B7] font-bricolage">
                  {item.title}
                </h3>

                <p className="mt-2 xl2:mt-3 max-w-[90%] lg:max-w-[85%]  leading-[18px] md:leading-[14px] xl2:leading-[22px] xl3:leading-[25px] text-[#2E2E2E] text-[12px] md:text-[12px] lg:text-[14px] xl2:text-[16px] xl3:text-[18.5px]">
                  {item.description}
                </p>
              </div>

         
                
                <div className="md:mt-4 lg:mt-5 xl2:mt-7 xl3:mt-8 overflow-hidden rounded-[22px] w-full h-[152px] md:h-[120px] lg:h-[155px] xl2:h-[200px] xl3:h-[235px]">
                  
                 <Image src={item.Image} height={300} width={300} className="h-full w-full"></Image>
                </div>
              </div>
     
          ))}
        </div>
    </div>

          <div className="ml-[20.5px] mt-[1.5625rem] lg:mt-[3.4375rem] relative overflow-hidden block md:hidden">
  <Swiper
    modules={[Navigation,Autoplay]}
   loop={true}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
       pauseOnMouseEnter: false,
    }}
      speed={600}
     
        // freeMode={true}
       navigation={{
      prevEl: ".testimonial-prev",
      nextEl: ".testimonial-next",
    }}
    breakpoints={{
      0: {
        slidesPerView: "auto", // mobile me slide width ke according
        centeredSlides: false,
        spaceBetween: 15,
      },
      
    }}
    className="!overflow-visible"
  >
    {benefits.map((item, index) => (
      <SwiperSlide
        key={index}
        className="!w-[16rem] xm1:!w-[17rem] h-full"
      >
          <div
              key={index}
              className="rounded-[22px] lg:rounded-[28px] border border-[#D9D3FF] bg-[#F8F8FF] p-4 lg:p-5 flex flex-col justify-between h-[335px]"
            >
              
              {/* CONTENT */}
              <div>
                <h3 className="w-[80%] text-[18.3px] md:text-[14px] lg:text-[18.3px] xl2:text-[24px] xl3:text-[28px] font-medium leading-[22px] md:leading-[24px] xl2:leading-[28.5px]   text-[#5801B7] font-bricolage">
                  {item.title}
                </h3>

                <p className="mt-2 xl2:mt-3 max-w-[80%]  leading-[18px]  xl2:leading-[22px] xl3:leading-[25px] text-[#2E2E2E] text-[12px] md:text-[12px] lg:text-[14px] xl2:text-[16px] xl3:text-[18.5px]">
                  {item.description}
                </p>
              </div>

         
                
                <div className="mt-8 overflow-hidden rounded-[22px] w-full h-[152px] md:h-[120px] lg:h-[200px] xl3:h-[235px]">
                  
                 <Image src={item.Image} height={300} width={300} className="h-full w-full"></Image>
                </div>
              </div>
      </SwiperSlide>
    ))}
  </Swiper>
  <div className='flex justify-center items-center gap-[0.9375rem] mt-[1.875rem]'>
  <button  onClick={() => setActiveButton("prev")} className={`testimonial-prev h-[2.25rem] w-[2.25rem] flex justify-center items-center  rounded-full border-[0.05625rem]  ${activeButton === "prev"
        ? "bg-[#F8F8FF]  border-[#CBCBFF]"
        : " bg-[#ECECEC] border-[#D7D7D7]"
    }`}>
    <i className={`fa-solid fa-chevron-left ${activeButton==="prev" ? "text-[#5801B7]" : "text-[#525252]"}`}></i>
  </button>
    <button  onClick={() => setActiveButton("next")} className={`testimonial-next h-[2.25rem] w-[2.25rem] flex justify-center items-center  rounded-full border-[0.05625rem]  ${activeButton === "next"
        ? " bg-[#F8F8FF]  border-[#CBCBFF]"
        : "bg-[#ECECEC] border-[#D7D7D7]"
    }`}>
      <i className={`fa-solid fa-chevron-right ${activeButton==="next" ? "text-[#5801B7]" : "text-[#525252]"}`}></i>
  </button>
  </div>
</div>
    </section>
  );
}

export default BenefitsSection;