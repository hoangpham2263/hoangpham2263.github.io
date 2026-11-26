import ContactCards from "@/views/contact";
import { siteConfig } from "@/config/site.config";
import { servicesConfig } from "@/config/services.config";
import { getDictionary, languageAlternates, type Locale } from "@/i18n";
import { Check } from "lucide-react";
import type { Metadata } from "next";

export function servicesMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale).services;
  return {
    title: `${t.title} | ${siteConfig.creator.name}`,
    description: t.description,
    alternates: languageAlternates("/services", locale),
  };
}

export function ServicesView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).services;
  return (
    <div className="w-full max-w-5xl mt-0 md:mt-6">
      <div className="grid gap-3 md:gap-4 md:grid-cols-2">
        {servicesConfig.map((s) => (
          <div key={s.title.en} className="rounded-xl border p-4 flex flex-col gap-3">
            <div className="space-y-1.5">
              <h2 className="text-lg font-semibold font-heading">{s.title[locale]}</h2>
              <p className="text-sm text-foreground/85 leading-6">{s.description[locale]}</p>
            </div>
            <ul className="space-y-1.5 text-sm text-foreground/85 flex-1">
              {s.includes[locale].map((item) => (
                <li key={item} className="flex gap-2">
                  <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <section id="contact" className="scroll-mt-24 mt-10 space-y-3 md:space-y-4">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold font-heading">{t.contactHeading}</h2>
          <p className="text-sm text-muted-foreground">{t.contactNote}</p>
        </div>
        <ContactCards locale={locale} />
      </section>
    </div>
  );
}
