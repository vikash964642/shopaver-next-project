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
    <section className='max-w-[115.625rem] mx-auto mt-[7.5rem]'>
    <div className="mx-32">
  <div className='flex items-center flex-col gap-[0.625rem] mt-[0.625rem]'>
  <h2 className='w-[15.1875rem] lg:w-full text-[#5801B7] text-[1.875rem] lg:text-[2.5rem] font-bold text-center leading-normal font-bricolage'>What our Customers Say ?</h2>
    <p className='max-w-[20.9375rem] lg:max-w-[31.5625rem] text-[#666] text-[0.875rem] lg:text-[1.125rem] text-center leading-normal font-dm-sans'>We provide simple, smart tools and trusted support to help your business grow faster and run smoothly.</p>
  </div>

 
<div className='mt-[1.5625rem] lg:mt-[3.4375rem] relative hidden lg:block overflow-hidden'>
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
  <div className='h-full lg:h-[23.75rem] w-[20rem] lg:w-auto p-[1.1875rem] border border-[#DADAFF] bg-[#F8F8FF] rounded-[2.4375rem] flex flex-col-reverse lg:flex-row gap-[1.5rem]'>
<div className='lg:w-[50%] h-full'>
  <Image className='h-[16.8125rem] w-[18.03125rem] lg:h-full lg:w-full object-cover rounded-[1.5rem]' src={item.image} height={341} width={370}></Image>
</div>
<div className='lg:w-[50%] flex flex-col justify-center'>
  <h2 className='text-[#393939] text-[1.375rem] font-medium leading-normal font-bricolage'>{item.merchantName}</h2>
  <p className='pt-[0.3125rem] text-[#666] text-[0.875rem] lg:text-[1rem] font-normal leading-normal font-dm-sans'>{item.content}</p>
</div>
  </div>
  </SwiperSlide>
))}
</Swiper>
</div>
  <div className="ml-[1.25rem] mt-[1.5625rem] lg:mt-[3.4375rem] relative overflow-hidden block lg:hidden">
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
        className="!w-[20rem]"
      >
        <div className="h-full w-full p-[1.1875rem] border border-[#DADAFF] bg-[#F8F8FF] rounded-[2rem] flex flex-col-reverse gap-[3.75rem]">
          <div className="">
            <Image
              src={item.image}
              width={370}
              height={341}
              alt={item.merchantName}
              className="h-[16.8125rem] w-full object-cover rounded-[1.5rem]"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-[#393939] text-[1.375rem] font-medium leading-normal font-bricolage">
              {item.merchantName}
            </h2>

            <p className="pt-[0.3125rem] text-[#666] text-[0.875rem] lg:text-[1rem] font-normal leading-normal font-dm-sans">
              {item.content}
            </p>
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

</div>
    </section>
  )
}

export default CarouselSlider