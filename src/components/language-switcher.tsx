"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getDictionary, localeFromPath, localePath, stripLocale } from "@/i18n";

// Links to the same page in the other language
export default function LanguageSwitcher() {
  const pathname = usePathname() || "/";
  const locale = localeFromPath(pathname);
  const target = locale === "vi" ? "en" : "vi";
  const t = getDictionary(locale);

  return (
    <Button size="sm" variant="outline" className="h-8 rounded-full gap-1 px-2.5 shadow-none shrink-0" asChild>
      <Link href={localePath(target, stripLocale(pathname))} hrefLang={target} title={t.hero.switchLabel}>
        <Globe size={15} />
        <span className="text-xs font-semibold">{t.hero.switchShort}</span>
        <span className="sr-only">{t.hero.switchLabel}</span>
      </Link>
    </Button>
  );
}
