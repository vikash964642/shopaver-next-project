
"use client";
import { useState } from "react";
import arrowleft from "/img/Arrow - left-Circle.webp";
import arrowright from "/img/Arrow - Right Circle.webp";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slide1 = [
    {
      title: "Easy Inventory Management",
      description:
        "Instant invoicing - Rapid Results. Our Quick billing solution keeps our business moving forward.",
      imgSrc: "/img/Service1.webp", // Replace with your image path
    },
    {
      title: "Digital Khata",
      description:
        "Effortlessly track transactions, manage accounts, and generate reports with ease, regardless of your accounting.",
      imgSrc: "/img/Service2.webp", // Replace with your image path
    },
  ];
  const slide2 = [
    {
      title: "Payment Gateway",
      description:
        "Secure payment gateways to keep your transactions safe and sound.",
      imgSrc: "/img/Service1.webp", // Replace with your image path
    },
    {
      title: "Maximize visibility with ONDC",
      description:
        "Effectively manage products by tracking barcode SKU and HSN details, alongside maintaining accurate stock data information for the entire catalogue.",
      imgSrc: "/img/Service2.webp", // Replace with your image path
    },
  ];
  const slide3 = [
    {
      title: "Your own Online Store",
      description:
        "Effectively manage products by tracking barcode SKU and HSN details, alongside maintaining accurate stock data information for the entire catalogue.",
      imgSrc: "/img/Service2.webp", // Replace with your image path
    },
    {
      title: "Whatsapp Commerce",
      description:
        "Put your Business on WhatsApp to engage with your customers on their favourite chat app.",
      imgSrc: "/img/Service2.webp", // Replace with your image path
    },
  ];
  const slides = [slide1, slide2, slide3];
  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      var newIndex;
      if (prevIndex > 1) {
        newIndex = 0;
      } else {
        newIndex = prevIndex + 1;
      }
      return newIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + slides.length) % slides.length;
      return newIndex;
    });
  };


  return (
    <div className="flex flex-col items-center max-w-screen-lg mx-auto my-[150px]">
      <h2 className="text-2xl font-semibold mb-8">
        Checkout Our Other Services
      </h2>
      <div className="relative w-full max-w-[1000px] overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) =>
            slide.map((innerSlide, j) => (
              <div
                key={j}
                className="w-full sm:w-1/2 flex-shrink-0 flex flex-col items-center p-[35px]"
              >
                <img
                  src={innerSlide.imgSrc}
                  alt={innerSlide.title}
                  className="w-[464px] h-[410px] object-contain mb-4 rounded-[25px]"
                />
                <div>
                  <h3 className="text-xl font-semibold">{innerSlide.title}</h3>
                  <p className="text-gray-500 w-[434px]">
                    {innerSlide.description}
                  </p>
                </div>
                <div className="w-full mt-[27px]">
                  <a href="#" className="text-purple-500 font-bold text-[17px]">
                    View More &gt;&gt;
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="flex justify-center pt-[69px]">
          <div className="pr-2 cursor-pointer hover:bg-(--primary)">
            <img src={arrowleft} alt="Previous" onClick={handlePrev} />
          </div>
          <div className="cursor-pointer hover:bg-(--primary)">
            <img src={arrowright} alt="Next" onClick={handleNext} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
