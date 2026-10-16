import { resumeConfig } from "@/config/resume.config";

// Vietnamese content for the web /vi/cv page
export const resumeConfigVi: typeof resumeConfig = {
  name: "Phạm Quốc Hoàng",
  title: "Full-Stack Developer",
  summary:
    "Hơn 2 năm kinh nghiệm phát triển website, tập trung vào WordPress và WooCommerce, cùng Next.js cho các sản phẩm riêng. Xây dựng website chuẩn SEO, tối ưu tốc độ từ thiết kế Figma, phát triển tính năng tùy biến, công cụ crawl dữ liệu và hệ thống quản trị cho doanh nghiệp thương mại điện tử, giáo dục và dịch vụ.",
  contacts: [
    { icon: "address", value: "TP. Hồ Chí Minh, Việt Nam" },
    { icon: "phone", value: "0971 955 144", href: "tel:+84971955144" },
    { icon: "mail", value: "hoangpham2263@gmail.com", href: "mailto:hoangpham2263@gmail.com" },
  ],
  links: resumeConfig.links,
  work: [
    {
      company: "HD TechLabs Solution",
      role: "Software Engineer (AI Evaluation)",
      stack: "Freelance, Remote",
      period: "07/2026 – nay",
      location: "",
      summary: "Làm freelance các bộ benchmark toán và lập trình dùng để đánh giá mô hình AI.",
      responsibilities: [
        "Soạn và review bài toán nâng cao kèm lời giải.",
        "Xây dựng benchmark lập trình với Docker và test tự động.",
      ],
      selected: [] as string[],
    },
    {
      company: "Puramu",
      role: "Web Developer",
      stack: "WordPress, WooCommerce, PHP, JavaScript, MySQL, Python, Next.js",
      period: "02/2025 – 06/2026",
      location: "TP. Hồ Chí Minh",
      summary: "",
      responsibilities: [
        "Xây dựng theme WordPress chuẩn SEO từ thiết kế Figma.",
        "Xây dựng shop WooCommerce.",
        "Phát triển plugin và tính năng WordPress tùy biến.",
        "Viết công cụ crawl Python, chuyển shop sang WooCommerce.",
        "Tối ưu PageSpeed và Core Web Vitals.",
        "Bảo trì và bảo mật website khách hàng.",
      ],
      selected: resumeConfig.work[1].selected,
    },
    {
      company: "Meta Technology",
      role: "Backend Developer, part-time",
      stack: "Next.js APIs",
      period: "04/2024 – 07/2024",
      location: "Đà Nẵng",
      summary: "",
      responsibilities: [
        "Xây dựng API bằng Next.js.",
        "Duy trì luồng dữ liệu giữa các service.",
        "Tối ưu tốc độ API và sửa lỗi.",
      ],
      selected: [] as string[],
    },
    {
      company: "Lift Software Vietnam",
      role: "Backend Developer, part-time",
      stack: "Django APIs, unit test",
      period: "03/2022 – 06/2022",
      location: "Đà Nẵng",
      summary: "",
      responsibilities: [
        "Xây dựng API bằng Django.",
        "Viết unit test.",
        "Làm việc với cơ sở dữ liệu.",
        "Sửa lỗi và bảo trì hệ thống.",
      ],
      selected: [] as string[],
    },
  ],
  projects: [
    {
      name: "Hoàn Hời",
      link: { label: "hoanhoi.com", href: "https://hoanhoi.com" },
      role: "Người sáng lập & phát triển",
      stack: "Next.js, PostgreSQL, Redis",
      period: "08/2026 – nay",
      summary: "Nền tảng hoàn tiền khi mua sắm online, đang vận hành thực tế.",
      responsibilities: [
        "Xây dựng toàn bộ sản phẩm bằng Next.js, PostgreSQL, Redis.",
        "Tích hợp Shopee, Lazada, TikTok Shop, ACCESSTRADE.",
        "Thiết kế ví và sổ cái (ledger) hoàn tiền.",
        "Deploy VPS, sao lưu dữ liệu tự động.",
      ],
    },
  ],
  skills: [
    { group: "WordPress", items: "WooCommerce, phát triển Plugin, Custom Theme, Elementor, Flatsome" },
    { group: "Frontend", items: "JavaScript, TypeScript, React, Next.js, Tailwind CSS, HTML/CSS" },
    { group: "Backend", items: "PHP, Node.js, Python" },
    { group: "Cơ sở dữ liệu", items: "MySQL, PostgreSQL, Redis" },
    { group: "Tối ưu & Bảo mật", items: "PageSpeed / Core Web Vitals, LiteSpeed Cache, bảo mật website" },
    { group: "Công cụ", items: "Git, Docker, Figma" },
    { group: "AI", items: "Claude Code, Codex, Gemini" },
  ],
  education: [
    { school: "Đại học Duy Tân", degree: "Cử nhân Kỹ thuật phần mềm", period: "2021 – 2025" },
  ],
  languages: ["Tiếng Anh (đọc hiểu tài liệu)"],
};
