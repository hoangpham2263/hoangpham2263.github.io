"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site.config";
import { navbarConfig } from "@/config/navbar.config";
import { getDictionary, localeFromPath, localePath, stripLocale } from "@/i18n";
import LanguageSwitcher from "@/components/language-switcher";
import ThemeToggler from "@/components/theme/toggler";

// Mobile header: brand on the left, menu button on the right, dropdown with all sections
export default function MobileNav() {
  const pathname = usePathname() || "/";
  const locale = localeFromPath(pathname);
  const t = getDictionary(locale);
  const path = stripLocale(pathname);
  const [open, setOpen] = useState(false);
  const labels: Record<string, string> = { "/": t.nav.projects, "/experience": t.nav.experience, "/services": t.nav.services, "/blog": t.nav.blog, "/tools": t.nav.tools, "/contact": t.nav.contact };
  const isActive = (url: string) =>
    url === "/" ? path.startsWith("/projects") : path === url || path.startsWith(`${url}/`);

  // Close on navigation, lock page scroll while open
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden sticky top-0 z-[60]">
      <header className="flex items-center justify-between h-14 pl-4 pr-2 border-b bg-background/90 backdrop-blur">
        <Link href={localePath(locale, "/")} className="flex items-center gap-2 font-semibold">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/hp-icon.svg" alt="" width={30} height={30} />
          <span>{siteConfig.name}</span>
        </Link>
        <div className="flex items-center gap-1">
          <LanguageSwitcher />
          <ThemeToggler />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex items-center justify-center w-10 h-10 rounded-md hover:bg-muted"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 top-14 bg-black/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.nav
              className="absolute left-0 right-0 top-14 border-b bg-background shadow-lg"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
            >
              <ul className="p-2">
                {navbarConfig.map((item) => (
                  <li key={item.url}>
                    <Link
                      href={localePath(locale, item.url === "/" ? "/projects" : item.url)}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center justify-between rounded-md px-3 py-3 text-base",
                        isActive(item.url) ? "bg-muted font-semibold text-primary" : "text-foreground/80 hover:bg-muted"
                      )}
                    >
                      {labels[item.url] ?? item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
