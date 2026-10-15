// Tools & automations. Add one object per tool; text fields take both languages.
// status: "done" (usable), "building" (in progress)
export type Tool = {
  name: string;
  description: { vi: string; en: string };
  status: "done" | "building";
  tags: string[];
  links: { name: string; url: string }[]; // e.g. { name: "GitHub", url: "https://github.com/..." }
  image?: string; // optional screenshot in /public, e.g. "/tools/wp-auto-poster.webp"
};

export const toolsConfig: Tool[] = [];
