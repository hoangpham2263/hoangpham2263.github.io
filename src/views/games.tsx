import ContentCard from "@/components/content-card";
import ProductsTabs from "@/components/products-tabs";
import { gameCategories, gamesConfig } from "@/config/games.config";
import { siteConfig } from "@/config/site.config";
import { getDictionary, languageAlternates, type Locale } from "@/i18n";
import type { Metadata } from "next";

export function gamesMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale).games;
  return {
    title: `${t.title} | ${siteConfig.creator.name}`,
    description: t.description,
    alternates: languageAlternates("/tools/games", locale),
  };
}

// Same layout as the Tools tab: a heading per group, then plain cards
export function GamesView({ locale }: { locale: Locale }) {
  return (
    <div className="w-full max-w-5xl mt-0 md:mt-6">
      <ProductsTabs active="games" locale={locale} />
      <div className="space-y-10">
        {gameCategories.map((category) => {
          const list = gamesConfig.filter((game) => game.category === category.id);
          if (!list.length) return null;
          return (
            <section key={category.id} className="space-y-3 md:space-y-4">
              <h2 className="text-lg font-semibold font-heading">{category.label[locale]}</h2>
              <div className="space-y-3 md:space-y-6">
                {list.map((game) => (
                  <ContentCard key={game.slug} title={game.name[locale]} description={game.description[locale]} locale={locale} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
