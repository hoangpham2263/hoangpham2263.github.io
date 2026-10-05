# Pham Quoc Hoang — Portfolio & Blog

Personal portfolio and blog of **Pham Quoc Hoang (Will)**, Full-Stack Developer · WordPress and creator of [Hoàn Hời](https://hoanhoi.com).

Live: https://hoangpham2263.github.io

Built with Next.js 15, MDX, Velite and shadcn/ui, statically exported and deployed to GitHub Pages.

## Development

```bash
corepack enable
yarn install
yarn dev
```

## Content

```
content/
├── projects/   # Portfolio projects (.mdx + assets/)
├── tils/       # Today I Learned notes
└── blogs/      # Blog posts
src/config/     # Name, links, experience, skills, resume, navbar
public/
└── pham-quoc-hoang-cv.pdf   # File served by the "Download CV" button on /cv
```

## Updating the CV PDF

Export the CV from Canva as PDF, then replace `public/pham-quoc-hoang-cv.pdf` with the new file, keeping the same file name. The "Download CV" button on `/cv` always serves this file.

## Credits

Based on [MinhOmega's portfolio](https://github.com/MinhOmega/MinhOmega.github.io), licensed under AGPL-3.0.
