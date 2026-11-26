import Link from "next/link";
import { chipClass, chipCountClass, chipRow } from "@/components/ui/chip";
import { gamesConfig } from "@/config/games.config";
import { toolsConfig, type Tool } from "@/config/tools.config";
import { localePath, type Locale } from "@/i18n";

export type ProductTab = "tools" | "apps" | "docs" | "wordpress" | "games";

// Which tool entries each Products tab lists (games come from games.config)
export const toolKindsOf: Record<Exclude<ProductTab, "games">, NonNullable<Tool["kind"]>[]> = {
  tools: ["app"],
  apps: ["desktop"],
  docs: ["guide"],
  wordpress: ["wp", "private"],
};

export const toolsOfTab = (tab: Exclude<ProductTab, "games">) =>
  toolsConfig.filter((tool) => toolKindsOf[tab].includes(tool.kind ?? "app"));

// The Products tabs, in order. The hero stats read this list too, so names and counts match.
export const productTabs = (locale: Locale): { key: ProductTab; label: string; href: string; count: number }[] => [
  { key: "tools", label: locale === "vi" ? "Công cụ web" : "Web tools", href: "/products", count: toolsOfTab("tools").length },
  { key: "apps", label: locale === "vi" ? "Ứng dụng AI" : "AI apps", href: "/products/ai-apps", count: toolsOfTab("apps").length },
  { key: "docs", label: locale === "vi" ? "Tài liệu" : "Docs", href: "/products/docs", count: toolsOfTab("docs").length },
  { key: "wordpress", label: "WordPress Kit", href: "/products/wordpress-kit", count: toolsOfTab("wordpress").length },
  { key: "games", label: "TikTok Games", href: "/products/tiktok-games", count: gamesConfig.length },
];

// Sub-tabs of the Products page: one home for everything people can use or download
export default function ProductsTabs({ active, locale }: { active: ProductTab; locale: Locale }) {
  return (
    <nav aria-label={locale === "vi" ? "Sản phẩm" : "Products"} className={chipRow}>
      {productTabs(locale).map((tab) => (
        <Link
          key={tab.key}
          href={localePath(locale, tab.href)}
          aria-current={tab.key === active ? "page" : undefined}
          className={chipClass(tab.key === active)}
        >
          {tab.label}
          <span className={chipCountClass(tab.key === active)}>{tab.count}</span>
        </Link>
      ))}
    </nav>
  );
}
