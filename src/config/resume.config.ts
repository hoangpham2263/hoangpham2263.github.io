// Content for the web /cv page
export const resumeConfig = {
  name: "Pham Quoc Hoang",
  title: "Full-Stack Developer",
  summary:
    "With over 2 years of web development experience and a solid understanding of e-commerce, I have delivered projects for businesses in retail, education and services, always focusing on performance, SEO and user experience. Aiming to grow deeper in e-commerce, helping businesses run efficiently and grow sustainably.",
  contacts: [
    { icon: "address", value: "Ho Chi Minh City, Vietnam" },
    { icon: "phone", value: "0971 955 144", href: "tel:+84971955144" },
    { icon: "mail", value: "hoangpham2263@gmail.com", href: "mailto:hoangpham2263@gmail.com" },
  ],
  links: [
    { icon: "github", label: "GitHub", value: "github.com/hoangpham2263", href: "https://github.com/hoangpham2263" },
    { icon: "linkedin", label: "LinkedIn", value: "linkedin.com/in/hoangpham2263", href: "https://www.linkedin.com/in/hoangpham2263/" },
  ],
  work: [
    {
      company: "HD TechLabs Solution",
      role: "Software Engineer (AI Evaluation)",
      stack: "Freelance, Remote",
      period: "Jul 2026 – Present",
      location: "",
      summary: "Build math and coding benchmarks to evaluate AI models.",
      responsibilities: [
        "Write and review advanced math problems with solutions.",
        "Build coding benchmarks with Docker and automated tests.",
      ],
      selected: [] as string[],
    },
    {
      company: "Puramu",
      role: "Web Developer",
      stack: "",
      period: "Feb 2025 – Jun 2026",
      location: "Ho Chi Minh City",
      summary: "",
      responsibilities: [
        "Built SEO-friendly WordPress themes and WooCommerce stores from Figma.",
        "Developed custom WordPress plugins and features.",
        "Wrote Python crawlers to migrate data to WordPress and WooCommerce.",
        "Optimised PageSpeed and Core Web Vitals.",
        "Maintained and secured client websites.",
      ],
      selected: ["Kim Quốc Tiến", "Nhật Nam Home", "GFC Security", "Đức Trí Piano Boutique", "Melody Preschool", "EuroLife"],
    },
    {
      company: "Meta Technology",
      role: "Backend Developer, part-time",
      stack: "",
      period: "Apr 2024 – Jul 2024",
      location: "Da Nang",
      summary: "",
      responsibilities: [
        "Built APIs with Next.js.",
        "Maintained data flow between services.",
        "Improved API speed and fixed bugs.",
      ],
      selected: [] as string[],
    },
    {
      company: "Lift Software Vietnam",
      role: "Backend Developer, part-time",
      stack: "",
      period: "Mar 2022 – Jun 2022",
      location: "Da Nang",
      summary: "",
      responsibilities: [
        "Built APIs with Django.",
        "Wrote unit tests.",
        "Fixed bugs and maintained the system.",
      ],
      selected: [] as string[],
    },
  ],
  projects: [
    {
      name: "Hoàn Hời",
      link: { label: "hoanhoi.com", href: "https://hoanhoi.com" },
      role: "Founder — building and running it",
      stack: "",
      period: "Aug 2026 – Present",
      summary: "A cashback platform for online shopping, live with real users; I build, run and reconcile it day to day.",
      responsibilities: [
        "Built the full product with Next.js.",
        "Integrated Shopee, Lazada, TikTok Shop, ACCESSTRADE.",
        "Designed the cashback wallet and ledger.",
        "Deployed to a VPS with automatic backups.",
      ],
    },
  ],
  skills: [
    { group: "WordPress", items: "WooCommerce, Plugin Development, Custom Themes, Elementor, Flatsome" },
    { group: "Frontend", items: "JavaScript, TypeScript, React, Next.js, Tailwind CSS, HTML/CSS" },
    { group: "Backend", items: "PHP, Node.js, Python" },
    { group: "Database", items: "MySQL, PostgreSQL, Redis" },
    { group: "Performance & Security", items: "PageSpeed / Core Web Vitals, LiteSpeed Cache, Security Hardening" },
    { group: "Tools", items: "Git, Docker, Figma" },
    { group: "AI", items: "Claude Code, Codex, Gemini" },
  ],
  education: [
    { school: "Duy Tan University", degree: "Bachelor in Software Engineering", period: "2021 – 2025" },
  ],
  languages: ["English"],
};
