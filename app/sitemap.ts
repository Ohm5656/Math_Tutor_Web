import type { MetadataRoute } from "next";

import { courses } from "@/data/courses";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.primemathacademy.co.th";

  const staticRoutes = [
    "",
    "/courses",
    "/about",
    "/contact",
    "/checkout",
    "/dashboard",
    "/policies",
    "/policies/privacy",
    "/policies/refund",
    "/terms"
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8
  }));

  const courseRoutes = courses.map((course) => ({
    url: `${baseUrl}/courses/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9
  }));

  return [...staticRoutes, ...courseRoutes];
}
