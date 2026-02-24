"use client"
import Image from "next/image";

function CommonRetail() {
  return (
    <section className="bg-[#F9F4FF]  lg:pt-[74px] pt-[52px] pb-[87px]">
      <div className="max-w-5xl px-[22px] xl:px-0 mx-auto">
        <h2 className="text-[#5801B7] text-center text-[26px] lg:text-[30px] font-semibold">
          Common Retail Problems you Can’t Ignore
        </h2>
        <div className="mt-12.5">
            <div className="flex justify-center items-center gap-5">
               <div className="flex items-center gap-5 lg:gap-6">
                <p className="text-[#5801B7] md:text-[16px] lg:text-[18px] font-medium text-right leading-normal md:w-40 lg:w-[190px]">Long queues during peak hours</p> 
               <Image alt="Image" src={"/landingPage/CommonRetailImg1.webp"} className="w-40 h-40 md:w-[180px] md:h-[180px] lg:w-[250px] lg:h-[250px]" width={250} height={250}></Image>
               </div>
                <div className="flex items-center gap-5 lg:gap-6">
                     <Image alt="Image" src={"/landingPage/CommonRetailImg2.webp"} className="w-40 h-40 md:w-[180px] md:h-[180px] lg:w-[250px] lg:h-[250px]" width={250} height={250}></Image>
               <p className="text-[#5801B7] md:text-[16px] lg:text-[18px] font-medium leading-normal md:w-40 lg:w-[190px]">Manual stock errors and lost sales</p>
                </div>
            </div>
               <div className="mt-5 flex justify-center items-center gap-5">
               <div className="flex items-center gap-5 lg:gap-6">
                <p className="text-[#5801B7] md:text-[16px] lg:text-[18px] font-medium text-right leading-normal md:w-40 lg:w-[190px]">No real-time visibility into business performance</p> 
               <Image alt="Image" src={"/landingPage/CommonRetailImg3.webp"} className="w-40 h-40 md:w-[180px] md:h-[180px] lg:w-[250px] lg:h-[250px]" width={250} height={250}></Image>
               </div>
                <div className="flex items-center gap-5 lg:gap-6">
                     <Image alt="Image" src={"/landingPage/CommonRetailImg4.webp"} className="w-40 h-40 md:w-[180px] md:h-[180px] lg:w-[250px] lg:h-[250px]" width={250} height={250}></Image>
               <p className="text-[#5801B7] md:text-[16px] lg:text-[18px] font-medium leading-normal md:w-40 lg:w-[190px]">Multiple tools for inventory, billing and more</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default CommonRetail;
