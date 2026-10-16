import Link from "next/link";
import { ArrowLeft, FolderOpen, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";

// Static 404 (GitHub Pages serves out/404.html) — bilingual, same look as the site
export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg text-center">
        <Link href="/" className="inline-block" aria-label="HoangPham">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/hp-icon.svg" alt="HoangPham" width={56} height={56} />
        </Link>
        <p className="mt-8 text-7xl font-bold font-heading tracking-tight bg-gradient-to-br from-blue-500 to-blue-700 bg-clip-text text-transparent">
          404
        </p>
        <h1 className="mt-4 text-2xl font-semibold font-heading">Không tìm thấy trang</h1>
        <p className="mt-2 text-muted-foreground">
          Trang bạn tìm không tồn tại hoặc đã được chuyển đi.
          <br />
          <span className="text-sm">Page not found — it may have moved or no longer exists.</span>
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <Button asChild>
            <Link href="/">
              <ArrowLeft size={16} /> Về trang chủ
            </Link>
          </Button>
          <Button variant="outline" asChild className="hover:border-primary/40 hover:bg-primary/[0.06] hover:text-primary">
            <Link href="/projects">
              <FolderOpen size={16} /> Dự án
            </Link>
          </Button>
          <Button variant="outline" asChild className="hover:border-primary/40 hover:bg-primary/[0.06] hover:text-primary">
            <Link href="/blog">
              <Newspaper size={16} /> Blog
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
