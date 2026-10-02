"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { navbarConfig } from "@/config/navbar.config";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 inline-flex items-center gap-1 rounded-lg border bg-muted p-1 text-sm">
      {navbarConfig.map((item, index) => (
        <NavItem
          key={index}
          url={item.url}
                  >
          {item.title}
        </NavItem>
      ))}
    </div>
  );
}

type NavItemProps = {
  children: React.ReactNode;
  url: string;
  className?: string;
};

const NavItem = ({ children, url, className }: NavItemProps) => {
  const pathname = usePathname();
  const active =
    pathname === url ||
    (pathname.includes(url) && url !== "/") ||
    (url === "/" && pathname.startsWith("/projects"));

  return (
    <Link href={url}>
      <motion.div
        className={cn(
          "px-4 py-1.5 min-w-16 lg:min-w-24 text-center rounded-md cursor-pointer transition-colors",
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