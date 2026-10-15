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
    tags: ["JavaScript", "Canvas API", "WebP", "No build"],
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
    tags: ["JavaScript", "WebAssembly", "Ghostscript", "PDF", "Office"],
    links: [
      { name: "Website", url: "https://hoangpham.is-a.dev/file-compressor/" },
      { name: "GitHub", url: "https://github.com/hoangpham2263/file-compressor" },
    ],
    image: "/tools/file-compressor.webp",
  },
];
