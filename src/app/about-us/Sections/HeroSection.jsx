// import React from 'react'
import "./Style.css";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <div className="max-w-screen-lg mx-auto Herosection">
        <p className="flex justify-center items-center text-2xl md:text-[36px]  leading-8  font-bold pt-[66px] md:pt-[110px] text-primary">
          About Us
        </p>
        <h1 className="flex justify-center items-center lg:leading-[62px] leading-[38px] lg:text-[52px] text-[26px] bold lg:py-[42px] py-[30px] px-[47px] text-center font-bold">
          Hey! We’re Shopaver, supporting businesses of all sizes
        </h1>
        <div className="flex justify-center items-center text-center">
          <p className=" text-base lg:text-[18px] font-medium	px-[41px] lg:px-[30px] lg:w-[924px]">
            Shopaver is the Next-gen business solution designed for small and
            medium-sized enterprises (SMEs) and startups. It offers easy-to-use
            tools to help you manage your business, whether you run a small
            cart, kiosk, or a big retail store.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center pt-[55px]">
        <Link
          href="https://app.shopaver.com/Sign-up"
          className="flex justify-center lg:w-[197px] lg:h-[58px] w-[164px] h-[48px] bg-primary  border text-white font-bold  rounded-[43px] lg:text-[21px] text-[16px] text-center items-center"
        >
          Register Now
        </Link>
      </div>
      <div className=" flex justify-center items-center pt-[101px] mx-6 md:pt-[187px]  ">
        <Image
          src={"/video/about us page 1.gif"}
          alt="Inventoy Managment"
          height={504}
          width={891}
          className="border-2 border-primary md:rounded-[82px]  "
        />
      </div>
    </>
  );
};

export default HeroSection;
