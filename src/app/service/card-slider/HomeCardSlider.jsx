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



// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import { useRef } from "react";

// import "swiper/css";


// const cards = [
//   { id: 1, img: "/landingPage/BusinessSolutionSliderImg1.webp",shopOwnerName:"—ABC, Mr. Choice Owner",paragraph:"This POS software has transformed how we manage billing and stock. Super easy and reliable!" },
//   { id: 2, img: "/landingPage/BusinessSolutionSliderImg2.webp",shopOwnerName:"—ABC, Mr. Choice Owner", paragraph:"This POS software has transformed how we manage billing and stock. Super easy and reliable!" },
//   { id: 3, img: "/landingPage/BusinessSolutionSliderImg3.webp" ,shopOwnerName:"—ABC, Mr. Choice Owner",paragraph:"This POS software has transformed how we manage billing and stock. Super easy and reliable!"},
//   { id: 4, img: "/landingPage/BusinessSolutionSliderImg4.webp",shopOwnerName:"—ABC, Mr. Choice Owner",paragraph:"This POS software has transformed how we manage billing and stock. Super easy and reliable!" },
//   { id: 5, img: "/landingPage/BusinessSolutionSliderImg5.webp",shopOwnerName:"—ABC, Mr. Choice Owner",paragraph:"This POS software has transformed how we manage billing and stock. Super easy and reliable!" },
//   { id: 6, img: "/landingPage/BusinessSolutionSliderImg2.webp" ,shopOwnerName:"—ABC, Mr. Choice Owner",paragraph:"This POS software has transformed how we manage billing and stock. Super easy and reliable!"},
//   { id: 7, img: "/landingPage/BusinessSolutionSliderImg4.webp" ,shopOwnerName:"—ABC, Mr. Choice Owner",paragraph:"This POS software has transformed how we manage billing and stock. Super easy and reliable!"},
//   { id: 8, img: "/landingPage/BusinessSolutionSliderImg5.webp" ,shopOwnerName:"—ABC, Mr. Choice Owner",paragraph:"This POS software has transformed how we manage billing and stock. Super easy and reliable!"},
// ];

// export default function HomeCardSlider() {
//       const swiperRef = useRef(null);
//   return (
//     <section className="py-[120px]">

//       <div className="max-w-[1300px] mx-auto">

//         <Swiper
//           modules={[Navigation]}
//           slidesPerView={5}
//           centeredSlides={true}
//           spaceBetween={30}
//           loop={true}
          
//         //   autoplay={{
//         //     delay: 2500,
//         //     disableOnInteraction: false,
//         //   }}
//          onSwiper={(swiper) => (swiperRef.current = swiper)}
//           className="cardSwiper"
//         >
//           {cards.map((card) => (
//             <SwiperSlide key={card.id}>
//               <div className="card relative">
//                 <img src={card.img} alt="" />
//                <div className="absolute z-20 bottom-[35px] pl-[12px] pr-[22px]">
//                  <p className="text-[#FFF] text-[12.3px] ">{card.paragraph}</p>
//                  <p className="pt-[15px] text-[#FFF] text-[14px] font-semibold">{card.shopOwnerName}</p>
//                </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
// <div className="flex justify-center gap-[12.75px] mt-[50px]"> 
//     <div onClick={() => swiperRef.current.slidePrev()} className="h-[36.36px] w-[36.36px] rounded-full border-2 border-[#C4C4C4] text-[#C4C4C4] hover:border-[#5801B7] hover:text-[#5801B7] text-[18px] cursor-pointer flex justify-center items-center">
//         <i className="fa-solid fa-angle-left"></i>
//     </div>
//         <div onClick={() => swiperRef.current.slideNext()} className="h-[36.36px] w-[36.36px] rounded-full border-2 border-[#C4C4C4] text-[#C4C4C4] hover:border-[#5801B7] hover:text-[#5801B7] text-[18px] cursor-pointer flex justify-center items-center">
//               <i className="fa-solid fa-angle-right"></i>
//         </div>
// </div>
//       </div>

//     </section>
//   );
// }



//      Right Code

// "use client";
// import { useState, useRef } from "react";

// const cards = [
//   { id: 1, img: "/landingPage/BusinessSolutionSliderImg1.webp",title:"—Card1, Mr. Choice Owner", description: "This POS software transformed our billing system." },
//   { id: 2, img: "/landingPage/BusinessSolutionSliderImg2.webp",title:"—Card2, Mr. Choice Owner", description: "Managing inventory is now super easy." },
//   { id: 3, img: "/landingPage/BusinessSolutionSliderImg3.webp",title:"—Card3, Mr. Choice Owner", description: "Great software for retail shop owners." },
//   { id: 4, img: "/landingPage/BusinessSolutionSliderImg4.webp",title:"—Card4, Mr. Choice Owner", description: "Very reliable and easy to use." },
//   { id: 5, img: "/landingPage/BusinessSolutionSliderImg5.webp",title:"—Card5, Mr. Choice Owner", description: "Perfect solution for small businesses." },
//   { id: 6, img: "/landingPage/BusinessSolutionSliderImg2.webp",title:"—Card6, Mr. Choice Owner", description: "Stock management is smooth now." },
// ];

// export default function CustomSlider() {
//   const [index, setIndex] = useState(0);

//   const prev = () => {
//     setIndex((prev) => (prev - 1 + cards.length) % cards.length);
//   };

//   const next = () => {
//     setIndex((prev) => (prev + 1) % cards.length);
//   };

//   const getCard = (offset) => {
//     const i = (index + offset + cards.length) % cards.length;
//     return cards[i];
//   };
// const touchStartX = useRef(0);
// const touchEndX = useRef(0);

// const handleTouchStart = (e) => {
//   touchStartX.current = e.changedTouches[0].clientX;
// };

// const handleTouchEnd = (e) => {
//   touchEndX.current = e.changedTouches[0].clientX;

//   const diff = touchStartX.current - touchEndX.current;

//   if (window.innerWidth <= 550) {
//     if (diff > 50) {
//       next();   // swipe left
//     } else if (diff < -50) {
//       prev();   // swipe right
//     }
//   }
// };
// const Card = ({ card, className }) => {
//   const isSmall = className === "smallLeft" || className === "smallRight";

//   return (
//     <div className={`sliderItem ${className}`}>
//       <img src={card.img} alt="" />

//       <div className={`absolute  left-[15px] right-[12px] text-white ${
//             isSmall ? "bottom-[20px] lg:bottom-[28px]" : "bottom-[25px] lg:bottom-[35px]"
//           }`}>

//         <p
//           className={`font-medium ${
//             isSmall ? "lg:text-[10px]" : " lg:text-[12.5px]"
//           }`}
//         >
//           {card.description}
//         </p>

//         <p
//           className={` font-semibold ${
//             isSmall ? "pt-[12.6px] lg:text-[11.5px]" : "pt-[12.6px] lg:pt-[16px] lg:text-[14px]"
//           }`}
//         >
//           {card.title}
//         </p>

//       </div>
//     </div>
//   );
// };
//   return (
//     <div className="sliderWrapper">

//       <div className="sliderTrack"   onTouchStart={handleTouchStart}
//   onTouchEnd={handleTouchEnd}
// >

//         <Card card={getCard(-2)} className="smallLeft" />
//         <Card card={getCard(-1)} className="activeLeft" />
//         <Card card={getCard(0)} className="centerItem" />
//         <Card card={getCard(1)} className="activeRight" />
//         <Card card={getCard(2)} className="smallRight" />

//       </div>

//       <div className="flex justify-center gap-[12.75px] mt-[10px] lg:mt-[40px]">

//         <div
//           onClick={prev}
//           className="h-[28px] w-[28px] lg:h-[36.36px] lg:w-[36.36px] rounded-full border-2 border-[#C4C4C4] text-[#C4C4C4] hover:border-[#5801B7] hover:text-[#5801B7] text-[15px] lg:text-[18px] cursor-pointer flex justify-center items-center"
//         >
//           <i className="fa-solid fa-angle-left"></i>
//         </div>

//         <div
//           onClick={next}
//           className="w-[28px] h-[28px] lg:h-[36.36px] lg:w-[36.36px] rounded-full border-2 border-[#C4C4C4] text-[#C4C4C4] hover:border-[#5801B7] hover:text-[#5801B7] text-[15px] lg:text-[18px] cursor-pointer flex justify-center items-center"
//         >
//           <i className="fa-solid fa-angle-right"></i>
//         </div>

//       </div>

//     </div>
//   );
// }

// Semi Right Code
// "use client";
// import { useState } from "react";


// const cards = [
//   { id: 1, img: "/landingPage/BusinessSolutionSliderImg1.webp" },
//   { id: 2, img: "/landingPage/BusinessSolutionSliderImg2.webp" },
//   { id: 3, img: "/landingPage/BusinessSolutionSliderImg3.webp" },
//   { id: 4, img: "/landingPage/BusinessSolutionSliderImg4.webp" },
//   { id: 5, img: "/landingPage/BusinessSolutionSliderImg5.webp" },
//   { id: 6, img: "/landingPage/BusinessSolutionSliderImg2.webp" },
// ];

// export default function Carousel() {
//   const [index, setIndex] = useState(2);

//   const next = () => setIndex((prev) => (prev + 1) % cards.length);
//   const prev = () => setIndex((prev) => (prev - 1 + cards.length) % cards.length);

//   return (
//     <div className="carouselWrapper">

//       <div className="carouselTrack">

//         {cards.map((card, i) => {
//           const position = (i - index + cards.length) % cards.length;

//           let className = "card";

//           if (position === 2) className += " center";
//           else if (position === 1) className += " left";
//           else if (position === 3) className += " right";
//           else if (position === 0) className += " smallLeft";
//           else if (position === 4) className += " smallRight";
//           else className += " hidden";

//           return (
//             <div key={card.id} className={className}>
//               <img src={card.img} alt="" />
//             </div>
//           );
//         })}

//       </div>

//       <div className="nav">
//         <button onClick={prev}>Prev</button>
//         <button onClick={next}>Next</button>
//       </div>

//     </div>
//   );
// }


"use client";
import { useState, useRef } from "react";

const cards = [
  { id: 1, img: "/landingPage/BusinessSolutionSliderImg1.webp", title:"—Card1, Mr. Choice Owner", description:"This POS software transformed our billing system." },
  { id: 2, img: "/landingPage/BusinessSolutionSliderImg2.webp", title:"—Card2, Mr. Choice Owner", description:"Managing inventory is now super easy." },
  { id: 3, img: "/landingPage/BusinessSolutionSliderImg3.webp", title:"—Card3, Mr. Choice Owner", description:"Great software for retail shop owners." },
  { id: 4, img: "/landingPage/BusinessSolutionSliderImg4.webp", title:"—Card4, Mr. Choice Owner", description:"Very reliable and easy to use." },
  { id: 5, img: "/landingPage/BusinessSolutionSliderImg5.webp", title:"—Card5, Mr. Choice Owner", description:"Perfect solution for small businesses." },
  { id: 6, img: "/landingPage/BusinessSolutionSliderImg2.webp", title:"—Card6, Mr. Choice Owner", description:"Stock management is smooth now." },
];

export default function CustomSlider(){

  const [index,setIndex] = useState(0)
  const [direction,setDirection] = useState("next")

  const next = ()=>{
    setDirection("next")
    setIndex((prev)=>(prev+1)%cards.length)
  }

  const prev = ()=>{
    setDirection("prev")
    setIndex((prev)=>(prev-1+cards.length)%cards.length)
  }

  const getPosition = (i)=>{
    const diff = (i - index + cards.length) % cards.length

    if(diff === 0) return "centerItem"
    if(diff === 1) return "activeRight"
    if(diff === 2) return "smallRight"
    if(diff === 3) return "outerRight"
    if(diff === cards.length - 1) return "activeLeft"
    if(diff === cards.length - 2) return "smallLeft"
    if(diff === cards.length - 3) return "outerLeft"

    return "hiddenCard"
  }

  const touchStartX = useRef(0)

  const handleTouchStart=(e)=>{
    touchStartX.current = e.changedTouches[0].clientX
  }

  const handleTouchEnd=(e)=>{
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if(Math.abs(diff)>50){
      if(diff>0) next()
      else prev()
    }
  }

  return(
    <div className="sliderWrapper">

      <div
        className="sliderTrack"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >

        {cards.map((card,i)=>{

          const pos = getPosition(i)

          return(
            <div key={card.id} className={`sliderItem ${pos}`}>
              <img src={card.img} alt="" />
              <div className="sliderContent absolute bottom-[30px] px-[15px]">
                <p className="sliderDescription">{card.description}</p>
                <p className="sliderHeader">{card.title}</p>
              </div>
            </div>
          )

        })}

      </div>

      {/* Arrows */}
   //       <div className="flex justify-center gap-[12.75px] mt-[10px] lg:mt-[40px]">

        <div
           onClick={prev}
           className="h-[28px] w-[28px] lg:h-[36.36px] lg:w-[36.36px] rounded-full border-2 border-[#C4C4C4] text-[#C4C4C4] hover:border-[#5801B7] hover:text-[#5801B7] text-[15px] lg:text-[18px] cursor-pointer flex justify-center items-center"
         >
           <i className="fa-solid fa-angle-left"></i>
         </div>
         <div
         onClick={next}
           className="w-[28px] h-[28px] lg:h-[36.36px] lg:w-[36.36px] rounded-full border-2 border-[#C4C4C4] text-[#C4C4C4] hover:border-[#5801B7] hover:text-[#5801B7] text-[15px] lg:text-[18px] cursor-pointer flex justify-center items-center"
        >
           <i className="fa-solid fa-angle-right"></i>
        </div>

      </div>

    </div>
  )
}