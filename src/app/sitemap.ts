import { blogs, projects } from "#site/content";
import { siteConfig } from "@/config/site.config";
import { locales, localePath } from "@/i18n";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// /projects is left out: its canonical is the home page
const staticPaths = ["/", "/experience", "/services", "/blog", "/tools", "/wordpress", "/contact", "/cv"];

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = siteConfig.siteUrl.replace(/\/$/, "");
  const projectSlugs = [...new Set(projects.map((project) => project.slugAsParams))];

  return locales.flatMap((locale) => {
    const url = (path: string) => `${origin}${localePath(locale, path)}`;
    return [
      ...staticPaths.map((path) => ({ url: url(path) })),
      ...projectSlugs.map((slug) => ({ url: url(`/projects/${slug}`) })),
      ...blogs
        .filter((post) => post.published && post.lang === locale)
        .map((post) => ({ url: url(`/blog/${post.slugAsParams}`), lastModified: post.date })),
    ];
  });
}
