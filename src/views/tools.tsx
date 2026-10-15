import LinksSection from "@/components/links-section";
import { siteConfig } from "@/config/site.config";
import { toolsConfig } from "@/config/tools.config";
import { getDictionary, languageAlternates, type Locale } from "@/i18n";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export function toolsMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale).tools;
  return {
    title: `${t.title} | ${siteConfig.creator.name}`,
    description: t.description,
    alternates: languageAlternates("/tools", locale),
  };
}

export function ToolsView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).tools;
  return (
    <div className="w-full max-w-5xl mt-6">
      <p className="text-sm text-muted-foreground max-w-2xl">{t.intro}</p>
      {toolsConfig.length === 0 ? (
        <p className="mt-8 rounded-xl border border-dashed p-6 text-sm text-muted-foreground">{t.empty}</p>
      ) : (
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {toolsConfig.map((tool) => (
            <div key={tool.name} className="rounded-xl border p-4 flex flex-col gap-2">
              <div className="flex items-center justify-between gap-2">
                <h2 className="font-heading font-semibold text-lg">{tool.name}</h2>
                <span
                  className={cn(
                    "text-xs px-2 py-0.5 rounded",
                    tool.status === "done" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                  )}
                >
                  {tool.status === "done" ? t.done : t.building}
                </span>
              </div>
              <p className="text-sm text-foreground/85 leading-6 flex-1">{tool.description[locale]}</p>
              <div className="flex flex-wrap gap-2">
                {tool.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded bg-muted text-foreground/85 text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              {tool.links.length > 0 && (
                <div className="pt-1">
                  <LinksSection links={tool.links} locale={locale} />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
