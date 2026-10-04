import type { MetadataRoute } from "next";
import { allLessons } from "./course-data";

const siteUrl = "https://diyinvestingcourse.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: siteUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    ...allLessons.map((lesson) => ({
      url: `${siteUrl}/lessons/${lesson.id}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.8
    }))
  ];
}
