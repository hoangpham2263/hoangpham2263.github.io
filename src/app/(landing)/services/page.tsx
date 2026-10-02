import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { servicesConfig } from "@/config/services.config";
import { siteConfig } from "@/config/site.config";

export const metadata: Metadata = {
  title: `Services | ${siteConfig.creator.name}`,
  description: "Building SEO-friendly WordPress websites with high performance, excellent user experience, and scalable solutions.",
};

export default function ServicesPage() {
  return (
    <div className="w-full max-w-5xl mt-10">
      <p className="text-sm text-muted-foreground max-w-2xl">
        Building SEO-friendly WordPress websites with high performance, excellent user experience, and scalable
        solutions.
      </p>
      <div className="mt-8 space-y-4">
        {servicesConfig.map((service, i) => (
          <div key={service.title} className="rounded-xl border p-5 flex gap-5">
            <span className="font-heading text-2xl text-muted-foreground/60">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h2 className="font-heading text-lg">{service.title}</h2>
              <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {service.items.map((item) => (
                  <span key={item} className="text-xs px-2 py-1 bg-secondary rounded">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button className="mt-8 shadow-none" asChild>
        <Link href="/contact">Have a project in mind? Let&apos;s talk</Link>
      </Button>
    </div>
  );
}
