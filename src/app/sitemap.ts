import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/landingpage/all`,
    {
      next: { revalidate: 300 }, // revalidate every 5 mins
    }
  );

  const pages = await res.json();

  const servicePages = pages
    .filter((page: any) => page.isActive)
    .map((page: any) => ({
      url: `https://www.shopaver.com/service/${page.slug}`,
      lastModified: new Date(page.updatedDate),
      changeFrequency: "weekly",
      priority: 0.8,
    }));

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