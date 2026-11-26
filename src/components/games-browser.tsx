"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { chipClass, chipCountClass, chipRow } from "@/components/ui/chip";
import type { GameCategory, GameCategoryId, LiveGame } from "@/config/games.config";
import type { Locale } from "@/i18n";

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d");

type GamesBrowserProps = {
  games: LiveGame[];
  categories: GameCategory[];
  locale: Locale;
  labels: {
    searchPlaceholder: string;
    all: string;
    emptySearch: string;
    showing: string;
  };
};

export default function GamesBrowser({ games, categories, locale, labels }: GamesBrowserProps) {
  const [active, setActive] = useState<GameCategoryId | null>(null);
  const [query, setQuery] = useState("");

  const counts = useMemo(() => {
    const map = new Map<GameCategoryId, number>();
    for (const g of games) map.set(g.category, (map.get(g.category) ?? 0) + 1);
    return map;
  }, [games]);

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    return games.filter((g) => {
      if (active && g.category !== active) return false;
      if (!q) return true;
      const hay = normalize(`${g.name.vi} ${g.name.en} ${g.description.vi} ${g.description.en}`);
      return hay.includes(q);
    });
  }, [games, active, query]);

  const grouped = useMemo(() => {
    const cats = active ? categories.filter((c) => c.id === active) : categories;
    return cats
      .map((cat) => ({
        category: cat,
        items: filtered.filter((g) => g.category === cat.id),
      }))
      .filter((group) => group.items.length > 0);
  }, [categories, active, filtered]);

  const chip = (label: string, count: number, value: GameCategoryId | null) => (
    <button
      key={value ?? "all"}
      type="button"
      onClick={() => setActive(value)}
      className={chipClass(active === value)}
    >
      {label}
      <span className={chipCountClass(active === value)}>{count}</span>
    </button>
  );

  return (
    <div className="space-y-5">
      <div className="space-y-3">
        <div className="rounded-lg border bg-background shadow-sm">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={labels.searchPlaceholder}
            autoComplete="off"
            className="h-10 text-base md:text-sm rounded-lg border-0 shadow-none focus-visible:ring-0 bg-transparent"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {chip(labels.all, games.length, null)}
          {categories.map((c) => chip(c.label[locale], counts.get(c.id) ?? 0, c.id))}
        </div>
      </div>

      {query.trim() && (
        <p className="text-xs text-muted-foreground">
          {labels.showing.replace("{count}", String(filtered.length)).replace("{total}", String(games.length))}
        </p>
      )}

      {grouped.length === 0 ? (
        <p className="rounded-xl border border-dashed p-6 text-sm text-muted-foreground">{labels.emptySearch}</p>
      ) : (
        <div className="space-y-6">
          {grouped.map(({ category, items }) => (
            <section key={category.id} className="space-y-2.5">
              <h3 className="text-sm font-semibold text-muted-foreground">
                {category.label[locale]} <span className="font-normal">({items.length})</span>
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {items.map((game) => (
                  <div
                    key={game.slug}
                    className="rounded-xl border p-3.5 flex flex-col gap-1.5 transition-[border-color,box-shadow] duration-200 hover:border-primary/30 hover:shadow-[0_8px_24px_-12px_rgba(37,99,235,0.25)]"
                  >
                    <div className="flex items-baseline justify-between gap-2 flex-wrap">
                      <h4 className="font-medium leading-snug text-foreground">{game.name[locale]}</h4>
                      {locale === "vi" && (
                        <span className="text-xs text-muted-foreground">{game.name.en}</span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{game.description[locale]}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
