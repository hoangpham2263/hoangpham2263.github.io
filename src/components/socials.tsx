import { Button } from "@/components/ui/button";
import { IconMap } from "@/components/icon-map";
import { portfolioConfig } from "@/config/portfolio.config";
import Link from "next/link";
import { getDictionary, localePath, type Locale } from "@/i18n";

export const Socials = ({ locale = "en" }: { locale?: Locale }) => {
  const t = getDictionary(locale);
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button
        className="active:scale-[0.97] transition-all"
        asChild
      >
        <Link href={localePath(locale, "/contact")}>{t.hero.contact}</Link>
      </Button>
      <Button
        variant="outline"
        className="active:scale-[0.97] hover:border-primary/40 hover:bg-primary/[0.06] hover:text-primary shadow-none transition-all duration-100"
        asChild
      >
        <Link href={localePath(locale, portfolioConfig.resume)}>
          {t.hero.resume}
        </Link>
      </Button>
      {Object.keys(portfolioConfig.links).map((key: string) => {
        const link =
          portfolioConfig.links[key as keyof typeof portfolioConfig.links] ?? "";
        return (
          <Button
            key={key}
            size="icon"
            variant="outline"
            className="active:scale-[0.97] hover:border-primary/40 hover:bg-primary/[0.06] hover:text-primary shadow-none transition-all duration-100"
            asChild
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              {IconMap[key as keyof typeof IconMap]}
              <span className="sr-only">{`${key} - ${link}`}</span>
            </a>
          </Button>
        );
      })}
    </div>
  );
};
