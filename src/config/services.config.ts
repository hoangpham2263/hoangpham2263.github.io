// Services shown on /services. Text takes both languages.
export type Service = {
  title: { vi: string; en: string };
  description: { vi: string; en: string };
  includes: { vi: string[]; en: string[] };
  tags: string[];
};

export const servicesConfig: Service[] = [
  {
    title: { vi: "Thiết kế website WordPress", en: "WordPress websites" },
    description: {
      vi: "Website doanh nghiệp làm từ thiết kế Figma thành theme WordPress riêng — nhanh, chuẩn SEO, dễ tự cập nhật nội dung.",
      en: "Business websites built from a Figma design into a custom WordPress theme — fast, SEO-friendly and easy to update yourself.",
    },
    includes: {
      vi: ["Theme riêng theo thiết kế, responsive trên mọi thiết bị", "Trang quản trị dễ dùng (ACF, Elementor khi cần)", "Cài Rank Math, sitemap, schema cơ bản", "Hướng dẫn sử dụng sau bàn giao"],
      en: ["Custom theme from your design, responsive on every device", "Easy-to-use admin (ACF, Elementor when needed)", "Rank Math, sitemap and basic schema set up", "Handover guide after launch"],
    },
    tags: ["WordPress", "PHP", "ACF", "Figma"],
  },
  {
    title: { vi: "Website bán hàng WooCommerce", en: "WooCommerce stores" },
    description: {
      vi: "Shop online với danh mục sản phẩm, tìm kiếm, giỏ hàng và đặt hàng — kèm chuyển dữ liệu từ nền tảng cũ nếu có.",
      en: "Online stores with product catalogues, search, cart and checkout — including data migration from your old platform.",
    },
    includes: {
      vi: ["Danh mục, biến thể, bộ lọc và tìm kiếm sản phẩm", "Giỏ hàng, đặt hàng, thông báo đơn", "Chuyển sản phẩm từ Haravan, Shopee hoặc site cũ sang WooCommerce", "Tối ưu trang sản phẩm cho SEO"],
      en: ["Categories, variations, filters and product search", "Cart, checkout and order notifications", "Product migration from Haravan, Shopee or an old site to WooCommerce", "Product pages optimised for SEO"],
    },
    tags: ["WooCommerce", "PHP", "Python", "REST API"],
  },
  {
    title: { vi: "Tối ưu tốc độ & SEO kỹ thuật", en: "Speed & technical SEO" },
    description: {
      vi: "Cải thiện PageSpeed và Core Web Vitals, sửa lỗi SEO kỹ thuật để website tải nhanh và dễ lên Google hơn.",
      en: "Improve PageSpeed and Core Web Vitals and fix technical SEO issues so your site loads fast and ranks more easily.",
    },
    includes: {
      vi: ["Đo và báo cáo PageSpeed trước/sau", "Tối ưu ảnh, cache (LiteSpeed Cache), CSS/JS", "Rank Math, sitemap, chuyển hướng, lỗi 404", "Bảo mật cơ bản cho WordPress"],
      en: ["PageSpeed report before and after", "Image, cache (LiteSpeed Cache) and CSS/JS optimisation", "Rank Math, sitemap, redirects and 404 fixes", "Basic WordPress security hardening"],
    },
    tags: ["PageSpeed", "Core Web Vitals", "Rank Math", "LiteSpeed Cache"],
  },
  {
    title: { vi: "Crawl & nhập dữ liệu", en: "Data crawling & import" },
    description: {
      vi: "Viết công cụ Python thu thập dữ liệu sản phẩm, bài viết từ website khác và nhập thẳng vào WordPress / WooCommerce.",
      en: "Python tools that collect products or posts from other websites and import them straight into WordPress / WooCommerce.",
    },
    includes: {
      vi: ["Thu thập tên, giá, ảnh, mô tả, biến thể sản phẩm", "Làm sạch và chuẩn hóa dữ liệu", "Nhập vào WooCommerce qua REST API hoặc CSV", "Chạy lại định kỳ khi cần cập nhật"],
      en: ["Collect product names, prices, images, descriptions and variations", "Clean and normalise the data", "Import into WooCommerce via REST API or CSV", "Re-run on a schedule when data changes"],
    },
    tags: ["Python", "Crawler", "WooCommerce", "REST API"],
  },
  {
    title: { vi: "Web app & hệ thống quản trị", en: "Web apps & admin systems" },
    description: {
      vi: "Ứng dụng web và trang quản trị riêng bằng Next.js cho nghiệp vụ đặc thù — như cách mình xây Hoàn Hời.",
      en: "Custom Next.js web apps and admin dashboards for specific workflows — the way I built Hoàn Hời.",
    },
    includes: {
      vi: ["Next.js, TypeScript, PostgreSQL / MySQL", "Tích hợp API bên thứ ba (sàn TMĐT, affiliate, thanh toán)", "Phân quyền người dùng, báo cáo", "Deploy lên VPS, CI/CD với GitHub Actions"],
      en: ["Next.js, TypeScript, PostgreSQL / MySQL", "Third-party API integration (marketplaces, affiliate, payments)", "User roles and reporting", "VPS deployment and CI/CD with GitHub Actions"],
    },
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Docker"],
  },
  {
    title: { vi: "Bảo trì website", en: "Website maintenance" },
    description: {
      vi: "Cập nhật, sao lưu, sửa lỗi và chỉnh sửa nhỏ định kỳ để website luôn chạy ổn định và an toàn.",
      en: "Regular updates, backups, bug fixes and small changes to keep your site stable and secure.",
    },
    includes: {
      vi: ["Cập nhật WordPress, theme, plugin", "Sao lưu định kỳ", "Sửa lỗi, chỉnh nội dung và giao diện nhỏ", "Kiểm tra bảo mật và tốc độ"],
      en: ["WordPress, theme and plugin updates", "Scheduled backups", "Bug fixes and small content or design changes", "Security and speed checks"],
    },
    tags: ["WordPress", "Backup", "Security"],
  },
];
