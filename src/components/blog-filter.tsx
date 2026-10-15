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

  useEffect(() => {
    listRef.current?.querySelectorAll<HTMLElement>("[data-category]").forEach((el) => {
      el.hidden = active !== null && el.dataset.category !== active;
    });
  }, [active]);

  const chip = (label: string, count: number, value: string | null) => (
    <button
      key={label}
      type="button"
      onClick={() => setActive(value)}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors",
        active === value ? "border-primary bg-primary text-primary-foreground" : "hover:bg-muted"
      )}
    >
      {label}
      <span className={cn("text-xs", active === value ? "opacity-80" : "text-muted-foreground")}>{count}</span>
    </button>
  );

  return (
    <>
      {categories.length > 1 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {chip(allLabel, total, null)}
          {categories.map((c) => chip(c.name, c.count, c.name))}
        </div>
      )}
      <div ref={listRef} className="space-y-3 md:space-y-6">
        {children}
      </div>
    </>
  );
}
