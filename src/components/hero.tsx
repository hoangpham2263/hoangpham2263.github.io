import { siteConfig } from "@/config/site.config";
import { portfolioConfig } from "@/config/portfolio.config";
import { Socials } from "@/components/socials";
import Link from "next/link";
import ThemeToggler from "@/components/theme/toggler";
import { Rss } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogs, projects } from "#site/content";
import { toolsConfig } from "@/config/tools.config";
import LanguageSwitcher from "@/components/language-switcher";
import { getDictionary, localePath, type Locale } from "@/i18n";

export default function Hero({ locale = "en" }: { locale?: Locale }) {
  const t = getDictionary(locale);
  return (
    <section className="w-full flex flex-col lg:min-h-[calc(100vh-7rem)]">
      <Link href={localePath(locale, "/")} className="hidden md:inline">
        <span className="font-mono text-sm underline">{siteConfig.name}</span>
      </Link>
      <div className="flex justify-between items-center mt-0 md:mt-3">
        <h1 className="head-text-sm">{locale === "vi" ? "Phạm Quốc Hoàng (Will)" : portfolioConfig.name}</h1>
        <div className="hidden md:flex items-center gap-2">
          <LanguageSwitcher />
          <Button size="icon" variant="ghost" className="rounded-full" asChild>
            <Link href="/rss.xml">
              <Rss size={18} />
              <span className="sr-only">rss feed</span>
            </Link>
          </Button>
          <ThemeToggler />
        </div>
      </div>
      <h3 className="mt-1 text-lg">
        {portfolioConfig.tagline} <span className="sr-only">tagline</span>
      </h3>
      <p className="mt-4 mb-4 max-w-2xl text-foreground/85">
        {t.hero.bio}
        <span className="sr-only">bio</span>
      </p>
      <Socials locale={locale} />
      {/* A few numbers counted from the site's own content, so they stay current */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 max-w-2xl mt-5 mb-2 lg:mb-4">
        {[
          { value: projects.filter((p) => p.lang === locale).length, label: locale === "vi" ? "Dự án" : "Projects", href: "/" },
          { value: toolsConfig.filter((x) => (x.kind ?? "app") === "app").length, label: locale === "vi" ? "Công cụ" : "Tools", href: "/tools" },
          { value: toolsConfig.filter((x) => x.kind === "wp" || x.kind === "private").length, label: "WordPress Kit", href: "/wordpress" },
          { value: blogs.filter((b) => b.published && b.lang === locale).length, label: "Blog", href: "/blog" },
        ].map((stat) => (
          <Link
            key={stat.label}
            href={localePath(locale, stat.href)}
            className="rounded-xl border px-3 py-2.5 transition-colors hover:border-primary/40 hover:bg-primary/[0.04]"
          >
            <span className="block text-2xl font-semibold font-heading leading-none">{stat.value}</span>
            <span className="block mt-1 text-xs text-muted-foreground">{stat.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
