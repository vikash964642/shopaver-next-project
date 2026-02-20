"use client";
import Link from "next/link";
import Image from "next/image";

const Marketingg = () => {
  return (
  
   
    <section className="max-w-screen-lg mx-auto mt-20 lg:mt-[110px]">
      <div className="lg:flex mx-[25px]">
        <div className="flex flex-1 justify-center lg:flex-none">
          <Image src={"/img/MarketingHomepage12.webp"}  alt="Business Markeeting by Social Media" width={517} height={358}></Image>
        </div>
        <div className="bg-(--secondary) px-[16px] lg:px-[0px] lg:h-[245px] mt-[-161px] pt-[220px] lg:mt-[95px] lg:pt-[46px] flex-1 lg:pl-[64px] lg:ml-[-9px] lg:z-[-1] rounded-[10px]">
          <p className="font-bold text-[22px] lg:text-[32px]">Marketing</p>
          <h3>Reach more, sell more</h3>
          <p className="font-medium text-[14px] lg:text-[16px] lg:pr-[75px] lg:pt-[5px]">Manage your entire business with a single click, and watch your business grow 5.2x with our all-in-one billing software.</p>
          <div className="flex justify-end lg:justify-start font-bold text-[14px] lg:text-[15.6px] pb-[30px] pt-[20px]">
          <Link href='/' className="text-(--primary) cursor-pointer">
          Coming soon &gt;&gt;
            </Link>

          </div>
        </div>
      </div>
    </section>
     
 
  )
}

export default Marketingg