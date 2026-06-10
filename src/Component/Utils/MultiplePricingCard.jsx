
"use client";
import Link from "next/link";
import Image from "next/image";
import PropsType from "prop-types";
import { useState } from "react";

const MultiplePricingCard = (props) => {
  const { loading, proPlan, isYearly, planTier, allFeatures } = props;
    const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const mobileFeatures = isExpanded
  ? allFeatures || []
  : allFeatures?.slice(0, 4) || [];
  return (
    <div className="relative">
      <div
        className={`rounded-[10px] border p-6 text-center shadow-sm lg:max-h-full
      transition-all duration-700 ease-in-out
      relative
      hover:scale-105
      lg:h-full
      h-auto
            ${
              planTier === "premium"
                ? "border-primary bg-purple-50"
                : "border-[#dddddd] bg-white"
            } 
             ${isExpanded ? "h-[750px]" : "h-[420px]"}  // 👈 yaha change
    overflow-hidden
  `}
      
      >
        <div className={` ${planTier === "premium" ?'absolute':'hidden'} p-1 top-0 left-0 w-full bg-primary text-white text-[14px] font-medium`}>Best Value</div>
        <div>
          <h3
            className={`text-[22px] lg:text-[24px]  ${
              planTier === "premium" ? "text-primary" : "text-[#222222]"
            } text-left font-semibold my-[18px]`}
          >
               {proPlan?.plan_name}
          </h3>
          
            {Number(proPlan.amount)>0 ? (
              <div className="flex">
              <h2
              className={`text-3xl ${
                planTier === "premium" ? "text-primary" : "text-[#393939]"
              } font-bold mb-1 text-left`}
            >
              ₹ {proPlan.amount}
            </h2>
            <p
              className={`ml-[10px] text-sm ${
                planTier === "premium" ? "text-primary" : "text-[#393939]"
              } mb-4 flex flex-col justify-start items-start font-bold h-[1]`}
            >
              per{" "}
              <span
                className={`${
                  planTier === "premium" ? "text-primary" : "text-[#393939]"
                }`}
              >
                / {isYearly ? "Year" : "Month"}
              </span>
            </p>
              </div>
               ) : (
 <div className="flex flex-col items-start mb-[12px]">
        <p className="text-[14px] font-semibold text-[#6b21a8] ">According to</p>
    <p className="text-[14px] font-semibold text-[#6b21a8] ">customized plan</p>
</div>

            )}
            
          
           <Link href="https://app.shopaver.com/Sign-up" target="_blank" > 
          {Number(proPlan.amount)>0 ? (
            <button
            className={`w-full cursor-pointer border ${
              planTier === "premium"
                ? "text-white hover:bg-white hover:text-primary bg-primary"
                : "text-primary hover:bg-purple-50 bg-white"
            } border-purple-700 text-purple-700 font-semibold rounded-full px-4 py-2 mb-6  transition`}
          >
          Get Started
          </button>
          ) : (
            <button
            className={`w-full cursor-pointer border ${
              planTier === "premium"
                ? "text-white hover:bg-white hover:text-primary bg-primary"
                : "text-primary hover:bg-purple-50 bg-white"
            } border-purple-700 text-purple-700 font-semibold rounded-full px-4 py-2 mb-6  transition`}
          >
          Contact Us
          </button>
          )}
          </Link>
      
<div
  className='md:hidden'
>
  <ul className="text-sm font-semibold space-y-2 text-left leading-[26px]">
    {mobileFeatures.map((feature, idx) => {
      const hasFeature = proPlan?.features?.some((f) =>
        (f.featureName || "")
          .toLowerCase()
          .trim() === feature.featureName.toLowerCase().trim()
      );

      return (
        <li key={idx} className="flex items-start gap-2">
          <span className={hasFeature ? "text-green-500" : "text-gray-300"}>
            {hasFeature ? "✓" : "✕"}
          </span>
          <span className={hasFeature ? "" : "line-through text-gray-400"}>
            {feature.featureName}
          </span>
        </li>
      );
    })}
  </ul>
</div>
          <ul className="hidden md:block text-sm font-semibold space-y-2 text-left leading-[26px]">
  {loading ? (
    <li>Loading features...</li>
  ) : (
    allFeatures?.map((feature, idx) => {
      const hasFeature = proPlan?.features?.some((f) =>
        (f.featureName || "")
          .toLowerCase()
          .trim() === feature.featureName.toLowerCase().trim()
      );

      return (
        <li key={idx} className="flex items-start gap-2">
          <span className={hasFeature ? "text-green-500" : "text-gray-300"}>
            {hasFeature ? "✓" : "✕"}
          </span>
          <span className={hasFeature ? "" : "line-through text-gray-400"}>
            {feature.featureName}
          </span>
        </li>
      );
    })
  )}
</ul>
        </div>
      </div>

      <div onClick={handleToggleExpand} className="w-[33px] h-[33px] rounded-full bg-[#5801B7]  flex justify-center items-center absolute left-[45%] bottom-[-14px] md:hidden cursor-pointer">
        <Image
          src={"/icons/down-angle.png"}
          width={33}
          height={33}
          alt="downangle"
          className={`transition-transform duration-500 w-[15px] lg:w-[33px]  ${
              isExpanded ? "rotate-180" : ""
            }`}
        />
      </div>
    </div>
  );
};

MultiplePricingCard.propTypes = {
  planTier: PropsType.any,
  loading: PropsType.bool,
  // proPlan: PropsType.array,
  proPlan: PropsType.object,
  isYearly: PropsType.bool,
  amount: PropsType.string,
};

export default MultiplePricingCard;
