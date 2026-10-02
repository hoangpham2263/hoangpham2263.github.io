import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { siteConfig } from "@/config/site.config";

export const metadata: Metadata = {
  title: `Contact | ${siteConfig.creator.name}`,
  description: "Have a project in mind? Get in touch via Zalo, email or phone.",
};

const contacts = [
  { icon: <MessageCircle size={18} />, label: "Zalo", value: "0971 955 144", href: "https://zalo.me/0971955144" },
  { icon: <Mail size={18} />, label: "Email", value: "hoangpham2263@gmail.com", href: "mailto:hoangpham2263@gmail.com" },
  { icon: <Phone size={18} />, label: "Phone", value: "0971 955 144", href: "tel:+84971955144" },
  { icon: <LinkedInLogoIcon width={18} height={18} />, label: "LinkedIn", value: "hoangpham2263", href: "https://www.linkedin.com/in/hoangpham2263/" },
  { icon: <GitHubLogoIcon width={18} height={18} />, label: "GitHub", value: "hoangpham2263", href: "https://github.com/hoangpham2263" },
  { icon: <MapPin size={18} />, label: "Location", value: "Ho Chi Minh City, Vietnam" },
];

export default function ContactPage() {
  return (
    <div className="w-full max-w-5xl mt-10">
      <p className="text-sm text-muted-foreground max-w-2xl">
        Have a project in mind? I&apos;d love to hear about it. Message me on Zalo for the fastest reply, or send an
        email with your project details and I&apos;ll get back to you as soon as possible.
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
