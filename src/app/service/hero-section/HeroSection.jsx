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

//Code By Dilshad
"use client"
import Link from "next/link";
import Image from "next/image";
function HeroSection({ data ,onEnquiryClick}) {
 const BASE_IMAGE_URL = "https://media-shopaver-uat.s3.amazonaws.com";
  return (
    <section className="max-w-5xl mx-auto">
      <div className="herosection mt-[50px] max-[350px]:px-[15px] px-[30px] xl:px-0 flex justify-between flex-col lg:flex-row ">
        <div className="lg:w-[527px]  lg:px-0 flex flex-col justify-center">
          <h2 className="leading-[normal] text-[#393939] text-[26px] sm:text-[30px] lg:text-[33.782px] font-semibold text-center lg:text-left">
            {data.heading}{" "}
            <span className="text-[#5801B7] hidden lg:inline">
             {data.keyword}
            </span>
          </h2>
          <h2 className="text-[#5801B7] text-[26px] sm:text-[30px] font-semibold text-center block lg:hidden">
              {data.keyword}
          </h2>
          <p className="text-[#5F5F5F] sm:px-[60px] lg:px-0 text-[12px] sm:text-[14px] lg:text-[15px] font-normal pt-[22px] lg:pt-[24.16px] font-[Poppins] text-center lg:text-left">
           {data.description}
          </p>
          <div className="flex items-center justify-center md:justify-center lg:justify-start gap-2 md:mt-[36.2px] mt-[26px]">
            <Link href="https://app.shopaver.com/Sign-up" className="rounded-[7px] sm:rounded-[11px] cursor-pointer h-[38px] w-[117px] sm:h-11  sm:w-[156px] bg-primary text-white flex justify-center items-center font-medium text-[12px] sm:text-[16px] font-[Poppins]">
                Start Free Trial
            </Link>
              <button onClick={onEnquiryClick} className="rounded-[7px] sm:rounded-[11px] cursor-pointer h-[38px] w-[117px] sm:h-11  sm:w-[156px] bg-primary text-white flex justify-center items-center font-medium text-[12px] sm:text-[16px] font-[Poppins]">
                Contact Sales
              </button>
           
          </div>
        </div>

        <div className="flex justify-center mt-[50px] lg:mt-0">
          {/* <Image
             src={data.image || "/landingPage/SuccessGuaranteeImg2.webp"}
            className="h-[287px] w-[248.3px] sm:h-[452px] sm:w-[391px]"
            height={452}
            width={391}
            alt="Hero Section Image"
          ></Image> */}
        <Image
  src={
    data.image
      ? `${BASE_IMAGE_URL}${data.image}`
      : "/landingPage/SuccessGuaranteeImg2.webp"
  }
  className="h-[287px] w-[221.3px] sm:h-[390px] sm:w-[300px] lg:h-[452px] lg:w-[348px] rounded-[29px] lg:rounded-[46px]"
  height={452}
  width={348.4}
  alt="Hero Section Image"
/>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
