
"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import PricingCard from "../../../Component/Utils/PricingCard";
import MultiplePricingCard from "../../../Component/Utils/MultiplePricingCard";
import { BILLING_API_BASE_URL } from "@/lib/env";

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

  // const [AllPlan, setAllPlan] = useState(null);
  const [allMonthPlan, setallMonthPlan] = useState(null);
  const [allYearPlan, setallYearPlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [whatsappMonthPlan, setWhatsappMonthPlan] = useState([]);
const [whatsappYearPlan, setWhatsappYearPlan] = useState([]);
const [addOns, setAddOns] = useState({
  monthly: [],
  yearly: [],
});
  const handleToggle = (type) => {
    setIsYearly(type === "yearly");
  };


useEffect(() => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiNzAyMTE5NDg5MSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNzc3ODE4MDAxLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo0NDMxMSIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzExIn0.9Vh_f_CVWw5QEqF8NX6yCaz1eUBDeSQ0m4m3nvmRcoo";

  axios
    .post(
      `https://billingapi.xoomsales.com/api/ReferralCode/GetShopaverSubcriptionPlan`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      if (response.data.success) {
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

  return !(isNormal || isWhatsapp) && plan.frequency === "Monthly";
});

const restPlansYearly = allPlans.filter((plan) => {
  const isNormal =
    plan.planType === "plan" &&
    NORMAL_PLANS.includes(plan.plan_name);

  const isWhatsapp =
    plan.planType === "module" &&
    WHATSAPP_PLANS.includes(plan.plan_name);

  return !(isNormal || isWhatsapp) && plan.frequency === "Yearly";
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
  return (
    <section className="max-w-screen-lg mx-auto">
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
                {yearlyPlanCount === 1 ? (
                  <div className="tyu">
                    {allYearPlan &&
                      allYearPlan.slice(0, 3).map((plan, idx) => (
                        <PricingCard key={idx} proPlan={plan} loading={loading} />
                      ))}
                  </div>
                ) : (
                  <div className={`grid grid-cols-1 md:grid-cols-${yearlyPlanCount} gap-8 mt-10`}>
                    {allYearPlan &&
                      allYearPlan.slice(0, 3).map((plan, idx) => (
                        <MultiplePricingCard key={idx} proPlan={plan} isYearly={true} amount={plan.amount}  planTier={plan.planTier}/>
                      ))}
                  </div>
                )}
                  {isYearly && whatsappYearPlan.length > 0 && (
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">
         WhatsApp Business
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whatsappYearPlan.map((plan) => (
            <MultiplePricingCard
              key={plan.planId}
              proPlan={plan}
              isYearly={true}
              planTier={plan.planTier}
            />
          ))}
        </div>
      </div>
      
    )}
{isYearly && addOns.yearly.length > 0 && (
  <div className="mt-16">
    <h2 className="text-2xl font-semibold text-center mb-8">
      Other Add-ons
    </h2>

    <div className="flex flex-col gap-6">
      {addOns.yearly.map((item,id) => (
         <div key={id} className="px-[24px] py-[20px] rounded-[10px] bg-[#fff] border border-[#e5e7eb]">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-[10px]">
              <h2 className="text-[18px] font-semibold text-[#1f2937]">{item.plan_name}</h2>
              <p className="text-[11px] font-bold px-[8px] py-[3px] rounded-[12px] text-[#854d0e] bg-[#fde047]">Add-On</p>
              <p className="text-[10px] font-semibold px-[8px] py-[2px] rounded-[10px] text-[#5b21b6] bg-[#ede9fe]">Requires WhatsApp Business</p>
              </div>
              <div>
                <button className="bg-[#e5e7eb] text-[#6b7280] border-none py-[10px] px-[18px] rounded-[6px] text-[13px] font-semibold cursor-not-allowed">Requires WA Business</button>
                <div className="mt-2">
                  <span className="text-[#10b981] text-[16px] font-bold">₹ {item.amount}/year </span>
                  <span className="text-[11px] text-[#6b7280]">( Tax Excl. )</span>
                </div>
                <p className="text-[#059669] text-[10px] mt-[2px]">Pro-rated · 12 month(s) to plan expiry </p>
                </div>
          </div>
          <div>
             <ul className="mt-4 flex flex-col gap-2">
        {getAddOnPoints(item).map((point, idx) => (
          <li key={idx} className="flex items-start gap-2 text-[13px] text-gray-700">
            <span className="text-green-500 font-bold">✓</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
          </div>
          </div>
      ))}
    </div>
  </div>
)}
              </div>
            ) : (
              <div>
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
                        : "grid-cols-1 md:grid-cols-3"
                    } gap-8 mt-10`}
                  >
                    {allMonthPlan &&
                      allMonthPlan.map((plan, idx) => (
                        <MultiplePricingCard
    key={plan.planId}
    proPlan={plan}
    loading={loading}
    isYearly={false}
    planTier={plan.planTier}
  />
                      ))}
                      
                  </div>
                  
                )}
                
              </div>
            )}
             {!isYearly && whatsappMonthPlan.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-center mb-8">
              WhatsApp Business
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whatsappMonthPlan.map((plan) => (
                <MultiplePricingCard
                  key={plan.planId}
                  proPlan={plan}
                  isYearly={false}
                  planTier={plan.planTier}
                />
              ))}
            </div>
          </div>
        )}



{!isYearly && addOns.monthly.length > 0 && (
  <div className="mt-16">
    <h2 className="text-2xl font-semibold text-center mb-8">
      Other Add-ons
    </h2>

    <div className="flex flex-col gap-6">
      {addOns.monthly.map((item,id) => (
         <div key={id} className="px-[24px] py-[20px] rounded-[10px] bg-[#fff] border border-[#e5e7eb]">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-[10px]">
              <h2 className="text-[18px] font-semibold text-[#1f2937]">{item.plan_name}</h2>
              <p className="text-[11px] font-bold px-[8px] py-[3px] rounded-[12px] text-[#854d0e] bg-[#fde047]">Add-On</p>
              <p className="text-[10px] font-semibold px-[8px] py-[2px] rounded-[10px] text-[#5b21b6] bg-[#ede9fe]">Requires WhatsApp Business</p>
              </div>
              <div>
                <button className="bg-[#e5e7eb] text-[#6b7280] border-none py-[10px] px-[18px] rounded-[6px] text-[13px] font-semibold cursor-not-allowed">Requires WA Business</button>
                <div className="mt-2">
                  <span className="text-[#10b981] text-[16px] font-bold">₹ {item.amount}/month </span>
                  <span className="text-[11px] text-[#6b7280]">( Tax Excl. )</span>
                </div>
                <p className="text-[#059669] text-[10px] mt-[2px]">Pro-rated · 12 month(s) to plan expiry </p>
                </div>
          </div>
          <div>
             <ul className="mt-4 flex flex-col gap-2">
        {getAddOnPoints(item).map((point, idx) => (
          <li key={idx} className="flex items-start gap-2 text-[13px] text-gray-700">
            <span className="text-green-500 font-bold">✓</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
          </div>
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
