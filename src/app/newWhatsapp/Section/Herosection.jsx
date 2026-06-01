"use client"
import Link from "next/link";
import Image from "next/image";
// import './HeroSection.css'
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function Herosection() {
    const container = useRef(null);
useGSAP(
    () => {
      const tl = gsap.timeline({
        delay: 0.5, // page load hone ke baad 0.5s delay
      });
  
      tl.from("#tickmark1", {
        scale: 0.5,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.4)",
      });
      tl.from("#tickmark2", {
        scale: 0.5,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.4)",
      }, "-=0.3"); // overlap animation for smoother flow
     },
    { scope: container }
  );
  return (
    <section ref={container} className=" bg-[#F8F8FF]">
  <div className="max-w-[1440px] mx-auto xl2:pt-[150px] lg:pt-[110px] md:pt-[85px] pt-[65px]">
   
       <div className="flex flex-col items-center gap-[20px]">
      <h2 className="w-[285px] lg:w-[clamp(440px,40vw,700px)] text-center text-[#5801B7] text-[28.5px] lg:text-[clamp(34.4px,3vw,44.3px)] xl2:text-[clamp(44.3px,3vw,55px)] font-bold leading-none font-bricolage">Get Verified with WhatsApp Blue Tick</h2>
      <p className="w-[301px] lg:w-[clamp(482px,50vw,850px)] text-[#666] text-center text-[13.3px] lg:text-[clamp(15.48px,1.5vw,19.94px)] xl2:text-[clamp(19.94px,1.45vw,24.8px)] font-normal leading-none font-dm-sans">With WhatsApp Blue Tick verification, your brand stands out, gains customer trust, and improves engagement across conversations.</p>
     </div>
     <div className="flex justify-center items-center gap-[10px] mt-[30px]">
      <Link href="https://app.shopaver.com/Sign-up">
      <button className="bg-[#5801B7] rounded-[11px] h-[45px] w-[147px] lg:h-[54px] lg:w-[176px] border-none text-[#FFF] text-[13.33px] lg:text-[16px] font-medium font-dm-sans">
        Start Free Trial
      </button>
      </Link>
      <Link href="https://app.shopaver.com/Sign-up">
      <button className="bg-[#ECECEC] rounded-[11px] border border-[#D7D7D7] h-[45px] w-[147px] lg:h-[54px] lg:w-[176px] text-[#525252] text-[13.33px] lg:text-[16px] font-medium font-dm-sans">
        Schedule a Demo
      </button>
      </Link>
     </div>
     {/* <div className="flex justify-center relative">
      <Image src={"/newImage/WhatsappHeroImg1.webp"} height={544} width={500}/>
      <div className="absolute">
        <Image src={"/newImage/WhatsappHeroImg2.png"} height={154.32} width={149.7}></Image>
      </div>
     </div> */}
     <div className="flex justify-center  mt-[50px]">
  <div className="h-[372.35px] max-[450px]:w-full w-[342.5px] sm:w-[400px] lg:h-[544px] lg:w-[550px] relative">
    <Image src={"/newImage/WhatsappHeroImg1.webp"} className="relative z-30 h-full w-[342.5px] lg:w-[500px]" height={544} width={500} alt="WhatsApp Hero"/>
    <div className="absolute top-[90px] lg:top-[125px] max-[450px]:right-0 right-[-30px] sm:right-[12px] lg:right-0" id="tickmark1">
    <Image src={"/newImage/WhatsappHeroImg2.png"} className="h-[105.5px] w-[102.5px] lg:h-[154px] lg:w-[150px]" height={154} width={150} alt="Blue Tick"/>
  </div>
    <div className="absolute z-20 top-[42px] max-[450px]:right-[85px] right-[60px] sm:right-[117px] lg:top-[65px] lg:right-[135px]" id="tickmark2">
    <Image src={"/newImage/WhatsappHeroImg3.png"} className="h-[45.55px] w-[44.18px] lg:h-[66.5px] lg:w-[64.5px]" height={66.5} width={64.5} alt="Blue Tick"/>
  </div>
  </div>
  
</div>
    </div>
    </section>
  );

}

export default Herosection;



