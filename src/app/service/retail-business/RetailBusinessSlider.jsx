
// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css/pagination";
// import { useRef, useState, useLayoutEffect } from "react";
// import Image from "next/image";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const contentData = [
//   {
//     heading: "Sales & Purchase Reports",
//     paragraph: "Monitor revenue and profits in real time",
//     image: "/landingPage/RetailBusinessCardImg1.webp",
//   },
//   {
//     heading: "Inventory & Stock Transfers",
//     paragraph: "Track and move stock across locations",
//     image: "/landingPage/RetailBusinessCardImg2.webp",
//   },
//   {
//     heading: "Vendor & Supplier Management",
//     paragraph: "Simplify purchasing & supplier interactions",
//     image: "/landingPage/RetailBusinessCardImg3.webp",
//   },
//   {
//     heading: "And Many More",
//     paragraph: "All designed to simplify your retail operations",
//     image: "/landingPage/RetailBusinessCardImg4.webp",
//   },
// ];

// export default function RetailBusinessSlider() {
//   const sectionRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);
// const paginationRef = useRef(null);
//   useLayoutEffect(() => {
//     const section = sectionRef.current;
//     let activeIndexRef = 0;

//     const st = ScrollTrigger.create({
//       trigger: section,
//       start: "center center",
//       end: () => `+=${section.offsetHeight * contentData.length}`,
//       scrub: 1,
//       pin: true,
//       pinSpacing: true,
//       markers: false, // set true to debug
//       onUpdate: (self) => {
//         const index = Math.min(
//           contentData.length - 1,
//           Math.floor(self.progress * contentData.length)
//         );
//         if (index !== activeIndexRef) {
//           activeIndexRef = index;
//           setActiveIndex(index);
//         }
//       },
//     });

//     return () => st.kill();
//   }, []);

//   return (
//     <>
//     <section
//       ref={sectionRef}
//       className="hidden md:block px-[20px] xl:px-0 mt-[70px] relative py-[100px]"
//     >
//       <div className="max-w-6xl mx-auto">
//         <h3 className="text-[#5801B7] text-[28px] lg:text-[30px] text-center font-semibold px-[30px] lg:px-0 max-[375px]:text-[24px]">
//           Run Your Entire Retail Business from a Single Dashboard
//         </h3>
//         <div className="flex justify-center mt-2 max-[375px]:px-5 px-[30px] sm:px-0">
//           <p className="sm:w-[450px] lg:w-[760px] text-[#5F5F5F] text-[14px] lg:text-[18px] text-center font-normal max-[375px]:text-[13px]">
//             Manage your entire store operations from one platform. No more
//             switching between multiple tools. From billing to sales, everything
//             is fully integrated
//           </p>
//         </div>

//         <div className="flex justify-between items-center mt-20">
//           {/* LEFT CONTENT */}
//           <div className=" space-y-10">
//             {contentData.map((item, i) => (
//               <div key={i} className="flex gap-6">
//                 <div
//                   className={`transition-all duration-300 ${
//                     activeIndex === i ? "border-l border-[#5801B7]" : ""
//                   }`}
//                 />
//                 <div>
//                   <h2
//                     className={`md:text-[18px] lg:text-[20px] font-medium transition-colors duration-300 ${
//                       activeIndex === i ? "text-[#5801B7]" : "text-[#393939]"
//                     }`}
//                   >
//                     {item.heading}
//                   </h2>
//                   <p className="pt-2 text-[#2E2E2E] md:text-[13px] lg:text-[14px] font-normal">
//                     {item.paragraph}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="  relative ">
//           <Image src={'/landingPage/laptopImage.webp'} className="md:w-[450px] lg:w-[526.14px] aspect-[77/54]" width={526.14} height={369} />
//             {contentData.map((item, i) => (
//               <Image
//                 key={i}
//                 src={item.image}
//                 alt={item.heading}
//                 width={381}
//                 height={241}
//                 className={`absolute transition-opacity duration-500 md:w-[318px] md:h-[202px] lg:w-[377px] lg:h-[240px] md:left-[67px] md:top-[14px] lg:left-[80px] lg:top-[16px]  ${
//                   i === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
    

//       </div>
//       </section>

//       {/* Mobile View */}
// <section className="mt-[60px] block md:hidden">
//    <h3 className="text-[#5801B7] max-[375px]:text-[24px] text-[28px]  text-center font-semibold px-[30px] ">
//           Run Your Entire Retail Business from a Single Dashboard
//         </h3>
//         <div className="flex justify-center mt-2 max-[375px]:px-5 px-[30px] sm:px-0">
//           <p className="sm:w-[450px]  text-[#5F5F5F] max-[375px]:text-[13px] text-[14px]  text-center font-normal ">
//             Manage your entire store operations from one platform. No more
//             switching between multiple tools. From billing to sales, everything
//             is fully integrated
//           </p>
//         </div>
//       <div className="flex justify-center">
//           <div className=" w-[275px] border-[0.97px] border-[#E7D1FF] rounded-[18.575px] px-[7.42px] pt-[7.42px] pb-[15.5px] mt-[42px]">

//   {/* Static Background */}
//   <div className="relative flex justify-center">

//     <div className="w-full flex justify-center rounded-[15.9px] h-[250px] bg-[#F4E9FF]  absolute">
//       <Image src={'/landingPage/laptopImage.webp'} className="absolute top-[52px] aspect-[77/54]" width={233.35} height={163.65} /> 
//     </div>

//     <Swiper
//     modules={[Pagination,Autoplay]}
//       autoplay={{
//     delay: 3000,
//     disableOnInteraction: false,
//   }}
//    pagination={{
//     el: ".RetailBusinessSliderPagination",
//     clickable: true,
//   }}
//       slidesPerView={1}
//       spaceBetween={20}
//       loop={true}
//       className="  retailSwiper"
//     >
//       {contentData.map((item, index) => (
//         <SwiperSlide key={index}>
//           <div className="h-[250px] flex justify-center items-center ">

//             <img
//               src={item.image}
//               alt={item.heading}
//               className="w-[168px] h-[106px] top-[-13px] left-[3px] relative z-10 "
//             />
//    </div>
//          <div className="mt-[14.2px]">
//              <h3 className="w-[195px] text-[#5801B7] text-[21.8px] font-semibold">{item.heading}</h3>
//             <p className="pt-[5.3px] text-[#525252] text-[15px]">{item.paragraph}</p>
//          </div>

       
//         </SwiperSlide>
//       ))}
//     </Swiper>

//   </div>
  
// </div>

// </div>
// <div ref={paginationRef} className="RetailBusinessSliderPagination flex justify-center mt-[22px]"></div>
//     </section>
//     </>
//   );
// }


"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { useRef, useState, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const contentData = [
  {
    heading: "Sales & Purchase Reports",
    paragraph: "Monitor revenue and profits in real time",
    image: "/landingPage/RetailBusinessCardImg1.webp",
  },
  {
    heading: "Inventory & Stock Transfers",
    paragraph: "Track and move stock across locations",
    image: "/landingPage/RetailBusinessCardImg2.webp",
  },
  {
    heading: "Vendor & Supplier Management",
    paragraph: "Simplify purchasing & supplier interactions",
    image: "/landingPage/RetailBusinessCardImg3.webp",
  },
  {
    heading: "And Many More",
    paragraph: "All designed to simplify your retail operations",
    image: "/landingPage/RetailBusinessCardImg4.webp",
  },
];

export default function RetailBusinessSlider() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
const paginationRef = useRef(null);
useLayoutEffect(() => {
  const section = sectionRef.current;
  const slides = contentData.length;

  const ctx = gsap.context(() => {
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=" + window.innerHeight * (slides - 1),
      scrub: true,

      onUpdate: (self) => {
        const index = Math.floor(self.progress * slides);
        setActiveIndex(Math.min(index, slides - 1));
      },
    });
  });

  ScrollTrigger.refresh();
  return () => ctx.revert();
}, []);

  return (
    <>
    <section
      ref={sectionRef}
      className="hidden md:block px-[20px] xl:px-0 mt-[70px] relative" style={{ height: `${contentData.length * 100}vh` }}
    >
     <div className="sticky top-0 h-screen flex items-center">
       <div className="max-w-6xl mx-auto w-full px-[20px] xl:px-0">
        <h3 className="text-[#5801B7] text-[28px] lg:text-[30px] text-center font-semibold px-[30px] lg:px-0 max-[375px]:text-[24px]">
          Run Your Entire Retail Business from a Single Dashboard
        </h3>
        <div className="flex justify-center mt-2 max-[375px]:px-5 px-[30px] sm:px-0">
          <p className="sm:w-[450px] lg:w-[760px] text-[#5F5F5F] text-[14px] lg:text-[18px] text-center font-normal max-[375px]:text-[13px]">
            Manage your entire store operations from one platform. No more
            switching between multiple tools. From billing to sales, everything
            is fully integrated
          </p>
        </div>

        <div className="flex justify-between items-center mt-20">
          {/* LEFT CONTENT */}
          <div className=" space-y-10">
            {contentData.map((item, i) => (
              <div key={i} className="flex gap-6">
                <div
                  className={`transition-all duration-300 ${
                    activeIndex === i ? "border-l border-[#5801B7]" : ""
                  }`}
                />
                <div>
                  <h2
                    className={`md:text-[18px] lg:text-[20px] font-medium transition-colors duration-300 ${
                      activeIndex === i ? "text-[#5801B7]" : "text-[#393939]"
                    }`}
                  >
                    {item.heading}
                  </h2>
                  <p className="pt-2 text-[#2E2E2E] md:text-[13px] lg:text-[14px] font-normal">
                    {item.paragraph}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT IMAGE */}
          <div className="  relative ">
          <Image src={'/landingPage/laptopImage.webp'} className="md:w-[450px] lg:w-[526.14px] aspect-[77/54]" width={526.14} height={369} />
            {contentData.map((item, i) => (
              <Image
                key={i}
                src={item.image}
                alt={item.heading}
                width={381}
                height={241}
                className={`absolute transition-opacity duration-500 md:w-[318px] md:h-[202px] lg:w-[377px] lg:h-[240px] md:left-[67px] md:top-[14px] lg:left-[80px] lg:top-[16px]  ${
                  i === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              />
            ))}
          </div>
        </div>
    

      </div>
     </div>
      </section>

      {/* Mobile View */}
<section className="mt-[60px] block md:hidden">
   <h3 className="text-[#5801B7] max-[375px]:text-[24px] text-[28px]  text-center font-semibold px-[30px] ">
          Run Your Entire Retail Business from a Single Dashboard
        </h3>
        <div className="flex justify-center mt-2 max-[375px]:px-5 px-[30px] sm:px-0">
          <p className="sm:w-[450px]  text-[#5F5F5F] max-[375px]:text-[13px] text-[14px]  text-center font-normal ">
            Manage your entire store operations from one platform. No more
            switching between multiple tools. From billing to sales, everything
            is fully integrated
          </p>
        </div>
      <div className="flex justify-center">
          <div className=" w-[275px] border-[0.97px] border-[#E7D1FF] rounded-[18.575px] px-[7.42px] pt-[7.42px] pb-[15.5px] mt-[42px]">

  {/* Static Background */}
  <div className="relative flex justify-center">

    <div className="w-full flex justify-center rounded-[15.9px] h-[250px] bg-[#F4E9FF]  absolute">
      <Image src={'/landingPage/laptopImage.webp'} className="absolute top-[52px] aspect-[77/54]" width={233.35} height={163.65} /> 
    </div>

    <Swiper
    modules={[Pagination,Autoplay]}
      autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
   pagination={{
    el: ".RetailBusinessSliderPagination",
    clickable: true,
  }}
      slidesPerView={1}
      spaceBetween={20}
      loop={true}
      className="  retailSwiper"
    >
      {contentData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="h-[250px] flex justify-center items-center ">

            <img
              src={item.image}
              alt={item.heading}
              className="w-[168px] h-[106px] top-[-13px] left-[3px] relative z-10 "
            />
   </div>
         <div className="mt-[14.2px]">
             <h3 className="w-[195px] text-[#5801B7] text-[21.8px] font-semibold">{item.heading}</h3>
            <p className="pt-[5.3px] text-[#525252] text-[15px]">{item.paragraph}</p>
         </div>

       
        </SwiperSlide>
      ))}
    </Swiper>

  </div>
  
</div>

</div>
<div ref={paginationRef} className="RetailBusinessSliderPagination flex justify-center mt-[22px]"></div>
    </section>
    </>
  );
}