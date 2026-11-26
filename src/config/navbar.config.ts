import { NavItem } from "@/types";

// Main menu. Tools, WordPress Kit and TikTok Games live under Products (/tools) as sub-tabs;
// contact details sit at the end of Services.
export const navbarConfig: NavItem[] = [
  { title: "Projects", url: "/" },
  { title: "Products", url: "/tools" },
  { title: "Experience", url: "/experience" },
  { title: "Blog", url: "/blog" },
  { title: "Services", url: "/services" },
];
