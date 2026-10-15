import { siteConfig } from "@/config/site.config";

export const locales = ["en", "vi"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "vi";

// Vietnamese lives at the root, English under /en
const prefix = (locale: Locale) => (locale === defaultLocale ? "" : `/${locale}`);

export const localePath = (locale: Locale, path = "/") => {
  const clean = path.startsWith("/") ? path : `/${path}`;
  const p = prefix(locale);
  if (!p) return clean;
  return clean === "/" ? p : `${p}${clean}`;
};

const otherLocale: Locale = defaultLocale === "vi" ? "en" : "vi";

// Strip the locale prefix to get the shared path
export const stripLocale = (pathname: string) => {
  const p = `/${otherLocale}`;
  if (pathname === p || pathname === `${p}/`) return "/";
  return pathname.startsWith(`${p}/`) ? pathname.slice(p.length) : pathname;
};

export const localeFromPath = (pathname: string): Locale =>
  pathname === `/${otherLocale}` || pathname.startsWith(`/${otherLocale}/`) ? otherLocale : defaultLocale;

// hreflang alternates for a shared path, e.g. "/experience"
export const languageAlternates = (path: string, locale: Locale) => {
  const origin = siteConfig.siteUrl.replace(/\/$/, "");
  const en = `${origin}${localePath("en", path)}`;
  const vi = `${origin}${localePath("vi", path)}`;
  return {
    canonical: locale === "vi" ? vi : en,
    languages: { vi, en, "x-default": defaultLocale === "vi" ? vi : en },
  };
};

export const ogLocale = (locale: Locale) => (locale === "vi" ? "vi_VN" : "en_US");

const en = {
  nav: { projects: "Projects", experience: "Experience", services: "Services", blog: "Blog", tools: "Tools", contact: "Contact" },
  hero: {
    bio: "Hey there 👋 Welcome to my portfolio! I love turning ideas into websites that are fast, easy to use and easy to find on Google. Most of my work is building websites for businesses, and in my free time I explore new technologies and use them to build my own products. Take a look at the projects below, and feel free to reach out if you'd like to work together.",
    contact: "Contact",
    resume: "Resume",
    switchLabel: "Tiếng Việt",
    switchShort: "VI",
  },
  home: {
    search: "Search projects",
    searchRequired: "Search is required",
    featured: "Featured",
    github: "Github",
    stars: "Stars",
    lastUpdated: "Last updated",
    forks: "forks",
  },
  project: { allProjects: "All projects", visitWebsite: "Visit website" },
  experience: {
    education: "Education",
    current: "Current",
    present: "Present",
    achievement: "Achievement",
    title: "Experience",
    intro: "Hey, I'm {name}. I've worked with a variety of companies and have experience in different roles. I've also made a few projects on my own. Here's a list of my work experience.",
    at: "at",
  },
  contact: {
    title: "Contact",
    description: "Get in touch with Pham Quoc Hoang via email or LinkedIn.",
    intro: "Want to talk about WordPress, web performance, or one of my projects? Feel free to reach out — I'm happy to connect with fellow developers.",
    location: "Location",
    locationValue: "Ho Chi Minh City, Vietnam",
  },
  services: {
    title: "Services",
    description: "WordPress and WooCommerce websites, speed and technical SEO, data crawling, web apps and maintenance.",
    intro: "What I can build for your business. Tell me what you need and I'll get back to you with a plan and a quote.",
    includes: "Includes",
    cta: "Discuss your project",
  },
  blog: {
    title: "Blog",
    description: "Notes on WordPress, Next.js, automation and things I learn while building.",
    empty: "No posts yet.",
    allPosts: "All posts",
  },
  tools: {
    title: "Tools",
    description: "Tools and automations I build for WordPress, e-commerce and everyday work.",
    intro: "Small tools and automations I build to save time — source code on GitHub.",
    empty: "Tools are being built — check back soon.",
    done: "Ready",
    building: "In progress",
  },
  cv: {
    pageTitle: "Resume",
    home: "Home",
    viewPortfolio: "View Portfolio",
    viewCv: "View CV",
    webNote: "Web version of my CV — always up to date",
    downloadPdf: "Download PDF",
    summary: "Summary",
    links: "Links",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    education: "Education",
    languages: "Languages",
    selectedSites: "Selected sites",
    seeFullList: "see the full list on the",
    portfolio: "portfolio",
  },
};

const vi: typeof en = {
  nav: { projects: "Dự án", experience: "Kinh nghiệm", services: "Dịch vụ", blog: "Blog", tools: "Tool", contact: "Liên hệ" },
  hero: {
    bio: "Xin chào 👋 Chào mừng bạn đến với portfolio của mình! Mình thích biến ý tưởng thành những website nhanh, dễ dùng và dễ tìm thấy trên Google. Phần lớn công việc của mình là xây dựng website cho doanh nghiệp, còn thời gian rảnh mình tìm hiểu công nghệ mới và dùng chúng để làm sản phẩm của riêng mình. Mời bạn xem các dự án bên dưới, và cứ liên hệ nếu muốn cùng hợp tác nhé.",
    contact: "Liên hệ",
    resume: "Xem CV",
    switchLabel: "English",
    switchShort: "EN",
  },
  home: {
    search: "Tìm dự án",
    searchRequired: "Vui lòng nhập từ khóa",
    featured: "Nổi bật",
    github: "Github",
    stars: "Nhiều sao",
    lastUpdated: "Mới cập nhật",
    forks: "forks",
  },
  project: { allProjects: "Tất cả dự án", visitWebsite: "Xem website" },
  experience: {
    education: "Học vấn",
    current: "Hiện tại",
    present: "nay",
    achievement: "Thành tích",
    title: "Kinh nghiệm",
    intro: "Xin chào, mình là {name}. Mình đã làm việc ở nhiều công ty với các vai trò khác nhau, và cũng tự làm một số dự án riêng. Dưới đây là kinh nghiệm làm việc của mình.",
    at: "tại",
  },
  contact: {
    title: "Liên hệ",
    description: "Liên hệ với Phạm Quốc Hoàng qua email hoặc LinkedIn.",
    intro: "Bạn muốn trao đổi về WordPress, tốc độ website hay một dự án của mình? Cứ thoải mái liên hệ — mình luôn sẵn lòng kết nối.",
    location: "Địa chỉ",
    locationValue: "TP. Hồ Chí Minh, Việt Nam",
  },
  services: {
    title: "Dịch vụ",
    description: "Thiết kế website WordPress, WooCommerce, tối ưu tốc độ & SEO kỹ thuật, crawl dữ liệu, web app và bảo trì website.",
    intro: "Những gì mình có thể làm cho doanh nghiệp của bạn. Cho mình biết nhu cầu, mình sẽ gửi lại phương án và báo giá.",
    includes: "Bao gồm",
    cta: "Trao đổi dự án",
  },
  blog: {
    title: "Blog",
    description: "Ghi chép về WordPress, Next.js, automation và những gì mình học được khi làm sản phẩm.",
    empty: "Chưa có bài viết nào.",
    allPosts: "Tất cả bài viết",
  },
  tools: {
    title: "Tool",
    description: "Các tool và automation mình tự làm cho WordPress, thương mại điện tử và công việc hằng ngày.",
    intro: "Các tool và automation nhỏ mình tự viết để tiết kiệm thời gian — mã nguồn trên GitHub.",
    empty: "Các tool đang được phát triển — bạn quay lại sau nhé.",
    done: "Dùng được",
    building: "Đang làm",
  },
  cv: {
    pageTitle: "CV",
    home: "Trang chủ",
    viewPortfolio: "Xem portfolio",
    viewCv: "Xem CV",
    webNote: "Bản web của CV — luôn cập nhật mới nhất",
    downloadPdf: "Tải PDF",
    summary: "Giới thiệu",
    links: "Liên kết",
    experience: "Kinh nghiệm",
    projects: "Dự án",
    skills: "Kỹ năng",
    education: "Học vấn",
    languages: "Ngoại ngữ",
    selectedSites: "Website tiêu biểu",
    seeFullList: "xem đầy đủ trên",
    portfolio: "portfolio",
  },
};

export type Dictionary = typeof en;
export const dictionaries: Record<Locale, Dictionary> = { en, vi };
export const getDictionary = (locale: Locale) => dictionaries[locale];
