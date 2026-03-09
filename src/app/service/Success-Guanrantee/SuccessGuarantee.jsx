"use client"
import Image from "next/image";

function SuccessGuarantee() {
  return (
    <section className="bg-[#F7EFFF] mt-[95px] min-h-[675px] relative">
        <Image alt="Image" src={"/landingPage/SuccessGuaranteeImgMain.webp"} className="absolute bottom-0 right-0 lg:w-[751px] lg:h-[338px]" width={751} height={338}></Image>
      <div className="max-w-5xl  mx-auto pt-[50px]">
        <h2 className="text-[#5801B7] text-[26px] lg:text-[30px] font-semibold">
          Your Success, Our Guarantee
        </h2>
        <p className="pt-3 text-[#2E2E2E] text-[14px] sm:text-[17px] lg:text-[18px] font-normal font-[Poppins] lg:w-[560px] leading-normal">
          Shopaver makes retail simple, transparent, and completely
          hassle-free—so you can focus on selling and scaling.
        </p>
 <div className="flex gap-16 mt-[35px]">
       <div className="flex flex-col gap-7.5">
            <div className="flex gap-2.5 items-center">
            <div className="h-[60px] w-[60px] rounded-full bg-[#FFF] border-[0.75px] border-[#E3CAFF] flex justify-center items-center">
 <Image alt="Image" src={"/landingPage/SuccessGuaranteeImg1.webp"} className=" lg:w-10 lg:h-[37px]" width={40} height={37}></Image>
            </div>
            <p className="text-[#2E2E2E] text-[18px] font-normal leading-[21.34px] font-[Poppins]">100% Digital & Easy to Use</p>
        </div>
            <div className="flex gap-2.5 items-center">
            <div className="h-[60px] w-[60px] rounded-full bg-[#FFF] border-[0.75px] border-[#E3CAFF] flex justify-center items-center">
 <Image alt="Image" src={"/landingPage/SuccessGuaranteeImg2.webp"} className=" lg:w-[41px] lg:h-[33px]" width={41} height={33}></Image>
            </div>
            <p className="text-[#2E2E2E] text-[18px] font-normal leading-[21.34px] font-[Poppins]">24/7 Customer Support</p>
        </div>
            <div className="flex gap-2.5 items-center">
            <div className="h-[60px] w-[60px] rounded-full bg-[#FFF] border-[0.75px] border-[#E3CAFF] flex justify-center items-center">
 <Image alt="Image" src={"/landingPage/SuccessGuaranteeImg3.webp"} className="lg:w-[39.75px] lg:h-[38.46px]" width={39.75} height={38.46}></Image>
            </div>
            <p className="text-[#2E2E2E] text-[18px] font-normal leading-[21.34px] font-[Poppins]">Free Trial with Full Features</p>
        </div>
    </div>
       <div className="flex flex-col gap-7.5">
            <div className="flex gap-2.5 items-center">
            <div className="h-[60px] w-[60px] rounded-full bg-[#FFF] border-[0.75px] border-[#E3CAFF] flex justify-center items-center">
 <Image alt="Image" src={"/landingPage/SuccessGuaranteeImg4.webp"} className=" lg:w-9 lg:h-9" width={36} height={36}></Image>
            </div>
            <p className="text-[#2E2E2E] text-[18px] font-normal leading-[21.34px] font-[Poppins]">Zero Setup Cost</p>
        </div>
            <div className="flex gap-2.5 items-center">
            <div className="h-[60px] w-[60px] rounded-full bg-[#FFF] border-[0.75px] border-[#E3CAFF] flex justify-center items-center">
 <Image alt="Image" src={"/landingPage/SuccessGuaranteeImg5.webp"} className=" lg:w-[39px] lg:h-[34px]" width={41} height={33}></Image>
            </div>
            <p className="text-[#2E2E2E] text-[18px] font-normal leading-[21.34px] font-[Poppins]">No Hidden Costs</p>
        </div>
     
    </div>
 </div>
 {/* <div className="flex justify-center items-center gap-4 border-[0.75px] border-dashed border-[#D9B5FF] bg-white h-11 sm:h-[62px] lg:w-[450px]  rounded-xl shadow col-span-2">
              <p className="text-[#5801B7] text-[14.26px] sm:text-[17px] lg:text-[20px] font-normal">
             Don’t wait—digitize your retail business today.
              </p>
            </div> */}
      </div>
    </section>
  );
}

export default SuccessGuarantee;
