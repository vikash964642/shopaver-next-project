'use client'
import React,{useState} from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
function CarouselSlider() {
  const [activeButton, setActiveButton] = useState("next");
  const testimonials = [
    {
      merchantName: "Ashraf Ali",
      address: "Ashraf Ali General Store, Pilibhit",
      content:
        "Ashraf Ali, owner of a grocery shop. Frustrated with juggling inventory, sales, and customer data, Name discovered Shopaver. With its intuitive interface and powerful features, Ashraf Ali effortlessly manages his business, from inventory tracking to customer relationships, driving growth and delighting customers every step of the way.",
      image: "/img/merchant1.webp",
    },
    {
      merchantName: "Yogesh Kumar",
      address: "Kalka Shoe House, Faridabad",
      content:
        "Yogesh owner of Footwear Shop, faced challenges with inventory and customer management until she found ShopAver. Now, with streamlined operations and insights at her fingertips, Yogesh  easily tracks stock, engages customers, and grows her business with confidence.",
      image: "/img/merchant2.webp",
    },
    {
      merchantName: "Rahul Yadav",
      address: "New Big Bazar, Niwari M.P",
      content:
        "Rahul Yadav, owner of a grocery shop. Frustrated with juggling inventory, sales, and customer data, Name discovered Shopaver. With its intuitive interface and powerful features, Rahul effortlessly manages his business, from inventory tracking to customer relationships, driving growth and delighting customers every step of the way.",
      image: "/img/merchant3.webp",
    },
    
    {
      merchantName: "Raj kumar",
      address: "Raj Medical Store, Ashtha",
      content:
        "We evaluated multiple POS solutions for our stores, but none provided us with the best solution until we discovered Shopaver. This POS Shopaver that works on the smallest device but delivers the major impact. Now, we have complete control of our business operation.",
      image: "/img/merchant4.webp",
    },
    {
      merchantName: "Ravi",
      address: "Hindustan Medical Store, Ashtha",
      content:
        "Our business model is largely dependent on the operational activities conducted at our medical store. This Software has transformed the way we generate POS & Quick billing at Medical Store. Highly recommended for its reliability and customer-focused approach.",
      image: "/img/merchant5.webp",
    },
    // Add more testimonials as needed
  ];
  return (
    <div className='max-w-5xl mx-auto mt-[165px]'>
  <div className='flex items-center flex-col gap-[10px] mt-[10px]'>
  <h2 className='w-[243px] lg:w-full text-[#5801B7] text-[30px] lg:text-[40px] font-bold text-center leading-normal'>What our Customers Say ?</h2>
    <p className='max-w-[335px] lg:max-w-[505px] text-[#666] text-[14px] lg:text-[18px] text-center leading-normal'>We provide simple, smart tools and trusted support to help your business grow faster and run smoothly.</p>
  </div>

 
<div className='mt-[25px] lg:mt-[55px] relative hidden lg:block'>
     <div className='CarouselSliderGradient1'></div>
    <div className='CarouselSliderGradient2'></div>
       <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
         breakpoints={{
    0: {
      slidesPerView: 1.2,
      centeredSlides: false,
      spaceBetween: 15,
    },

    1024: {
      slidesPerView: 1.4,
      centeredSlides: true,
      spaceBetween: 17,
    },
  }}
        >
{testimonials.map((item,index)=>(
   <SwiperSlide key={index}>
  <div className='h-full lg:h-[380px] w-[320px] lg:w-auto p-[19px] border border-[#DADAFF] bg-[#F8F8FF] rounded-[39px] flex flex-col-reverse lg:flex-row gap-[24px]'>
<div className='lg:w-[50%] h-full'>
  <Image className='h-[269px] w-[288.5px] lg:h-full lg:w-full object-cover rounded-[24px]' src={item.image} height={341} width={370}></Image>
</div>
<div className='lg:w-[50%] flex flex-col justify-center'>
  <h2 className='text-[#393939] text-[22px] font-medium leading-normal'>{item.merchantName}</h2>
  <p className='pt-[5px] text-[#666] text-[14px] lg:text-[16px] font-normal leading-normal'>{item.content}</p>
</div>
  </div>
  </SwiperSlide>
))}
</Swiper>
</div>
  <div className="ml-[20px] mt-[25px] lg:mt-[55px] relative overflow-hidden block lg:hidden">
  <Swiper
    modules={[Autoplay,Navigation]}
   
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
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
    {testimonials.map((item, index) => (
      <SwiperSlide
        key={index}
        className="!w-[320px]"
      >
        <div className="h-full w-full p-[19px] border border-[#DADAFF] bg-[#F8F8FF] rounded-[32px] flex flex-col-reverse gap-[60px]">
          <div className="">
            <Image
              src={item.image}
              width={370}
              height={341}
              alt={item.merchantName}
              className="h-[269px] w-full object-cover rounded-[24px]"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-[#393939] text-[22px] font-medium leading-normal">
              {item.merchantName}
            </h2>

            <p className="pt-[5px] text-[#666] text-[14px] lg:text-[16px] font-normal leading-normal">
              {item.content}
            </p>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
  <div className='flex justify-center items-center gap-[15px] mt-[30px]'>
  <button  onClick={() => setActiveButton("prev")} className={`testimonial-prev h-[36px] w-[36px] flex justify-center items-center  rounded-full border-[0.9px]  ${activeButton === "prev"
        ? "bg-[#F8F8FF]  border-[#CBCBFF]"
        : " bg-[#ECECEC] border-[#D7D7D7]"
    }`}>
    <i className={`fa-solid fa-chevron-left ${activeButton==="prev" ? "text-[#5801B7]" : "text-[#525252]"}`}></i>
  </button>
    <button  onClick={() => setActiveButton("next")} className={`testimonial-next h-[36px] w-[36px] flex justify-center items-center  rounded-full border-[0.9px]  ${activeButton === "next"
        ? " bg-[#F8F8FF]  border-[#CBCBFF]"
        : "bg-[#ECECEC] border-[#D7D7D7]"
    }`}>
      <i className={`fa-solid fa-chevron-right ${activeButton==="next" ? "text-[#5801B7]" : "text-[#525252]"}`}></i>
  </button>
  </div>
</div>


  
</div>
  )
}

export default CarouselSlider