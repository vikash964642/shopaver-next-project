"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";


const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHoveredLeft, setIsHoveredLeft] = useState(false);
  const [isHoveredRight, setIsHoveredRight] = useState(false);

  const slides = [
    
   
   
   
    {
      title: "Your own Online Store",
      description:
        "Empower your business with our online selling platform. Sell online, reach more customers, and grow your sales with our Shopaver online store.",
      imgSrc: "/img/Service5.webp",
      alt:"Service5-img",
      path: "/online-store",
      view: "View More >>",
    },
    {
      title: "Whatsapp Commerce",
      description:
        "Put your Business on WhatsApp to engage with your customers on their favourite chat app.",
      imgSrc: "/img/Service6.webp",
      alt:"Service6-img",
      path: "/whatsapp-commerce",
      view: "View More >>",
    },
    {
      title: "With POS Billing",
      description:
        "Simplify your business with Shopaver’s all-in-one POS solution. Manage billing, inventory, payments, and more without any hassle.",
      imgSrc: "/img/Service7.webp",
      alt:"Service7-img",
      path: "/pos-billing-software",
      view: "View More >>",
    },
    {
      title: "Quick Billing",
      description:
        "Instant invoicing - Rapid Results. Our Quick billing solution keeps our business moving forward.",
      imgSrc: "/img/Service1.webp",
      alt:"Service1-img",
      path: "/quick-billing-software",
      view: "View More >>",
    },
    {
      title: "Easy Inventory Management",
      description:
        "Effectively manage products by tracking barcode SKU and HSN details, alongside maintaining accurate stock data information for the entire catalogue.",
      imgSrc: "/img/Service2.webp",
      alt:"Service2-img",
      path: "/inventory-management-software",
      view: "View More >>",
    },
  ];

  const slidesPerPage = window.innerWidth >= 768 ? 2 : 1; 

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + slidesPerPage;
      if (newIndex >= slides.length) {
        newIndex = 0; // Reset to the first slide
      }
      return newIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex - slidesPerPage;
      if (newIndex < 0) {
        newIndex = slides.length - slidesPerPage;
      }
      return newIndex;
    });
  };

  const ScrollTop = () => {
    window.scrollTo({ top: 0});
  };

  return (
    <div className="flex flex-col items-center max-w-screen-lg mx-auto my-12">
      <h3 className="text-3xl lg:text-4xl font-bold text-center mb-8">
        Checkout Our Other Services
      </h3>
      <div className="relative w-full max-w-[1000px] overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / slidesPerPage)}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`w-full sm:w-1/2 md:w-1/${slidesPerPage} flex-shrink-0 flex flex-col items-center p-[35px]`}
            >
              <Image
                src={slide.imgSrc}
                height={430} width={382}
                alt={slide.title}
                className="w-full h-auto mb-4 rounded-lg"
              />
              <div className="">
                <h3 className="text-xl text-[#1B1B1B]  font-semibold mb-2">{slide.title}</h3>
                <p className="text-[#525252] mb-4">{slide.description}</p>
                <Link
                  href={slide.path}
                  className="text-[#5801B7] font-bold text-lg "
                  onClick={ScrollTop}
                >
                  {slide.view}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <div className="arrow-left">
            <ion-icon
              name="chevron-back-circle-outline"
              style={{
                fontSize: "40px",
                color: isHoveredLeft ? "#5801B7" : "#454545", // Blue when hovered, grey otherwise
                cursor: "pointer",
              }}
              onMouseEnter={() => setIsHoveredLeft(true)}
              onMouseLeave={() => setIsHoveredLeft(false)}
              onClick={handlePrev}
            ></ion-icon>
          </div>
          <div className="arrow-right">
            <ion-icon
              name="chevron-forward-circle-outline"
              style={{
                fontSize: "40px",
                color: isHoveredRight ? "#5801B7" : "#454545", // Blue when hovered, grey otherwise
                cursor: "pointer",
              }}
              onMouseEnter={() => setIsHoveredRight(true)}
              onMouseLeave={() => setIsHoveredRight(false)}
              onClick={handleNext}
            ></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
