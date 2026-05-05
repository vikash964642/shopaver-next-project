

import Link from "next/link";

function HeroSection() {
  return (
    <section className=" max-w-5xl mx-auto">
      <div className="herosection mt-[50px] flex  flex-col-reverse lg:flex-row ">
        <div className="flex justify-center items-center  ">
          <video autoPlay muted className="px-[21px] md:px-0 ">
            <source src={"/video/hompage_1.webm"} type="video/webm" />
          </video>
        </div>
        <div className="  md:px-[50px] lg:px-0 lg:w-[500px] md:pt-[75px] lg:pl-[47px] p-[33px] md:p-0">
          <p className="max-[400px]:text-[27px] text-center md:text-center md:text-[14px] text-[36.9px] md:leading-[14.6px] leading-[40.59px] max-[400px]:leading-[30px] font-bold md:font-medium text-webtext md:flex md:justify-center lg:justify-start  ">
          <span className="hidden md:block"></span> Upgrade your Business with Shopaver <span className="hidden md:block"></span>
          </p>
          <h1 className=" text-[15px] font-medium text-center md:text-[27.5px] md:font-bold  leading-[19.95px] md:leading-[33.38px]  text-webtext md:text-center lg:text-left mt-[26px] lg:mt-[10px] ">
          Top POS Software Solutions to Grow Businesses of All Sizes
          </h1>
          <p className="para2 max-sm:hidden md:flex md:justify-center text-center lg:text-left text-[12.91px] md:mt-2.5 ">
          Shopaver offers a comprehensive POS solution with features like billing, Bahi-Khata (digital ledger), inventory management, online store (e-store), WhatsApp Commerce, and more. 
          </p>
          <div className="flex items-center justify-center md:justify-center lg:justify-start md:mt-[25px] mt-10">
            <Link href="https://app.shopaver.com/Sign-up">
              <div className="demo rounded-[41px] cursor-pointer md:rounded-[64px] md:w-[197px] md:h-[58px] h-12 w-[164px] bg-primary text-white flex justify-center items-center font-bold text-[17.5px] md:text-[21px]">
                Register Now
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );

}

export default HeroSection;








