
// New Homepage
import Link from "next/link";
import Image from "next/image";
import './HeroSection.css'
function HeroSection() {
  return (
    <section className=" max-w-5xl mx-auto">
    <div className="mt-[175px] relative">
       <div className="flex flex-col items-center gap-[20px]">
      <h2 className="lg:w-[511px] text-center text-[#5801B7] lg:text-[40px] font-medium leading-normal">The All-in-One Business Solution for MSMEs</h2>
      <p className="lg:w-[575px] text-[#666] text-center lg:text-[18px] font-normal leading-normal">Manage everything your business needs from a single platform, including WhatsApp Business Suite, online store setup, smart billing, real-time inventory, Khata, detailed reports, and more.</p>
     </div>
     <div className="flex justify-center items-center gap-[10px] mt-[30px]">
      <Link href="https://app.shopaver.com/Sign-up">
      <button className="bg-[#5801B7] rounded-[11px] h-[54px] w-[176px] border-none text-[#FFF] text-[16px] font-medium">
        Start Free Trial
      </button>
      </Link>
      <Link href="https://app.shopaver.com/Sign-up">
      <button className="bg-[#ECECEC] rounded-[11px] border border-[#D7D7D7] h-[54px] w-[176px] text-[#525252] text-[16px] font-medium">
        Schedule a Demo
      </button>
      </Link>
     </div>
     <div className="absolute top-0 ">
     <Image src={"/img/HomeHeroImg1.webp"} className="h-auto w-auto float-3d" width={39} height={40} />
     </div>
     <div className="absolute top-[40%] left-[140px]">
     <Image src={"/img/HomeHeroImg2.webp"} className="h-auto w-auto float-3d" width={39} height={40} />
     </div>
     <div className="absolute bottom-0 ">
     <Image src={"/img/HomeHeroImg3.webp"} className="h-auto w-auto float-3d" width={39} height={40} />
     </div>
     <div className="absolute top-0 right-0">
     <Image src={"/img/HomeHeroImg4.webp"} className="h-auto w-auto float-3d" width={39} height={40} />
     </div>
     <div className="absolute top-[40%] right-[140px]">
     <Image src={"/img/HomeHeroImg5.webp"} className="h-auto w-auto float-3d" width={39} height={40} />
     </div>
     <div className="absolute bottom-0 right-0 ">
     <Image src={"/img/HomeHeroImg6.webp"} className="h-auto w-auto float-3d" width={39} height={40} />
     </div>
    </div>
    </section>
  );

}

export default HeroSection;



