# Hướng dẫn tự cập nhật & đăng portfolio (hoangpham.is-a.dev)

Site là Next.js xuất tĩnh (`output: "export"`), đẩy lên GitHub là **tự build và tự đăng** lên GitHub Pages. Domain `hoangpham.is-a.dev` đã trỏ sẵn (file `public/CNAME`), không cần làm gì thêm.

## 1. Sửa cái gì ở đâu

| Muốn sửa | File |
|---|---|
| Thêm / sửa dự án | `content/projects/<ten-du-an>/index.mdx` |
| Ảnh của dự án | để chung thư mục: `content/projects/<ten-du-an>/cover.webp` |
| Tên, mô tả SEO, link mạng xã hội | `src/config/site.config.ts` |
| Trang Experience | `src/config/experience.config.ts` |
| Danh sách kỹ năng (trang chủ) | `src/config/skills.config.ts` |
| Trang /cv (bản web của CV) | `src/config/resume.config.ts` |
| Menu trên cùng | `src/config/navbar.config.ts` |
| File CV PDF (nút "View CV") | `public/pham-quoc-hoang-cv.pdf` — thay file mới, **giữ nguyên tên** |

## 2. Chạy thử trên máy (lần đầu)

```bash
cd ~/Workspace/hoangpham2263.github.io
corepack enable
yarn install
yarn dev
```

Mở http://localhost:3000 để xem. Sửa file nào thì trang tự cập nhật. Tắt bằng `Ctrl + C`.

## 3. Thêm một dự án mới

Mỗi dự án là **một thư mục** chứa nội dung và ảnh:

```
content/projects/
└── ten-du-an-moi/        # tên thư mục = đường dẫn /projects/ten-du-an-moi
    ├── index.mdx         # nội dung dự án
    ├── cover.webp        # ảnh bìa (nên khoảng 1200×630)
    └── showcase.webp     # ảnh thêm (nếu có)
```

1. Copy nguyên thư mục một dự án có sẵn, ví dụ `content/projects/kim-quoc-tien/` → đổi tên thành `ten-du-an-moi/` (chữ thường, không dấu, nối bằng `-`).
2. Thay `cover.webp` bằng ảnh của dự án mới.
3. Sửa phần đầu file (giữa hai dòng `---`):

```yaml
---
title: "Tên dự án"
description: "Một câu mô tả ngắn, hiện trên thẻ dự án."
date: "2026-10-01"
priority: 5            # số càng nhỏ càng hiện trước (site đang chạy xếp trước)
tags: ["WordPress", "WooCommerce", "Puramu"]
links: [
  {
    name: "Website",
    url: "https://ten-mien.com/",
  },
]
image: "./cover.webp"
---
```

- `title`, `description`, `image`, `links` là **bắt buộc**. Dự án không có link thì để `links: []`.
- Thêm `sortLast: true` nếu muốn dự án nằm cuối danh sách (vd site đã ngừng chạy).

4. Muốn chèn thêm ảnh trong bài: bỏ ảnh vào cùng thư mục rồi viết `![Mô tả](./ten-anh.webp)`.
5. Bên dưới phần `---` viết nội dung bằng Markdown (giống các file cũ: `## Overview`, gạch đầu dòng Client / Type / Year / Role / Live…).

## 4. Kiểm tra trước khi đăng

```bash
yarn build
```

Chạy xong không báo lỗi (có thư mục `out/`) là ổn. Lỗi hay gặp:
- Thiếu `image` hoặc sai tên ảnh → ảnh phải nằm cùng thư mục và ghi `./ten-anh.webp`.
- Thiếu `links` → thêm `links: []`.
- Quên dấu `"` hoặc dấu `,` trong phần đầu file.

## 5. Đăng lên (deploy)

```bash
git add -A
git commit -m "content: thêm dự án Tên dự án"
git push origin main
```

GitHub tự chạy workflow **"Deploy Next.js site to Pages"** (file `.github/workflows/nextjs.yml`), khoảng 2–4 phút. Xem tiến độ ở tab **Actions**:
https://github.com/hoangpham2263/hoangpham2263.github.io/actions

- Dấu ✅ xanh: đã lên, mở https://hoangpham.is-a.dev (nhấn `Cmd + Shift + R` nếu chưa thấy thay đổi).
- Dấu ❌ đỏ: bấm vào để xem log. Hay gặp nhất là lỗi `yarn install --frozen-lockfile` khi có cài thêm gói: chạy `yarn install` trên máy rồi commit luôn file `yarn.lock`.
