"use client"
import Image from "next/image";

function CommonProblem() {
  return (
    <section className="bg-[#F9F4FF]  lg:pt-[74px] pt-[52px] pb-[87px]">
      <div className="max-w-5xl px-[22px] xl:px-0 mx-auto">
        <h2 className="text-[#5801B7] text-center text-[26px] lg:text-[30px] font-semibold">
          Common Problems you Can&apos;t Ignore
        </h2>
        <div className="hidden md:block mt-[50px]">
            <div className="flex justify-center items-center gap-5"> 
               <div className="flex items-center gap-5 lg:gap-6">
                <p className="text-[#5801B7] md:text-[16px] lg:text-[18px] font-medium text-right leading-normal md:w-40 lg:w-[190px]">Long queues during peak hours</p> 
               <Image alt="Image" src={"/landingPage/CommonRetailImg1.webp"} className="w-40 h-40 md:w-[180px] md:h-[180px] lg:w-[250px] lg:h-[250px]" width={250} height={250}></Image>
               </div>
                <div className="flex items-center gap-5 lg:gap-6 relative">
                     <Image alt="Image" src={"/landingPage/CommonRetailCrownImg.svg"} className="absolute right-[150px] -top-5 lg:right-[188px] lg:top-[-18px]" width={27.06} height={31.43}></Image>
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
        <div className="block md:hidden mt-[34px]">
            <div className="flex justify-center gap-2.5 items-stretch">
         <div className="max-[375px]:w-full w-40 flex flex-col">
            <Image alt="Image" src={"/landingPage/CommonRetailImg1.webp"}  width={160} height={160}></Image>
            <div className="flex-1 w-full mt-[-3px] px-2.5 pt-3 pb-[23px] bg-[#FFF] border-l-[0.713px] border-r-[0.713px] border-b-[0.713px] border-[#E3CAFF] rounded-b-[10.908px]">
           <p className="text-[#5801B7] text-[15px] font-medium ">Long queues during peak hours</p>
            </div>
         </div>
           <div className="max-[375px]:w-full w-40 flex flex-col">
            <Image alt="Image" src={"/landingPage/CommonRetailImg2.webp"} className="w-[160] h-[160]" width={160} height={160}></Image>
            <div className="flex-1 w-full mt-[-3px] px-2.5 pt-3 pb-[23px] bg-[#FFF] border-l-[0.713px] border-r-[0.713px] border-b-[0.713px] border-[#E3CAFF] rounded-b-[10.908px]">
           <p className="text-[#5801B7] text-[15px] font-medium ">Manual stock errors and lost sales</p>
            </div>
         </div>
        </div>
           <div className="flex justify-center gap-2.5 mt-2.5 items-stretch">
         <div className="max-[375px]:w-full w-40 flex flex-col ">
            <Image alt="Image" src={"/landingPage/CommonRetailImg3.webp"}  width={160} height={160}></Image>
            <div className="flex-1 w-full mt-[-3px] px-2.5 pt-3 pb-[23px] bg-[#FFF] border-l-[0.713px] border-r-[0.713px] border-b-[0.713px] border-[#E3CAFF] rounded-b-[10.908px]">
           <p className="text-[#5801B7] text-[15px] font-medium ">No real-time visibility into business performance</p>
            </div>
         </div>
           <div className="max-[375px]:w-full w-40  flex flex-col">
            <Image alt="Image" src={"/landingPage/CommonRetailImg4.webp"}  width={160} height={160}></Image>
            <div className="flex-1 w-full mt-[-3px] px-2.5 pt-3 pb-[23px] bg-[#FFF] border-l-[0.713px] border-r-[0.713px] border-b-[0.713px] border-[#E3CAFF] rounded-b-[10.908px]">
           <p className="text-[#5801B7] text-[15px] font-medium ">Multiple tools for inventory, billing and more</p>
            </div>
         </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default CommonProblem;
