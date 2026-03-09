// import React from 'react'
"use client";
import Link from "next/link";
import Image from "next/image";
// import { Link } from "react-router-dom";

function UpgradeBusiness() {
  return (
    <section className="bg-secondary">
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-[48px] lg:pt-[67px]">
        <div className="p-5">
          <p className="text-[16px] lg:text-[24px] mb-6 text-[#525252] font-bold lg:font-medium leading-[27px] lg:hidden flex text-center px-[50px]">
            Start your journey with Shopaver POS Billing today
          </p>
          <h3 className="text-primary text-[24px] lg:text-[40px] font-bold leading-[33px] lg:leading-[52px] mb-2 text-center lg:text-left px-[40px] lg:px-[0px]">
            Upgrade Your Business To The Next Level
          </h3>
          <p className="text-[16px] lg:text-[24px] mb-6 text-[#525252] font-bold lg:font-medium leading-[33px] hidden lg:flex">
            Start your journey with Shopaver POS Billing today
          </p>

          <div className="flex flex-col lg:flex-row mb-6 relative items-center gap-5 lg:items-start lg:gap-0">
            <input
              type="tel"
              maxLength={10}
              pattern="[0-9]*"
              placeholder="Enter Mobile Number"
              className="px-4  rounded-[64.48px]  text-[18px] leading-[21px] w-[288px] lg:w-[370px] h-[45px] lg:h-14 placeholder:text-primary font-medium"
            />
            <Link href="https://app.shopaver.com/Sign-up" target="_blank">
              <button className="bg-primary  text-white cursor-pointer px-4 w-[288px] lg:w-auto  rounded-[64.48px] text-[18px] lg:absolute right-[40px] h-[45px] lg:h-[56px]">
                Get 14 day free trial
              </button>
            </Link>
          </div>

          <p className="mb-2 lg:text-[24px] text-[#363636] font-semibold leading-[33px] text-center lg:text-start">
            Download App On
          </p>
          <div className="flex justify-center lg:justify-start gap-3">
            <a href="https://play.google.com/store/apps/details?id=com.shopaver" target="_blank"><Image src={"/img/playstoreicon.png"} height={40} width={150} alt="Google Play" className="h-10" /></a>
            <a href="https://apps.apple.com/in/app/shopaver/id6747590415" target="_blank"><Image src={"/img/appstoreicon.png"} height={40} width={150} alt="Google Play" className="h-10" /></a>
            
            {/* <img src={appstoreicon} alt="Google Play" className="h-10" /> */}
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src={"/img/upgradeBusiness.png"}
            width={400}
            height={500}
            alt="App Mockup"
            className="h-[400px] md:h-[500px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default UpgradeBusiness;
