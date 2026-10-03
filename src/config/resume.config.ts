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
      summary: "Freelance work on math and coding benchmarks used to evaluate AI models.",
      responsibilities: [
        "Write and review advanced math problems with verified reference solutions.",
        "Build coding benchmark tasks with Docker environments and automated tests.",
      ],
    },
    {
      role: "Web Developer",
      company: "Puramu",
      meta: "Feb 2025 – Jun 2026 • 1 yr 4 mos | Ho Chi Minh City, Vietnam",
      summary: "",
      responsibilities: [
        "Built and customized WordPress themes and plugins from client requirements.",
        "Developed custom features with PHP, JavaScript and the WordPress REST API.",
        "Integrated third-party services and APIs to automate business workflows.",
        "Improved page speed, technical SEO and Core Web Vitals.",
        "Maintained, secured and troubleshot client websites.",
        "Worked with designers, QA and project managers to deliver projects on time.",
      ],
    },
    {
      role: "Backend Intern",
      company: "Meta Technology",
      meta: "Apr 2024 – Jul 2024 • 3 mos | Da Nang City, Vietnam",
      summary: "",
      responsibilities: [
        "Built APIs with Next.js to connect the frontend and backend.",
        "Maintained data flow between frontend and backend services.",
        "Improved API response times and fixed system issues.",
      ],
    },
    {
      role: "Backend Developer",
      company: "LiftSoft",
      meta: "Mar 2022 – Jun 2022 • 3 mos | Da Nang City, Vietnam",
      summary: "",
      responsibilities: [
        "Built APIs with Django.",
        "Wrote unit tests to verify functionality.",
        "Worked with databases to store and query data.",
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
