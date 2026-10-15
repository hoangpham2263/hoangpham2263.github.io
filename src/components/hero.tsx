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
      <Link href={localePath(locale, "/")} className="w-fit" aria-label={siteConfig.name}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/hp-icon.svg" alt={siteConfig.name} width={44} height={44} className="block" />
      </Link>
      <div className="flex justify-between items-center mt-3">
        <h1 className="head-text-sm">{locale === "vi" ? "Phạm Quốc Hoàng (Will)" : portfolioConfig.name}</h1>
        <div className="flex items-center gap-2">
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
      <h3 className="mt-2 text-lg">
        {portfolioConfig.tagline} <span className="sr-only">tagline</span>
      </h3>
      <p className="my-5 max-w-2xl text-foreground/85">
        {t.hero.bio}
        <span className="sr-only">bio</span>
      </p>
      <Socials locale={locale} />
      <div className="flex flex-col text-sm space-y-2 rounded max-w-2xl text-foreground/85 mt-6 mb-2 lg:my-6">
        {getSkills(locale).map((skill) => (
          <p key={skill.category}>
            <span className="font-semibold text-primary/90">{skill.category}:</span> {skill.technologies.join(", ")}
          </p>
        ))}
      </div>
    </section>
  );
}
