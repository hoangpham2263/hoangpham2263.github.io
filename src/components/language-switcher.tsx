"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getDictionary, localeFromPath, localePath, stripLocale } from "@/i18n";

// Links to the same page in the other language
export default function LanguageSwitcher() {
  const pathname = usePathname() || "/";
  const locale = localeFromPath(pathname);
  const target = locale === "vi" ? "en" : "vi";
  const t = getDictionary(locale);

  return (
    <Button size="sm" variant="ghost" className="rounded-full gap-1.5 px-3" asChild>
      <Link href={localePath(target, stripLocale(pathname))} hrefLang={target} title={t.hero.switchLabel}>
        <Languages size={16} />
        <span className="text-xs font-medium">{t.hero.switchShort}</span>
        <span className="sr-only">{t.hero.switchLabel}</span>
      </Link>
    </Button>
  );
}
