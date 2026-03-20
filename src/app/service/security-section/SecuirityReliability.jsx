"use client";
import Image from "next/image";
const cards = [
  {
    id: 1,
    title: "Encrypted data storage",
    image: "/landingPage/SecuirityReliabilityImg1.webp",
    sizes: "h-[31.13px] w-[35.92px] lg:h-[44px] lg:w-[50px]",
  },
  {
    id: 2,
    title: "Daily automatic backup",
    image: "/landingPage/SecuirityReliabilityImg2.webp",
    sizes: "h-[31.37px] w-[31.37px] lg:h-[44px] lg:w-[44px]",
  },
  {
    id: 3,
    title: "Safe & secure cloud infrastructure",
    image: "/landingPage/SecuirityReliabilityImg3.webp",
    sizes: "h-[27.09px] w-[35.65px] lg:h-[38px] lg:w-[50px]",
  },
  {
    id: 4,
    title: "99.9% uptime",
    image: "/landingPage/SecuirityReliabilityImg4.webp",
    sizes: "h-[27.71px] w-[39.34px] lg:h-[39px] lg:w-[55px]",
  },
  { id: 5, title: "Your business data is always protected.", image: "" },
];
function SecuirityReliability() {
  return (
    <section className="bg-[#F9F4FF] mt-[100px] pt-[50px] pb-[60.5px]">
      <div className="max-w-5xl px-[22px] xl:px-0 mx-auto">
        <h2 className="text-[#5801B7] text-center text-[26px] lg:text-[30px] font-semibold">
          Security & Reliability You Can Trust
        </h2>
        <div className="flex justify-content-center flex-col md:flex-row gap-[23px] lg:gap-[55px] mt-[50px]">
          <div className="flex justify-center shrink-0">
            <Image
              src={"/landingPage/SecuirityReliabilityImgMain.webp"}
              className="max-[350px]:h-[280px] max-[350px]:w-[275px] h-[321px] w-[314.3px] lg:h-[461.58px] lg:w-[451.88px]"
              width={451.88}
              height={461.58}
              alt="Image"
            ></Image>
          </div>
          <div className="grid grid-cols-2 gap-4 flex-1">
            {cards.slice(0, 4).map((card) => (
              <div
                key={card.id}
                className="bg-[#FFF] flex flex-col justify-center border border-[#E3CAFF] rounded-[15.298px] pt-[14.26px] px-[10.7px] pb-[15.91px] lg:pt-5 lg:pb-[22px] lg:px-[15px]"
              >
                <Image
                  src={card.image}
                  className={`${card.sizes}`}
                  alt="Image"
                  width={50}
                  height={44}
                ></Image>
                <p className="pt-1.5 w-[100px] sm:w-[120px] lg:w-[130px] text-[#2E2E2E] text-[11.5px] sm:text-[14px] lg:text-[16px] font-medium leading-normal ">
                  {card.title}
                </p>
              </div>
            ))}
            <div className="flex justify-center items-center gap-4 border-[0.75px] border-dashed border-[#D9B5FF] bg-white h-11 sm:h-[62px]  px-5 rounded-xl shadow col-span-2">
              <p className="text-[#5801B7] text-[14.26px] sm:text-[17px] lg:text-[20px] font-normal">
                {cards[4].title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecuirityReliability;
