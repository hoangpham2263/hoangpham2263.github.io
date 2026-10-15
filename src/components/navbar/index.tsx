"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { navbarConfig } from "@/config/navbar.config";
import { getDictionary, localeFromPath, localePath, stripLocale } from "@/i18n";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname() || "/";
  const locale = localeFromPath(pathname);
  const t = getDictionary(locale);
  const labels: Record<string, string> = { "/": t.nav.projects, "/experience": t.nav.experience, "/services": t.nav.services, "/blog": t.nav.blog, "/tools": t.nav.tools, "/contact": t.nav.contact };
  return (
    // Covers the column padding too, so scrolled content never shows above or beside the menu
    <div className="hidden md:block sticky -top-8 z-50 -mx-8 -mt-8 px-8 pt-8 pb-4 bg-background border-b border-border/60">
      <div className="inline-flex max-w-full overflow-x-auto scrollbar-hide items-center gap-0.5 sm:gap-1 rounded-xl border bg-background p-1 shadow-sm text-[13px] sm:text-sm">
        {navbarConfig.map((item, index) => (
          <NavItem key={index} url={item.url} href={localePath(locale, item.url)}>
            {labels[item.url] ?? item.title}
          </NavItem>
        ))}
      </div>
    </div>
  );
}

type NavItemProps = {
  children: React.ReactNode;
  url: string;
  href: string;
  className?: string;
};

const NavItem = ({ children, url, href, className }: NavItemProps) => {
  const pathname = stripLocale(usePathname() || "/");
  const active =
    pathname === url ||
    (pathname.includes(url) && url !== "/") ||
    (url === "/" && pathname.startsWith("/projects"));

  return (
    <Link href={href}>
      <motion.div
        className={cn(
          "px-1.5 sm:px-3.5 py-1.5 min-w-0 sm:min-w-14 whitespace-nowrap text-center rounded-md cursor-pointer transition-colors",
          active
            ? "bg-primary/10 text-primary font-medium"
            : "text-foreground/70 hover:text-foreground hover:bg-muted",
          className
        )}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ 
          type: "spring",
          stiffness: 400,
          damping: 17
        }}
      >
        {children}
      </motion.div>
    </Link>
  );
};