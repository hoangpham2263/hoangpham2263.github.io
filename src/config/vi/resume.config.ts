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
        "Soạn và review các bài toán nâng cao kèm lời giải tham chiếu đã kiểm chứng.",
        "Xây dựng các bài benchmark lập trình với môi trường Docker và test tự động.",
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
        "Xây dựng theme WordPress chuẩn SEO từ thiết kế Figma cho website thương mại, giáo dục và dịch vụ.",
        "Xây dựng shop WooCommerce với danh mục sản phẩm, tìm kiếm và đặt hàng online.",
        "Phát triển tính năng WordPress riêng bằng PHP, JavaScript, WP REST API, Next.js và API bên thứ ba.",
        "Viết công cụ crawl bằng Python để nhập dữ liệu và chuyển shop từ nền tảng khác sang WooCommerce.",
        "Thiết lập technical SEO với Rank Math, cải thiện tốc độ trang và Core Web Vitals.",
        "Bảo trì và bảo mật website khách hàng, phối hợp với designer, QA và PM để bàn giao đúng hạn.",
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
        "Xây dựng API bằng Next.js để kết nối frontend và backend.",
        "Duy trì luồng dữ liệu giữa các service frontend và backend.",
        "Cải thiện thời gian phản hồi của API và sửa lỗi hệ thống.",
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
        "Viết unit test để kiểm tra chức năng.",
        "Làm việc với cơ sở dữ liệu để lưu trữ và truy vấn dữ liệu.",
        "Sửa lỗi và hỗ trợ bảo trì hệ thống.",
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
        "Xây dựng toàn bộ sản phẩm bằng Next.js, PostgreSQL và Redis: ứng dụng người dùng và hệ thống quản trị.",
        "Tích hợp Shopee, Lazada, TikTok Shop và ACCESSTRADE để đồng bộ và đối soát đơn hàng affiliate.",
        "Thiết kế luồng ví và sổ cái (ledger) cho hoàn tiền, rút tiền và đơn bị hủy/hoàn.",
        "Deploy lên VPS kèm sao lưu cơ sở dữ liệu tự động.",
      ],
    },
  ],
  skills: [
    { group: "WordPress", items: "Custom Theme, phát triển Plugin, WooCommerce, ACF, Elementor, Flatsome" },
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
