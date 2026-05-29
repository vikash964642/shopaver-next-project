"use client";

import React, { useEffect, useState,useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function BenefitsWhatsappBlueTick() {
  const arrayData = [
    {
      title: "Build Customer Trust",
      description:
        "Only legally registered businesses are eligible; individuals cannot apply.",
      video: "/newVideo/BenefitsWhatsappBlueTickVideo1.mp4",
    },
    {
      title: "Boost Sales Conversions",
      description:
        "Higher message open and reply rates help convert more WhatsApp chats into actual paying customers.",
      video: "/video/Homepagevideo.mp4",
    },
    {
      title: "Prevent Fraud Risks",
      description:
        "Your WhatsApp Display Name must be approved by Meta before verification.",
      video: "/newVideo/BenefitsWhatsappBlueTickVideo1.mp4",
    },
    {
      title: "Compete With Giants",
      description:
        "Your business must be well-known, credible, and trusted in your industry.",
    video: "/video/Homepagevideo.mp4",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

const container = useRef(null);
const progressRefs = useRef([]);
  const videoRef = useRef(null);
const animationRef = useRef(null);
//  useGSAP(
//     () => {
//       let current = 0;

//       gsap.set(progressRefs.current, {
//         scaleX: 0,
//         transformOrigin: "left",
//       });

//       const runAnimation = () => {
//         // gsap.set(progressRefs.current, {
//         //   scaleX: 0,
//         // });
// gsap.set(progressRefs.current[current], {
//   scaleX: 0,
// });
//         setActiveIndex(current);

//         gsap.to(progressRefs.current[current], {
//           scaleX: 1,
//           duration: 5,
//           ease: "none",

//           onComplete: () => {
//             current =
//               current === arrayData.length - 1 ? 0 : current + 1;

//             runAnimation();
//           },
//         });
//       };

//       ScrollTrigger.create({
//         trigger: container.current,
//         start: "top 70%",
//         once: true,

//         onEnter: () => {
//           runAnimation();
//         },
//       });
//     },
//     { scope: container }
//   );

// useGSAP(
//   () => {
//     let current = 0;

//     const runAnimation = () => {
//       // sab reset
//       gsap.set(progressRefs.current, {
//         scaleX: 0,
//         transformOrigin: "left",
//       });

//       setActiveIndex(current);

//       gsap.to(progressRefs.current[current], {
//         scaleX: 1,
//         duration: 5,
//         ease: "none",

//         onComplete: () => {
//           // current line reset back to gray
//           gsap.set(progressRefs.current[current], {
//             scaleX: 0,
//           });

//           current =
//             current === arrayData.length - 1 ? 0 : current + 1;

//           runAnimation();
//         },
//       });
//     };

//     ScrollTrigger.create({
//       trigger: container.current,
//       start: "top 70%",
//       once: true,

//       onEnter: () => {
//         runAnimation();
//       },
//     });
//   },
//   { scope: container }
// );

useGSAP(
  () => {
    let current = 0;

    const runAnimation = (index) => {
      current = index;

      // previous animation stop
      animationRef.current?.kill();

      // all progress reset
      gsap.set(progressRefs.current, {
        scaleX: 0,
        transformOrigin: "left",
      });

      // active item update
      setActiveIndex(current);

      // active progress animate
      animationRef.current = gsap.to(
        progressRefs.current[current],
        {
          scaleX: 1,
          duration: 5,
          ease: "none",

          onStart: () => {
            // video restart
            if (videoRef.current) {
              videoRef.current.currentTime = 0;

              const playPromise =
                videoRef.current.play();

              if (playPromise !== undefined) {
                playPromise.catch(() => {});
              }
            }
          },

          onComplete: () => {
            // current line reset
            gsap.set(
              progressRefs.current[current],
              {
                scaleX: 0,
              }
            );

            // next slide
            current =
              current === arrayData.length - 1
                ? 0
                : current + 1;

            runAnimation(current);
          },
        }
      );
    };

    // expose globally for click
    container.current.runAnimation = runAnimation;

    const trigger = ScrollTrigger.create({
      trigger: container.current,
      start: "top 70%",
      once: true,

      onEnter: () => {
        runAnimation(0);
      },
    });

    return () => {
      animationRef.current?.kill();
      trigger.kill();
    };
  },
  { scope: container }
);
  return (
    <section className="bg-[#F8F8FF]" ref={container}>
      <div className="max-w-[1440px] mx-auto px-[27px] md:px-[47px] xl2:px-[110px] xl3:pl-[33.5px] xl3:pr-[83px] pt-[75px] pb-[20px] md:py-[55px] lg:py-[75px] xl2:py-[95px] xl3:py-[120px]">
        
        {/* Heading */}
        <div className="leading-[34px] lg:leading-[41px] xl2:leading-[53px] xl3:leading-[66px]">
          <h2 className="text-[#3C3939] text-[28.5px] md:text-[26.2px] lg:text-[34.3px] xl2:text-[44.3px] xl3:text-[55px] font-bricolage font-medium text-center">
            Benefits of
          </h2>

          <h2 className="text-[#06AAFF] text-[28.5px] md:text-[26.2px] lg:text-[34.3px] xl2:text-[44.3px] xl3:text-[55px] font-bricolage font-medium text-center">
            WhatsApp Blue Tick Verification
          </h2>
        </div>
<div className="mt-[100px] flex flex-col-reverse md:flex-row justify-between items-center gap-[23px] md:gap-[50px] lg:gap-[70px] xl2:gap-[90px]">

  {/* Left Titles */}
  <div className="flex flex-col gap-[15px] flex-1 min-w-0">

    {arrayData.map((item, index) => (
      <div key={index}>

        <h2  onClick={() => {
  container.current?.runAnimation(index);
}}
   
          className="
          cursor-pointer
            text-[23.7px]
            md:text-[16.4px]
            lg:text-[21.5px]
            xl2:text-[27.6px]
            xl3:text-[34.5px]
            font-medium
            font-bricolage
            text-[#5801B7]
          "
        >
          {item.title}
        </h2>
     
  {activeIndex === index && (
    <div
      className="description-wrapper overflow-hidden"
      ref={(el) => {
        if (el) {
          gsap.fromTo(
            el,
            {
              y: 30,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              ease: "power3.out",
            }
          );
        }
      }}
    >
      <p
        className="
          w-[85%]
          text-[#666]
          text-[13.5px]
          md:text-[12px]
          lg:text-[15.5px]
          xl2:text-[20px]
          xl3:text-[24px]
          leading-[17px]
          lg:leading-[20px]
          xl2:leading-[26px]
          xl3:leading-[32px]
          mt-[10px]
        "
      >
        {item.description}
      </p>
    </div>
  )}
        <div className="mt-[14px] h-[2px] w-full bg-[#E3E3FF] rounded-full overflow-hidden">

  <div
    ref={(el) => (progressRefs.current[index] = el)}
    className="h-full w-full bg-[#5801B7] rounded-full scale-x-0"
  />
</div>
      </div>
    ))}
  </div>

  {/* Right Image Box */}
  <div
    className="
      shrink-0
        w-full
      h-[275px]
      xm1:w-[332px]
      md:w-[320px]
      md:h-[265px]
      lg:w-[420px]
      lg:h-[345px]
      xl2:w-[540px]
      xl2:h-[445px]
      xl3:w-[675px]
      xl3:h-[555px]
      bg-[#FFF]
      rounded-[26px]
      md:rounded-[18px]
      lg:rounded-[24px]
      xl2:rounded-[31px]
      xl3:rounded-[38px]
      relative
      overflow-hidden
      flex
      justify-center
      items-center
      p-[10px]
    "
  >
   <video
              key={activeIndex}
              ref={videoRef}
              src={arrayData[activeIndex].video}
              loop
              autoPlay
              muted
                preload="metadata"
              playsInline
              className="h-full w-full object-fill rounded-[26px]
      md:rounded-[18px]
      lg:rounded-[24px]
      xl2:rounded-[31px]
      xl3:rounded-[38px]"
              
            />
  </div>
</div>
      </div>
    </section>
  );
}

export default BenefitsWhatsappBlueTick;