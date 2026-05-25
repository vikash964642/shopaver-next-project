"use client";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const stats = [
  { end: 75, suffix: "x", label: "Sales Growth" },
  { end: 70, suffix: "%", label: "Faster Business Operations" },
  { end: 90, suffix: "%", label: "Boost Customer Engagement" },
  { end: 50, suffix: "%", label: "Less Work with AI Automation" },
];

function StatCard({ end, suffix, label }) {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect(); // fire once
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="w-[287px] md:w-auto h-[8.35rem] md:h-[150px] lg:h-[12.5rem] xl:h-[240px] xl2:h-[292px]  flex flex-col gap-[0.3125rem] justify-center items-center rounded-[1.5rem] border-[0.05rem] border-[#DADAFF] bg-[#F8F8FF]"
    >
      <h1 className="text-[#5801B7] text-[52px] md:text-[3rem] lg:text-[4.062rem] xl:text-[78.6px] xl2:text-[94px] font-bold leading-none">
        {started ? (
          <CountUp start={0} end={end} duration={2.2} useEasing={true} />
        ) : (
          <span>0</span>
        )}
        {suffix}
      </h1>
      <p className="text-[#525252] text-[14.5px] md:text-[13.5] lg:text-[1.125rem] xl:text-[21.17px] xl2:text-[26.3px] font-medium">
        {label}
      </p>
    </div>
  );
}

export default function Counter() {
  return (
    <section className="mt-[51.33px] md:mt-[112px] lg:mt-[149px] xl:mt-[180px] xl2:mt-[200px] lg:max-w-[930px] xl:max-w-[76.25rem] xl2:max-w-[90rem] mx-auto px-[20.5px] md:px-[110px] lg:px-[100px] xl:px-[168px] xl2:px-[185px]">
  
      <div className="flex flex-col justify-center items-center md:grid grid-cols-1 md:grid-cols-2 gap-[1.25rem] md:gap-[22px] lg:gap-[1.875rem] xl:gap-[36px] xl2:gap-[43.85px]">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>
  
    </section>
  );
}
