import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { siteConfig } from "@/config/site.config";
import { getDictionary, languageAlternates, type Locale } from "@/i18n";

export function contactMetadata(locale: Locale = "en"): Metadata {
  const t = getDictionary(locale).contact;
  return {
    title: `${t.title} | ${siteConfig.creator.name}`,
    description: t.description,
    alternates: languageAlternates("/contact", locale),
  };
}

const getContacts = (t: ReturnType<typeof getDictionary>["contact"]) => [
  { icon: <Mail size={18} />, label: "Email", value: "hoangpham2263@gmail.com", href: "mailto:hoangpham2263@gmail.com" },
  { icon: <LinkedInLogoIcon width={18} height={18} />, label: "LinkedIn", value: "hoangpham2263", href: "https://www.linkedin.com/in/hoangpham2263/" },
  { icon: <GitHubLogoIcon width={18} height={18} />, label: "GitHub", value: "hoangpham2263", href: "https://github.com/hoangpham2263" },
  { icon: <MapPin size={18} />, label: t.location, value: t.locationValue },
];

export default function ContactView({ locale = "en" }: { locale?: Locale }) {
  const t = getDictionary(locale).contact;
  const contacts = getContacts(t);
  return (
    <div className="w-full max-w-5xl mt-0 md:mt-10">
      <p className="text-sm text-muted-foreground max-w-2xl">
        {t.intro}
      </p>
      <div className="mt-8 grid sm:grid-cols-2 gap-3">
        {contacts.map((c) => {
          const content = (
            <>
              <span className="text-muted-foreground">{c.icon}</span>
              <span>
                <span className="block text-xs text-muted-foreground">{c.label}</span>
                <span className="text-sm font-medium">{c.value}</span>
              </span>
            </>
          );
          return c.href ? (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border p-4 flex items-center gap-3 hover:border-b-4 hover:border-primary/30 transition-all duration-100"
            >
              {content}
            </a>
          ) : (
            <div key={c.label} className="rounded-xl border p-4 flex items-center gap-3">
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}
