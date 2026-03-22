import { notFound } from "next/navigation";

import HeroSection from "../hero-section/HeroSection";
import HomeSlider from "../home-slider/HomeSlider";
import WhyChooseSection from "../why-choose-section/why-choose-section";
import RetailBusinessCard from "../business-section/RetailBusinessCard";
import SecuirityReliability from "../security-section/SecuirityReliability";
import RetailHardware from "../hardware-section/RetailHardware";
import CommonProblem from "../common-problem-section/CommonProblem";
import SuccessGuarantee from "../Success-Guanrantee/SuccessGuarantee";
import BusinessSolutionSlider from "../business-solution/BusinessSolutionSlider";
import RetailBusinessSlider from "../retail-business/RetailBusinessSlider";
import FAQ from "../faq/FAQ";
import Form from "../form/Form";
import HomeCardSlider from "../card-slider/HomeCardSlider";
import SubscriptionPlan from "../subscription-plan/SubscriptionPlan";
import FreeTrialBanner from "../free-trial-banner/FreeTrialBanner";

// ===============================
// ✅ LANDING PAGE API
// ===============================
async function getLandingPage(slug) {
  try {
    const res = await fetch(
      `https://shopaver-marketing.xoomsales.com/api/SupportMarketingDashBoard/GetLandingPageBySlug?slug=${slug}`,
      {
        method: "POST",
        next: { revalidate: 60 },
      },
    );

    if (!res.ok) return null;

    const result = await res.json();

    return result?.status === "success" ? result.data : null;
  } catch (err) {
    console.error("Landing API Error:", err);
    return null;
  }
}

// ===============================
// ✅ FAQ API
// ===============================
async function getFaq(slug) {
  try {
    const res = await fetch(
      `https://shopaver-marketing.xoomsales.com/api/SupportMarketingDashBoard/GetAllFAQbyslug?slug=${slug}`,
      {
        method: "POST",
        next: { revalidate: 60 },
      },
    );

    if (!res.ok) return [];

    const result = await res.json();

    return result?.data || [];
  } catch (err) {
    console.error("FAQ API Error:", err);
    return [];
  }
}

// ===============================
// ✅ Slug list
// ===============================
async function getSlugList() {
  try {
    const res = await fetch(
      "https://shopaver-marketing.xoomsales.com/api/SupportMarketingDashBoard/GetSlugList",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          search: "",
          page: "1",
          pageSize: "100",
        }),
        next: { revalidate: 60 },
      },
    );

    if (!res.ok) return [];

    const result = await res.json();

    return result?.data || [];
  } catch (err) {
    console.error("Slug List API Error:", err);
    return [];
  }
}

// ===============================
// ✅ PAGE COMPONENT
// ===============================
export default async function ServicePage({ params }) {
  const { slug } = params;

  // 🔥 Parallel API calls (faster)
  const [data, faqData, slugList] = await Promise.all([
    getLandingPage(slug),
    getFaq(slug),
    getSlugList(),
  ]);

  // ❌ Agar landing data nahi mila
  if (!data) {
    notFound();
  }

const allSlugData = slugList.flatMap(
  (item) => item.slugListData || []
);

  return (
    <div>
      {/* 🔵 Hero Section */}
      {data?.bannerSection && <HeroSection data={data.bannerSection} />}

      <HomeSlider />

      {/* 🔵 All In One */}
      {data?.allInOneSection && (
        <BusinessSolutionSlider data={data.allInOneSection} />
      )}

      {/* 🔵 Why Choose */}
      {data?.chooseSection && <WhyChooseSection data={data.chooseSection} />}

      {/* 🔵 Merchant Section */}
      {Array.isArray(allSlugData) && allSlugData.length > 0 && (
        <RetailBusinessCard onePlatform={allSlugData} />
      )}

      <HomeCardSlider />
      <SecuirityReliability />
      <RetailHardware />
      <CommonProblem />
      <RetailBusinessSlider />
      <SubscriptionPlan />
      <SuccessGuarantee />

      {/* 🔵 FAQ */}
      {faqData?.length > 0 && <FAQ faqData={faqData} />}

      <FreeTrialBanner />

      {/* 🔵 Form */}
      <Form slug={slug} />
    </div>
  );
}
