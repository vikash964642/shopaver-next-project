// import React from 'react'
import Image from "next/image";
import "./Style.css";


function MissionVision() {
  return (
    <section>
        <div className="max-w-screen-lg mx-auto">
         <div className="flex justify-between items-center lg:items-end flex-col-reverse  lg:flex-row px-[50px] ">
           <div className="pt-20">
             <h2 className="font-semibold text-4xl pb-[23px] flex "><span className="hidden md:flex pr-[5px]  ">Our </span > Mission</h2>
             <p className="md:text-base md:font-normal font-medium md:w-[575px] text-[14px] lg:leading-[30px] leading-[19px] ">At Shopaver, our mission is to provide advanced software that helps businesses work smarter, save time, and grow faster. We make business processes easier and give merchants the tools they need to succeed in today’s digital world. Our goal is to help you work better, save time, and increase profits with the right tools at your fingertips. </p>
           </div>
           <div>
             <Image src={"/img/MissionAboutus.webp"} height={203} width={185} alt="Growth Success Rate" />
           </div>
         </div>
         <div className="flex justify-between items-center pt-28 flex-col-reverse lg:items-end  lg:flex-row px-[46px] pr-[72px] ">
           <div className="pt-20">
             <h2 className="font-semibold text-4xl pb-9 flex "><span className="hidden md:flex pr-[5px] ">Our </span>Vision</h2>
             <p className="md:text-base md:font-normal font-medium md:w-[600px] text-sm lg:leading-[30px] leading-[19px]">At Shopaver, our vision is to make business easier with simple tools that help merchants work smoothly and grow. We believe in a future where businesses succeed by using smart, easy solutions that improve customer experience, save time, and help them grow faster in today’s digital world.</p>
           </div>
           <div>
             <Image src={"/img/VissionAboutus.webp"} height={220} width={196} alt="Shopaver Landscape Vision" />
           </div>
         </div>
        </div>
    </section>
  )
}

export default MissionVision
