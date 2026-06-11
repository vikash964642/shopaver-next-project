// import React from 'react'
"use client";
import Link from "next/link";
import Image from "next/image";
// import { Link } from "react-router-dom";

function UpgradeBusiness() {
  return (
    <section className="max-w-[90rem] px-[27px] xl2:px-[170px] mx-auto flex justify-center mt-[52px] lg:mt-[125px]">
   <div className="max-w-[500px] w-full lg:max-w-full border-2 border-[#E3E3FF] rounded-[16px] pt-[28.5px] lg:pt-0 px-[19px] lg:px-[34px] flex justify-between flex-col lg:flex-row">
<div className="lg:py-[34px]">
  <h2 className="w-[240px] lg:w-[405px] text-[#5801B7] font-bricolage text-[30px] lg:text-[36px] leading-[36px] lg:leading-[50px] font-semibold">Upgrade your business to the next level</h2>
  <p className="pt-[7px] lg:pt-[10px] w-full xm1:w-[280px] lg:w-[440px] text-[#525252] text-[14px] lg:text-[18px] leading-[18px] lg:leading-[28px]">Start your journey with Shopaver today — manage your shop right from your phone, anywhere, anytime.</p>
    
  
      <p className="mt-[25px] w-[184px] text-[#3B3B3B] text-[14px] lg:text-[18px] font-semibold ">Scan the QR Code to 
download the App</p>
<div className="mt-[10px] flex items-center gap-[9.5px] lg:gap-[27px]">
<Image src={"/img/UpgradeBusinessScanner.png"} height={169} width={171} className="w-[131.73px] h-[130.4px] lg:w-[171px] lg:h-[169px]"></Image>
 
    <div className="flex flex-col lg:flex-row items-center gap-[10px]">
      <Image src={"/img/AndroidLink.png"} height={40} width={130} className="w-[112.66px] h-[34.66px] lg:w-[130px] lg:h-[40px]"></Image>
      <Image src={"/img/IOSLink.png"} height={40} width={130} className="w-[112.66px] h-[34.66px] lg:w-[130px] lg:h-[40px]"></Image>
    </div>
  </div>
</div>
<div className="pt-[40px] flex justify-center">
  <Image src={"/img/UpgradeBusinessImg1.png"} height={400} width={451} className="h-[331px] lg:h-full w-[317px] lg:w-[451px]"></Image>
</div>
   </div>
    </section>
  );
}

export default UpgradeBusiness;
