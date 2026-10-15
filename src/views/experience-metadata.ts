import { getExperiences } from "@/config/localized";
import { siteConfig } from "@/config/site.config";
import { getDictionary, languageAlternates, localePath, ogLocale, type Locale } from "@/i18n";
import type { Metadata } from "next";

export function experienceMetadata(locale: Locale = "en"): Metadata {
  const t = getDictionary(locale).experience;
  const experiences = getExperiences(locale);
  const description = `${t.intro.replace("{name}", siteConfig.creator.name)}
    ${experiences.map((exp) => `${exp.title} ${t.at} ${exp.company.name}.`).join("\n")}
    `;
  const keywords = [...siteConfig.keywords, t.title, ...experiences.map((exp) => exp.company.name)];
  const title = `${t.title} | ${siteConfig.creator.name}`;
  const og = `${siteConfig.siteUrl}/experience-og.png`;

  return {
    title,
    description,
    keywords,
    alternates: languageAlternates("/experience", locale),
    openGraph: {
      title,
      description,
      url: `${siteConfig.siteUrl}${localePath(locale, "/experience")}`,
      siteName: siteConfig.name,
      images: [{ url: og, width: 1800, height: 1000, alt: title }],
      type: "website",
      locale: ogLocale(locale),
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.creator.url,
      title,
      description,
      images: { url: og, width: 1800, height: 1000, alt: title },
    },
  };
}
