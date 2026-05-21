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
      className="h-[8.125rem] lg:h-[12.5rem] flex flex-col gap-[0.3125rem] justify-center items-center rounded-[1.5rem] border-[0.05rem] border-[#DADAFF] bg-[#F8F8FF]"
    >
      <h1 className="text-[#5801B7] text-[3.125rem] lg:text-[4.062rem] font-bold leading-none">
        {started ? (
          <CountUp start={0} end={end} duration={2.2} useEasing={true} />
        ) : (
          <span>0</span>
        )}
        {suffix}
      </h1>
      <p className="text-[#525252] text-[0.881rem] lg:text-[1.125rem] font-medium">
        {label}
      </p>
    </div>
  );
}

export default function Counter() {
  return (
    <section className="max-w-[115.625rem] mx-auto mt-[7.5rem]">
      <div className="mx-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1.25rem] lg:gap-[1.875rem] px-[3.75rem] lg:px-[7.5rem]">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>
      </div>
    </section>
  );
}
