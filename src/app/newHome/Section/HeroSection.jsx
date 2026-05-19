
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
    <section ref={container} className=" max-w-[115.625rem] mx-auto">
    <div className="mx-32">
    <div className="mt-[10.9375rem] relative lg:mx-[7.8125rem]">
       <div className="flex flex-col items-center gap-[1.25rem]">
      <h2 className="w-[17.25rem] lg:w-[31.9375rem] text-center text-[#5801B7] text-[1.875rem] lg:text-[2.5rem] font-bold leading-normal font-bricolage">The All-in-One Business Solution for MSMEs</h2>
      <p className="w-[19.5625rem] lg:w-[35.9375rem] text-[#666] text-center text-[0.875rem] lg:text-[1.125rem] font-normal leading-normal font-dm-sans">Manage everything your business needs from a single platform, including WhatsApp Business Suite, online store setup, smart billing, real-time inventory, Khata, detailed reports, and more.</p>
     </div>
     <div className="flex justify-center items-center gap-[0.625rem] mt-[1.875rem]">
      <Link href="https://app.shopaver.com/Sign-up">
      <button className="bg-[#5801B7] rounded-[0.6875rem] h-[2.8125rem] w-[9.1875rem] lg:h-[3.375rem] lg:w-[11rem] border-none text-[#FFF] text-[0.833rem] lg:text-[1rem] font-medium font-dm-sans">
        Start Free Trial
      </button>
      </Link>
      <Link href="https://app.shopaver.com/Sign-up">
      <button className="bg-[#ECECEC] rounded-[0.6875rem] border border-[#D7D7D7] h-[2.8125rem] w-[9.1875rem] lg:h-[3.375rem] lg:w-[11rem] text-[#525252] text-[0.833rem] lg:text-[1rem] font-medium font-dm-sans">
        Schedule a Demo
      </button>
      </Link>
     </div>
     <div className="absolute top-[-2.5rem] lg:top-0 left-[3.125rem] lg:left-0">
     <Image src={"/img/HomeHeroImg1.webp"}  alt="Business growth icon" className="lg:h-[2.5rem] lg:w-[2.4375rem] w-[1.46875rem] h-[1.51875rem] float-3d" width={39} height={40}   priority/>
     </div>
     <div className="absolute lg:top-[40%] lg:left-[8.75rem] top-[30%] left-[0.625rem]">
     <Image src={"/img/HomeHeroImg2.webp"} alt="Business analytics icon" className="w-[1.684375rem] h-[1.725rem] lg:h-[2.85625rem] lg:w-[2.78125rem] float-3d" width={44.5} height={45.7} />
     </div>
     <div className="absolute bottom-[3.125rem] lg:bottom-0 left-[0.625rem] lg:left-0">
     <Image src={"/img/HomeHeroImg3.webp"} alt="Business analytics icon" className="w-[2.421875rem] h-[2.15625rem] lg:h-[3.5625rem] lg:w-[4rem] float-3d" width={64} height={57} />
     </div>
     <div className="absolute top-[-2.5rem] lg:top-0 right-[3.125rem] lg:right-0">
     <Image src={"/img/HomeHeroImg4.webp"} alt="Business analytics icon" className="w-[1.3825rem] h-[1.866875rem] lg:h-[2.995rem] lg:w-[2.21875rem] float-3d" width={39} height={40} />
     </div>
     <div className="absolute top-[30%] lg:top-[40%] lg:right-[8.75rem] right-[1.25rem]">
     <Image src={"/img/HomeHeroImg5.webp"} alt="Business analytics icon" className="w-[2.03875rem] h-[2.125rem] lg:h-[4.054375rem] lg:w-[3.88875rem] float-3d" width={62.22} height={64.87} />
     </div>
     <div className="absolute bottom-[3.125rem] right-[1.25rem] lg:bottom-0 lg:right-0 ">
     <Image src={"/img/HomeHeroImg6.webp"} alt="Business analytics icon" className="w-[1.8475rem] h-[2.07rem] lg:w-[3.679375rem] lg:h-[4.125rem] float-3d" width={39} height={40} />
     </div>
    </div>
    </div>
    </section>
  );

}

export default HeroSection;



