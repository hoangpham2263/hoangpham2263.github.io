import type { Locale } from "@/i18n";
import { siteConfig } from "@/config/site.config";
import { experiencesConfig } from "@/config/experience.config";
import { resumeConfig } from "@/config/resume.config";
import { skillsConfig } from "@/config/skills.config";
import { experiencesConfigVi } from "@/config/vi/experience.config";
import { resumeConfigVi } from "@/config/vi/resume.config";

const skillCategoryVi: Record<string, string> = {
  Database: "Cơ sở dữ liệu",
  "Crawl Data": "Crawl dữ liệu",
  "Performance & SEO": "Tốc độ & SEO",
  "Tools": "Công cụ",
  "AI": "AI",
};

const skillItemVi: Record<string, string> = {
  "Plugin Development": "Phát triển Plugin",
  "Import to WordPress & WooCommerce": "Nhập dữ liệu vào WordPress & WooCommerce",
  "API Integration": "Tích hợp API",
  "Security Hardening": "Bảo mật website",
};

export const getSkills = (locale: Locale) =>
  locale === "vi"
    ? skillsConfig.map((s) => ({
        category: skillCategoryVi[s.category] ?? s.category,
        technologies: s.technologies.map((t) => skillItemVi[t] ?? t),
      }))
    : skillsConfig;

export const getExperiences = (locale: Locale) =>
  locale === "vi" ? experiencesConfigVi : experiencesConfig;

export const getResume = (locale: Locale) => (locale === "vi" ? resumeConfigVi : resumeConfig);

export const getSiteText = (locale: Locale) =>
  locale === "vi"
    ? {
        title: "HoangPham | Full-Stack Developer",
        description:
          "Phạm Quốc Hoàng — Full-Stack Developer tập trung vào WordPress. Mình xây dựng website WordPress và Next.js nhanh, chuẩn SEO, từ giao diện người dùng đến hệ thống quản trị cho doanh nghiệp thương mại điện tử, giáo dục, bất động sản và dịch vụ.",
      }
    : { title: siteConfig.title, description: siteConfig.description };

export const getEducation = (locale: Locale) =>
  locale === "vi"
    ? { school: "Đại học Duy Tân", degree: "Cử nhân Kỹ thuật phần mềm", period: "2021 - 2025" }
    : { school: "Duy Tan University", degree: "Bachelor in Software Engineering", period: "2021 - 2025" };
