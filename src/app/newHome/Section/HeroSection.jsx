
// New Homepage
import Link from "next/link";
import Image from "next/image";
import './HeroSection.css'
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function HeroSection() {
    const container = useRef(null);
   useGSAP(
    () => {
      
      // gsap.from(".float-3d", {
      //   scale: 0,
      //   opacity: 0,
      //   duration: 1,
      //   stagger: 0.2,
      //   ease: "back.out(1.7)",
      // });
      gsap.utils.toArray(".float-3d").forEach((img, i) => {
  gsap.to(img, {
    y: -20,
    duration: 2 + i * 0.3,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    delay: i * 0.2,
  });
});
    },
    { scope: container }
  );
  return (
    <section ref={container} className=" max-w-5xl mx-auto">
    <div className="mt-[175px] relative">
       <div className="flex flex-col items-center gap-[20px]">
      <h2 className="w-[276px] lg:w-[511px] text-center text-[#5801B7] text-[30px] lg:text-[40px] font-bold leading-normal">The All-in-One Business Solution for MSMEs</h2>
      <p className="w-[313px] lg:w-[575px] text-[#666] text-center text-[14px] lg:text-[18px] font-normal leading-normal">Manage everything your business needs from a single platform, including WhatsApp Business Suite, online store setup, smart billing, real-time inventory, Khata, detailed reports, and more.</p>
     </div>
     <div className="flex justify-center items-center gap-[10px] mt-[30px]">
      <Link href="https://app.shopaver.com/Sign-up">
      <button className="bg-[#5801B7] rounded-[11px] h-[45px] w-[147px] lg:h-[54px] lg:w-[176px] border-none text-[#FFF] text-[13.33px] lg:text-[16px] font-medium">
        Start Free Trial
      </button>
      </Link>
      <Link href="https://app.shopaver.com/Sign-up">
      <button className="bg-[#ECECEC] rounded-[11px] border border-[#D7D7D7] h-[45px] w-[147px] lg:h-[54px] lg:w-[176px] text-[#525252] text-[13.33px] lg:text-[16px] font-medium">
        Schedule a Demo
      </button>
      </Link>
     </div>
     <div className="absolute top-[-40px] lg:top-0 left-[50px] lg:left-0">
     <Image src={"/img/HomeHeroImg1.webp"}  alt="Business growth icon" className="lg:h-[40px] lg:w-[39px] w-[23.5px] h-[24.3px] float-3d" width={39} height={40}   priority/>
     </div>
     <div className="absolute lg:top-[40%] lg:left-[140px] top-[30%] left-[10px]">
     <Image src={"/img/HomeHeroImg2.webp"} alt="Business analytics icon" className="w-[26.95px] h-[27.6px] lg:h-[45.7px] lg:w-[44.5px] float-3d" width={44.5} height={45.7} />
     </div>
     <div className="absolute bottom-[50px] lg:bottom-0 left-[10px] lg:left-0">
     <Image src={"/img/HomeHeroImg3.webp"} alt="Business analytics icon" className="w-[38.75px] h-[34.5px] lg:h-[57px] lg:w-[64px] float-3d" width={64} height={57} />
     </div>
     <div className="absolute top-[-40px] lg:top-0 right-[50px] lg:right-0">
     <Image src={"/img/HomeHeroImg4.webp"} alt="Business analytics icon" className="w-[22.12px] h-[29.87px] lg:h-[47.92px] lg:w-[35.5px] float-3d" width={39} height={40} />
     </div>
     <div className="absolute top-[30%] lg:top-[40%] lg:right-[140px] right-[20px]">
     <Image src={"/img/HomeHeroImg5.webp"} alt="Business analytics icon" className="w-[32.62px] h-[34px] lg:h-[64.87px] lg:w-[62.22px] float-3d" width={62.22} height={64.87} />
     </div>
     <div className="absolute bottom-[50px] right-[20px] lg:bottom-0 lg:right-0 ">
     <Image src={"/img/HomeHeroImg6.webp"} alt="Business analytics icon" className="w-[29.56px] h-[33.12px] lg:w-[58.87px] lg:h-[66px] float-3d" width={39} height={40} />
     </div>
    </div>
    </section>
  );

}

export default HeroSection;



