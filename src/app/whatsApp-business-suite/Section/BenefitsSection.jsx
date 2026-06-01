"use client";

import React from "react";

const benefits = [
  {
    title: "Increased Customer Engagement",
    description:
      "Communicate with customers on the platform they use most.",
  },
  {
    title: "Higher Sales Conversions",
    description:
      "Convert conversations into purchases with built-in commerce tools.",
  },
  {
    title: "Marketing at Scale",
    description:
      "Send targeted promotional campaigns to thousands of customers.",
  },
];

function BenefitsSection() {
  return (
    <section className="w-full  py-16 md:py-24">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADING */}
        <div className="mx-auto max-w-3xl text-center">
          
          <h2 className="text-3xl font-bold leading-[37px] md:leading-[58px] text-[#5801B7] sm:text-[36px] md:text-[56.6px]">
            Benefits of
            <br className="hidden sm:block" />
            WhatsApp Business Suite
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#525252] sm:text-base md:text-[21px]">
            Using WhatsApp Business Suite offers several advantages for
            businesses looking to improve communication and sales.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          
          {benefits.map((item, index) => (
            <div
              key={index}
              className="rounded-[28px] border border-[#D9D3FF] bg-[#F8F8FF] p-5 sm:p-6"
            >
              
              {/* CONTENT */}
              <div>
                <h3 className="max-w-[240px] text-[18.3px] md:text-[24px]  font-medium leading-[22px] md:leading-[29px]  text-[#5801B7]">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-[280px] text-[12px] md:text-[16px] leading-[18px] md:leading-[24px] text-[#2E2E2E] sm:text-base">
                  {item.description}
                </p>
              </div>

              {/* IMAGE / VIDEO BOX */}
              <div className="mt-8 overflow-hidden rounded-[22px] bg-[#E7E7E7]">
                
                <div className="h-[220px] w-full sm:h-[240px] md:h-[260px]">
                  
                  {/* YOUR IMAGE / VIDEO HERE */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;