import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/careers", "/privacy-policy", "/terms-of-service"];
  const baseUrl = "https://www.shivcoretech.com";

  return routes.map((route) => {
    let priority = 0.5;
    let changeFrequency: "yearly" | "monthly" | "weekly" | "always" | "hourly" | "daily" | "never" = "yearly";

    if (route === "") {
      priority = 1.0;
      changeFrequency = "weekly";
    } else if (route === "/careers") {
      priority = 0.8;
      changeFrequency = "monthly";
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    };
  });
}
