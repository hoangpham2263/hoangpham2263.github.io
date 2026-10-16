// Tools & automations. Add one object per tool; text fields take both languages.
// status: "done" (usable), "building" (in progress)
export type Tool = {
  name: string;
  description: { vi: string; en: string };
  status: "done" | "building";
  kind?: "app" | "guide" | "private"; // app = runs in the browser (default), guide = docs on GitHub, private = private repo (only my account can open)
  tags: string[];
  links: { name: string; url: string }[]; // e.g. { name: "GitHub", url: "https://github.com/..." }
  image?: string; // optional screenshot in /public, e.g. "/tools/wp-auto-poster.webp"
};

export const toolsConfig: Tool[] = [
  {
    name: "File Converter",
    description: {
      vi: "Tự nhận loại file rồi chọn loại muốn đổi sang: ảnh ↔ ảnh (WebP, JPG, PNG, AVIF), gộp ảnh thành PDF, tách PDF thành ảnh, 5 mức chất lượng, tải ZIP — chạy ngay trên trình duyệt, file không được tải lên đâu cả.",
      en: "Detects each file's type, then converts: image ↔ image (WebP, JPG, PNG, AVIF), images into one PDF, PDF pages into images, five quality levels, ZIP download — runs in the browser, nothing is uploaded.",
    },
    status: "done",
    tags: ["JPG", "PNG", "WEBP", "AVIF", "GIF", "BMP", "SVG", "PDF"],
    links: [
      { name: "Website", url: "https://hoangpham.is-a.dev/file-converter/" },
      { name: "GitHub", url: "https://github.com/hoangpham2263/file-converter" },
    ],
    image: "/tools/file-converter.webp",
  },
  {
    name: "File Compressor",
    description: {
      vi: "Giảm dung lượng PDF, Word, PowerPoint, Excel, LibreOffice, EPUB và ảnh JPG/PNG/WEBP ngay trên trình duyệt — PDF nén bằng Ghostscript, các file khác nén lại ảnh bên trong; file không được tải lên đâu cả.",
      en: "Shrink PDF, Word, PowerPoint, Excel, LibreOffice, EPUB and JPG/PNG/WEBP files in the browser — PDFs via Ghostscript, other files by re-compressing their images; nothing is uploaded.",
    },
    status: "done",
    tags: ["PDF", "DOCX", "PPTX", "XLSX", "ODT", "ODS", "ODP", "EPUB", "JPG", "PNG", "WEBP"],
    links: [
      { name: "Website", url: "https://hoangpham.is-a.dev/file-compressor/" },
      { name: "GitHub", url: "https://github.com/hoangpham2263/file-compressor" },
    ],
    image: "/tools/file-compressor.webp",
  },
  {
    name: "PDF Tools",
    description: {
      vi: "Cắt và gộp PDF ngay trên trình duyệt: xem trước từng trang, chọn trang cần giữ hoặc tách mỗi trang 1 file; gộp nhiều file và sắp xếp thứ tự bằng kéo thả — file không được tải lên đâu cả.",
      en: "Cut and merge PDFs in the browser: preview pages, keep the ones you need or split each page; merge several files and reorder by drag and drop — nothing is uploaded.",
    },
    status: "done",
    tags: ["PDF"],
    links: [
      { name: "Website", url: "https://hoangpham.is-a.dev/pdf-tools/" },
      { name: "GitHub", url: "https://github.com/hoangpham2263/pdf-tools" },
    ],
    image: "/tools/pdf-tools.webp",
  },
  {
    name: "QR Generator",
    description: {
      vi: "Tạo mã QR cho link, văn bản, WiFi, chuyển khoản ngân hàng (VietQR) và danh thiếp; đổi màu, chèn logo, tải PNG hoặc SVG — chạy ngay trên trình duyệt.",
      en: "QR codes for links, text, WiFi, Vietnamese bank transfers (VietQR) and contact cards; custom colors, logo, PNG or SVG download — runs in the browser.",
    },
    status: "done",
    tags: ["PNG", "SVG"],
    links: [
      { name: "Website", url: "https://hoangpham.is-a.dev/qr-generator/" },
      { name: "GitHub", url: "https://github.com/hoangpham2263/qr-generator" },
    ],
    image: "/tools/qr-generator.webp",
  },
  {
    name: "Image Resizer",
    description: {
      vi: "Đổi kích thước và cắt ảnh hàng loạt theo tỉ lệ 1:1, 4:3, 16:9 hoặc chiều rộng cố định, cắt vừa khung hoặc thêm nền trắng — hợp ảnh sản phẩm Shopee, WooCommerce. Chạy ngay trên trình duyệt.",
      en: "Batch resize and crop images to 1:1, 4:3, 16:9 or a fixed width, crop to fill or pad with white — great for Shopee and WooCommerce product photos. Runs in the browser.",
    },
    status: "done",
    tags: ["JPG", "PNG", "WEBP", "AVIF", "GIF", "BMP"],
    links: [
      { name: "Website", url: "https://hoangpham.is-a.dev/image-resizer/" },
      { name: "GitHub", url: "https://github.com/hoangpham2263/image-resizer" },
    ],
    image: "/tools/image-resizer.webp",
  },
  {
    name: "WP Crawl Standard",
    kind: "guide",
    description: {
      vi: "Quy chuẩn dựng tool crawl dữ liệu → nhập vào WordPress / WooCommerce: 10 quy tắc bắt buộc, quy trình 13 bước, cấu trúc thư mục, mẫu cấu hình và code — đưa cho AI đọc là dựng được tool mới đúng chuẩn.",
      en: "A standard for building crawl → WordPress / WooCommerce import tools: 10 rules, a 13-step process, folder layout, config and code templates — hand it to an AI to build new tools the same way.",
    },
    status: "done",
    tags: ["Python", "WordPress", "WooCommerce"],
    links: [{ name: "GitHub", url: "https://github.com/hoangpham2263/wp-crawl-standard" }],
    image: "/tools/wp-crawl-standard.webp",
  },
  {
    name: "wp-theme-starter",
    kind: "private",
    description: { vi: "Theme khởi đầu cho custom theme (Vite, template-parts, WooCommerce).", en: "Starter theme for custom WordPress themes (Vite, template parts, WooCommerce)." },
    status: "done",
    tags: [],
    links: [{ name: "GitHub", url: "https://github.com/hoangpham2263/wp-theme-starter" }, { name: "Download", url: "https://github.com/hoangpham2263/wp-theme-starter/releases/latest" }],
  },
  {
    name: "wp-plugin-boilerplate",
    kind: "private",
    description: { vi: "Khung plugin chuẩn để nhân bản khi làm plugin mới.", en: "Plugin boilerplate to clone for new plugins." },
    status: "done",
    tags: [],
    links: [{ name: "GitHub", url: "https://github.com/hoangpham2263/wp-plugin-boilerplate" }],
  },
  {
    name: "wp-dev-docker",
    kind: "private",
    description: { vi: "Môi trường dev WordPress bằng Docker.", en: "Docker WordPress development environment." },
    status: "done",
    tags: [],
    links: [{ name: "GitHub", url: "https://github.com/hoangpham2263/wp-dev-docker" }],
  },
  {
    name: "wp-snippets",
    kind: "private",
    description: { vi: "Kho đoạn code: tìm kiếm, header, bộ lọc sản phẩm, nút liên hệ nổi…", en: "Reusable snippets: search, header icons, product filters, floating buttons…" },
    status: "done",
    tags: [],
    links: [{ name: "GitHub", url: "https://github.com/hoangpham2263/wp-snippets" }],
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
    description: { vi: "Theme Flatsome (bản quyền của mình).", en: "Flatsome theme (my licensed copy)." },
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
    description: { vi: "Phí ship Viettel Post cho WooCommerce (đang phát triển).", en: "Viettel Post shipping rates for WooCommerce (in progress)." },
    status: "done",
    tags: [],
    links: [{ name: "GitHub", url: "https://github.com/hoangpham2263/wp-plugin-woo-viettelpost-shipping" }, { name: "Download", url: "https://github.com/hoangpham2263/wp-plugin-woo-viettelpost-shipping/releases/latest" }],
  },
  {
    name: "wp-premium-plugins",
    kind: "private",
    description: { vi: "Plugin trả phí có bản quyền (Elementor Pro, ACF Pro, Polylang Pro, WP Rocket…).", en: "Licensed premium plugins (Elementor Pro, ACF Pro, Polylang Pro, WP Rocket…)." },
    status: "done",
    tags: [],
    links: [{ name: "GitHub", url: "https://github.com/hoangpham2263/wp-premium-plugins" }, { name: "Download", url: "https://github.com/hoangpham2263/wp-premium-plugins/releases/latest" }],
  },
];
