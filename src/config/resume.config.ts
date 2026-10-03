// Mirrors the PDF resume (Canva) so the web /cv page and the PDF read the same
export const resumeConfig = {
  name: "Pham Quoc Hoang",
  title: "Full-Stack Developer · WordPress",
  summary:
    "Full-Stack Developer with a strong focus on WordPress. I build SEO-friendly websites from user interfaces to admin systems — custom themes, plugins, WooCommerce, hosting setup and PageSpeed optimization — for businesses in e-commerce, education, real estate and services.",
  contacts: [
    { icon: "address", value: "Ho Chi Minh City, Vietnam" },
    { icon: "phone", value: "0971 955 144", href: "tel:+84971955144" },
    { icon: "mail", value: "hoangpham2263@gmail.com", href: "mailto:hoangpham2263@gmail.com" },
  ],
  links: [
    { icon: "globe", label: "CV Online", value: "hoangpham2263.github.io/cv", href: "https://hoangpham2263.github.io/cv" },
    { icon: "linkedin", label: "", value: "linkedin.com/in/hoangpham2263", href: "https://www.linkedin.com/in/hoangpham2263/" },
    { icon: "globe", label: "Portfolio", value: "hoangpham2263.github.io", href: "https://hoangpham2263.github.io" },
    { icon: "github", label: "Github", value: "github.com/hoangpham2263", href: "https://github.com/hoangpham2263" },
  ],
  work: [
    {
      role: "Creator & Developer",
      company: "Hoàn Hời",
      meta: "2026 – Present • Personal project | hoanhoi.com",
      description: "",
      // Short context line shown in italics instead of the Description/Key Responsibilities labels
      summary: "A cashback platform for online shopping, live in production.",
      responsibilities: [
        "Built the full product with Next.js, PostgreSQL and Redis: user app and admin system.",
        "Integrated Shopee, Lazada and ACCESSTRADE to sync and reconcile affiliate orders.",
        "Designed the wallet and ledger flow for cashback, withdrawals and reversals.",
        "Set up CI/CD with GitHub Actions and deploy to a VPS with automatic database backups.",
      ],
    },
    {
      role: "Software Engineer (AI Evaluation)",
      company: "HD TechLabs Solution",
      meta: "Jul 2026 – Present • Freelance | Remote",
      description:
        "Freelance work creating and reviewing advanced mathematics problems and coding benchmark tasks used to evaluate AI models.",
      responsibilities: [
        "Create and review advanced mathematics problems with verified reference solutions.",
        "Build coding benchmark tasks with reproducible Docker environments and automated tests.",
      ],
    },
    {
      role: "Web Developer",
      company: "Puramu",
      meta: "Feb 2025 – Jun 2026 • 1 yr 4 mos | Ho Chi Minh City, Vietnam",
      description:
        "Developed and operated web and CRM systems, collaborating with third-party partners to automate management processes.",
      responsibilities: [
        "Built and customized WordPress themes and plugins for client websites based on their requirements.",
        "Developed custom WordPress features using PHP, JavaScript and the WordPress REST API.",
        "Integrated third-party services and APIs to automate business workflows.",
        "Optimized website performance, SEO and Core Web Vitals for faster loading and better search rankings.",
        "Troubleshot, maintained and secured WordPress websites to keep them stable.",
        "Collaborated with designers, QA and project managers to deliver high-quality solutions.",
      ],
    },
    {
      role: "Backend Intern",
      company: "Meta Technology",
      meta: "Apr 2024 – Jul 2024 • 3 mos | Da Nang City, Vietnam",
      description: "Participated in developing API systems, focusing on backend logic and data processing performance.",
      responsibilities: [
        "Developed APIs using Next.js to connect the frontend and backend.",
        "Built and maintained data flow between frontend and backend.",
        "Improved API performance for faster response.",
        "Found and fixed issues in the system.",
      ],
    },
    {
      role: "Backend Developer",
      company: "LiftSoft",
      meta: "Mar 2022 – Jun 2022 • 3 mos | Da Nang City, Vietnam",
      description: "Contributed to API development and unit testing to ensure stable system performance.",
      responsibilities: [
        "Developed APIs using Django.",
        "Wrote unit tests to check functionality.",
        "Worked with databases to store and retrieve data.",
        "Fixed bugs and supported system maintenance.",
      ],
    },
  ],
  skills: [
    { group: "Frontend", items: "HTML5, CSS3, Tailwind CSS, JavaScript, React, Next.js, Responsive Design" },
    { group: "Backend", items: "PHP, Node.js, Python, Django, REST API, API Integration" },
    { group: "WordPress", items: "Custom Themes, Plugin Development, WooCommerce, ACF, WP REST API, WP Hooks & Filters" },
    { group: "Database", items: "MySQL, PostgreSQL, MongoDB" },
    { group: "Performance & SEO", items: "Technical SEO, PageSpeed, Core Web Vitals, LiteSpeed Cache, Security Hardening" },
    { group: "Tools", items: "Git, Docker, CI" },
    { group: "AI Tools", items: "Claude Code, Codex, Gemini, Prompt Engineering, AI Agent Skills" },
  ],
  education: [
    { school: "Duy Tan University", degree: "Bachelor in Software Engineering", period: "2021 – 2025" },
  ],
  languages: ["English"],
};
