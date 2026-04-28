

//Code By Dilshad
"use client"
import Link from "next/link";
import Image from "next/image";
import { resolveAssetUrl } from "@/lib/imageUrl";
import { decode } from "html-entities";
function HeroSection({ data ,onEnquiryClick}) {
 let description = decode(data?.description || "");

description = description
  .replace(/<span[^>]*>/g, "")
  .replace(/<\/span>/g, "");

description = description.replace(
  /<a\s+/g,
  '<a target="_blank" rel="noopener noreferrer" '
);

const hasHtmlDescription = /<\/?[a-z][\s\S]*>/i.test(description);

  return (
    <section className="max-w-5xl mx-auto">
      <div className="herosection mt-[50px] max-[350px]:px-[15px] px-[30px] xl:px-0 flex justify-between flex-col lg:flex-row ">
        <div className="lg:w-[527px]  lg:px-0 flex flex-col justify-center">
          <h1 className="leading-[normal] text-[#393939] text-[26px] sm:text-[30px] lg:text-[33.782px] font-semibold text-center lg:text-left">
            {data.heading}{" "}
            <span className="text-[#5801B7] hidden lg:inline">
             {data.keyword}
            </span>
          </h1>
          <h2 className="text-[#5801B7] text-[26px] sm:text-[30px] font-semibold text-center block lg:hidden">
              {data.keyword}
          </h2>
          {hasHtmlDescription ? (
            <div
              className="business-solution-description text-[#5F5F5F] sm:px-[60px] lg:px-0 text-[12px] sm:text-[14px] lg:text-[15px] font-normal pt-[22px] lg:pt-[24.16px] text-center lg:text-left "
              dangerouslySetInnerHTML={{ __html: description }}
            />
          ) : (
            <p className="text-[#5F5F5F] sm:px-[60px] lg:px-0 text-[12px] sm:text-[14px] lg:text-[15px] font-normal pt-[22px] lg:pt-[24.16px] text-center lg:text-left">
              {description}
            </p>
          )}
          <div className="flex items-center justify-center md:justify-center lg:justify-start gap-2 md:mt-[36.2px] mt-[26px]">
            <Link href="https://app.shopaver.com/Sign-up" className="rounded-[7px] sm:rounded-[11px] cursor-pointer h-[38px] w-[117px] sm:h-11  sm:w-[156px] bg-primary text-white flex justify-center items-center font-medium text-[12px] sm:text-[16px] ">
                Start Free Trial
            </Link>
              <button onClick={onEnquiryClick} className="rounded-[7px] sm:rounded-[11px] cursor-pointer h-[38px] w-[117px] sm:h-11  sm:w-[156px] bg-primary text-white flex justify-center items-center font-medium text-[12px] sm:text-[16px] ">
                Contact Sales
              </button>
           
          </div>
        </div>

        <div className="flex justify-center mt-[50px] lg:mt-0">
          
<Image
  src={
    resolveAssetUrl(
      data.image,
      "/landingPage/SuccessGuaranteeImg2.webp"
    )
  }
  className="h-[287px] w-[221.3px] sm:h-[390px] sm:w-[300px] lg:h-[452px] lg:w-[348px] rounded-[29px] lg:rounded-[46px]"
  height={452}
  width={348.4}
  alt={data.keyword}
/>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
