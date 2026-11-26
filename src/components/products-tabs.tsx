import Link from "next/link";
import { chipClass, chipCountClass, chipRow } from "@/components/ui/chip";
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
    <nav aria-label={locale === "vi" ? "Sản phẩm" : "Products"} className={chipRow}>
      {tabs.map((tab) => (
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
