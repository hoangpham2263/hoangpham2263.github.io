import type { Experience } from "@/types";

export const experiencesConfig: Experience[] = [
  {
    title: "Creator & Developer",
    employmentType: "Personal project",
    company: {
      name: "Hoàn Hời",
      url: "https://hoanhoi.com",
    },
    location: {
      name: "Ho Chi Minh City, Vietnam",
    },
    start: "2026",
    end: "Present",
    description: [
      "Built the full product with Next.js, PostgreSQL and Redis: user app and admin system",
      "Integrated Shopee, Lazada and ACCESSTRADE to sync and reconcile affiliate orders",
      "Designed the wallet and ledger flow for cashback, withdrawals and reversals",
      "Set up CI/CD with GitHub Actions and deploy to a VPS with automatic database backups",
    ],
  },
  {
    title: "Software Engineer (AI Evaluation)",
    employmentType: "Freelance",
    company: {
      name: "HD TechLabs Solution",
      url: "",
    },
    location: {
      name: "Remote",
    },
    start: "July 2026",
    end: "Present",
    description: [
      "Write and review advanced math problems with verified reference solutions",
      "Build coding benchmark tasks with Docker environments and automated tests",
    ],
  },
  {
    title: "Web Developer",
    employmentType: "Full time",
    company: {
      name: "Puramu",
      url: "https://www.puramu.com/",
    },
    location: {
      name: "Ho Chi Minh City, Vietnam",
    },
    start: "February 2025",
    end: "June 2026",
    description: [
      "Built custom WordPress themes from Figma for e-commerce, corporate, education and service websites",
      "Built WooCommerce stores with product catalogues, search and online ordering",
      "Built custom features with PHP, JavaScript, the WP REST API and third-party APIs",
      "Wrote Python crawlers to import product and quiz data, and moved a Haravan store to WooCommerce",
      "Set up technical SEO with Rank Math and improved page speed and Core Web Vitals",
      "Maintained and secured client websites, working with designers, QA and PMs to deliver on time",
    ],
  },
  {
    title: "Backend Developer",
    employmentType: "Part time",
    company: {
      name: "Meta Technology",
      url: "",
    },
    location: {
      name: "Da Nang, Vietnam",
    },
    start: "April 2024",
    end: "July 2024",
    description: [
      "Built APIs with Next.js to connect the frontend and backend",
      "Maintained data flow between frontend and backend services",
      "Improved API response times and fixed system issues",
    ],
  },
  {
    title: "Backend Developer",
    employmentType: "Part time",
    company: {
      name: "LiftSoft",
      url: "",
    },
    location: {
      name: "Da Nang, Vietnam",
    },
    start: "March 2022",
    end: "June 2022",
    description: [
      "Built APIs with Django",
      "Wrote unit tests to verify functionality",
      "Worked with databases to store and query data",
      "Fixed bugs and supported system maintenance",
    ],
  },
];
