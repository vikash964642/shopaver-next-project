

import { MetadataRoute } from "next";
import { LANDING_PAGE_API_URL, SITE_URL } from "@/lib/env";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let pages: any[] = [];

  try {
    const res = await fetch(
      `${LANDING_PAGE_API_URL}/landingpage/all`,
      {
        next: { revalidate: 300 },
      }
    );

    const text = await res.text();

    // ✅ safe JSON parse
    pages = text ? JSON.parse(text) : [];
  } catch (error) {
    console.error("Sitemap fetch error:", error);
  }

  const servicePages = pages
    ?.filter((page: any) => page?.isActive)
    ?.map((page: any) => ({
      url: `${SITE_URL}/service/${page?.slug}`,
      lastModified: page?.updatedDate
        ? new Date(page.updatedDate)
        : new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })) || [];

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...servicePages,
  ];
}
