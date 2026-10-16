import { resumeConfig } from "@/config/resume.config";

// Vietnamese content for the web /vi/cv page
export const resumeConfigVi: typeof resumeConfig = {
  name: "Phạm Quốc Hoàng",
  title: "Full-Stack Developer",
  summary:
    "Với hơn 2 năm kinh nghiệm phát triển website cùng kiến thức về thương mại điện tử, tôi đã tham gia nhiều dự án cho doanh nghiệp ở các ngành bán lẻ, giáo dục và dịch vụ, luôn chú trọng hiệu năng, chuẩn SEO và trải nghiệm người dùng. Định hướng phát triển chuyên sâu ở mảng thương mại điện tử, đồng hành cùng doanh nghiệp vận hành hiệu quả và tăng trưởng bền vững.",
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
      summary: "Xây dựng bộ benchmark toán và lập trình để đánh giá mô hình AI.",
      responsibilities: [
        "Soạn và review bài toán nâng cao kèm lời giải.",
        "Xây dựng benchmark lập trình với Docker và test tự động.",
      ],
      selected: [] as string[],
    },
    {
      company: "Puramu",
      role: "Web Developer",
      stack: "",
      period: "02/2025 – 06/2026",
      location: "TP. Hồ Chí Minh",
      summary: "",
      responsibilities: [
        "Xây dựng theme WordPress và shop WooCommerce chuẩn SEO từ thiết kế Figma.",
        "Phát triển plugin và tính năng WordPress tùy biến.",
        "Viết công cụ crawl Python, chuyển dữ liệu sang WordPress và WooCommerce.",
        "Tối ưu PageSpeed và Core Web Vitals.",
        "Bảo trì và bảo mật website khách hàng.",
      ],
      selected: resumeConfig.work[1].selected,
    },
    {
      company: "Meta Technology",
      role: "Backend Developer, part-time",
      stack: "",
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
      stack: "",
      period: "03/2022 – 06/2022",
      location: "Đà Nẵng",
      summary: "",
      responsibilities: [
        "Xây dựng API bằng Django.",
        "Viết unit test.",
        "Sửa lỗi và bảo trì hệ thống.",
      ],
      selected: [] as string[],
    },
  ],
  projects: [
    {
      name: "Hoàn Hời",
      link: { label: "hoanhoi.com", href: "https://hoanhoi.com" },
      role: "Người sáng lập — trực tiếp phát triển và vận hành",
      stack: "",
      period: "08/2026 – nay",
      summary: "Nền tảng hoàn tiền khi mua sắm online, đang hoạt động với người dùng thật; tôi trực tiếp phát triển, vận hành và đối soát hằng ngày.",
      responsibilities: [
        "Xây dựng toàn bộ dự án bằng Next.js.",
        "Tích hợp Shopee, Lazada, TikTok Shop, ACCESSTRADE.",
        "Xây dựng hệ thống ví: ghi nhận tiền hoàn, rút tiền và xử lý đơn hủy.",
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
