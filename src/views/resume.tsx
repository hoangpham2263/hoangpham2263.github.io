import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download, Globe, Mail, MapPin, Phone } from "lucide-react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import ThemeToggler from "@/components/theme/toggler";
import LanguageSwitcher from "@/components/language-switcher";
import { getResume } from "@/config/localized";
import { getDictionary, languageAlternates, localePath, type Locale } from "@/i18n";
import { siteConfig } from "@/config/site.config";

// PDFs are exported from this page (see scripts/cv-pdf.mjs)
export const cvPdfPath = (locale: Locale) => `/pham-quoc-hoang-cv-${locale}.pdf`;

export function resumeMetadata(locale: Locale = "en"): Metadata {
  const resumeConfig = getResume(locale);
  const t = getDictionary(locale).cv;
  return {
    title: `${t.pageTitle} | ${siteConfig.creator.name}`,
    description: `${resumeConfig.name} — ${resumeConfig.title}. ${resumeConfig.summary}`,
    alternates: languageAlternates("/cv", locale),
  };
}

const icons = {
  address: <MapPin size={13} />,
  phone: <Phone size={13} />,
  mail: <Mail size={13} />,
  globe: <Globe size={13} />,
  github: <GitHubLogoIcon width={13} height={13} />,
  linkedin: <LinkedInLogoIcon width={13} height={13} />,
};

// Canva-style section: navy uppercase heading over a full-width rule
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mt-5">
    <h2 className="text-[15px] font-bold uppercase tracking-wide text-[#1F3A5F] border-b border-[#1F3A5F]/70 pb-1 mb-2.5 break-after-avoid">
      {title}
    </h2>
    {children}
  </section>
);

const Entry = ({
  title,
  period,
  role,
  summary,
  items,
  children,
}: {
  title: React.ReactNode;
  period: string;
  role: string;
  summary: string;
  items: string[];
  children?: React.ReactNode;
}) => (
  <article className="break-inside-avoid">
    <div className="flex flex-wrap justify-between items-baseline gap-x-4">
      <h3 className="font-bold">{title}</h3>
      <span className="text-[#333]">{period}</span>
    </div>
    <p className="italic text-[#333]">{role}</p>
    {summary && <p className="mt-0.5">{summary}</p>}
    <ul className="mt-1 list-disc pl-5 space-y-0.5">
      {items.map((r) => (
        <li key={r}>{r}</li>
      ))}
    </ul>
    {children}
  </article>
);

export default function ResumeView({ locale = "en" }: { locale?: Locale }) {
  const resumeConfig = getResume(locale);
  const t = getDictionary(locale).cv;
  const home = localePath(locale, "/");
  const pdf = cvPdfPath(locale);

  return (
    <div className="w-full min-h-screen bg-muted/40 lg:h-screen lg:overflow-y-auto print:bg-white print:h-auto print:min-h-0 print:overflow-visible">
      <main className="w-full max-w-[860px] mx-auto px-3 sm:px-4 py-6 md:py-10 print:p-0 print:max-w-none">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5 print:hidden">
          <Link href={home} className="group/back flex items-center gap-1 text-sm">
            <ArrowLeft size={16} className="group-hover/back:-translate-x-1 transition-transform" />
            {t.home}
          </Link>
          <p className="order-last w-full sm:order-none sm:w-auto text-xs text-muted-foreground">{t.webNote}</p>
          <div className="flex items-center gap-1">
            <LanguageSwitcher />
            <ThemeToggler />
            <Button size="sm" className="ml-1 shadow-none" asChild>
              <a href={pdf} download>
                <Download size={14} />
                {t.downloadPdf}
              </a>
            </Button>
          </div>
        </div>

        {/* Paper: always light, like a printed A4 page */}
        <div
          id="cv-paper"
          className="bg-white text-[#111] shadow-sm ring-1 ring-black/5 rounded-sm px-4 py-6 sm:px-8 sm:py-8 font-['Times_New_Roman',Times,serif] text-[14.5px] leading-[1.55] print:shadow-none print:ring-0 print:rounded-none print:px-0 print:py-0"
        >
          <header className="text-center">
            <h1 className="text-[30px] sm:text-[34px] font-bold uppercase tracking-wide font-[Arial,Helvetica,sans-serif] leading-tight">
              {resumeConfig.name}
            </h1>
            <p className="mt-1 text-[16px] font-[Arial,Helvetica,sans-serif]">{resumeConfig.title}</p>
            <p className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[14px]">
              {resumeConfig.contacts.map((c) => (
                <span key={c.value} className="inline-flex items-center gap-1.5">
                  {icons[c.icon as keyof typeof icons]}
                  {c.href ? (
                    <a href={c.href} className="hover:underline">
                      {c.value}
                    </a>
                  ) : (
                    c.value
                  )}
                </span>
              ))}
              <span className="inline-flex items-center gap-1.5">
                {icons.globe}
                <a href={siteConfig.siteUrl} className="hover:underline">
                  hoangpham.is-a.dev
                </a>
              </span>
            </p>
          </header>

          <Section title={t.summary}>
            <p>{resumeConfig.summary}</p>
          </Section>

          <Section title={t.experience}>
            <div className="space-y-3">
              {resumeConfig.work.map((w) => (
                <Entry
                  key={w.company}
                  title={w.company}
                  period={[w.period, w.location].filter(Boolean).join(" · ")}
                  role={`${w.role} — ${w.stack}`}
                  summary={w.summary}
                  items={w.responsibilities}
                >
                  {w.selected.length > 0 && (
                    <p className="mt-1">
                      <b>{t.selectedSites}:</b> {w.selected.join(", ")} — {t.seeFullList}{" "}
                      <a href={`${siteConfig.siteUrl}${home === "/" ? "" : home}`} className="underline underline-offset-2">
                        {t.portfolio}
                      </a>
                      .
                    </p>
                  )}
                </Entry>
              ))}
            </div>
          </Section>

          <Section title={t.projects}>
            <div className="space-y-3">
              {resumeConfig.projects.map((p) => (
                <Entry
                  key={p.name}
                  title={
                    <>
                      {p.name}{" "}
                      <span className="font-normal">
                        ·{" "}
                        <a href={p.link.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                          {p.link.label}
                        </a>
                      </span>
                    </>
                  }
                  period={p.period}
                  role={`${p.role} — ${p.stack}`}
                  summary={p.summary}
                  items={p.responsibilities}
                />
              ))}
            </div>
          </Section>

          <Section title={t.skills}>
            <ul className="list-disc pl-5 space-y-0.5">
              {resumeConfig.skills.map((s) => (
                <li key={s.group}>
                  <b>{s.group}:</b> {s.items}
                </li>
              ))}
            </ul>
          </Section>

          <Section title={t.education}>
            {resumeConfig.education.map((e) => (
              <div key={e.school} className="flex flex-wrap justify-between items-baseline gap-x-4">
                <p>
                  <b>{e.school}</b> — <i>{e.degree}</i>
                </p>
                <span className="text-[#333]">{e.period}</span>
              </div>
            ))}
            <p className="mt-0.5">
              <b>{t.languages}:</b> {resumeConfig.languages.join(", ")}
            </p>
          </Section>

          <Section title={t.links}>
            <ul className="space-y-0.5">
              {resumeConfig.links.map((l) => (
                <li key={l.href} className="flex items-center gap-2">
                  {icons[l.icon as keyof typeof icons]}
                  <b>{l.label}:</b>
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                    {l.value}
                  </a>
                </li>
              ))}
            </ul>
          </Section>
        </div>
      </main>
    </div>
  );
}
