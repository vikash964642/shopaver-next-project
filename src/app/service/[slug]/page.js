
import { notFound } from "next/navigation";
import ServicePageClient from "./ServicePageClient"; // Client wrapper
import { LEAD_API_BASE_URL, SITE_URL } from "@/lib/env";
import { getDebugLogPath, writeDebugLog } from "@/lib/debugLogger";

async function debugLog(level, message, meta = {}) {
  const printer = console[level] || console.log;
  printer(message, meta);

  try {
    await writeDebugLog(level, message, meta);
  } catch (err) {
    console.error("[service/[slug]] failed to write debug log", err);
  }
}

async function getLandingPage(slug) {
  try {
    // await debugLog("info", "[service/[slug]] getLandingPage request", {
    //   slug,
    //   url: `${LEAD_API_BASE_URL}/GetLandingPageBySlug?slug=${slug}`,
    // });
    const res = await fetch(
      `${LEAD_API_BASE_URL}/GetLandingPageBySlug?slug=${slug}`,
      
      { method: "POST",
        headers: {
    "Content-Type": "application/json",
  }, 
   body: JSON.stringify({}),
        // next: { revalidate: 60 },
        cache: "no-store",
          
         
      }
    );
    if (!res.ok) {
      // await debugLog("warn", "[service/[slug]] getLandingPage non-ok response", {
      //   slug,
      //   status: res.status,
      //   statusText: res.statusText,
      // });
      return null;
    }
    const result = await res.json();
    // await debugLog("info", "[service/[slug]] getLandingPage response", {
    //   slug,
    //   hasData: result?.data,
    //   status: result?.status,
    // });
    return result?.status === "success" ? result.data : null;
  } catch (err) {
    // await debugLog("error", "[service/[slug]] Landing API Error", { slug, err });
    return null;
  }
}


export async function generateMetadata({ params }) {
  const data = await getLandingPage(params.slug);

  const url = `${SITE_URL}/service/${params.slug}`;

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
    // await debugLog("info", "[service/[slug]] getFaq request", {
    //   slug,
    //   url: `${LEAD_API_BASE_URL}/GetAllFAQbyslug?slug=${slug}`,
    // });
    const res = await fetch(
      `${LEAD_API_BASE_URL}/GetAllFAQbyslug?slug=${slug}`,
      { method: "POST", 
        // next: { revalidate: 60 } 
         headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
    cache: "no-store", 
      }
    );
    if (!res.ok) {
      // await debugLog("warn", "[service/[slug]] getFaq non-ok response", {
      //   slug,
      //   status: res.status,
      //   statusText: res.statusText,
      // });
      return [];
    }
    const result = await res.json();
    // await debugLog("info", "[service/[slug]] getFaq response", {
    //   slug,
    //   count: Array.isArray(result?.data) ? result.data.length : 0,
    //   data: result?.data,
    // });
    return result?.data || [];
  } catch (err) {
    // await debugLog("error", "[service/[slug]] FAQ API Error", { slug, err });
    return [];
  }

}


async function getSlugList() {
  try {
    // await debugLog("info", "[service/[slug]] getSlugList request", {
    //   url: `${LEAD_API_BASE_URL}/GetSlugList`,
    // });
    const res = await fetch(
      `${LEAD_API_BASE_URL}/GetSlugList`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ search: "", page: "1", pageSize: "100" }),
        // next: { revalidate: 60 },
        cache: "no-store"
      }
    );
    if (!res.ok) {
      // await debugLog("warn", "[service/[slug]] getSlugList non-ok response", {
      //   status: res.status,
      //   statusText: res.statusText,
      // });
      return [];
    }
    const result = await res.json();
    // await debugLog("info", "[service/[slug]] getSlugList response", {
    //   count: Array.isArray(result?.data) ? result.data.length : 0,
    //   data: result?.data,
    // });
    return result?.data || [];
  } catch (err) {
    // await debugLog("error", "[service/[slug]] Slug List API Error", err);
    return [];
  }
}

export default async function ServicePage({ params }) {
  const { slug } = params;
  // await debugLog("info", "[service/[slug]] render start", {
  //   slug,
  //   siteUrl: SITE_URL,
  //   leadApiBase: LEAD_API_BASE_URL,
  //   debugLogPath: getDebugLogPath(),
  // });
  if (!slug || slug.trim() === "") {
    // await debugLog("warn", "[service/[slug]] missing slug, returning notFound");
    notFound();
  }
  const [data, faqData, slugList] = await Promise.all([
    getLandingPage(slug),
    getFaq(slug),
    getSlugList(),
  ]);

  // await debugLog("info", "[service/[slug]] fetched payload summary", {
  //   slug,
  //   hasLandingData: Boolean(data),
  //   data: data,
  //   faqCount: Array.isArray(faqData) ? faqData.length : 0,
  //   slugCount: Array.isArray(slugList) ? slugList.length : 0,
  // });

  const validSlugs = slugList
    .map((item) => item.slug?.trim())
    .filter(Boolean);


  // ❗ ONLY check when slugList actually loaded
  const normalizedSlug = slug.trim().toLowerCase();

  const isValid = validSlugs.some(
    (s) => s.toLowerCase() === normalizedSlug
  );

  if (validSlugs.length > 0 && !isValid) {
    // await debugLog("warn", "[service/[slug]] slug not found in slug list", {
    //   slug,
    //   normalizedSlug,
    //   sampleValidSlugs: validSlugs.slice(0, 10),
    //   slugCount: validSlugs.length,
    // });
    notFound();
  }

  // if (!data) {
  //   await debugLog("warn", "[service/[slug]] landing page data is empty", { slug });
  // }
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
