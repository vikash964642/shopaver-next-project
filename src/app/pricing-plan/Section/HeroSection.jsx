
"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import PricingCard from "../../../Component/Utils/PricingCard";
import MultiplePricingCard from "../../../Component/Utils/MultiplePricingCard";
import Link from "next/link";


const HeroSection = () => {
  const getAddOnPoints = (plan) => {
  switch (plan?.featureKey) {
    case "appointments":
      return [
        "Works for any service appointment — salon, doctor, astrologer, home services, legal consults, hospitality and more",
        "Syncs bookings across web + WhatsApp automatically",
        "Automatic WhatsApp reminders and rescheduling links",
        "Category presets: Healthcare, Education, Beauty & Personal Care, Astrology, Home & Maintenance, Legal, Hospitality",
      ];

    case "ai":
      return [
        "AI Invoice Extraction — auto-fill purchase orders from a PDF invoice",
        "AI Flow Generator — generate WhatsApp flows from a single prompt",
        "AI Template Creation — one-click message templates for broadcasts",
        "AI Engagement Analysis in Inbox — sentiment + intent tagging",
        "Great for automation & lead generation",
      ];

    case "flow_builder":
      return [
        "Drag & Drop Chatbot builder",
        "Showcase & sell products on WhatsApp",
        "WhatsApp cart management",
        "Integrated with Shopify checkout",
        "Share catalogs & products on WhatsApp",
      ];

    case "wa_extra_waba":
      return [
        "Same functionality as base WABA",
        "Separate verified display name per number",
        "Scale across brands or regions",
        "Each extra WABA inherits your tier features",
      ];

    default:
      return plan?.features?.map((f) => f.featureName || f.feature) || [];
  }
};

  const [isYearly, setIsYearly] = useState(true);
  const [monthlyPlanCount, setMonthlyPlanCount] = useState(0);
  const [yearlyPlanCount, setYearlyPlanCount] = useState(0);

  const [allPlans, setAllPlans] = useState([]);
  const [allMonthPlan, setallMonthPlan] = useState(null);
  const [allYearPlan, setallYearPlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [whatsappMonthPlan, setWhatsappMonthPlan] = useState([]);
const [whatsappYearPlan, setWhatsappYearPlan] = useState([]);
const [openIndex, setOpenIndex] = useState(null);
const [addOns, setAddOns] = useState({
  monthly: [],
  yearly: [],
});
  const handleToggle = (type) => {
    setIsYearly(type === "yearly");
  };


useEffect(() => {
  // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiNzAyMTE5NDg5MSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNzc4MDUyODEyLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo0NDMxMSIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzExIn0.5TJXQFqQYIn8vnEuUtZGZCY0xbOGCE6AvdBrpBDlmus";

  axios
    .post(
      `https://billingapi.xoomsales.com/api/ReferralCode/GetShopaverSubcriptionPlanPublic` 
    )
    .then((response) => {
      if (response.data.success) {
         const plans = response.data.data;

  setAllPlans(plans);
        const allPlans = response.data.data;

        const sortWhatsappPlans = (plans) => {
  return plans.sort((a, b) => {
    const priceA = Number(a.amount);
    const priceB = Number(b.amount);

    // ✅ 0 hamesha last
    if (priceA === 0) return 1;
    if (priceB === 0) return -1;

    // ✅ ascending (small → big)
    return priceA - priceB;
  });
};
// const assignWhatsappTier = (plans) => {
//   return plans.map((plan) => {
//     let tier = "basic";

//     if (plan.plan_name === "WhatsApp Pro") {
//       tier = "premium"; // ✅ Best Value
//     }

//     return { ...plan, planTier: tier };
//   });
// };
const assignWhatsappTier = (plans) => {
  const sorted = [...plans].sort((a, b) => {
    const priceA = Number(a.amount);
    const priceB = Number(b.amount);

    // ✅ 0 always last
    if (priceA === 0) return 1;
    if (priceB === 0) return -1;

    // normal ascending order
    return priceA - priceB;
  });

  const maxAmount = Math.max(
    ...sorted
      .map(p => Number(p.amount))
      .filter(a => a > 0) // ignore 0 for best value
  );

  return sorted.map((plan) => {
    let tier = "basic";

    if (Number(plan.amount) === maxAmount) {
      tier = "premium";
    }

    return { ...plan, planTier: tier };
  });
};
const NORMAL_PLANS = ["Basic", "Professional", "Enterprise"];
// const NORMAL_PLANS = ["Basic"];

const WHATSAPP_PLANS = [
  "WhatsApp Basic",
  "WhatsApp Pro",
  "WhatsApp Enterprise",
  "WhatsApp Customize"
];
      
const monthlyPlans = allPlans.filter((plan) =>
  plan.frequency?.toLowerCase().trim() === "monthly" &&
  plan.planType === "plan" &&
  NORMAL_PLANS.includes(plan.plan_name)
);
        // ✅ ONLY required yearly plans
        const yearlyPlans = allPlans.filter(
          (plan) =>
            plan.frequency === "Yearly" &&
            plan.planType === "plan" &&
            NORMAL_PLANS.includes(plan.plan_name)
        );


// ✅ NEW (WhatsApp + modules)

const monthlyWhatsappPlans = assignWhatsappTier(sortWhatsappPlans(
  allPlans.filter(
  (plan) =>
    plan.frequency === "Monthly" &&
    WHATSAPP_PLANS.includes(plan.plan_name)
)
)
);
const yearlyWhatsappPlans = assignWhatsappTier(sortWhatsappPlans(
  allPlans.filter(
  (plan) =>
    plan.frequency === "Yearly" &&
    WHATSAPP_PLANS.includes(plan.plan_name)
)
)
);
        // ✅ SORT DESC
        const sortByAmountAsc = (plans) =>
          plans.sort((a, b) => a.amount - b.amount);

        // ✅ ASSIGN TIERS
     const assignTiers = (plans) => {
  const sorted = sortByAmountAsc(plans);

  const maxAmount = Math.max(...sorted.map(p => Number(p.amount)));

  return sorted.map((plan) => {
    let tier = "basic";

    if (Number(plan.amount) === maxAmount) {
      tier = "premium"; // ✅ BEST VALUE
    }

    return { ...plan, planTier: tier };
  });
};

        const updatedMonthlyPlans = assignTiers(monthlyPlans);
        const updatedYearlyPlans = assignTiers(yearlyPlans);
const restPlansMonthly = allPlans.filter((plan) => {
  const isNormal =
    plan.planType === "plan" &&
    NORMAL_PLANS.includes(plan.plan_name);

  const isWhatsapp =
    plan.planType === "module" &&
    WHATSAPP_PLANS.includes(plan.plan_name);
const isStarter = plan.plan_name === "Starter";
  return !(isNormal || isWhatsapp || isStarter) && plan.frequency === "Monthly";
});

const restPlansYearly = allPlans.filter((plan) => {
  const isNormal =
    plan.planType === "plan" &&
    NORMAL_PLANS.includes(plan.plan_name);

  const isWhatsapp =
    plan.planType === "module" &&
    WHATSAPP_PLANS.includes(plan.plan_name);
const isStarter = plan.plan_name === "Starter";
  return !(isNormal || isWhatsapp || isStarter) && plan.frequency === "Yearly";
});
        // ✅ IMPORTANT (you missed this earlier)
        setallMonthPlan(updatedMonthlyPlans);
        setMonthlyPlanCount(updatedMonthlyPlans.length);

        setallYearPlan(updatedYearlyPlans);
        setYearlyPlanCount(updatedYearlyPlans.length);
setWhatsappMonthPlan(monthlyWhatsappPlans);
setWhatsappYearPlan(yearlyWhatsappPlans);
setAddOns({
  monthly: restPlansMonthly,
  yearly: restPlansYearly,
});
        setError("");
      } else {
        setError("Failed to fetch data");
      }

      setLoading(false);
    })
    .catch((err) => {
      console.error("Error:", err);
      setError("Error fetching data");
      setLoading(false);
    });
}, []);

const enterprisePlan = allPlans.find(
  (p) => p.plan_name === "Enterprise" && p.planType === "plan"
);
const whatsappEnterprise = allPlans.find(
  (p) =>
    p.plan_name === "WhatsApp Enterprise" &&
    p.planType === "module"
);
const hasFeature = (plan, featureId) => {
  return plan?.features?.some((f) => f.featureId === featureId);
};

const masterWhatsappFeatures = whatsappEnterprise?.features || [];
const masterFeatures = enterprisePlan?.features || [];
  return (
    <section className="max-w-[90rem] px-[30px] lg:px-[60px] xl2:px-[110px] mx-auto">
      <div className="py-12">
        <h1 className="text-[32px] lg:text-[40px] font-bold lg:font-semibold px-[40px] leading-[38px] text-center text-purple-800">
          Shopaver Pricing Plans
        </h1>
        <p className="text-center text-gray-600 mt-2 px-[40px]">
          Yearly Subscriptions | 14-Days Free Trial | Cancel Anytime
        </p>

        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded-md text-center mt-4 font-medium">
            ⚠️ {error}
          </div>
        )}

        <div className="flex flex-col items-center mt-6">
          <span className="inline-block text-[10px] font-semibold bg-[#2D7A02] text-[#F7F5F2] px-2 py-1 mb-[23px]">
            SAVE UP TO 17%
          </span>

          <div className="w-[180px] flex justify-center items-center border-[.88px] border-[#CBCBCB] rounded-full p-1">
            <button
              className={`px-4 py-1 text-sm cursor-pointer font-medium rounded-full transition-all ${
                isYearly ? "bg-[#5801B7] text-white" : "text-[#5801B7] hover:bg-white hover:shadow"
              }`}
              onClick={() => handleToggle("yearly")}
            >
              Yearly
            </button>
            <button
              className={`px-4 py-1 text-sm font-medium cursor-pointer rounded-full transition-all ${
                !isYearly ? "bg-[#5801B7] text-white" : "text-[#5801B7] hover:bg-white hover:shadow"
              }`}
              onClick={() => handleToggle("monthly")}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        {loading ? (
          <div className="text-center mt-10 font-medium text-gray-600">Loading Plans...</div>
        ) : (
          <>
            {isYearly ? (
              <div>
                         <h2 className="mt-10 text-2xl lg:text-[35px] font-semibold text-center mb-8">
         Billing Plan
        </h2>
                {yearlyPlanCount === 1 ? (
                  <div className="tyu">
                    {allYearPlan &&
                      allYearPlan.slice(0, 3).map((plan, idx) => (
                        <PricingCard key={idx} proPlan={plan} loading={loading} />
                      ))}
                  </div>
                ) : (
                  <div className={`grid grid-cols-1 md:grid-cols-3 lg:flex justify-center gap-[18px] mt-10`}>
                    {allYearPlan &&
                      allYearPlan.slice(0, 3).map((plan, idx) => (
                        <MultiplePricingCard key={idx} proPlan={plan} isYearly={true} amount={plan.amount}  planTier={plan.planTier} allFeatures={masterFeatures} />
                      ))}
                  </div>
                )}
                  {isYearly && whatsappYearPlan.length > 0 && (
      <div className="mt-16">
        <h2 className="text-2xl lg:text-[35px] font-semibold text-center mb-8">
         WhatsApp Business Plan
        </h2>

        <div className={`grid grid-cols-1 md:grid-cols-3  gap-[18px] ${isYearly && whatsappYearPlan ? "lg:grid-cols-4" : "lg:flex justify-center"}`}>
          {whatsappYearPlan.map((plan) => (
            <MultiplePricingCard
              key={plan.planId}
              proPlan={plan}
              isYearly={true}
              isWhatsapp={true}
              planTier={plan.planTier}
              allFeatures={masterWhatsappFeatures} 
            />
          ))}
        </div>
      </div>
      
    )}
{isYearly && addOns.yearly.length > 0 && (
  <div className="mt-16 xl2:mx-[60px]">
    <h2 className="text-[28.5px] lg:text-[40px] font-semibold text-center text-[#5801B7] mb-8">
      Other Add-ons
    </h2>

    <div className="flex flex-col items-center gap-6">
      {addOns.yearly.map((item,id) => (
         <div key={id} className="max-w-[375px] md:max-w-full w-full py-[21px] px-[22px] md:pl-[22px] md:pr-[40px] rounded-[10px] border border-[#5801b7] bg-white overflow-hidden
    transition-all duration-500 ease-in-out">
      
          <div className="flex justify-between items-center">
             <div>
                  <p className="inline-block rounded-full bg-[#EDE9FE] px-[9px] py-[2.2px] text-[11px] text-[#5B21B6]">
          Popular
        </p>
                <h2 className="text-[22px] font-medium text-[#1f2937] font-bricolage">{item.plan_name}</h2>
              <div className="mt-1 md:mt-2">
                  <span className="text-[#5801B7] text-[20px] font-semibold">₹ {item.amount}/year </span>
                  <span className="hidden md:inline-block text-[13px] text-[#2E2E2E]"> ( Tax Excl. ) Pro-rated · 12 month(s) to plan expiry</span>
                   <span className="inline-block md:hidden text-[13px] text-[#2E2E2E]"> ( Tax Excl. ) </span>
                   <p className="block md:hidden text-[13px] text-[#2E2E2E]">Pro-rated · 12 month(s) to plan expiry</p>
                </div>
             </div>
                <Link href="https://app.shopaver.com/Sign-up" className="h-[46px] w-[140px] hidden md:flex justify-center items-center rounded-xl border border-[#5801b7] text-[18px] font-semibold text-[#5801b7] hover:bg-[#5801b7] hover:text-[#fff] hover:border-none">
       Get Started
        </Link>
          </div>
                 <button className="mt-4 text-[13px] md:text-[15px] font-medium text-[#5801b7]" onClick={() =>
    setOpenIndex(openIndex === id ? null : id)
  }>
          View Details  <i
    className={`fa-solid fa-angle-down transition-transform duration-300 ${
      openIndex === id ? "rotate-180" : ""
    }`}
  />
        </button>
              
  {openIndex === id && (
          <div className={`
    overflow-hidden
    transition-all duration-500 ease-in-out
    ${
      openIndex === id
        ? " opacity-100 mt-7"
        : " opacity-0"
    }
  `}>
             <ul className=" flex flex-col gap-2">
        {getAddOnPoints(item).map((point, idx) => (
          <li key={idx} className="flex items-start gap-2 text-[13px] text-gray-700">
            <span className="text-green-500 font-bold">✓</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
          </div>
          )}
                <Link href="https://app.shopaver.com/Sign-up" target="_blank" className="mt-[15px] h-[46px] w-full flex justify-center items-center md:hidden  rounded-xl border border-[#5801b7] text-[18px] font-semibold text-[#5801b7] hover:bg-[#5801b7] hover:text-[#fff] hover:border-none">
       Get Started
        </Link>
          </div>
      ))}
    </div>
  </div>
)}
              </div>
            ) : (
              <div>
                 <h2 className="mt-10 text-2xl lg:text-[35px] font-semibold text-center mb-8">
         Billing Plan
        </h2>
                {monthlyPlanCount === 1 ? (
                  <div className="">
                    {allMonthPlan &&
                      allMonthPlan.slice(0, 3).map((plan, idx) => (
                        <PricingCard key={idx} proPlan={plan} loading={loading} />
                      ))}
                  </div>
                ) : (
                  <div
                    className={`grid ${
                      monthlyPlanCount === 2
                        ? "grid-cols-1 md:grid-cols-2"
                        : "grid-cols-1 md:grid-cols-3 lg:flex justify-center"
                    } gap-[18px] mt-10`}
                  >
                    {allMonthPlan &&
                      allMonthPlan.map((plan, idx) => (
                        <MultiplePricingCard 
    key={plan.planId}
    proPlan={plan}
    loading={loading}
    isYearly={false}
    planTier={plan.planTier}
    allFeatures={masterFeatures} 
  />
                      ))}
                      
                  </div>
                  
                )}
                
              </div>
            )}
             {!isYearly && whatsappMonthPlan.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl lg:text-[35px] font-semibold text-center mb-8">
              WhatsApp Business Plan
            </h2>

            <div className={`grid grid-cols-1 md:grid-cols-3 gap-[18px] lg:flex justify-center`}>
              {whatsappMonthPlan.map((plan) => (
                <MultiplePricingCard
                  key={plan.planId}
                  proPlan={plan}
                  isYearly={false}
                  planTier={plan.planTier}
                   allFeatures={masterWhatsappFeatures}
                />
              ))}
            </div>
          </div>
        )}



{!isYearly && addOns.monthly.length > 0 && (
  <div className="mt-16 xl2:mx-[60px]">
    <h2 className="text-[28.5px] lg:text-[40px] font-semibold text-center text-[#5801B7] mb-8">
      Other Add-ons
    </h2>
      <div className="flex flex-col gap-6">
      {addOns.monthly.map((item,id) => (
         <div key={id} className="max-w-[375px] md:max-w-full w-full py-[21px] px-[22px] md:pl-[22px] md:pr-[40px] rounded-[10px] border border-[#5801b7] bg-white overflow-hidden
    transition-all duration-500 ease-in-out">
          <div className="flex justify-between items-center">
             <div>
                  <p className="inline-block rounded-full bg-[#EDE9FE] px-[9px] py-[2.2px] text-[11px] text-[#5B21B6]">
          Popular
        </p>
                <h2 className="text-[22px] font-medium text-[#1f2937] font-bricolage">{item.plan_name}</h2>
          <div className="mt-1 md:mt-2">
                  <span className="text-[#5801B7] text-[20px] font-semibold">₹ {item.amount}/year </span>
                  <span className="hidden md:inline-block text-[13px] text-[#2E2E2E]"> ( Tax Excl. ) Pro-rated · 12 month(s) to plan expiry</span>
                   <span className="inline-block md:hidden text-[13px] text-[#2E2E2E]"> ( Tax Excl. ) </span>
                   <p className="block md:hidden text-[13px] text-[#2E2E2E]">Pro-rated · 12 month(s) to plan expiry</p>
                </div>
             </div>
                <Link href="https://app.shopaver.com/Sign-up" className="h-[46px] w-[140px] hidden md:flex justify-center items-center rounded-xl border border-[#5801b7] text-[18px] font-semibold text-[#5801b7] hover:bg-[#5801b7] hover:text-[#fff] hover:border-none">
       Get Started
        </Link>
          </div>
                 <button className="mt-4 text-[13px] md:text-[15px] font-medium text-[#5801b7]" onClick={() =>
    setOpenIndex(openIndex === id ? null : id)
  }>
          View Details  <i
    className={`fa-solid fa-angle-down transition-transform duration-300 ${
      openIndex === id ? "rotate-180" : ""
    }`}
  />
        </button>
              
  {openIndex === id && (
          <div className={`
    overflow-hidden
    transition-all duration-500 ease-in-out
    ${
      openIndex === id
        ? " opacity-100 mt-7"
        : " opacity-0"
    }
  `}>
             <ul className=" flex flex-col gap-2">
        {getAddOnPoints(item).map((point, idx) => (
          <li key={idx} className="flex items-start gap-2 text-[13px] text-gray-700">
            <span className="text-green-500 font-bold">✓</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
          </div>
          )}
              <Link href="https://app.shopaver.com/Sign-up" target="_blank" className="mt-[15px] h-[46px] w-full flex justify-center items-center md:hidden  rounded-xl border border-[#5801b7] text-[18px] font-semibold text-[#5801b7] hover:bg-[#5801b7] hover:text-[#fff] hover:border-none">
       Get Started
        </Link>
          </div>
      ))}
    </div>
  </div>
)}
          </>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
