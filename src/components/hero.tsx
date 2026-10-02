import { siteConfig } from "@/config/site.config";
import { portfolioConfig } from "@/config/portfolio.config";
import { Socials } from "@/components/socials";
import Link from "next/link";
import ThemeToggler from "@/components/theme/toggler";
import { Rss } from "lucide-react";
import { Button } from "@/components/ui/button";
import { skillsConfig } from "@/config/skills.config";

export default function Hero() {
  return (
    <section className="w-full flex flex-col lg:min-h-[calc(100vh-7rem)]">
      <Link href="/">
        <span className="font-mono text-sm underline">{siteConfig.name}</span>
      </Link>
      <div className="flex justify-between items-center mt-6">
        <h1 className="head-text-sm">{portfolioConfig.name}</h1>
        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost" className="rounded-full" asChild>
            <Link href="/rss.xml">
              <Rss size={18} />
              <span className="sr-only">rss feed</span>
            </Link>
          </Button>
          <ThemeToggler />
        </div>
      </div>
      <h3 className="mt-2 text-lg">
        {portfolioConfig.tagline} <span className="sr-only">tagline</span>
      </h3>
      <p className="my-6 max-w-2xl text-foreground/80">
      Hey there 👋 I'm a Full-Stack Developer with a strong focus on WordPress. I design and build SEO-friendly websites from user interfaces to admin systems — custom themes, plugins, WooCommerce, hosting setup, and PageSpeed optimization — with 30+ websites delivered for businesses.
      Currently freelancing with HD TechLabs Solution (Jul 2026 — present), creating and reviewing advanced math problems and coding benchmark tasks for evaluating AI models. Previously a Web Developer at Puramu.
      I'm also the founder of <a href="https://hoanhoi.com" className="underline" target="_blank" rel="noopener noreferrer">Hoàn Hời</a>, a cashback platform built with Next.js. I also work with React, Next.js, Node.js, and Python, and use Claude Code and Codex with reusable project skills to ship faster.
        <span className="sr-only">bio</span>
      </p>
      <Socials />
      <div className="hidden md:flex flex-col text-sm space-y-2 rounded max-w-2xl text-foreground/70 my-7">
        {skillsConfig.map((skill) => (
          <p key={skill.category}>
            <span className="font-semibold text-primary/90">{skill.category}:</span> {skill.technologies.join(", ")}
          </p>
        ))}
      </div>
    </section>
  );
}
