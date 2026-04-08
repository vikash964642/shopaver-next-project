
"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import PricingCard from "../../../Component/Utils/PricingCard";
import MultiplePricingCard from "../../../Component/Utils/MultiplePricingCard";

const HeroSection = () => {
  const [isYearly, setIsYearly] = useState(true);
  const [monthlyPlanCount, setMonthlyPlanCount] = useState(true);
  const [yearlyPlanCount, setYearlyPlanCount] = useState(true);

  // const [AllPlan, setAllPlan] = useState(null);
  const [allMonthPlan, setallMonthPlan] = useState(null);
  const [allYearPlan, setallYearPlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const handleToggle = (type) => {
    setIsYearly(type === "yearly");
  };

  useEffect(() => {
    axios
      .post("https://billingapi.shopaver.com/api/ReferralCode/get_shopaver_active_subscription")
      .then((response) => {
        
        
        if (response.data.success) {
          const allPlans = response.data.data;
          // setAllPlan(allPlans);

          const monthlyPlans = allPlans.filter(
            (plan) => plan.frequency.toLowerCase() === "month"
          );

          const yearlyPlans = allPlans.filter(
            (plan) => plan.frequency.toLowerCase() === "yearly"
          );
 //  Sort by amount descending
        const sortByAmountDesc = (plans) =>
          plans.sort((a, b) => parseFloat(b.amount) - parseFloat(a.amount));

         const assignTiers = (plans) => {
          const sorted = sortByAmountDesc(plans);
          return sorted.map((plan, idx) => {
            let tier = "basic";
            if (idx === 0) tier = "premium";
            else if (idx === 1) tier = "standard";
            return { ...plan, planTier: tier };
          });
        };
   
        const updatedMonthlyPlans = assignTiers(monthlyPlans);
        const updatedYearlyPlans = assignTiers(yearlyPlans);


        setallMonthPlan(updatedMonthlyPlans);
        setMonthlyPlanCount(updatedMonthlyPlans.length);

        setallYearPlan(updatedYearlyPlans);
        setYearlyPlanCount(updatedYearlyPlans.length);
        
          setError("");
        } else {
          setError("Failed to fetch data");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
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
            SAVE UP TO 10%
          </span>

          <div className="w-[80px] flex justify-center items-center border-[.88px] border-[#CBCBCB] rounded-full p-1">
            <button
              className={`px-4 py-1 text-sm cursor-pointer font-medium rounded-full transition-all ${
                isYearly ? "bg-[#5801B7] text-white" : "text-[#5801B7] hover:bg-white hover:shadow"
              }`}
              onClick={() => handleToggle("yearly")}
            >
              Yearly
            </button>
            {/* <button
              className={`px-4 py-1 text-sm font-medium cursor-pointer rounded-full transition-all ${
                !isYearly ? "bg-[#5801B7] text-white" : "text-[#5801B7] hover:bg-white hover:shadow"
              }`}
              onClick={() => handleToggle("monthly")}
            >
              Monthly
            </button> */}
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
                  <div>
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
              </div>
            ) : (
              <div>
                {monthlyPlanCount === 1 ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
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
                      allMonthPlan.slice(0, 3).map((plan, idx) => (
                        <MultiplePricingCard key={idx} proPlan={plan} isYearly={false} amount={plan.amount} planTier={plan.planTier} />
                      ))}
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
