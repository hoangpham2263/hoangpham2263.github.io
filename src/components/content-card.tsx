import Picture from "@/components/picture";
import LinksSection from "@/components/links-section";
import type { Locale } from "@/i18n";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Image as ImageType } from "velite";

// Shared card used by projects, blog posts and tools so they look the same
type ContentCardProps = {
  title: string;
  description: string;
  href?: string;
  image?: ImageType | { src: string; width?: number; height?: number; blurDataURL?: string };
  tags?: string[];
  links?: { name: string; url: string }[];
  meta?: React.ReactNode; // small line above the title (date, ...)
  badge?: React.ReactNode; // next to the title (status, ...)
  locale?: Locale;
};

export default function ContentCard({ title, description, href, image, tags = [], links = [], meta, badge, locale = "vi" }: ContentCardProps) {

  return (
    <div className={`group/card relative flex flex-col-reverse md:flex-row p-3 justify-between gap-3 md:gap-2 rounded-xl border overflow-hidden transition-[border-color,box-shadow] duration-200 ${href ? "hover:border-primary/30 hover:shadow-[0_8px_24px_-12px_rgba(37,99,235,0.25)]" : ""}`}>
      <div className={image ? "space-y-2 w-full md:w-3/5" : "space-y-2 w-full"}>
        <div className="space-y-2">
          {meta && <p className="text-xs text-muted-foreground">{meta}</p>}
          <div className="inline-flex items-center gap-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-xl font-semibold font-heading">
                {href ? (
                  // Stretched link: the whole card opens the detail page
                  /^https?:/.test(href) ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="after:absolute after:inset-0 after:z-0 transition-colors duration-200 group-hover/card:text-primary">
                      {title}
                    </a>
                  ) : (
                    <Link href={href} className="after:absolute after:inset-0 after:z-0 transition-colors duration-200 group-hover/card:text-primary">
                      {title}
                    </Link>
                  )
                ) : (
                  title
                )}
              {href && (
                <ArrowRight
                  size={18}
                  aria-hidden
                  className="hidden md:inline-block ml-1.5 align-[-2px] text-primary opacity-0 -translate-x-1 transition-all duration-200 group-hover/card:opacity-100 group-hover/card:translate-x-0"
                />
              )}
              </h2>
              {badge}
            </div>
          </div>
          <p className="text-sm text-foreground/85 leading-6 max-w-2xl">{description}</p>
        </div>
        {tags.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap">
            {tags.map((tag) => (
              <p key={tag} className="px-2 py-1 rounded-md bg-primary/[0.08] text-primary/90 text-xs">
                {tag}
              </p>
            ))}
          </div>
        )}
        {links.length > 0 && (
          <div className="relative z-10 pt-2 md:mb-4">
            <LinksSection links={links} locale={locale} />
          </div>
        )}
      </div>
      {image && (
        <div className="pointer-events-none w-full md:w-2/5 shrink-0 self-start md:self-center md:order-first aspect-video overflow-hidden rounded-xl border">
            <Picture
              image={image as ImageType}
              width={600}
              height={338}
              quality={100}
              alt={title}
              className="w-full h-full object-cover object-top scale-100 group-hover/card:scale-[1.03] transition-transform duration-300 transform-gpu ease-out"
            />
        </div>
      )}
    </div>
  );
}
