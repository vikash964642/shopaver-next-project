

// import Link from "next/link";

// function HeroSection() {
//   return (
//     <section className=" max-w-5xl mx-auto">
//       <div className="herosection mt-[50px] flex  flex-col-reverse lg:flex-row ">
//         <div className="flex justify-center items-center  ">
//           <video autoPlay muted className="px-[21px] md:px-0 ">
//             <source src={"/video/hompage_1.webm"} type="video/webm" />
//           </video>
//         </div>
//         <div className="  md:px-[50px] lg:px-0 lg:w-[500px] md:pt-[75px] lg:pl-[47px] p-[33px] md:p-0">
//           <p className="max-[400px]:text-[27px] text-center md:text-center md:text-[14px] text-[36.9px] md:leading-[14.6px] leading-[40.59px] max-[400px]:leading-[30px] font-bold md:font-medium text-webtext md:flex md:justify-center lg:justify-start  ">
//           <span className="hidden md:block"></span> Upgrade your Business with Shopaver <span className="hidden md:block"></span>
//           </p>
//           <h1 className=" text-[15px] font-medium text-center md:text-[27.5px] md:font-bold  leading-[19.95px] md:leading-[33.38px]  text-webtext md:text-center lg:text-left mt-[26px] lg:mt-[10px] ">
//           Top POS Software Solutions to Grow Businesses of All Sizes
//           </h1>
//           <p className="para2 max-sm:hidden md:flex md:justify-center text-center lg:text-left text-[12.91px] md:mt-2.5 ">
//           Shopaver offers a comprehensive POS solution with features like billing, Bahi-Khata (digital ledger), inventory management, online store (e-store), WhatsApp Commerce, and more. 
//           </p>
//           <div className="flex items-center justify-center md:justify-center lg:justify-start md:mt-[25px] mt-10">
//             <Link href="https://app.shopaver.com/Sign-up">
//               <div className="demo rounded-[41px] cursor-pointer md:rounded-[64px] md:w-[197px] md:h-[58px] h-12 w-[164px] bg-primary text-white flex justify-center items-center font-bold text-[17.5px] md:text-[21px]">
//                 Register Now
//               </div>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );

// }

// export default HeroSection;




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



