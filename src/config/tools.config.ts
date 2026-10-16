// Tools & automations. Add one object per tool; text fields take both languages.
// status: "done" (usable), "building" (in progress)
export type Tool = {
  name: string;
  description: { vi: string; en: string };
  status: "done" | "building";
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
];
