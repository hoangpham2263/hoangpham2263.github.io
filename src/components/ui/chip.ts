import { cn } from "@/lib/utils";

// One category chip style for the whole site (Products tabs, blog categories, game categories)
export const chipRow = "mb-4 flex flex-wrap gap-2";

export const chipClass = (active: boolean) =>
  cn(
    "inline-flex items-baseline gap-1.5 whitespace-nowrap rounded-full border px-3 py-1.5 text-sm transition-colors cursor-pointer",
    active
      ? "border-transparent bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-md shadow-blue-500/25"
      : "hover:border-primary/40 hover:bg-primary/[0.06] hover:text-primary"
  );

export const chipCountClass = (active: boolean) => cn("text-xs tabular-nums", active ? "opacity-80" : "text-muted-foreground");
