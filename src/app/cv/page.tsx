import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Globe, Mail, MapPin, Phone } from "lucide-react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import ThemeToggler from "@/components/theme/toggler";
import { resumeConfig } from "@/config/resume.config";
import { siteConfig } from "@/config/site.config";
import { PrintButton } from "./print-button";

export const metadata: Metadata = {
  title: `Resume | ${siteConfig.creator.name}`,
  description: `${resumeConfig.name} — ${resumeConfig.title}. ${resumeConfig.summary}`,
  alternates: { canonical: `${siteConfig.siteUrl}/cv` },
};

const icons = {
  address: <MapPin size={14} />,
  phone: <Phone size={14} />,
  mail: <Mail size={14} />,
  globe: <Globe size={14} />,
  github: <GitHubLogoIcon width={14} height={14} />,
  linkedin: <LinkedInLogoIcon width={14} height={14} />,
};

// Section heading with a full-width rule, same as the PDF resume
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mt-6 break-inside-avoid-page">
    <h2 className="font-heading text-base font-bold uppercase tracking-wide border-b border-foreground pb-1 mb-3">
      {title}
    </h2>
    {children}
  </section>
);

export default function ResumePage() {
  return (
    <div className="w-full lg:h-screen lg:overflow-y-auto print:h-auto print:overflow-visible">
    <main className="w-full max-w-5xl mx-auto px-4 py-8 md:py-12 print:py-0">
      <div className="flex justify-between items-center mb-8 print:hidden">
        <Link href="/" className="group/back flex items-center gap-1 text-sm">
          <ArrowLeft size={16} className="group-hover/back:-translate-x-1 transition-transform" />
          Home
        </Link>
        <ThemeToggler />
      </div>

      <div className="resume-page-label mb-16 print:hidden">
        <span className="resume-page-label__line" />
        <h1 className="resume-page-label__text">
          Resume
          <span className="resume-page-label__underline" aria-hidden="true">
            <svg viewBox="0 0 320 28" preserveAspectRatio="none">
              <path
                className="resume-page-label__stroke resume-page-label__stroke--main"
                d="M6 15C48 6 82 21 126 13S204 7 246 14s50 4 68-1"
              />
              <path
                className="resume-page-label__stroke resume-page-label__stroke--accent"
                d="M24 21c54-7 96 4 142-2s87-2 126-4"
              />
              <g className="resume-page-label__pen">
                <g transform="translate(-4 -16)">
                  <path
                    d="m14.5 5.5 4 4M4 20l4.6-1 10.7-10.7a1.4 1.4 0 0 0 0-2l-1.6-1.6a1.4 1.4 0 0 0-2 0L5 15.4 4 20Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </g>
                <animateMotion
                  path="M24 21c54-7 96 4 142-2s87-2 126-4"
                  dur="1.2s"
                  begin="0.25s"
                  fill="freeze"
                  keyPoints="0;0.94"
                  keyTimes="0;1"
                  calcMode="linear"
                />
              </g>
            </svg>
          </span>
        </h1>
        <span className="resume-page-label__line" />
      </div>

      <div className="max-w-3xl mx-auto text-[15px] leading-relaxed print:text-[13px]">
        <header className="text-center">
          <h2 className="font-heading text-3xl md:text-4xl uppercase tracking-wide">{resumeConfig.name}</h2>
          <p className="mt-1 text-lg">{resumeConfig.title}</p>
          <p className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-foreground/85">
            {resumeConfig.contacts.map((c, i) => (
              <span key={c.value} className="inline-flex items-center gap-1.5">
                {i > 0 && <span className="text-muted-foreground mr-1.5">|</span>}
                <span className="text-muted-foreground">{icons[c.icon as keyof typeof icons]}</span>
                {c.href ? (
                  <a href={c.href} className="hover:underline">
                    {c.value}
                  </a>
                ) : (
                  c.value
                )}
              </span>
            ))}
          </p>
          <p className="mt-3 text-sm text-foreground/85 max-w-2xl mx-auto">{resumeConfig.summary}</p>
          <div className="mt-5 flex justify-center gap-2 print:hidden">
            <PrintButton />
            <Button size="sm" variant="outline" className="shadow-none" asChild>
              <Link href="/">View Portfolio</Link>
            </Button>
          </div>
        </header>

        <Section title="Social & Links">
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-1.5 text-sm">
            {resumeConfig.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 underline underline-offset-2 hover:text-primary"
              >
                <span className="shrink-0">{icons[l.icon as keyof typeof icons]}</span>
                {l.label ? `${l.label}: ${l.value}` : l.value}
              </a>
            ))}
          </div>
        </Section>

        <Section title="Experience">
          <div className="space-y-5">
            {resumeConfig.work.map((w) => (
              <article key={w.company} className="break-inside-avoid text-sm">
                <h3 className="font-bold uppercase">
                  {w.role} • {w.company}
                </h3>
                <p className="mt-0.5 text-foreground/85">{w.meta}</p>
                <p className="mt-2">
                  <span className="font-semibold">Description:</span>{" "}
                  <span className="text-foreground/85">{w.description}</span>
                </p>
                <p className="mt-2 font-semibold">Key Responsibilities:</p>
                <ul className="mt-1 list-disc pl-5 space-y-0.5 text-foreground/85">
                  {w.responsibilities.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section title="Skills">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            {resumeConfig.skills.map((s) => (
              <li key={s.group}>
                <span className="font-semibold">{s.group}:</span>{" "}
                <span className="text-foreground/85">{s.items}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Education">
          {resumeConfig.education.map((e) => (
            <div key={e.school} className="text-sm">
              <p className="font-semibold">{e.school}</p>
              <ul className="mt-1 list-disc pl-5 text-foreground/85">
                <li>
                  {e.degree} • {e.period}
                </li>
              </ul>
            </div>
          ))}
        </Section>

        <Section title="Language">
          <p className="text-sm text-foreground/85">{resumeConfig.languages.join(", ")}</p>
        </Section>
      </div>
    </main>
    </div>
  );
}
