
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
console.log("filer datas",filteredData)
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
const [swiperReady, setSwiperReady] = useState(false);
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

  
useLayoutEffect(() => {
  if (!isMounted || !isDesktop || !swiperReady) return;

  const swiper = swiperRef.current;

  const st = ScrollTrigger.create({
    trigger: sectionRef.current,
    start: "center center",
    end: "+=" + window.innerHeight * (filteredData.length - 1),

    pin: true,
    scrub: 1,
    anticipatePin: 1,

    onUpdate: (self) => {
      const progress = self.progress * (filteredData.length - 1);
      const index = Math.floor(progress + 0.0001);

      swiper.slideTo(index);
      setActiveIndex(index);
    },
  });

  ScrollTrigger.refresh();

  return () => st.kill();
}, [isMounted, isDesktop, swiperReady, filteredData.length]);
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
              onSwiper={(swiper) => {swiperRef.current = swiper
                setSwiperReady(true)
              }}
                
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
            <SwiperSlide key={index} className="!w-[250px] h-auto">
              <div className="rounded-[16px] border border-[#E7D1FF] flex flex-col h-full p-3">
                
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