import type { MetadataRoute } from "next";
import { allLessons } from "./course-data";

const siteUrl = "https://diyinvestingcourse.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: siteUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/store`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${siteUrl}/terms`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/disclaimer`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/cookie-policy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    ...allLessons.map((lesson) => ({
      url: `${siteUrl}/lessons/${lesson.id}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.8
    }))
  ];
}
