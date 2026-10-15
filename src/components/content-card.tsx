import Picture from "@/components/picture";
import LinksSection from "@/components/links-section";
import type { Locale } from "@/i18n";
import { StepForward } from "lucide-react";
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
    <div className={`group/card relative flex flex-col-reverse md:flex-row p-3 justify-between gap-3 md:gap-2 rounded-xl border overflow-hidden transition-colors ${href ? "hover:border-primary/40 hover:bg-muted/30" : ""}`}>
      <div className={image ? "space-y-2 w-full md:w-3/5" : "space-y-2 w-full"}>
        <div className="space-y-2">
          {meta && <p className="text-xs text-muted-foreground">{meta}</p>}
          <div className="inline-flex items-center gap-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-xl font-semibold font-heading">
                {href ? (
                  // Stretched link: the whole card opens the detail page
                  /^https?:/.test(href) ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="after:absolute after:inset-0 after:z-0 group-hover/card:underline underline-offset-4">
                      {title}
                    </a>
                  ) : (
                    <Link href={href} className="after:absolute after:inset-0 after:z-0 group-hover/card:underline underline-offset-4">
                      {title}
                    </Link>
                  )
                ) : (
                  title
                )}
              </h2>
              {badge}
            </div>
            {href && (
              <span className="-translate-x-1 opacity-0 group-hover/card:translate-x-0 group-hover/card:opacity-100 transition-all duration-100 ease-in-out">
                <StepForward size={12} />
              </span>
            )}
          </div>
          <p className="text-sm text-foreground/85 leading-6 max-w-2xl">{description}</p>
        </div>
        {tags.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap">
            {tags.map((tag) => (
              <p key={tag} className="px-2 py-1 rounded bg-muted text-foreground/85 text-xs">
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
        <div className="w-full md:w-2/5 aspect-video overflow-hidden rounded-xl border">
            <Picture
              image={image as ImageType}
              width={600}
              height={338}
              quality={100}
              alt={title}
              className="w-full h-full object-cover object-top scale-100 group-hover/card:scale-105 transition-all transform-gpu ease-in-out"
            />
        </div>
      )}
    </div>
  );
}
