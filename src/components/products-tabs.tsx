import Link from "next/link";
import { cn } from "@/lib/utils";
import { gamesConfig } from "@/config/games.config";
import { toolsConfig } from "@/config/tools.config";
import { localePath, type Locale } from "@/i18n";

export type ProductTab = "tools" | "wordpress" | "games";

// Sub-tabs of the Products page: one home for everything people can use or download
export default function ProductsTabs({ active, locale }: { active: ProductTab; locale: Locale }) {
  const tabs: { key: ProductTab; label: string; href: string; count: number }[] = [
    { key: "tools", label: locale === "vi" ? "Công cụ" : "Tools", href: "/tools", count: toolsConfig.filter((x) => (x.kind ?? "app") === "app" || x.kind === "guide").length },
    { key: "wordpress", label: "WordPress Kit", href: "/tools/wordpress", count: toolsConfig.filter((x) => x.kind === "wp" || x.kind === "private").length },
    { key: "games", label: "TikTok Games", href: "/tools/games", count: gamesConfig.length },
  ];
  return (
    // Underlined tabs: a level below the main menu, and unlike the filter chips inside each page
    <nav aria-label={locale === "vi" ? "Sản phẩm" : "Products"} className="mb-5 flex border-b">
      {tabs.map((tab) => (
        <Link
          key={tab.key}
          href={localePath(locale, tab.href)}
          aria-current={tab.key === active ? "page" : undefined}
          className={cn(
            "-mb-px flex flex-1 sm:flex-none items-center justify-center gap-1.5 whitespace-nowrap border-b-2 px-1 sm:px-4 py-2.5 text-sm transition-colors cursor-pointer",
            tab.key === active
              ? "border-primary text-primary font-medium"
              : "border-transparent text-foreground/70 hover:text-foreground hover:border-border"
          )}
        >
          {tab.label}
          <span className={cn("hidden sm:inline rounded-full px-1.5 text-xs", tab.key === active ? "bg-primary/10" : "bg-muted text-muted-foreground")}>{tab.count}</span>
        </Link>
      ))}
    </nav>
  );
}
