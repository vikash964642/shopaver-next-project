
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function RotatingCircle() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 40%",
          toggleActions: "play none none none",
        },
      });
      // ================= ROTATING CIRCLE =================
      gsap.to("#rotatingCircle", {
        rotate: 360,
        duration: 40,
        repeat: -1,
        ease: "none",
        transformOrigin: "center center",
      });

          // ================= RIGHT CARD =================
tl.from("#rightCard", {
  scale: 0.7,
  opacity: 0,
  duration: 0.4,
  ease: "power3.out",
});

      // ================= LEFT CARD =================
tl.from("#leftCard", {
  scale: 0.7,
  opacity: 0,
  duration: 0.5,
  ease: "power3.out",
});

      // ================= CHAT BOX =================
tl.from("#chatBox", {
  scale: 0,
  opacity: 0,
  duration: 0.6,
  ease: "back.out(1.7)",
});
      // ================= SMALL ICON =================
      tl.from("#smallIcon", {
  scale: 0,
  opacity: 0,
  duration: 0.7,
  ease: "elastic.out(1,0.5)",
});

     },
    { scope: container }
  );

  return (
 <section ref={container} className='max-w-[115.625rem] mx-auto mt-[7.5rem]'>
    <div className="mx-32">
     <div className="flex justify-center mt-[2.5rem] lg:mt-[5rem] relative">
      <svg
        width="642"
        height="499"
        viewBox="0 0 642 499"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[43.75rem] h-auto">
        {/* ================= ROTATING CIRCLE ================= */}
        <g id="rotatingCircle">
          <circle
            cx="330.599"
            cy="266.676"
            r="266.03"
            stroke="#075E54"
            strokeWidth="1.29141"
            strokeDasharray="11.3 11.3"
          />
        </g>

        {/* ================= LIGHT GREEN BG ================= */}
        <circle cx="330.914" cy="270" r="205" fill="#DCF8C6" />
    {/* ================= RIGHT CARD ================= */}
        <g id="rightCard">
          <image
            href="/img/RotatingCircleImg3.png"
            x="467"
            y="82"
            width="169"
            height="320"
            preserveAspectRatio="xMidYMid meet"
          />
        </g>
        {/* ================= MOBILE PHONE ================= */}
        <g id="mobilePhone">
          <image className="abc"
            href="/img/RotatingCircleImg2.png"
            x="164"
            y="26"
            width="334"
            height="472"
            preserveAspectRatio="xMidYMid meet"
          />
        </g>

    

        {/* ================= LEFT CARD ================= */}
        <g id="leftCard">
          <image
            href="/img/RotatingCircleImg4.png"
            x="0"
            y="139"
            width="170"
            height="147"
            preserveAspectRatio="xMidYMid meet"
          />
        </g>

        {/* ================= CHAT BOX ================= */}
        <g id="chatBox">
          <image
            href="/img/RotatingCircleImg5.png"
            x="158"
            y="359"
            width="140"
            height="90"
            preserveAspectRatio="xMidYMid meet"
          />
        </g>

        {/* ================= SMALL ICON ================= */}
        <g id="smallIcon" style={{ position: "relative", zIndex: 50 }}>
          <image
            href="/img/RotatingCircleImg6.png"
            x="175"
            y="20"
            width="40"
            height="40"
            preserveAspectRatio="xMidYMid meet"
          />
        </g>
      </svg>
      <div className="RotatingCircleGradient"></div>
    </div>
    </div>
 </section>
  );
}