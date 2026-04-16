
import { notFound } from "next/navigation";
import ServicePageClient from "./ServicePageClient"; // Client wrapper

async function getLandingPage(slug) {
  try {
    const res = await fetch(
      `https://shopaverleadapi.shopaver.com/api/SupportMarketingDashBoard/GetLandingPageBySlug?slug=${slug}`,
      
      { method: "POST",
        headers: {
    "Content-Type": "application/json",
  }, 
   body: JSON.stringify({}),
        // next: { revalidate: 60 },
        cache: "no-store",
          
         
      }
    );
    if (!res.ok) return null;
    const result = await res.json();
    return result?.status === "success" ? result.data : null;
  } catch (err) {
    console.error("Landing API Error:", err);
    return null;
  }
}


export async function generateMetadata({ params }) {
  const data = await getLandingPage(params.slug);

  const url = `https://shopaver.com/service/${params.slug}`;

  return {
    title: data?.metaTitle || data?.title,
    description: data?.metaDescription || data?.description,

    // ✅ Canonical URL
    alternates: {
      canonical: url,
    },

    // ✅ Robots Tag
    robots: {
      index: true,
      follow: true,
    },

    // (optional but recommended)
    openGraph: {
      title: data?.metaTitle,
      description: data?.metaDescription,
      url: url,
      type: "website",
    },
  };
}


async function getFaq(slug) {
  try {
    const res = await fetch(
      `https://shopaverleadapi.shopaver.com/api/SupportMarketingDashBoard/GetAllFAQbyslug?slug=${slug}`,
      { method: "POST", 
        // next: { revalidate: 60 } 
         headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
    cache: "no-store", 
      }
    );
    if (!res.ok) return [];
    const result = await res.json();
    return result?.data || [];
  } catch (err) {
    console.error("FAQ API Error:", err);
    return [];
  }

}


async function getSlugList() {
  try {
    const res = await fetch(
      "https://shopaverleadapi.shopaver.com/api/SupportMarketingDashBoard/GetSlugList",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ search: "", page: "1", pageSize: "100" }),
        // next: { revalidate: 60 },
        cache: "no-store"
      }
    );
    if (!res.ok) return [];
    const result = await res.json();
    return result?.data || [];
  } catch (err) {
    console.error("Slug List API Error:", err);
    return [];
  }
}

export default async function ServicePage({ params }) {
  const { slug } = params;
  if (!slug || slug.trim() === "") {
    notFound();
  }
  const [data, faqData, slugList] = await Promise.all([
    getLandingPage(slug),
    getFaq(slug),
    getSlugList(),
  ]);

const validSlugs = slugList
  .map(item => item.slug?.trim())
  .filter(Boolean);


// ❗ ONLY check when slugList actually loaded
const normalizedSlug = slug.trim().toLowerCase();

const isValid = validSlugs.some(
  (s) => s.toLowerCase() === normalizedSlug
);

if (validSlugs.length > 0 && !isValid) {
  notFound();
}
  const allSlugData = slugList.flatMap((item) =>
    (item.slugListData || []).map((innerItem) => ({
      ...innerItem,
      slug: item.slug?.trim(),
    }))
  );

  return (
    <ServicePageClient
      data={data}
      faqData={faqData}
      allSlugData={allSlugData}
      slug={slug}
      slugList={slugList}

    />
  );
}