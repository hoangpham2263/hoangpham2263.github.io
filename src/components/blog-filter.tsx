"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

// Category chips above the post list; cards carry data-category and are hidden when filtered out
export default function BlogFilter({
  categories,
  allLabel,
  children,
}: {
  categories: { name: string; count: number }[];
  allLabel: string;
  children: React.ReactNode;
}) {
  const [active, setActive] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const total = categories.reduce((s, c) => s + c.count, 0);

  // Remember the chosen category between visits
  useEffect(() => {
    try {
      const saved = localStorage.getItem("hp-blog-category");
      if (saved && categories.some((c) => c.name === saved)) setActive(saved);
    } catch {}
    setTimeout(() => document.documentElement.classList.remove("hp-restoring"), 0);
  }, [categories]);

  const choose = (value: string | null) => {
    setActive(value);
    try {
      if (value) localStorage.setItem("hp-blog-category", value);
      else localStorage.removeItem("hp-blog-category");
    } catch {}
  };

  useEffect(() => {
    listRef.current?.querySelectorAll<HTMLElement>("[data-category]").forEach((el) => {
      el.hidden = active !== null && el.dataset.category !== active;
    });
  }, [active]);

  const chip = (label: string, count: number, value: string | null) => (
    <button
      key={label}
      type="button"
      onClick={() => choose(value)}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors",
        active === value ? "border-transparent bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-md shadow-blue-500/25" : "hover:border-primary/40 hover:bg-primary/[0.06] hover:text-primary"
      )}
    >
      {label}
      <span className={cn("text-xs", active === value ? "opacity-80" : "text-muted-foreground")}>{count}</span>
    </button>
  );

  return (
    <div data-restore>
      {categories.length > 1 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {chip(allLabel, total, null)}
          {categories.map((c) => chip(c.name, c.count, c.name))}
        </div>
      )}
      <div ref={listRef} className="space-y-3 md:space-y-6">
        {children}
      </div>
    </div>
  );
}
