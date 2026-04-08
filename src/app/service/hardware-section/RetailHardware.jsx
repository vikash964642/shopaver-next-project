"use client"
import Image from "next/image";
function RetailHardware() {
  return (
    <section className="max-w-5xl  mx-auto mt-[78px]">
      <div className="px-[22px] xl:px-0">
        <h2 className="text-[#5801B7] text-center text-[26px] lg:text-[30px] font-semibold">Compatible with All Retail Hardware</h2>
      <p className="pt-2.5 text-[#5F5F5F] text-[14px] sm:text-[17px] lg:text-[20px] font-normal text-center ">Works with all standard devices:</p>
      </div>
      <Image src={"/landingPage/RetailHardwareImg1.png"} width={451.88} quality={100} height={461.58} alt="Image" className="mt-13 aspect-101/48 h-auto w-full"></Image>
    </section>
  );
}

export default RetailHardware;
