// Services shown on /services. Text takes both languages.
export type Service = {
  title: { vi: string; en: string };
  description: { vi: string; en: string };
  includes: { vi: string[]; en: string[] };
  tags: string[];
};

export const servicesConfig: Service[] = [
  {
    title: { vi: "Thiết kế & phát triển website", en: "Website design & development" },
    description: {
      vi: "Website doanh nghiệp, website bán hàng hoặc web app riêng — làm từ thiết kế Figma, nhanh, chuẩn SEO và dễ tự quản lý nội dung.",
      en: "Business sites, online stores or custom web apps — built from your Figma design, fast, SEO-friendly and easy to manage yourself.",
    },
    includes: {
      vi: ["WordPress theme riêng theo thiết kế, responsive mọi thiết bị", "Shop WooCommerce: danh mục, biến thể, giỏ hàng, đặt hàng", "Web app / trang quản trị riêng bằng Next.js khi cần nghiệp vụ đặc thù", "Chuyển dữ liệu từ Haravan, Shopee hoặc site cũ; hướng dẫn sau bàn giao"],
      en: ["Custom WordPress theme from your design, responsive on every device", "WooCommerce stores: catalogue, variations, cart and checkout", "Custom web apps / admin panels in Next.js for special workflows", "Data migration from Haravan, Shopee or an old site; handover guide"],
    },
    tags: ["WordPress", "WooCommerce", "Next.js", "Figma"],
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
