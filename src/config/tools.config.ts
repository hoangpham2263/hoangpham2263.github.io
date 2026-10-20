// Tools & automations. Add one object per tool; text fields take both languages.
// status: "done" (usable), "building" (in progress)
export type Tool = {
  name: string;
  description: { vi: string; en: string };
  status: "done" | "building";
  kind?: "app" | "guide" | "wp" | "private"; // app = runs in the browser (default), guide = docs, wp = public WordPress kit repo, private = private WordPress kit repo
  tags: string[];
  links: { name: string; url: string }[]; // e.g. { name: "GitHub", url: "https://github.com/..." }
  premium?: boolean; // paid plugin (WordPress tab groups it separately)
  image?: string; // optional screenshot in /public, e.g. "/tools/wp-auto-poster.webp"
};

export const toolsConfig: Tool[] = [
  {
    name: "Drive Gallery",
    description: {
      vi: "Quản lý và lưu trữ ảnh trên Google Drive. Tự động đọc thông số máy ảnh & vị trí chụp (GPS / Địa danh thực tế), tạo link nhúng nhanh.",
      en: "Host and manage photos on Google Drive. Auto-extract camera specs & GPS location names, instant embed links.",
    },
    status: "done",
    tags: ["Google Drive", "EXIF", "GPS", "Photo Management", "Direct Link", "Cloud"],
    links: [
      { name: "Website", url: "https://hoangpham.is-a.dev/drive-gallery/" },
      { name: "GitHub", url: "https://github.com/hoangpham2263/drive-gallery" },
    ],
  },
  {
    name: "File Converter",
    description: {
      vi: "Đổi định dạng ảnh (WebP, JPG, PNG, AVIF), gộp ảnh thành PDF, tách PDF thành ảnh.",
      en: "Convert images (WebP, JPG, PNG, AVIF), combine images into a PDF, split a PDF into images.",
    },
    status: "done",
    tags: ["JPG", "PNG", "WEBP", "AVIF", "GIF", "BMP", "SVG", "PDF"],
    links: [
      { name: "Website", url: "https://hoangpham.is-a.dev/file-converter/" },
      { name: "GitHub", url: "https://github.com/hoangpham2263/file-converter" },
    ],
  },
  {
    name: "File Compressor",
    description: {
      vi: "Giảm dung lượng PDF, Word, PowerPoint, Excel, EPUB và ảnh.",
      en: "Shrink PDF, Word, PowerPoint, Excel, EPUB and image files.",
    },
    status: "done",
    tags: ["PDF", "DOCX", "PPTX", "XLSX", "ODT", "ODS", "ODP", "EPUB", "JPG", "PNG", "WEBP"],
    links: [
      { name: "Website", url: "https://hoangpham.is-a.dev/file-compressor/" },
      { name: "GitHub", url: "https://github.com/hoangpham2263/file-compressor" },
    ],
  },
  {
    name: "PDF Tools",
    description: {
      vi: "Cắt, tách và gộp PDF.",
      en: "Cut, split and merge PDFs.",
    },
    status: "done",
    tags: ["PDF"],
    links: [
      { name: "Website", url: "https://hoangpham.is-a.dev/pdf-tools/" },
      { name: "GitHub", url: "https://github.com/hoangpham2263/pdf-tools" },
    ],
  },
  {
    name: "QR Generator",
    description: {
      vi: "Tạo mã QR cho link, WiFi, chuyển khoản VietQR và danh thiếp.",
      en: "QR codes for links, WiFi, VietQR transfers and contact cards.",
    },
    status: "done",
    tags: ["PNG", "SVG"],
    links: [
      { name: "Website", url: "https://hoangpham.is-a.dev/qr-generator/" },
      { name: "GitHub", url: "https://github.com/hoangpham2263/qr-generator" },
    ],
  },
  {
    name: "Image Resizer",
    description: {
      vi: "Đổi kích thước và cắt ảnh hàng loạt theo tỉ lệ (1:1, 4:3, 16:9).",
      en: "Batch resize and crop images to 1:1, 4:3 or 16:9.",
    },
    status: "done",
    tags: ["JPG", "PNG", "WEBP", "AVIF", "GIF", "BMP"],
    links: [
      { name: "Website", url: "https://hoangpham.is-a.dev/image-resizer/" },
      { name: "GitHub", url: "https://github.com/hoangpham2263/image-resizer" },
    ],
  },
  {
    name: "Link Converter",
    description: {
      vi: "Chuyển link sản phẩm Shopee thành link affiliate.",
      en: "Turns Shopee product links into affiliate links.",
    },
    status: "done",
    tags: ["Shopee", "Affiliate", "Cloudflare Workers"],
    links: [
      { name: "Website", url: "https://hoangpham.is-a.dev/link-converter/" },
      { name: "GitHub", url: "https://github.com/hoangpham2263/link-converter" },
    ],
  },
  {
    name: "WP Crawl Standard",
    kind: "guide",
    description: {
      vi: "Quy chuẩn dựng tool crawl dữ liệu → WordPress / WooCommerce.",
      en: "A standard for building crawl → WordPress / WooCommerce import tools.",
    },
    status: "done",
    tags: ["Python", "WordPress", "WooCommerce"],
    links: [
      { name: "Website", url: "https://hoangpham.is-a.dev/wp-crawl-standard/" },
      { name: "GitHub", url: "https://github.com/hoangpham2263/wp-crawl-standard" },
    ],
  },
  {
    name: "wp-theme-starter",
    kind: "wp",
    description: { vi: "Theme khởi đầu cho custom theme.", en: "Starter theme for custom themes." },
    status: "done",
    tags: [],
    links: [{ name: "Website", url: "https://hoangpham.is-a.dev/wp-theme-starter/" }, { name: "GitHub", url: "https://github.com/hoangpham2263/wp-theme-starter" }, { name: "Download", url: "https://github.com/hoangpham2263/wp-theme-starter/releases/latest" }],
  },
  {
    name: "wp-plugin-boilerplate",
    kind: "wp",
    description: { vi: "Khung plugin chuẩn.", en: "Plugin boilerplate." },
    status: "done",
    tags: [],
    links: [{ name: "Website", url: "https://hoangpham.is-a.dev/wp-plugin-boilerplate/" }, { name: "GitHub", url: "https://github.com/hoangpham2263/wp-plugin-boilerplate" }],
  },
  {
    name: "wp-dev-docker",
    kind: "wp",
    description: { vi: "Môi trường dev WordPress bằng Docker.", en: "Docker WordPress development environment." },
    status: "done",
    tags: [],
    links: [{ name: "Website", url: "https://hoangpham.is-a.dev/wp-dev-docker/" }, { name: "GitHub", url: "https://github.com/hoangpham2263/wp-dev-docker" }],
  },
  {
    name: "wp-snippets",
    kind: "wp",
    description: { vi: "Snippet WordPress / WooCommerce.", en: "WordPress / WooCommerce snippets." },
    status: "done",
    tags: [],
    links: [{ name: "Website", url: "https://hoangpham.is-a.dev/wp-snippets/" }, { name: "GitHub", url: "https://github.com/hoangpham2263/wp-snippets" }],
  },
  {
    name: "wp-theme-flatsome-child",
    kind: "private",
    description: { vi: "Child theme cho Flatsome.", en: "Flatsome child theme." },
    status: "done",
    tags: [],
    links: [{ name: "GitHub", url: "https://github.com/hoangpham2263/wp-theme-flatsome-child" }, { name: "Download", url: "https://github.com/hoangpham2263/wp-theme-flatsome-child/releases/latest" }],
  },
  {
    name: "wp-theme-flatsome",
    kind: "private",
    description: { vi: "Theme Flatsome.", en: "Flatsome theme." },
    status: "done",
    tags: [],
    links: [{ name: "GitHub", url: "https://github.com/hoangpham2263/wp-theme-flatsome" }, { name: "Download", url: "https://github.com/hoangpham2263/wp-theme-flatsome/releases/latest" }],
  },
  {
    name: "wp-plugin-woo-flash-sale",
    kind: "private",
    description: { vi: "Flash sale cho WooCommerce.", en: "Flash sales for WooCommerce." },
    status: "done",
    tags: [],
    links: [{ name: "GitHub", url: "https://github.com/hoangpham2263/wp-plugin-woo-flash-sale" }, { name: "Download", url: "https://github.com/hoangpham2263/wp-plugin-woo-flash-sale/releases/latest" }],
  },
  {
    name: "wp-plugin-woo-quick-buy",
    kind: "private",
    description: { vi: "Nút mua nhanh cho WooCommerce.", en: "Quick Buy button for WooCommerce." },
    status: "done",
    tags: [],
    links: [{ name: "GitHub", url: "https://github.com/hoangpham2263/wp-plugin-woo-quick-buy" }, { name: "Download", url: "https://github.com/hoangpham2263/wp-plugin-woo-quick-buy/releases/latest" }],
  },
  {
    name: "wp-plugin-woo-product-review",
    kind: "private",
    description: { vi: "Đánh giá sản phẩm WooCommerce.", en: "WooCommerce product reviews." },
    status: "done",
    tags: [],
    links: [{ name: "GitHub", url: "https://github.com/hoangpham2263/wp-plugin-woo-product-review" }, { name: "Download", url: "https://github.com/hoangpham2263/wp-plugin-woo-product-review/releases/latest" }],
  },
  {
    name: "wp-plugin-post-rating",
    kind: "private",
    description: { vi: "Chấm sao bài viết.", en: "Post star ratings." },
    status: "done",
    tags: [],
    links: [{ name: "GitHub", url: "https://github.com/hoangpham2263/wp-plugin-post-rating" }, { name: "Download", url: "https://github.com/hoangpham2263/wp-plugin-post-rating/releases/latest" }],
  },
  {
    name: "wp-plugin-branch-finder",
    kind: "private",
    description: { vi: "Tìm chi nhánh / cửa hàng.", en: "Branch / store finder." },
    status: "done",
    tags: [],
    links: [{ name: "GitHub", url: "https://github.com/hoangpham2263/wp-plugin-branch-finder" }, { name: "Download", url: "https://github.com/hoangpham2263/wp-plugin-branch-finder/releases/latest" }],
  },
  {
    name: "wp-plugin-woo-viettelpost-shipping",
    kind: "private",
    description: { vi: "Phí ship Viettel Post cho WooCommerce.", en: "Viettel Post shipping rates for WooCommerce." },
    status: "done",
    tags: [],
    links: [{ name: "GitHub", url: "https://github.com/hoangpham2263/wp-plugin-woo-viettelpost-shipping" }, { name: "Download", url: "https://github.com/hoangpham2263/wp-plugin-woo-viettelpost-shipping/releases/latest" }],
  },
  {
    name: "wp-plugin-elementor-pro",
    kind: "private",
    premium: true,
    description: { vi: "Elementor Pro 4.0.1", en: "Elementor Pro 4.0.1" },
    status: "done",
    tags: [],
    links: [{ name: "GitHub", url: "https://github.com/hoangpham2263/wp-plugin-elementor-pro" }, { name: "Download", url: "https://github.com/hoangpham2263/wp-plugin-elementor-pro/releases/latest" }],
  },
  {
    name: "wp-plugin-acf-pro",
    kind: "private",
    premium: true,
    description: { vi: "ACF Pro 6.1.7", en: "ACF Pro 6.1.7" },
    status: "done",
    tags: [],
    links: [{ name: "GitHub", url: "https://github.com/hoangpham2263/wp-plugin-acf-pro" }, { name: "Download", url: "https://github.com/hoangpham2263/wp-plugin-acf-pro/releases/latest" }],
  },
  {
    name: "wp-plugin-polylang-pro",
    kind: "private",
    premium: true,
    description: { vi: "Polylang Pro 3.6.3", en: "Polylang Pro 3.6.3" },
    status: "done",
    tags: [],
    links: [{ name: "GitHub", url: "https://github.com/hoangpham2263/wp-plugin-polylang-pro" }, { name: "Download", url: "https://github.com/hoangpham2263/wp-plugin-polylang-pro/releases/latest" }],
  },
  {
    name: "wp-plugin-rank-math-pro",
    kind: "private",
    premium: true,
    description: { vi: "Rank Math Pro 3.0.40", en: "Rank Math Pro 3.0.40" },
    status: "done",
    tags: [],
    links: [{ name: "GitHub", url: "https://github.com/hoangpham2263/wp-plugin-rank-math-pro" }, { name: "Download", url: "https://github.com/hoangpham2263/wp-plugin-rank-math-pro/releases/latest" }],
  },
  {
    name: "wp-plugin-wp-rocket",
    kind: "private",
    premium: true,
    description: { vi: "WP Rocket 3.14.2.1", en: "WP Rocket 3.14.2.1" },
    status: "done",
    tags: [],
    links: [{ name: "GitHub", url: "https://github.com/hoangpham2263/wp-plugin-wp-rocket" }, { name: "Download", url: "https://github.com/hoangpham2263/wp-plugin-wp-rocket/releases/latest" }],
  },
  {
    name: "wp-plugin-wp-mail-smtp-pro",
    kind: "private",
    premium: true,
    description: { vi: "WP Mail SMTP Pro 3.8.0", en: "WP Mail SMTP Pro 3.8.0" },
    status: "done",
    tags: [],
    links: [{ name: "GitHub", url: "https://github.com/hoangpham2263/wp-plugin-wp-mail-smtp-pro" }, { name: "Download", url: "https://github.com/hoangpham2263/wp-plugin-wp-mail-smtp-pro/releases/latest" }],
  },
  {
    name: "wp-plugin-all-in-one-wp-migration",
    kind: "private",
    premium: true,
    description: { vi: "All-in-One WP Migration 7.93", en: "All-in-One WP Migration 7.93" },
    status: "done",
    tags: [],
    links: [{ name: "GitHub", url: "https://github.com/hoangpham2263/wp-plugin-all-in-one-wp-migration" }, { name: "Download", url: "https://github.com/hoangpham2263/wp-plugin-all-in-one-wp-migration/releases/latest" }],
  },
  {
    name: "wp-plugin-all-in-one-wp-migration-unlimited",
    kind: "private",
    premium: true,
    description: { vi: "All-in-One WP Migration Unlimited 2.83", en: "All-in-One WP Migration Unlimited 2.83" },
    status: "done",
    tags: [],
    links: [{ name: "GitHub", url: "https://github.com/hoangpham2263/wp-plugin-all-in-one-wp-migration-unlimited" }, { name: "Download", url: "https://github.com/hoangpham2263/wp-plugin-all-in-one-wp-migration-unlimited/releases/latest" }],
  },
  {
    name: "wp-plugin-cf7-conditional-fields-pro",
    kind: "private",
    premium: true,
    description: { vi: "Contact Form 7 Conditional Fields Pro 2.3.3", en: "Contact Form 7 Conditional Fields Pro 2.3.3" },
    status: "done",
    tags: [],
    links: [{ name: "GitHub", url: "https://github.com/hoangpham2263/wp-plugin-cf7-conditional-fields-pro" }, { name: "Download", url: "https://github.com/hoangpham2263/wp-plugin-cf7-conditional-fields-pro/releases/latest" }],
  },
  {
    name: "wp-plugin-cf7-multistep-pro",
    kind: "private",
    premium: true,
    description: { vi: "Contact Form 7 Multistep Pro 6.5.1", en: "Contact Form 7 Multistep Pro 6.5.1" },
    status: "done",
    tags: [],
    links: [{ name: "GitHub", url: "https://github.com/hoangpham2263/wp-plugin-cf7-multistep-pro" }, { name: "Download", url: "https://github.com/hoangpham2263/wp-plugin-cf7-multistep-pro/releases/latest" }],
  },
];
