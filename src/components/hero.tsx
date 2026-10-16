import { siteConfig } from "@/config/site.config";
import { portfolioConfig } from "@/config/portfolio.config";
import { Socials } from "@/components/socials";
import Link from "next/link";
import ThemeToggler from "@/components/theme/toggler";
import { Rss } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getSkills } from "@/config/localized";
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
      <div className="flex flex-col text-sm space-y-3 rounded max-w-2xl text-foreground/85 mt-4 mb-2 lg:mb-4">
        {getSkills(locale).map((skill) => (
          <div key={skill.category} className="grid gap-1.5 sm:grid-cols-[150px_1fr] sm:items-start">
            <span className="font-semibold text-primary/90 sm:pt-1">{skill.category}</span>
            <div className="flex flex-wrap gap-1.5">
              {skill.technologies.map((tech) => (
                <span key={tech} className="px-2 py-1 rounded-md bg-primary/[0.08] text-primary/90 text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
