import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Briefcase, CheckCircle2, GraduationCap, ListChecks, Mail, MapPin, Phone } from "lucide-react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import ThemeToggler from "@/components/theme/toggler";
import { resumeConfig } from "@/config/resume.config";
import { siteConfig } from "@/config/site.config";
import { PrintButton } from "./print-button";

export const metadata: Metadata = {
  title: `Resume | ${siteConfig.creator.name}`,
  description: `${resumeConfig.name} — ${resumeConfig.title}. ${resumeConfig.intro[0]}`,
  alternates: { canonical: `${siteConfig.siteUrl}/cv` },
};

const contactIcons = {
  address: <MapPin size={16} />,
  phone: <Phone size={16} />,
  mail: <Mail size={16} />,
  github: <GitHubLogoIcon width={16} height={16} />,
  linkedin: <LinkedInLogoIcon width={16} height={16} />,
};

const monthIndex = (value: string) => {
  if (value === "Present") return new Date().getFullYear() * 12 + new Date().getMonth();
  const date = new Date(`1 ${value}`);
  return date.getFullYear() * 12 + date.getMonth();
};

const duration = (start: string, end: string) => {
  const months = Math.max(1, monthIndex(end) - monthIndex(start));
  const years = Math.floor(months / 12);
  const rest = months % 12;
  return [years && `${years} year${years > 1 ? "s" : ""}`, rest && `${rest} month${rest > 1 ? "s" : ""}`]
    .filter(Boolean)
    .join(" ");
};

const SectionTitle = ({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) => (
  <h2 className="flex items-center gap-2 font-heading text-lg uppercase tracking-wide mb-4">
    {icon}
    {children}
  </h2>
);

const CompanyLogo = ({ name, logo }: { name: string; logo: string }) =>
  logo ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={logo} alt={name} width={32} height={32} className="w-8 h-8 rounded object-contain bg-white p-0.5" />
  ) : (
    <span className="w-8 h-8 rounded bg-secondary flex items-center justify-center text-sm font-semibold">
      {name[0]}
    </span>
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

      <section className="flex flex-col md:flex-row gap-8 items-start">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={resumeConfig.photo}
          alt={resumeConfig.name}
          width={180}
          height={240}
          className="w-40 md:w-44 aspect-[3/4] object-cover rounded-2xl border shadow-sm"
        />
        <div className="flex-1">
          <h2 className="font-heading text-2xl md:text-3xl">{resumeConfig.name}</h2>
          <p className="mt-1 font-medium">{resumeConfig.title}</p>
          <div className="mt-3 space-y-2 text-sm text-foreground/80 max-w-2xl">
            {resumeConfig.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-4 flex gap-2 print:hidden">
            <PrintButton />
            <Button size="sm" variant="outline" className="shadow-none" asChild>
              <Link href="/">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm border-y py-6">
        {resumeConfig.contacts.map((c) => (
          <p key={c.label} className="flex items-center gap-2">
            <span className="text-muted-foreground">{contactIcons[c.icon as keyof typeof contactIcons]}</span>
            <span className="font-medium">{c.label}:</span>
            {c.href ? (
              <a href={c.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {c.value}
              </a>
            ) : (
              <span>{c.value}</span>
            )}
          </p>
        ))}
      </section>

      <section className="mt-10">
        <SectionTitle icon={<CheckCircle2 size={18} />}>Skills</SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resumeConfig.skills.map((s) => (
            <div key={s.group}>
              <h3 className="font-semibold mb-2">{s.group}</h3>
              <ul className="space-y-1.5 text-sm text-foreground/80">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-muted-foreground shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 grid md:grid-cols-2 gap-10">
        <div>
          <SectionTitle icon={<Briefcase size={18} />}>Work</SectionTitle>
          <ul className="space-y-3">
            {resumeConfig.work.map((w) => (
              <li key={w.company} className="flex items-center gap-3 text-sm">
                <CompanyLogo name={w.company} logo={w.logo} />
                <div className="flex-1">
                  <p className="font-medium">{w.company}</p>
                  <p className="text-xs text-muted-foreground">{w.role}</p>
                </div>
                <p className="text-xs text-muted-foreground">
                  {w.start} — {w.end}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SectionTitle icon={<GraduationCap size={18} />}>Education</SectionTitle>
          {resumeConfig.education.map((e) => (
            <div key={e.school} className="flex gap-6 text-sm">
              <p className="text-muted-foreground whitespace-nowrap">{e.period}</p>
              <p>
                <span className="font-medium">{e.degree}</span> • {e.school}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <SectionTitle icon={<ListChecks size={18} />}>Detailed Experience</SectionTitle>
        <div className="space-y-8">
          {resumeConfig.work.map((w) => (
            <article key={w.company} className="break-inside-avoid">
              <h3 className="font-semibold uppercase text-sm">
                {w.role} • {w.company}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                {w.start} - {w.end} • {duration(w.start, w.end)} | {w.location}
              </p>
              <p className="text-sm font-semibold mt-3">Description:</p>
              <p className="text-sm text-foreground/80 mt-1">{w.description}</p>
              <p className="text-sm font-semibold mt-3">Responsibilities:</p>
              <ul className="list-disc pl-5 text-sm text-foreground/80 mt-1 space-y-1">
                {w.responsibilities.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
    </div>
  );
}
