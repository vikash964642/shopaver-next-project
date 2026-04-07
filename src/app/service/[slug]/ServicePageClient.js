"use client";

import { useRef } from "react";
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

export default function ServicePageClient({ data, faqData, allSlugData, slug }) {
  const formRef = useRef(null);

const scrollToForm = () => {
  if (!formRef.current) return;

  const top =
    formRef.current.getBoundingClientRect().top +
    window.pageYOffset -
    150; // offset for sticky header

  window.scrollTo({
    top,
    behavior: "smooth",
  });

};
  return (
    <div>
      {data?.bannerSection && (
        <HeroSection data={data.bannerSection} onEnquiryClick={scrollToForm} />
      )}

      <HomeSlider />

      {data?.allInOneSection && (
        <BusinessSolutionSlider data={data.allInOneSection} />
      )}

      {data?.chooseSection && <WhyChooseSection data={data.chooseSection} />}

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

      {faqData?.length > 0 && <FAQ faqData={faqData} />}

      <FreeTrialBanner />

      <div ref={formRef}>
        <Form slug={slug} />
      </div>
    </div>
  );
}
















// import { notFound } from "next/navigation";

// import HeroSection from "../hero-section/HeroSection";
// import HomeSlider from "../home-slider/HomeSlider";
// import WhyChooseSection from "../why-choose-section/why-choose-section";
// import RetailBusinessCard from "../business-section/RetailBusinessCard";
// import SecuirityReliability from "../security-section/SecuirityReliability";
// import RetailHardware from "../hardware-section/RetailHardware";
// import CommonProblem from "../common-problem-section/CommonProblem";
// import SuccessGuarantee from "../Success-Guanrantee/SuccessGuarantee";
// import BusinessSolutionSlider from "../business-solution/BusinessSolutionSlider";
// import RetailBusinessSlider from "../retail-business/RetailBusinessSlider";
// import FAQ from "../faq/FAQ";
// import Form from "../form/Form";
// import HomeCardSlider from "../card-slider/HomeCardSlider";
// import SubscriptionPlan from "../subscription-plan/SubscriptionPlan";
// import FreeTrialBanner from "../free-trial-banner/FreeTrialBanner";
// import { useRef } from "react";

// async function getLandingPage(slug) {
//   try {
//     const res = await fetch(
//       `https://shopaverleadapi.shopaver.com/api/SupportMarketingDashBoard/GetLandingPageBySlug?slug=${slug}`,
//       {
//         method: "POST",
//         next: { revalidate: 60 },
//       },
//     );

//     if (!res.ok) return null;

//     const result = await res.json();

//     return result?.status === "success" ? result.data : null;
//   } catch (err) {
//     console.error("Landing API Error:", err);
//     return null;
//   }
// }

// // ===============================
// // ✅ FAQ API
// // ===============================
// async function getFaq(slug) {
//   try {
//     const res = await fetch(
//       `https://shopaverleadapi.shopaver.com/api/SupportMarketingDashBoard/GetAllFAQbyslug?slug=${slug}`,
//       {
//         method: "POST",
//         next: { revalidate: 60 },
//       },
//     );

//     if (!res.ok) return [];

//     const result = await res.json();

//     return result?.data || [];
//   } catch (err) {
//     console.error("FAQ API Error:", err);
//     return [];
//   }
// }

// // ===============================
// // ✅ Slug list
// // ===============================
// async function getSlugList() {
//   try {
//     const res = await fetch(
//       "https://shopaverleadapi.shopaver.com/api/SupportMarketingDashBoard/GetSlugList",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           search: "",
//           page: "1",
//           pageSize: "100",
//         }),
//         next: { revalidate: 60 },
//       },
//     );

//     if (!res.ok) return [];

//     const result = await res.json();

//     return result?.data || [];
//   } catch (err) {
//     console.error("Slug List API Error:", err);
//     return [];
//   }
// }

// // ===============================
// // ✅ PAGE COMPONENT
// // ===============================
// export default async function ServicePage({ params }) {
//   const { slug } = params;
//  const formRef = useRef<HTMLDivElement>(null);

//    const scrollToForm = () => {
//     if (formRef.current) {
//       formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
//       window.scrollBy(0, -80); // optional: adjust for sticky header
//     }
//   };
//   const [data, faqData, slugList] = await Promise.all([
//     getLandingPage(slug),
//     getFaq(slug),
//     getSlugList(),
//   ]);

//   // ❌ Agar landing data nahi mila
//   if (!data) {
//     notFound();
//   }

//   // const allSlugData = slugList.flatMap(
//   //   (item) => item.slugListData || []
//   // );
//   // console.log("allSlugData",slugList);
//   const allSlugData = slugList.flatMap((item) =>
//     (item.slugListData || []).map((innerItem) => ({
//       ...innerItem,
//       slug: item.slug?.trim(), // 👈 attach slug here
//     })),
//   );
//   return (
//     <div>
//       {/* 🔵 Hero Section */}
//       {data?.bannerSection && <HeroSection data={data.bannerSection} onEnquiryClick={scrollToForm}/>}

//       <HomeSlider />

//       {/* 🔵 All In One */}
//       {data?.allInOneSection && (
//         <BusinessSolutionSlider data={data.allInOneSection} />
//       )}

//       {/* 🔵 Why Choose */}
//       {data?.chooseSection && <WhyChooseSection data={data.chooseSection} />}

//       {/* 🔵 Merchant Section */}
//       {Array.isArray(allSlugData) && allSlugData.length > 0 && (
//         <RetailBusinessCard onePlatform={allSlugData} />
//       )}

//       <HomeCardSlider />
//       <SecuirityReliability />
//       <RetailHardware />
//       <CommonProblem />
//       <RetailBusinessSlider />
//       <SubscriptionPlan />
//       <SuccessGuarantee />

//       {/* 🔵 FAQ */}
//       {faqData?.length > 0 && <FAQ faqData={faqData} />}

//       <FreeTrialBanner />

//       {/* 🔵 Form */}
//       <Form ref={formRef} slug={slug} />
//     </div>
//   );
// }