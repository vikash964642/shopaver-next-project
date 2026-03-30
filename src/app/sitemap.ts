

import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let pages: any[] = [];

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/landingpage/all`,
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
      url: `https://www.shopaver.com/service/${page?.slug}`,
      lastModified: page?.updatedDate
        ? new Date(page.updatedDate)
        : new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })) || [];

  return [
    {
      url: "https://www.shopaver.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...servicePages,
  ];
}