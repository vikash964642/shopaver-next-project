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

export default function ServicePageClient({
  data,
  faqData,
  allSlugData,
  slug,
  slugList,
}) {
  const formRef = useRef(null);

  const scrollToForm = () => {
    if (!formRef.current) return;

    const top =
      formRef.current.getBoundingClientRect().top + window.pageYOffset - 150; // offset for sticky header

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };
  if (!data) {
    return (
      <div style={{ padding: "100px", textAlign: "center" }}>
        <h2>Oops 😕</h2>
        <p>Unable to load data. Please try again.</p>
      </div>
    );
  }
  // console.log("Client Component Rendered with data:");
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
