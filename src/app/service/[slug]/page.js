// // "use client";
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
// import Head from "next/head";
// async function getLandingPage(slug) {
//   if (!slug) return null;
//   try {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/SupportMarketingDashBoard/GetLandingPageBySlug?slug=${slug}`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           slug: slug,
//         }),
//         next: { revalidate: 60 }, // optional caching
//       },
//     );

//     console.log("Status:", res.status);

//     if (!res.ok) {
//       console.error("API returned non-OK:", res.status);
//       return null;
//     }

//     const result = await res.json();
//     return result;
//   } catch (err) {
//     console.error("Error fetching landing page:", err);
//     return null;
//   }
// }

// export default async function ServicePage({ params }) {
//   const { slug } = await params; 

//   const data = await getLandingPage(slug);
//   if (!data) {
//     notFound();
//   }

//   return (
//     <>
//       {/* <Head>
//         <title>{data.data.meta?.metaTitle || "Shopaver"}</title>
//         <meta
//           name="description"
//           content={meta?.metaDescription || "Shopaver default description"}
//         />
//         <link rel="canonical" href={`https://shopaver.com/${slug}`} />
//       </Head> */}
//       <div>
//         <HeroSection
//           data={data.data.bannerSection}
//         />

//         <HomeSlider />
//         <WhyChooseSection data={data.data.chooseSection} />
//         <RetailBusinessCard onePlatform={data.data.merchantSection} />
//         <SecuirityReliability />
//         <BusinessSolutionSlider data={data.data.allInOneSection} />
//         <RetailHardware />
//         <CommonProblem />
//         <RetailBusinessSlider />
//         <SuccessGuarantee />
//       </div>
//     </>
//   );
// }





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


// // ===============================
// // ✅ API CALL FUNCTION
// // ===============================
// async function getLandingPage(slug) {
//   if (!slug) return null;

//   try {
//       console.log("API call start") 
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/SupportMarketingDashBoard/GetLandingPageBySlug?slug=${slug}`,
//       {
//         method: "POST", // IMPORTANT: POST only
//         next: { revalidate: 60 }, // optional caching
//       }
//     );

//     console.log("API Status:", res.status);

//     if (!res.ok) {
//       console.error("API returned non-OK:", res.status);
//       return null;
//     }

//     const result = await res.json();
//     return result;

//   } catch (error) {
//     console.error("Fetch error:", error);
//     return null;
//   }
// }


// // ===============================
// // ✅ PAGE COMPONENT
// // ===============================
// export default async function ServicePage({ params }) {

//   // ❌ DO NOT use await here
//   const { slug } = params;

//   console.log("Slug:", slug);

//   const response = await getLandingPage(slug);

//   // If API failed or no data → show 404 page
//   if (!response || !response.data) {
//     notFound();
//   }

//   const data = response.data;

//   return (
//     <div>

//       {data.bannerSection && (
//         <HeroSection data={data.bannerSection} />
//       )}

//       <HomeSlider />

//       {data.chooseSection && (
//         <WhyChooseSection data={data.chooseSection} />
//       )}

//       {data.merchantSection && (
//         <RetailBusinessCard onePlatform={data.merchantSection} />
//       )}

//       <SecuirityReliability />

//       {data.allInOneSection && (
//         <BusinessSolutionSlider data={data.allInOneSection} />
//       )}

//       <RetailHardware />

//       <CommonProblem />

//       <RetailBusinessSlider />

//       <SuccessGuarantee />

//     </div>
//   );
// }


// "use client";

// import { useEffect, useState } from "react";

// export default function Page({ params }) {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch(
//       `https://shopaver-marketing.xoomsales.com/api/SupportMarketingDashBoard/GetLandingPageBySlug?slug=${params.slug}`,
//       {
//         method: "POST",
//       }
//     )
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Error: " + res.status);
//         }
//         return res.json();
//       })
//       .then((result) => setData(result))
//       .catch((err) => setError(err.message));
//   }, [params.slug]);

//   if (error) return <div>{error}</div>;
//   if (!data) return <div>Loading...</div>;

//   return (
//     <div>
//       <h1>Slug: {params.slug}</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// }

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

// ✅ API Function
async function getLandingPage(slug) {
  try {
    const res = await fetch(
      `https://shopaver-marketing.xoomsales.com/api/SupportMarketingDashBoard/GetLandingPageBySlug?slug=${slug}`,
      {
        method: "POST",
        next: { revalidate: 60 }, // better than no-store (ISR)
      }
    );

    if (!res.ok) return null;

    const result = await res.json();

    if (result.status !== "success") return null;

    return result.data; // 👈 directly data return kar rahe hain
  } catch (err) {
    console.error("Server Fetch Error:", err);
    return null;
  }
}

async function getFaq(slug) {
  const res = await fetch(
    `https://shopaver-marketing.xoomsales.com/api/SupportMarketingDashBoard/GetAllFAQbyslug?slug=${slug}`,
    
    {
      method: "POST",
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) return null;

  const result = await res.json();
    console.log("FAQ DATA:", result.data);
    console.log("API STATUS:", res.status);
  return result.data;

}
// ✅ Page Component
export default async function ServicePage({ params }) {
  const { slug } = params;

  console.log("SERVER HIT:", slug);

  const data = await getLandingPage(slug);
  const faqData = await getFaq(slug);
  console.log("FAQ DATA FROM PAGE:", faqData);

  if (!data) {
    notFound(); // production me ye hi use karo
  }

  return (
    <div>

      {/* 🔵 Hero Section */}
      <HeroSection data={data.bannerSection} />

      <HomeSlider />
   <BusinessSolutionSlider data={data.allInOneSection} />
      {/* 🔵 Why Choose */}
      <WhyChooseSection data={data.chooseSection} />

      {/* 🔵 Merchant Section */}
      <RetailBusinessCard onePlatform={data.merchantSection} />
<HomeCardSlider />
      <SecuirityReliability />

      {/* 🔵 All In One Slider */}
   

      <RetailHardware />

      <CommonProblem />

      <RetailBusinessSlider />
<SubscriptionPlan />
      <SuccessGuarantee />
      <FAQ faqData={faqData}/>
      <FreeTrialBanner />
      <Form slug={slug}/>

    </div>
  );
}