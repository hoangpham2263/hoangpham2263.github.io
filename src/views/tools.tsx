import ContentCard from "@/components/content-card";
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
    <div className="w-full max-w-5xl mt-0 md:mt-6">
      {toolsConfig.length === 0 ? (
        <p className="rounded-xl border border-dashed p-6 text-sm text-muted-foreground">{t.empty}</p>
      ) : (
        <div className="space-y-10">
          {(["app", "guide"] as const).map((kind) => {
            const list = toolsConfig.filter((tool) => (tool.kind ?? "app") === kind);
            if (!list.length) return null;
            return (
              <section key={kind} className="space-y-3 md:space-y-4">
                <div>
                  <h2 className="text-lg font-semibold font-heading">{kind === "app" ? t.appsHeading : t.guidesHeading}</h2>
                  <p className="text-sm text-muted-foreground">{kind === "app" ? t.appsNote : t.guidesNote}</p>
                </div>
                <div className="space-y-3 md:space-y-6">
                  {list.map((tool) => (
                    <ContentCard
                      key={tool.name}
                      title={tool.name}
                      description={tool.description[locale]}
                      href={tool.links.find((l) => l.name.toLowerCase() === "website")?.url ?? tool.links[0]?.url}
                      image={tool.image ? { src: tool.image, width: 1200, height: 675 } : undefined}
                      tags={tool.tags}
                      links={tool.links}
                      locale={locale}
                      badge={
                        <span
                          className={cn(
                            "text-xs px-2 py-0.5 rounded font-medium",
                            kind === "guide"
                              ? "border border-cyan-600/40 text-cyan-700 dark:text-cyan-300 bg-cyan-500/10"
                              : tool.status === "done"
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary text-secondary-foreground"
                          )}
                        >
                          {kind === "guide" ? t.guide : tool.status === "done" ? t.done : t.building}
                        </span>
                      }
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}
