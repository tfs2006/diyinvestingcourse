import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://diyinvestingcourse.com/sitemap.xml",
    host: "https://diyinvestingcourse.com"
  };
}
