"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./home.module.css";
import { decode } from "html-entities";
function WhyChooseSection({ data = [] }) {
  const ScrollTop = () => {
    window.scrollTo({ top: 0 });
  };

  const filteredData = [...data];
const renderRichText = (content) => {
  let decodedText = decode(content || "");

  // remove unwanted spans
  decodedText = decodedText
    .replace(/<span[^>]*>/g, "")
    .replace(/<\/span>/g, "");

  // fix anchor tag (open in new tab)
  decodedText = decodedText.replace(
    /<a\s+/g,
    '<a target="_blank" rel="noopener noreferrer" '
  );

  const hasHtml = /<\/?[a-z][\s\S]*>/i.test(decodedText);

  if (hasHtml) {
    return (
      <div
        className="business-solution-description text-[14px] lg:text-[16px] text-[#5F5F5F] pt-2 max-w-[380px]"
        dangerouslySetInnerHTML={{ __html: decodedText }}
      />
    );
  }

  return (
    <p className="text-[14px] lg:text-[16px] text-[#5F5F5F] pt-2 max-w-[380px]">
      {decodedText}
    </p>
  );
};
  return (
    <section className="pt-[60px] lg:pt-[78px] px-[20px] xl:px-0 max-w-5xl mx-auto">
      <h2 className="text-[#5801B7] text-center lg:text-[30px] text-[22px] font-semibold">
        Why Choose Shopaver Retail POS Software?
      </h2>
      <div className="mt-[38px] bg-[#F9F4FF] hidden lg:grid grid-cols-3 gap-10 shadow-[0_0_4px_0_rgba(0,0,0,0.20)] w-full  p-[45px]">
        {filteredData.map((item, index) => (
          <div
            key={index}
            className="bg-[#FFF] px-2.5 pt-2.5 pb-[15px] shadow-[0_0_4px_0_rgba(0,0,0,0.20)]"
          >
            <Image
              src={`/landingPage/PosHomeImg${index + 1}.webp`}
              alt={item.heading}
              width={264}
              height={264}
            ></Image>
            <p className="pt-3 max-w-[210px] text-[#0A0A0A] text-[18px] font-medium  leading-[normal]">
              {item.heading}
            </p>
            {renderRichText(item.description)}
          </div>
        ))}
      </div>
      <div className="block lg:hidden mt-[38px]">
        <div
          className={`flex md:justify-center overflow-x-auto gap-[11px] pt-1 pl-0.5 pr-0.5 pb-2 cursor-grab ${styles.hideScrollbar}`}
          style={{ scrollSnapType: "x mandatory" }}
        >
          {filteredData.map((item, index) => (
            <div
              key={index}
              className="bg-[#FFF] shrink-0 w-[180px] sm:w-[200px] md:w-[220px] px-2.5 pt-2.5 pb-[15px] shadow-[0_0_4px_0_rgba(0,0,0,0.20)]"
            >
              <Image
                src={`/landingPage/PosHomeImg${index + 1}.webp`}
                alt={item.heading}
                width={264}
                height={264}
              />
              <p className="pt-[11.5] max-w-[150px] text-[#0A0A0A] text-[15px] sm:text-[16.5px] font-medium ">
                {item.heading}
              </p>
              {renderRichText(item.description)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseSection;
