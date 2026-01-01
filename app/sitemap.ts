import type { MetadataRoute } from "next";

const siteUrl = "https://institutozavarise.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/#especialidades`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/#sobre`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
        {
      url: `${siteUrl}/#especialistas`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteUrl}/#localizacao`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
