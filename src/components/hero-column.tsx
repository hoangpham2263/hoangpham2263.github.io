"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { stripLocale } from "@/i18n";

// On mobile the intro only shows on the home page; other sections start with their content
export default function HeroColumn({ children, className }: { children: React.ReactNode; className?: string }) {
  const path = stripLocale(usePathname() || "/");
  const home = path === "/" || path === "";
  return <div className={cn(className, !home && "hidden md:block")}>{children}</div>;
}
