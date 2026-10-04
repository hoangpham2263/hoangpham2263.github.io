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
  <section className="mt-6 md:mt-7 break-inside-avoid-page">
    <h2 className="text-base md:text-lg font-bold uppercase tracking-wider border-b border-foreground/40 pb-1 mb-3">
      {title}
    </h2>
    {children}
  </section>
);

// One experience / project block: name left, period right, italic role with the stack, then bullets
const Entry = ({
  title,
  period,
  role,
  stack,
  summary,
  items,
  children,
}: {
  title: React.ReactNode;
  period: string;
  role: string;
  stack: string;
  summary: string;
  items: string[];
  children?: React.ReactNode;
}) => (
  <article className="break-inside-avoid">
    <div className="flex flex-wrap justify-between items-baseline gap-x-4">
      <h3 className="font-bold text-base md:text-[17px]">{title}</h3>
      <span className="text-sm md:text-[15px] text-muted-foreground">{period}</span>
    </div>
    <p className="mt-0.5 italic text-foreground/85">
      {role} <span className="text-muted-foreground">— {stack}</span>
    </p>
    {summary && <p className="mt-1 text-foreground/85">{summary}</p>}
    <ul className="mt-1 list-disc pl-5 space-y-0.5 text-foreground/85">
      {items.map((r) => (
        <li key={r}>{r}</li>
      ))}
    </ul>
    {children}
  </article>
);

export default function ResumePage() {
  return (
    <div className="w-full lg:h-screen lg:overflow-y-auto print:h-auto print:overflow-visible">
    <main className="w-full max-w-5xl mx-auto px-4 py-8 md:py-12 print:py-0">
      <div className="flex justify-between items-center mb-4 md:mb-6 print:hidden">
        <Link href="/" className="group/back flex items-center gap-1 text-sm">
          <ArrowLeft size={16} className="group-hover/back:-translate-x-1 transition-transform" />
          Home
        </Link>
        <ThemeToggler />
      </div>

      <div className="resume-page-label mb-8 md:mb-12 print:hidden">
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

      <div className="text-[15px] md:text-base leading-[1.6] print:text-[13px]">
        <header className="text-center">
          <h2 className="font-heading text-3xl md:text-[40px] md:leading-tight uppercase tracking-wide">{resumeConfig.name}</h2>
          <p className="mt-1.5 text-base md:text-lg font-semibold">{resumeConfig.title}</p>
          {[resumeConfig.contacts].map((row, r) => (
            <p
              key={r}
              className="mt-2 flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm md:text-[15px] text-foreground/85"
            >
              {row.map((c, i) => (
                <span key={c.value} className="inline-flex items-center gap-1.5">
                  {i > 0 && <span className="hidden sm:inline text-muted-foreground mr-1.5">·</span>}
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
          ))}
          <div className="mt-5 flex justify-center gap-2 print:hidden">
            <PrintButton />
            <Button size="sm" variant="outline" className="shadow-none" asChild>
              <Link href="/">View Portfolio</Link>
            </Button>
          </div>
        </header>

        <Section title="Summary">
          <p className="text-foreground/85">{resumeConfig.summary}</p>
        </Section>

        <Section title="Links">
          <ul className="space-y-1">
            {resumeConfig.links.map((l) => (
              <li key={l.href} className="flex items-center gap-2 leading-6">
                <span className="flex shrink-0 items-center -translate-y-px text-muted-foreground">{icons[l.icon as keyof typeof icons]}</span>
                <span className="font-semibold">{l.label}:</span>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/85 underline underline-offset-2 hover:text-primary"
                >
                  {l.value}
                </a>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Experience">
          <div className="divide-y divide-border [&>*]:py-3 [&>*:first-child]:pt-0 [&>*:last-child]:pb-0">
            {resumeConfig.work.map((w) => (
              <Entry
                key={w.company}
                title={w.company}
                period={[w.period, w.location].filter(Boolean).join(" · ")}
                role={w.role}
                stack={w.stack}
                summary={w.summary}
                items={w.responsibilities}
              >
                {w.selected.length > 0 && (
                  <p className="mt-1.5 text-foreground/85">
                    <span className="font-semibold text-foreground">Selected sites:</span> {w.selected.join(", ")} — see
                    the full list on the{" "}
                    <Link href="/" className="underline underline-offset-2 hover:text-primary">
                      portfolio
                    </Link>
                    .
                  </p>
                )}
              </Entry>
            ))}
          </div>
        </Section>

        <Section title="Projects">
          <div className="divide-y divide-border [&>*]:py-3 [&>*:first-child]:pt-0 [&>*:last-child]:pb-0">
            {resumeConfig.projects.map((p) => (
              <Entry
                key={p.name}
                title={
                  <>
                    {p.name}{" "}
                    <span className="font-normal text-muted-foreground">
                      ·{" "}
                      <a href={p.link.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-primary">
                        {p.link.label}
                      </a>
                    </span>
                  </>
                }
                period={p.period}
                role={p.role}
                stack={p.stack}
                summary={p.summary}
                items={p.responsibilities}
              />
            ))}
          </div>
        </Section>

        <Section title="Skills">
          <ul className="list-disc pl-5 space-y-0.5">
            {resumeConfig.skills.map((s) => (
              <li key={s.group}>
                <span className="font-bold">{s.group}:</span>{" "}
                <span className="text-foreground/85">{s.items}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Education">
          <ul className="list-disc pl-5 space-y-0.5">
            {resumeConfig.education.map((e) => (
              <li key={e.school}>
                <div className="flex flex-wrap justify-between items-baseline gap-x-4">
                  <p>
                    <span className="font-bold">{e.school}</span>{" "}
                    <span className="italic text-foreground/85">— {e.degree}</span>
                  </p>
                  <span className="text-sm md:text-[15px] text-muted-foreground">{e.period}</span>
                </div>
              </li>
            ))}
            <li>
              <span className="font-bold">Languages:</span>{" "}
              <span className="text-foreground/85">{resumeConfig.languages.join(", ")}</span>
            </li>
          </ul>
        </Section>
      </div>
    </main>
    </div>
  );
}
