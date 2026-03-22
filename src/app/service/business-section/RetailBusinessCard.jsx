

// "use client";
// import { useState } from "react";
// import Image from "next/image";

// function RetailBusinessCard({ onePlatform = [] }) {
   
//   const [showAll, setShowAll] = useState(false);

//   const filteredData = onePlatform.filter(
//     (item) => item.heading && item.description
//   );
// // const baseImageURL="https://media-shopaver-uat.s3.amazonaws.com"

//   return (
//     <section className="bg-[#F9F4FF] mt-[100px] py-[41px] lg:pt-[68px] lg:pb-[81px]">
//       <div className="max-w-5xl px-[22px] xl:px-0 mx-auto">
//         <h2 className="text-[#5801B7] text-center text-[26px] lg:text-[30px] font-semibold">
//           One platform to Run Every type of Retail Business
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10.5px] h-full lg:gap-[17.57px] mt-10">
//           {filteredData.map((item, index) => (
//             <div
//               key={index}
//               className={`
//                 ${!showAll && index >= 2 ? "hidden sm:block" : "block"}
//                 ${showAll && index >= 2 ? "animate-fadeInUp" : ""}
//               `}
//             >
//               <Card item={item} />
//             </div>
//           ))}
//         </div>

//         {!showAll && filteredData.length > 2 && (
//           <div className="flex justify-center mt-6 sm:hidden">
//             <div
//               onClick={() => setShowAll(true)}
//               className="flex justify-center items-center gap-[5px] w-[111px] h-11 rounded-xl bg-[#5801B7]"
//             >
//               <p className="text-white text-[16px] font-medium">More</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// /* Card Component */
// function Card({ item }) {
//   const BASE_IMAGE_URL = "https://media-shopaver-uat.s3.amazonaws.com";
  
//   return (
//     <div className=" flex items-center  h-full gap-[14.5px] lg:gap-[35px] bg-white rounded-[25.47px] border border-[#EBD9FF] p-4">
//       <div className="flex flex-col w-[50%]">
//         <p className="text-[#5801B7] text-[18px] font-medium break-words">
//           {item.heading}
//         </p>

//         <p className="pt-[5px] text-[#525252] text-[12px] break-words">
//           {item.description}
//         </p>

//         <div className="mt-[20px] rounded-[30px] bg-[#E6D2FF] w-[90px] h-[27px] flex justify-center items-center">
//           <p className="text-[#5801B7] text-[10px]">Read More</p>
//         </div>
//       </div>

//   <div className="w-[50%]">
      
//         <Image
//           // src={ "/landingPage/RetailBusinessCardImg5.webp"}
//           src={
//                           item.image
//                             ? `${BASE_IMAGE_URL}${item.image}`
//                             : "/landingPage/BusinessSolutionSliderImg6.webp"
//                         }
//           alt={item.heading}
//           width={218}
//           height={227}
//           className=" w-[147px] h-[153px] lg:w-[218px] lg:h-[227px]"
//         />
//   </div>
      
//     </div>
//   );
// }

// export default RetailBusinessCard;



"use client";
import { useState,useRef,useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function RetailBusinessCard({ onePlatform = [] }) {
   
  const [showAll, setShowAll] = useState(false);
  
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);

  const filteredData = onePlatform.filter(
    (item) => item.heading && item.description
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth < 1024) return;

    const el = scrollRef.current;
    const section = sectionRef.current;

    if (!el || !section) return;

   const totalWidth = el.scrollWidth;
const containerWidth = section.querySelector("div").offsetWidth;

const scrollDistance = totalWidth - containerWidth + 50;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "center center",
          end: `+=${totalWidth}`,
          scrub: true,
          pin: true,
        },
      });
    });

    return () => ctx.revert();
  }, [filteredData]);

  // const filteredData = onePlatform.filter(
  //   (item) => item.heading && item.description
  // );


  return (
    <section  ref={sectionRef} className="bg-[#F9F4FF] mt-[100px] py-[41px] lg:pt-[68px] lg:pb-[81px]">
      <div className="max-w-5xl px-[22px] xl:px-0 mx-auto">
        <h2 className="text-[#5801B7] text-center text-[26px] lg:text-[30px] font-semibold">
          One platform to Run Every type of Retail Business
        </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10.5px] lg:hidden mt-10">
          {filteredData.map((item, index) => (
            <div
              key={index}
              className={`${
                !showAll && index >= 2 ? "hidden sm:block" : "block"
              }`}
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

        {/* ================= DESKTOP HORIZONTAL ================= */}
        <div className="hidden lg:block overflow-hidden mt-10">
          <div
            ref={scrollRef}
            className="flex gap-[17.57px] w-max"
          >
            {filteredData.map((item, index) => (
              <div key={index} className="w-[500px]">
                <Card item={item} />
              </div>
            ))}
          </div>
        </div>
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