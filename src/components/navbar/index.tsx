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
  const labels: Record<string, string> = { "/": t.nav.projects, "/experience": t.nav.experience, "/blog": t.nav.blog, "/tools": t.nav.tools, "/contact": t.nav.contact };
  return (
    // Full-width backdrop so scrolled content does not show beside the sticky menu
    <div className="sticky top-0 z-50 w-full bg-background">
      <div className="inline-flex items-center gap-1 rounded-lg border bg-muted p-1 text-sm">
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
          "px-2.5 sm:px-4 py-1.5 min-w-0 sm:min-w-16 lg:min-w-20 text-center rounded-md cursor-pointer transition-colors",
          active
            ? "bg-background text-foreground font-medium shadow-sm"
            : "text-foreground/70 hover:text-foreground hover:bg-background/60",
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