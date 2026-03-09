"use client";
import { useState } from "react";
import Image from "next/image";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
 
const TestimonialSlider = () => {
  // const [hoveredIndex, setHoveredIndex] = useState(-1);
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
  const [isHovered, setIsHovered] = useState(false);
 
  return (
    <section>
      <div
        className="max-w-screen-lg mx-auto mt-[80px] md:mt-[5rem] lg:mt-[12rem] relative p-5 sm:p-0"
      >
        <div className="pb-[40px] md:pb-[80px]">

          <h2 className=" flex justify-center text-center text-xl max-md:text-2xl lg:text-[40px] font-bold">
          Merchant Reviews on POS Software Solution
          </h2>
          <p className="lg:mt-[25px] flex justify-center text-center text-[12px] font-medium lg:text-[20px] px-[8px] lg:px-[0px] mt-[10px] ">The best billing software on the market, easy to use for everyone - from restaurants and retail stores to grocery shops, kiosk carts, spas, and salons.</p>
        </div>
        <Swiper
          // install Swiper modules
          centeredSlides={true}
          modules={[Navigation, Pagination, A11y]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          loop={true}
          // spaceBetween={25}
          slidesPerView={3}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            999: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
          }}
          navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div
                className={`card overflow-hidden ${"bg-secondary"} rounded-3xl hidden md:flex`}
              >
                <div className="card__collection clear-fix ">
                  <div className="cards cards--three w-[313px] h-[465.86px] lg:h-[449.45px] lg:w-[324.96px] ">
                    <div className="cards--three__rect-1">
                      <div className="shadow-1"></div>
                      <h5>{testimonial.merchantName}</h5>
                      <span>{testimonial.address}</span>
                      <p>{testimonial.content}</p>
                    </div>
                    <div className="flex items-center justify-around flex-col h-full w-full">
                      <div className="content">
                        <h5 className="text-base font-medium lg:text-[20px] lg:font-bold">
                          {testimonial.merchantName}
                        </h5>
                        <span className="text-base font-medium ">
                          {testimonial.address}
                        </span>
                      </div>
                      <Image
                        src={testimonial.image}
                        height={280}
                        width={307}
                        className="img-responsive h-[269.09px] w-[269.09px] md:h-[280.5px] md:w-[307.17px] aspect-square "
                        alt="merchant review on shopaver app"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-secondary p-3 rounded-[21.96px]  h-[403px] mx-[25px] md:hidden">
                <div className="pl-[10px] pr-[20px] lg:pl-[0px] lg:pr-[0px]">
                  <div className="w-[88px] h-[88px]  p-[8px] ">
                    <Image
                      src={testimonial.image}
                      width={88}
                      height={88}
                      alt="merchant review on shopaver app"
                      className="rounded-full border-2 border-primary"
                    />
                  </div>
                  <h5 className="leading-[25px] text-[24px] font-bold">
                    {testimonial.merchantName}
                  </h5>
                  <span className="text-[16px] leading-[25px] font-medium">
                    {testimonial.address}
                  </span>
 
                  <div className="border-t border-[#E6E6E6] w-full my-[13px]"></div>
                  <div>
                    <p className="text-[14px] font-medium leading-[17px]">
                      {testimonial.content}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mt-12 mb-10 flex items-center justify-center ">
          <div className="arrow-right ">
            <ion-icon
              name="chevron-back-circle-outline"
              style={{
                height: "40px",
                width: "40px",
                color: isHovered ? "#5801B7" : "#454545",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            ></ion-icon>
          </div>
          <div className="arrow-left">
            <ion-icon
              name="chevron-forward-circle-outline"
              style={{ height: "40px", width: "40px",  color: isHovered ? "#454545" : "#5801B7" }}
             
            ></ion-icon>
          </div>
        </div>
      </div>
    </section>
  );
};
 
export default TestimonialSlider;
 