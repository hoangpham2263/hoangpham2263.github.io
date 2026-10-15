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
      vi: "Chuyển ảnh sang WebP, JPEG, PNG, nén và resize hàng loạt ngay trên trình duyệt — ảnh không được tải lên đâu cả.",
      en: "Convert images to WebP, JPEG or PNG, compress and resize in batches right in the browser — nothing is uploaded.",
    },
    status: "done",
    tags: ["JavaScript", "Canvas API", "WebP", "No build"],
    links: [
      { name: "Website", url: "https://hoangpham.is-a.dev/image-converter/" },
      { name: "GitHub", url: "https://github.com/hoangpham2263/image-converter" },
    ],
    image: "/tools/image-converter.webp",
  },
];
