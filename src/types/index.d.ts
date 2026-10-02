export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  origin: string;
  og: string;
  keywords: string[];
  creator: {
    name: string;
    url: string;
  }
  socials: {
    github: string;
    x: string;
  }
  siteUrl: string;
}

export type NavItem = {
  title: string;
  url: string;
}

export type Portfolio = {
  name: string;
  tagline: string;
  resume: string;
  schedule: string;
  links: Partial<Record<"github" | "linkedin" | "mail" | "phone" | "facebook" | "website" | "twitter" | "instagram", string>>;
}

export type Experience = {
  title: string;
  employmentType: string;
  company: defaultProfile;
  location: defaultProfile;
  start: string;
  end: string;
  description: string[];
  achievement?: string;
};