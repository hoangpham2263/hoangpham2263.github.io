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
    name: "Image Converter",
    description: {
      vi: "Đổi ảnh sang WebP, JPG, PNG và nén với 5 mức chất lượng, nhiều ảnh cùng lúc, tải ZIP — chạy ngay trên trình duyệt, ảnh không được tải lên đâu cả.",
      en: "Convert images to WebP, JPG or PNG and compress with five quality levels, in batches with ZIP download — runs in the browser, nothing is uploaded.",
    },
    status: "done",
    tags: ["JPG", "PNG", "WEBP", "AVIF", "GIF", "BMP"],
    links: [
      { name: "Website", url: "https://hoangpham.is-a.dev/image-converter/" },
      { name: "GitHub", url: "https://github.com/hoangpham2263/image-converter" },
    ],
    image: "/tools/image-converter.webp",
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
    name: "PDF Cutter",
    description: {
      vi: "Cắt file PDF ngay trên trình duyệt: xem trước từng trang, chọn trang cần giữ (hoặc gõ 1-3, 5), tải 1 file hoặc tách mỗi trang 1 file — file không được tải lên đâu cả.",
      en: "Cut PDFs in the browser: preview every page, pick the ones to keep (or type 1-3, 5), download one file or one file per page — nothing is uploaded.",
    },
    status: "done",
    tags: ["PDF"],
    links: [
      { name: "Website", url: "https://hoangpham.is-a.dev/pdf-cutter/" },
      { name: "GitHub", url: "https://github.com/hoangpham2263/pdf-cutter" },
    ],
    image: "/tools/pdf-cutter.webp",
  },
];
