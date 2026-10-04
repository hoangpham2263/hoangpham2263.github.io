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
      <div className="flex justify-between items-center mt-3">
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
      <p className="my-5 max-w-2xl text-foreground/85">
        Hey there 👋 Welcome to my portfolio! I&apos;m Will, a developer from Vietnam who loves turning ideas into
        websites that are fast, easy to use and easy to find on Google. Most of my work is building websites for
        businesses, and in my free time I build my own products. Take a look at the projects below, and feel free to
        reach out if you&apos;d like to work together.
        <span className="sr-only">bio</span>
      </p>
      <Socials />
      <div className="flex flex-col text-sm space-y-2 rounded max-w-2xl text-foreground/85 mt-6 mb-2 lg:my-6">
        {skillsConfig.map((skill) => (
          <p key={skill.category}>
            <span className="font-semibold text-primary/90">{skill.category}:</span> {skill.technologies.join(", ")}
          </p>
        ))}
      </div>
    </section>
  );
}
