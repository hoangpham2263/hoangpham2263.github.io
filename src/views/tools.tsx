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
      <p className="text-sm text-muted-foreground max-w-2xl">{t.intro}</p>
      {toolsConfig.length === 0 ? (
        <p className="mt-8 rounded-xl border border-dashed p-6 text-sm text-muted-foreground">{t.empty}</p>
      ) : (
        <div className="mt-6 space-y-3 md:space-y-6">
          {toolsConfig.map((tool) => (
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
                    tool.status === "done" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                  )}
                >
                  {tool.status === "done" ? t.done : t.building}
                </span>
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}
