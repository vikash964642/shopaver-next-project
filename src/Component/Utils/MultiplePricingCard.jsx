
"use client";
import Link from "next/link";
import Image from "next/image";
import PropsType from "prop-types";
import { useState } from "react";

const MultiplePricingCard = (props) => {
  const { loading, proPlan, isYearly, planTier } = props;
    const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
   const mobileFeatures = isExpanded
    ? proPlan?.features || []
    : proPlan?.features?.slice(0, 4) || [];
  return (
    <div className="relative">
      <div
        className={`
            ${
              planTier === "premium"
                ? "border-primary bg-purple-50"
                : "border-[#dddddd] bg-white"
            }
       m-2 border p-6 text-center shadow-sm lg:max-h-full
      transition-all duration-700 ease-in-out
      relative
      hover:scale-105
      lg:h-full
      h-auto
    `}
      >
        <div className={` ${planTier === "premium" ?'absolute':'hidden'} p-1 top-0 left-0 w-full bg-primary text-white text-[14px] font-medium`}>Best Value</div>
        <div>
          <h3
            className={`text-[24px]  ${
              planTier === "premium" ? "text-primary" : "text-[#222222]"
            } text-left font-semibold my-[18px]`}
          >
            {planTier === "premium"
              ? "Pro"
              : planTier === "standard"
              ? "Standard"
              : "Basic"}
          </h3>
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
           <Link href="https://app.shopaver.com/Sign-up" target="_blank" > 
          <button
            className={`w-full cursor-pointer border ${
              planTier === "premium"
                ? "text-white hover:bg-white hover:text-primary bg-primary"
                : "text-primary hover:bg-purple-50 bg-white"
            } border-purple-700 text-purple-700 font-semibold rounded-full px-4 py-2 mb-6  transition`}
          >
          Start Free Trial
          </button>
          </Link>
       <ul className="text-sm text-[#3F3F3F] font-semibold space-y-2 text-left leading-[30px] lg:hidden">
            {loading ? (
              <li className="list-disc list-inside">Loading features...</li>
            ) : (
             mobileFeatures.map((f, idx) => (
                <li className="list-disc list-inside" key={idx}>
                  {f.featureName}
                </li>
              ))
            )}
          </ul>

           <ul className="text-sm text-[#3F3F3F] font-semibold space-y-2 text-left leading-[30px] hidden lg:block">
            {loading ? (
              <li className="list-disc list-inside">Loading features...</li>
            ) : (
          proPlan?.features?.map((f, idx) => (
                <li className="list-disc list-inside" key={idx}>
                  {f.featureName}
                </li>
              ))
            )}
          </ul>
        </div>
      </div>

      <div onClick={handleToggleExpand} className="w-[33px] h-[33px] bg-[#5801B7] rounded-full flex justify-center items-center absolute left-[45%] bottom-[-10px] lg:hidden cursor-pointer">
        <Image
          src={"/icons/down-angle.png"}
          width={33}
          height={33}
          alt="downangle"
          className={`transition-transform duration-500 ${
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
  proPlan: PropsType.array,
  isYearly: PropsType.bool,
  amount: PropsType.string,
};

export default MultiplePricingCard;
