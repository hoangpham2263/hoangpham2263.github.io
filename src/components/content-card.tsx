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
  const Wrap = ({ children, className }: { children: React.ReactNode; className?: string }) =>
    href ? (
      <Link href={href} className={className}>
        {children}
      </Link>
    ) : (
      <div className={className}>{children}</div>
    );

  return (
    <div className="flex flex-col-reverse md:flex-row p-3 justify-between gap-3 md:gap-2 rounded-xl border overflow-hidden">
      <div className={image ? "space-y-2 w-full md:w-3/5" : "space-y-2 w-full"}>
        <Wrap className="block space-y-2 group/link">
          {meta && <p className="text-xs text-muted-foreground">{meta}</p>}
          <div className="inline-flex items-center gap-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-xl font-semibold font-heading">{title}</h2>
              {badge}
            </div>
            {href && (
              <span className="-translate-x-1 opacity-0 group-hover/link:translate-x-0 group-hover/link:opacity-100 transition-all duration-100 ease-in-out">
                <StepForward size={12} />
              </span>
            )}
          </div>
          <p className="text-sm text-foreground/85 leading-6 max-w-2xl">{description}</p>
        </Wrap>
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
          <div className="pt-2 md:mb-4">
            <LinksSection links={links} locale={locale} />
          </div>
        )}
      </div>
      {image && (
        <div className="w-full md:w-2/5 aspect-video overflow-hidden hover:border duration-100 transition-all transform-gpu ease-in-out rounded-xl">
          <Wrap>
            <Picture
              image={image as ImageType}
              width={600}
              height={338}
              quality={100}
              alt={title}
              className="w-full h-full object-cover scale-100 hover:scale-105 transition-all transform-gpu ease-in-out"
            />
          </Wrap>
        </div>
      )}
    </div>
  );
}
