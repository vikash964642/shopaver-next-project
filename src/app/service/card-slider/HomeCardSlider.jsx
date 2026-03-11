// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

// const cards = [
//   { id: 1, img: "/landingPage/BusinessSolutionSliderImg1.webp", name: "ABC, Mr. Choice Owner" },
//   { id: 2, img: "/landingPage/BusinessSolutionSliderImg2.webp", name: "ABC, Mr. Choice Owner" },
//   { id: 3, img: "/landingPage/BusinessSolutionSliderImg3.webp", name: "ABC, Mr. Choice Owner" },
//   { id: 4, img: "/landingPage/BusinessSolutionSliderImg4.webp", name: "ABC, Mr. Choice Owner" },
//   { id: 5, img: "/landingPage/BusinessSolutionSliderImg5.webp", name: "ABC, Mr. Choice Owner" },
//     { id: 6, img: "/landingPage/BusinessSolutionSliderImg2.webp", name: "ABC, Mr. Choice Owner" },
//   { id: 7, img: "/landingPage/BusinessSolutionSliderImg4.webp", name: "ABC, Mr. Choice Owner" },
//   { id: 8, img: "/landingPage/BusinessSolutionSliderImg5.webp", name: "ABC, Mr. Choice Owner" },
//   { id: 9, img: "/landingPage/BusinessSolutionSliderImg1.webp", name: "ABC, Mr. Choice Owner" },
//   { id: 10, img: "/landingPage/BusinessSolutionSliderImg3.webp", name: "ABC, Mr. Choice Owner" },
// ];

// export default function HomeCardSlider() {
//   return (
//     <section className="py-[120px] ">
//       <div className="max-w-5xl mx-auto">

//         <Swiper
//           slidesPerView={5}
//           centeredSlides={true}
//           spaceBetween={30}
//           loop={true}
//           className="testimonialSwiper"
//         >
//           {cards.map((card) => (
//             <SwiperSlide key={card.id}>
//               <div className="card">
//                 <img
//                   src={card.img}
//                   className="w-full h-full object-cover rounded-[20px]"
//                 />

//                 <div className="absolute bottom-0 p-[20px] text-black">
//                   <p className="text-[14px]">
//                     This POS Software Has Transformed How We Manage Billing And
//                     Stock.
//                   </p>

//                   <p className="mt-2 text-[13px] font-semibold">
//                     – {card.name}
//                   </p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//       </div>
//     </section>
//   );
// }


// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";


// const originalCards = [
//   { id: 1, img: "/landingPage/BusinessSolutionSliderImg1.webp" },
//   { id: 2, img: "/landingPage/BusinessSolutionSliderImg2.webp" },
//   { id: 3, img: "/landingPage/BusinessSolutionSliderImg3.webp" },
//   { id: 4, img: "/landingPage/BusinessSolutionSliderImg4.webp" },
//   { id: 5, img: "/landingPage/BusinessSolutionSliderImg5.webp" },
//   { id: 6, img: "/landingPage/BusinessSolutionSliderImg2.webp" },
//   { id: 7, img: "/landingPage/BusinessSolutionSliderImg4.webp" },
// ];

// /* duplicate slides to prevent loop bug */
// const cards = [...originalCards, ...originalCards, ...originalCards];

// export default function HomeCardSlider() {
//   return (
//     <section className="py-[120px] overflow-hidden">

//       <div className="max-w-5xl mx-auto">

//         <Swiper
//         //   modules={[Autoplay]}
//           slidesPerView={5}
//           centeredSlides={true}
//           spaceBetween={30}
         
//           slidesPerGroup={1}
//         //   loop={true}
//         //   autoplay={{
//         //     delay: 2500,
//         //     disableOnInteraction: false,
//         //   }}

//           className="cardSwiper"
//         >
//           {cards.map((card, index) => (
//             <SwiperSlide key={index}>
//               <div className="sliderCard">
//                 <img src={card.img} />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//       </div>
//     </section>
//   );
// }



"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";

import "swiper/css";


const cards = [
  { id: 1, img: "/landingPage/BusinessSolutionSliderImg1.webp",shopOwnerName:"—ABC, Mr. Choice Owner",paragraph:"This POS software has transformed how we manage billing and stock. Super easy and reliable!" },
  { id: 2, img: "/landingPage/BusinessSolutionSliderImg2.webp",shopOwnerName:"—ABC, Mr. Choice Owner", paragraph:"This POS software has transformed how we manage billing and stock. Super easy and reliable!" },
  { id: 3, img: "/landingPage/BusinessSolutionSliderImg3.webp" ,shopOwnerName:"—ABC, Mr. Choice Owner",paragraph:"This POS software has transformed how we manage billing and stock. Super easy and reliable!"},
  { id: 4, img: "/landingPage/BusinessSolutionSliderImg4.webp",shopOwnerName:"—ABC, Mr. Choice Owner",paragraph:"This POS software has transformed how we manage billing and stock. Super easy and reliable!" },
  { id: 5, img: "/landingPage/BusinessSolutionSliderImg5.webp",shopOwnerName:"—ABC, Mr. Choice Owner",paragraph:"This POS software has transformed how we manage billing and stock. Super easy and reliable!" },
  { id: 6, img: "/landingPage/BusinessSolutionSliderImg2.webp" ,shopOwnerName:"—ABC, Mr. Choice Owner",paragraph:"This POS software has transformed how we manage billing and stock. Super easy and reliable!"},
  { id: 7, img: "/landingPage/BusinessSolutionSliderImg4.webp" ,shopOwnerName:"—ABC, Mr. Choice Owner",paragraph:"This POS software has transformed how we manage billing and stock. Super easy and reliable!"},
  { id: 8, img: "/landingPage/BusinessSolutionSliderImg5.webp" ,shopOwnerName:"—ABC, Mr. Choice Owner",paragraph:"This POS software has transformed how we manage billing and stock. Super easy and reliable!"},
];

export default function HomeCardSlider() {
      const swiperRef = useRef(null);
  return (
    <section className="py-[120px]">

      <div className="max-w-[1300px] mx-auto">

        <Swiper
          modules={[Navigation]}
          slidesPerView={5}
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
        //   autoplay={{
        //     delay: 2500,
        //     disableOnInteraction: false,
        //   }}
         onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="cardSwiper"
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="card relative">
                <img src={card.img} alt="" />
               <div className="absolute z-20 bottom-[35px] pl-[12px] pr-[22px]">
                 <p className="text-[#FFF] text-[12.3px] ">{card.paragraph}</p>
                 <p className="pt-[15px] text-[#FFF] text-[14px] font-semibold">{card.shopOwnerName}</p>
               </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
<div className="flex justify-center gap-[12.75px] mt-[50px]"> 
    <div onClick={() => swiperRef.current.slidePrev()} className="h-[36.36px] w-[36.36px] rounded-full border-2 border-[#C4C4C4] text-[#C4C4C4] hover:border-[#5801B7] hover:text-[#5801B7] text-[18px] cursor-pointer flex justify-center items-center">
        <i className="fa-solid fa-angle-left"></i>
    </div>
        <div onClick={() => swiperRef.current.slideNext()} className="h-[36.36px] w-[36.36px] rounded-full border-2 border-[#C4C4C4] text-[#C4C4C4] hover:border-[#5801B7] hover:text-[#5801B7] text-[18px] cursor-pointer flex justify-center items-center">
              <i className="fa-solid fa-angle-right"></i>
        </div>
</div>
      </div>

    </section>
  );
}