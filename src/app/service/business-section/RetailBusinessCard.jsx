// "use client";
// import Image from "next/image";
// const cards = [
//   {
//     id: 1,
//     image: "/landingPage/RetailBusinessCardImg1.webp",
//     title: "Restaurant Stores",
//     description:"Shopaver helps restaurants streamline orders, manage tables, track inventory, and handle billing effortlessly. From dine-in to takeaway...",
//   },
//   {
//     id: 2,
//     image: "/landingPage/RetailBusinessCardImg2.webp",
//     title: "Footwear",
//     description: "Shopaver empowers footwear stores to manage inventory by size, style, and brand with real-time stock tracking. Simplify billing, monitor...",
//   },
//   {
//     id: 3,
//     image: "/landingPage/RetailBusinessCardImg3.webp",
//     title: "Cosmetic Store",
//     description: "Shopaver helps cosmetic stores manage product variants, expiry dates, and fast-moving SKUs with precision. Streamline billing, track inventory in real time...",
//   },
//   {
//     id: 4,
//     image: "/landingPage/RetailBusinessCardImg4.webp",
//     title: "Accessories Store",
//     description: "Shopaver enables accessories stores to efficiently manage diverse SKUs, track fast-moving items, and simplify billing. Monitor stock in real...",
//   },
//   {
//     id: 5,
//     image: "/landingPage/RetailBusinessCardImg5.webp",
//     title: "Cart and Kiosk",
//     description: "Shopaver helps carts and kiosks manage quick billing, track daily sales, and monitor inventory with ease. Accept digital payments, maintain customer..",
//   },
//   {
//     id: 6,
//     image: "/landingPage/RetailBusinessCardImg6.webp",
//     title: "Spas & Salon",
//     description: "Shopaver helps spas and salons manage appointments, track service-wise revenue, and maintain client records effortlessly. Simplify billing,...",
//   },
// ];
// function RetailBusinessCard() {
//   return (
//    <section className="bg-[#F9F4FF] mt-[100px] pt-[68px] pb-[81px]">
//     <div className="max-w-5xl px-[22px] xl:px-0 mx-auto">
//     <h2 className="text-[#5801B7] text-center text-[26px] lg:text-[30px] font-semibold font-[Poppins] leading-[normal]">One platform to Run Every type of Retail Business</h2>
//     <div className="grid grid-cols-1 sm:grid-cols-2 gap-[17.5px] pt-[37px]">
// {cards.map((item)=>{
//     return(
//     <div key={item.id} className="flex items-center gap-[14.5px] lg:gap-[35px]  bg-[#FFF] rounded-[25.47px] border-[0.879px] border-[#EBD9FF] pl-3.5 pt-[9px] pr-[8.6px] pb-[8.66px] lg:pl-[21px] lg:pr-[12.7px] lg:pt-[12.82px] lg:pb-[13.2px]">
// <div className="flex flex-col flex-1 justify-end h-full">
//     <p className="text-[#5801B7] text-[15px] sm:text-[18px] lg:text-[20px] font-medium font-[Poppins]">{item.title}</p>
//     <p className="pt-[5px] text-[#525252] text-[10px] sm:text-[11px] lg:text-[12px] font-normal font-[Poppins]">{item.description}</p>
//     <div className="mt-[9.45px] lg:mt-[27.85px] rounded-[30px] bg-[#E6D2FF] border-[0.879px] border-[#F0E2FF] w-[90px] h-[27.5px] flex justify-center items-center gap-[4.39px]">
//         <p className="text-[#5801B7] text-[10px] font-normal font-[Poppins]">Read More</p>
//         <div className="w-[17.58px] h-[17.58px] rounded-full bg-[#FFF] flex justify-center items-center">
//    <Image src="/landingPage/Arrow.svg" alt="Arrow" width={10} height={5}></Image>
//         </div>
//     </div>
// </div>
// <Image src={item.image} alt="Image" className="shrink-0 w-[147px] h-[153px] lg:w-[218px] lg:h-[227px]"  width={218} height={227}></Image>
//     </div>
//     );
// })}
//     </div>
//     </div>
//    </section>
//   )
// }

// export default RetailBusinessCard



"use client";
import { useState } from "react";
import Image from "next/image";

function RetailBusinessCard({ onePlatform = [] }) {
   
  const [showAll, setShowAll] = useState(false);

  const filteredData = onePlatform.filter(
    (item) => item.heading && item.description
  );
// const baseImageURL="https://media-shopaver-uat.s3.amazonaws.com"

  return (
    <section className="bg-[#F9F4FF] mt-[100px] py-[41px] lg:pt-[68px] lg:pb-[81px]">
      <div className="max-w-5xl px-[22px] xl:px-0 mx-auto">
        <h2 className="text-[#5801B7] text-center text-[26px] lg:text-[30px] font-semibold">
          One platform to Run Every type of Retail Business
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10.5px] h-full lg:gap-[17.57px] mt-10">
          {filteredData.map((item, index) => (
            <div
              key={index}
              className={`
                ${!showAll && index >= 2 ? "hidden sm:block" : "block"}
                ${showAll && index >= 2 ? "animate-fadeInUp" : ""}
              `}
            >
              <Card item={item} />
            </div>
          ))}
        </div>

        {!showAll && filteredData.length > 2 && (
          <div className="flex justify-center mt-6 sm:hidden">
            <div
              onClick={() => setShowAll(true)}
              className="flex justify-center items-center gap-[5px] w-[111px] h-11 rounded-xl bg-[#5801B7]"
            >
              <p className="text-white text-[16px] font-medium">More</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* Card Component */
function Card({ item }) {
  const BASE_IMAGE_URL = "https://media-shopaver-uat.s3.amazonaws.com";
  
  return (
    <div className=" flex items-center  h-full gap-[14.5px] lg:gap-[35px] bg-white rounded-[25.47px] border border-[#EBD9FF] p-4">
      <div className="flex flex-col w-[50%]">
        <p className="text-[#5801B7] text-[18px] font-medium break-words">
          {item.heading}
        </p>

        <p className="pt-[5px] text-[#525252] text-[12px] break-words">
          {item.description}
        </p>

        <div className="mt-[20px] rounded-[30px] bg-[#E6D2FF] w-[90px] h-[27px] flex justify-center items-center">
          <p className="text-[#5801B7] text-[10px]">Read More</p>
        </div>
      </div>

  <div className="w-[50%]">
      
        <Image
          // src={ "/landingPage/RetailBusinessCardImg5.webp"}
          src={
                          item.image
                            ? `${BASE_IMAGE_URL}${item.image}`
                            : "/landingPage/BusinessSolutionSliderImg6.webp"
                        }
          alt={item.heading}
          width={218}
          height={227}
          className=" w-[147px] h-[153px] lg:w-[218px] lg:h-[227px]"
        />
  </div>
      
    </div>
  );
}

export default RetailBusinessCard;