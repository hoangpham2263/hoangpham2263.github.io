import GamesBrowser from "@/components/games-browser";
import { gameCategories, gameCoreStack, gamesConfig } from "@/config/games.config";
import { siteConfig } from "@/config/site.config";
import { getDictionary, languageAlternates, type Locale } from "@/i18n";
import type { Metadata } from "next";

export function gamesMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale).games;
  return {
    title: `${t.title} | ${siteConfig.creator.name}`,
    description: t.description,
    alternates: languageAlternates("/games", locale),
  };
}

export function GamesView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).games;

  return (
    <div className="w-full max-w-5xl mt-0 md:mt-6 space-y-6">
      <section className="rounded-xl border p-4 sm:p-5 space-y-3 bg-muted/20">
        <div className="flex items-center gap-2 flex-wrap">
          <h2 className="text-lg font-semibold font-heading">{t.heading}</h2>
          <span className="text-xs px-2 py-0.5 rounded font-medium bg-primary/10 text-primary">
            {t.personalBadge}
          </span>
          <span className="text-xs px-2 py-0.5 rounded border text-muted-foreground">
            {gamesConfig.length} {t.gamesUnit}
          </span>
        </div>
        <p className="text-sm text-foreground/85 leading-6">{t.intro}</p>
        <div className="flex flex-wrap gap-2">
          {gameCoreStack.map((tech) => (
            <span key={tech} className="px-2 py-1 rounded-md bg-primary/[0.08] text-primary/90 text-xs">
              {tech}
            </span>
          ))}
        </div>
        <p className="text-xs text-muted-foreground pt-1">{t.compliance}</p>
      </section>

      <GamesBrowser
        games={gamesConfig}
        categories={gameCategories}
        locale={locale}
        labels={{
          searchPlaceholder: t.searchPlaceholder,
          all: t.all,
          emptySearch: t.emptySearch,
          showing: t.showing,
        }}
      />
    </div>
  );
}
