import ContentCard from "@/components/content-card";
import { siteConfig } from "@/config/site.config";
import { toolsConfig } from "@/config/tools.config";
import { getDictionary, languageAlternates, type Locale } from "@/i18n";
import { cn } from "@/lib/utils";
import { Code, Download, Github } from "lucide-react";
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

export function wordpressMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale).tools;
  return {
    title: `${t.privateHeading} | ${siteConfig.creator.name}`,
    description: t.privateNote,
    alternates: languageAlternates("/wordpress", locale),
  };
}

export function WordPressKitView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).tools;
  return (
    <div className="w-full max-w-5xl mt-0 md:mt-6">
      {(() => {
            const list = toolsConfig.filter((tool) => tool.kind === "wp" || tool.kind === "private");
            if (!list.length) return null;
            return (
              <section className="space-y-3 md:space-y-4">
                <div>
                  <h2 className="text-lg font-semibold font-heading">{t.privateHeading}</h2>
                </div>
                {([
                  ["theme", locale === "vi" ? "Theme" : "Themes"],
                  ["plugin", locale === "vi" ? "Plugin tự viết" : "My plugins"],
                  ["premium", locale === "vi" ? "Plugin trả phí" : "Premium plugins"],
                  ["other", locale === "vi" ? "Dev & tiện ích" : "Dev & utilities"],
                ] as const).map(([group, label]) => {
                  const groupOf = (n: string, tool: (typeof list)[number]) => (n.startsWith("wp-theme-") ? "theme" : (tool.description.en.includes("licensed copy") && n.startsWith("wp-plugin-")) ? "premium" : n.startsWith("wp-plugin-") ? "plugin" : "other");
                  const items = list.filter((tool) => groupOf(tool.name, tool) === group);
                  if (!items.length) return null;
                  return (
                  <div key={group} className="space-y-2">
                    <h3 className="text-sm font-semibold text-muted-foreground">{label} <span className="font-normal">({items.length})</span></h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {items.map((tool) => (
                    <div key={tool.name} className="relative rounded-xl border p-3 flex flex-col gap-2 transition-[border-color,box-shadow] duration-200 hover:border-primary/30 hover:shadow-[0_8px_24px_-12px_rgba(37,99,235,0.25)]">
                      <div className="flex items-start gap-2">
                        {/* Whole card opens the code viewer (or GitHub); the links below stay clickable on top */}
                        <a
                          href={(tool.links.find((l) => l.name === "Website") ?? tool.links[0])?.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="min-w-0 break-words font-medium hover:text-primary after:absolute after:inset-0 after:rounded-xl"
                        >
                          {tool.name}
                        </a>
                        {tool.kind === "private" && <span className="mt-0.5 shrink-0 whitespace-nowrap text-[11px] px-1.5 py-0.5 rounded border text-muted-foreground">{t.private}</span>}
                      </div>
                      <p className="text-sm text-muted-foreground flex-1">{tool.description[locale]}</p>
                      <div className="flex gap-3 text-xs">
                        {tool.links.map((l) => (
                          <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="relative z-10 inline-flex items-center gap-1 text-primary hover:underline">
                            {l.name === "Download" ? <Download size={13} /> : l.name === "Website" ? <Code size={13} /> : <Github size={13} />}
                            {l.name === "Download" ? (locale === "vi" ? "Tải bản mới nhất" : "Latest release") : l.name === "Website" ? (locale === "vi" ? "Xem code" : "View code") : "GitHub"}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                  </div>
                  );
                })}
              </section>
            );
          })()}
    </div>
  );
}
