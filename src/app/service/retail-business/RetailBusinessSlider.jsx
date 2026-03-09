
// "use client";
// import { useRef, useState, useLayoutEffect } from "react";
// import Image from "next/image";
// import "swiper/css";
// import "swiper/css/navigation";


// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const contentData = [
//   {
//     heading: "Sales & Purchase Reports",
//     paragraph: "Monitor revenue and profits in real time",
//     image: "/image/ConnectedBanking/BankDetailsImg2.webp",
//   },
//    {
//     heading: "Inventory & Stock Transfers",
//     paragraph: "Track and move stock across locations",
//     image: "/image/ConnectedBanking/BankDetailsImg2.webp",
//   },
//    {
//     heading: "Vendor & Supplier Management",
//     paragraph: "Simplify purchasing & supplier interactions",
//     image: "/image/ConnectedBanking/BankDetailsImg2.webp",
//   },
//    {
//     heading: "And Many More",
//     paragraph: "All designed to simplify your retail operations",
//     image: "/image/ConnectedBanking/BankDetailsImg2.webp",
//   },
  
// ];

// function RetailBusinessSlider() {
//      const imageRefs = useRef([]);
//   const labelRefs = useRef([]);
//   const sectionRef = useRef();
//   const [activeIndex, setActiveIndex] = useState(0);


  

// useLayoutEffect(() => {


//   const images = imageRefs.current;
//   const labels = labelRefs.current;
//   const activeIndexRef = { current: 0 };

//   const scrollTrigger = ScrollTrigger.create({
//     trigger: sectionRef.current,
//     start: "top 20%",
//     end: `+=${contentData.length * window.innerHeight}`,
//     scrub: true,
//     pin: true,
//     onUpdate: (self) => {
//       const index = Math.min(
//         contentData.length - 1,
//         Math.floor(self.progress * contentData.length)
//       );

//       if (index !== activeIndexRef.current) {
//         activeIndexRef.current = index;
//         setActiveIndex(index);

//         // Fade in the active image, fade out others
//         images.forEach((img, i) => {
//           gsap.to(img, {
//             autoAlpha: i === index ? 1 : 0,
//             y: i === index ? 0 : 50,
//             duration: 0.3,
//           });
//         });

//         // Update labels
//         labels.forEach((lbl, i) => {
//           gsap.to(lbl, {
//             color: i === index ? "#FFF" : "#ACACAC",
//             duration: 0.3,
//           });
//         });
//       }
//     },
//   });

//   return () => scrollTrigger.kill();
// }, []);
//   return (
//       <section ref={sectionRef} className="hidden lg:block lg:px-10 mt-[120px] lg:mt-[220px]">
//       <div className="max-w-5xl lg:mx-auto ">
       
//         <h3 className=" max-[375px]:text-[24px] text-[28px] lg:text-[30px] text-center lg:text-left font-semibold mb-[20px] lg:mb-[24px] px-[30px] lg:px-0">
//        Run Your Entire Retail Business from a Single Dashboard
//         </h3>
//         <div className="flex justify-center lg:justify-start max-[375px]:px-5 px-[30px] sm:px-0">
//           <p className="sm:w-[450px] lg:w-[590px] text-[#959595] max-[375px]:text-[13px] text-[14px] text-center lg:text-left lg:text-[20px] font-normal">
//            Manage your entire store operations from one platform. No more switching between multiple tools. From billing to sales, everything is fully integrated
//           </p>
//         </div>

//         {/* --- Desktop --- */}
//         <div className="flex gap-6 mt-10">
//           {/* Labels */}
//           <div className="w-full md:w-1/2 sticky top-0 space-y-[25px]">
//             {contentData.map((item, i) => (
//               <div
//                 key={i}
//                 ref={(el) => (labelRefs.current[i] = el)}
//                     // onClick={() => handleLabelClick(i)}
//                 className="flex items-center gap-[30px] cursor-pointer"
//               >
               
               
//                 <div
//                   className={` ${
//                     activeIndex === i ? "border-l h-[50px] border-[#5801B7]" : "border-none"
//                   }`}
//                 ></div>
//                 <div>
//                     <h2
//                   className={` text-[20px] font-medium ${
//                     activeIndex === i ? "text-[#5801B7]" : "text-[#393939]"
//                   }`}
//                 >
//                   {item.heading}
//                 </h2>
//                 <p className="pt-2.5 text-[#2E2E2E] text-[14px] font-normal">{item.paragraph}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

         


//           <div className="w-full md:w-1/2 flex justify-end ">

//   <div
//     ref={sectionRef} // <-- pin and scroll trigger target
//     className=" h-[255px] w-[418px]"
//   >
//     {contentData.map((item, i) => (
//       <div
//         key={i}
//         ref={(el) => (imageRefs.current[i] = el)}
//         className="absolute inset-0 flex justify-center items-end"
//         style={{ opacity: i === 0 ? 1 : 0 }} // first image visible by default
//       >
//         <div className="h-[255px] w-[418px] border-[0.3px] rounded-[20px] bg-[#080219] flex justify-center items-end">
//           <Image  src={item.image}
//             alt={`Image ${i}`} width={339} height={225}></Image>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>

//         </div>
//       </div>
//     </section>
//   )
// }

// export default RetailBusinessSlider



// "use client";
// import { useRef, useState, useLayoutEffect } from "react";
// import Image from "next/image";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const contentData = [
//   {
//     heading: "Sales & Purchase Reports",
//     paragraph: "Monitor revenue and profits in real time",
//     image: "/landingPage/RetailBusinessCardImg1.webp",
//   },
//   {
//     heading: "Inventory & Stock Transfers",
//     paragraph: "Track and move stock across locations",
//     image: "/landingPage/RetailBusinessCardImg2.webp",
//   },
//   {
//     heading: "Vendor & Supplier Management",
//     paragraph: "Simplify purchasing & supplier interactions",
//     image: "/landingPage/RetailBusinessCardImg3.webp",
//   },
//   {
//     heading: "And Many More",
//     paragraph: "All designed to simplify your retail operations",
//     image: "/landingPage/RetailBusinessCardImg4.webp",
//   },
// ];

// function RetailBusinessSlider() {
//   const sectionRef = useRef(null);
//   const imageRefs = useRef([]);
//   const [activeIndex, setActiveIndex] = useState(0);

//   useLayoutEffect(() => {
//     const images = imageRefs.current;
//     let activeIndexRef = 0;

//     const st = ScrollTrigger.create({
//       trigger: sectionRef.current,
//       start: "center center",
//        end: () => "+=" + sectionRef.current.offsetHeight * (contentData.length - 1),
     
//       markers:true,
//       scrub: 1,
//       pin: true,
//       onUpdate: (self) => {
//         const index = Math.min(
//           contentData.length - 1,
//           Math.round(self.progress * (contentData.length - 1))
//         );

//         if (index !== activeIndexRef) {
//           activeIndexRef = index;
//           setActiveIndex(index);

//           images.forEach((img, i) => {
//             gsap.to(img, {
//               autoAlpha: i === index ? 1 : 0,
//               y: i === index ? 0 : 30,
//               duration: 0.4,
//             });
//           });
//         }
//       },
//     });

//     return () => st.kill();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="hidden lg:block lg:px-10 mt-[220px]" >
//       <div className="max-w-6xl mx-auto">
//         <h3 className=" max-[375px]:text-[24px] text-[28px] lg:text-[30px] text-center font-semibold px-[30px] lg:px-0">
//         Run Your Entire Retail Business from a Single Dashboard
//          </h3>
//          <div className="flex justify-center max-[375px]:px-5 px-[30px] sm:px-0 mt-2">
//            <p className="sm:w-[450px] lg:w-[760px] text-[#5F5F5F] max-[375px]:text-[13px] text-[14px] text-center  lg:text-[18px] font-normal">
//             Manage your entire store operations from one platform. No more switching between multiple tools. From billing to sales, everything is fully integrated
//            </p>
//            </div>
//         <div className="flex gap-12 mt-20">

//           {/* LEFT CONTENT */}
//           <div className="w-1/2 space-y-10">
//             {contentData.map((item, i) => (
//               <div key={i} className="flex gap-6">
//                 <div
//                   className={`transition-all duration-300 ${
//                     activeIndex === i
//                       ? "border-l-2 border-[#5801B7]"
//                       : ""
//                   }`}
//                 />
//                 <div>
//                   <h2
//                     className={`text-[20px] font-medium transition-colors duration-300 ${
//                       activeIndex === i
//                         ? "text-[#5801B7]"
//                         : "text-[#393939]"
//                     }`}
//                   >
//                     {item.heading}
//                   </h2>
//                   <p className="pt-2 text-[#2E2E2E] text-[14px] font-normal">
//                     {item.paragraph}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

          
// <div className="w-1/2 flex justify-end">
//   <div className="h-[255px] w-[418px] border rounded-[20px] bg-[#080219] flex justify-center items-end overflow-hidden">

//     <Image
//       key={activeIndex}   // important for re-render animation
//       src={contentData[activeIndex].image}
//       alt="Retail Image"
//       width={339}
//       height={225}
//       className="transition-opacity duration-300"
//     />

//   </div>
// </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default RetailBusinessSlider;


"use client";
import { useRef, useState, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const contentData = [
  {
    heading: "Sales & Purchase Reports",
    paragraph: "Monitor revenue and profits in real time",
    image: "/landingPage/RetailBusinessCardImg1.webp",
  },
  {
    heading: "Inventory & Stock Transfers",
    paragraph: "Track and move stock across locations",
    image: "/landingPage/RetailBusinessCardImg2.webp",
  },
  {
    heading: "Vendor & Supplier Management",
    paragraph: "Simplify purchasing & supplier interactions",
    image: "/landingPage/RetailBusinessCardImg3.webp",
  },
  {
    heading: "And Many More",
    paragraph: "All designed to simplify your retail operations",
    image: "/landingPage/RetailBusinessCardImg4.webp",
  },
];

export default function RetailBusinessSlider() {
  const sectionRef = useRef(null);
  const imageRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useLayoutEffect(() => {
    imageRefs.current = imageRefs.current.slice(0, contentData.length);
    let activeIndexRef = 0;

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: () => `+=${window.innerHeight * contentData.length}`,
      scrub: 1,
      pin: true,
      onUpdate: (self) => {
        const index = Math.min(
          contentData.length - 1,
          Math.round(self.progress * (contentData.length - 1))
        );
        if (index !== activeIndexRef) {
          activeIndexRef = index;
          setActiveIndex(index);

          // Animate images
          imageRefs.current.forEach((img, i) => {
            gsap.to(img, {
              autoAlpha: i === index ? 1 : 0,
              y: i === index ? 0 : 30,
              duration: 0.4,
            });
          });
        }
      },
    });

    return () => st.kill();
  }, []);

  return (
<section
  ref={sectionRef}
  className="hidden lg:block lg:px-10 mt-[220px]"
>
  <div className="max-w-6xl mx-auto">
    <h3 className="text-center font-semibold text-[28px] lg:text-[30px] px-[30px] lg:px-0">
      Run Your Entire Retail Business from a Single Dashboard
    </h3>
    <div className="flex justify-center mt-2 px-[30px] sm:px-0">
      <p className="sm:w-[450px] lg:w-[760px] text-center text-[#5F5F5F] text-[14px] lg:text-[18px]">
        Manage your entire store operations from one platform. No more switching between multiple tools. From billing to sales, everything is fully integrated
      </p>
    </div>

    {/* PIN WRAPPER */}
    <div
      className="relative mt-20"
      style={{ height: `${window.innerHeight * contentData.length}px` }}
    >
      <div className="flex gap-12 h-full">
        {/* LEFT CONTENT */}
        <div className="w-1/2 space-y-10">
          {contentData.map((item, i) => (
            <div key={i} className="flex gap-6">
              <div className={`transition-all duration-300 ${activeIndex === i ? "border-l-2 border-[#5801B7]" : ""}`} />
              <div>
                <h2 className={`text-[20px] font-medium transition-colors duration-300 ${activeIndex === i ? "text-[#5801B7]" : "text-[#393939]"}`}>
                  {item.heading}
                </h2>
                <p className="pt-2 text-[#2E2E2E] text-[14px] font-normal">{item.paragraph}</p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT IMAGES */}
        <div className="w-1/2 flex justify-center items-center relative">
          {contentData.map((item, i) => (
            <div
              key={i}
              ref={(el) => (imageRefs.current[i] = el)}
              className={`absolute transition-all duration-300`}
              style={{
                opacity: i === activeIndex ? 1 : 0,
                top: "50%",
                left: 0,
                transform: i === activeIndex ? "translateY(-50%)" : "translateY(-50%) translateY(30px)",
              }}
            >
              <Image src={item.image} alt={item.heading} width={339} height={225} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
  );
}