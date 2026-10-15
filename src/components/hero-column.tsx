"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { stripLocale } from "@/i18n";

// On mobile the intro only shows on the home page; other sections start with their content
export function useIsHome() {
  const path = stripLocale(usePathname() || "/");
  return path === "/" || path === "";
}

export default function HeroColumn({ children, className }: { children: React.ReactNode; className?: string }) {
  const home = useIsHome();
  return <div className={cn(className, !home && "hidden md:block")}>{children}</div>;
}

// On mobile the home page is the intro only; the projects list lives at /projects
export function ContentColumn({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) {
  const home = useIsHome();
  return (
    <div id={id} className={cn(className, home && "hidden md:block")}>
      {children}
    </div>
  );
}
